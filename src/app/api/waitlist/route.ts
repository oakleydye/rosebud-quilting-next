import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { EmailService } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Check if the user is already on the waitlist for this class level
    const existingEntry = await prisma.classWaitlist.findUnique({
      where: {
        email_classLevel: {
          email: body.email,
          classLevel: body.classLevel.toUpperCase(),
        },
      },
    });

    if (existingEntry) {
      return NextResponse.json(
        { success: false, message: "You're already on the waitlist for this class level", existing: true },
        { status: 409 }
      );
    }

    // Calculate priority (simple: count + 1)
    const currentCount = await prisma.classWaitlist.count({
      where: {
        classLevel: body.classLevel.toUpperCase(),
        status: 'ACTIVE',
      },
    });

    // Create waitlist entry
    const waitlistEntry = await prisma.classWaitlist.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phoneNumber: body.phoneNumber || null,
        classLevel: body.classLevel.toUpperCase(),
        preferredContact: body.preferredContact?.toUpperCase() || 'EMAIL',
        message: body.message || null,
        notifyWhenAvailable: body.notifyWhenAvailable !== false,
        status: 'ACTIVE',
        priority: currentCount + 1,
        signupDate: new Date(),
      },
    });

    // Send confirmation email to user
    try {
      await EmailService.sendWaitlistConfirmation({
        to: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        classLevel: body.classLevel,
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the request if email fails
    }

    // Send notification email to admin
    try {
      await EmailService.sendWaitlistAdminNotification({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        classLevel: body.classLevel,
        preferredContact: body.preferredContact || 'email',
        message: body.message,
      });
    } catch (emailError) {
      console.error("Failed to send admin notification:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
      id: waitlistEntry.id,
      priority: waitlistEntry.priority,
    });

  } catch (error) {
    console.error("Error creating waitlist entry:", error);
    return NextResponse.json(
      { success: false, message: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const classLevel = searchParams.get('classLevel');
    const status = searchParams.get('status');
    const email = searchParams.get('email');

    const where: any = {};
    if (classLevel) where.classLevel = classLevel.toUpperCase();
    if (status) where.status = status.toUpperCase();
    if (email) where.email = email;

    const waitlistEntries = await prisma.classWaitlist.findMany({
      where,
      orderBy: [
        { priority: 'desc' },
        { signupDate: 'asc' },
      ],
    });

    // Transform enum values for response
    const transformedEntries = waitlistEntries.map((entry: any) => ({
      ...entry,
      classLevel: entry.classLevel.toLowerCase(),
      preferredContact: entry.preferredContact.toLowerCase(),
      status: entry.status.toLowerCase(),
    }));

    return NextResponse.json({
      entries: transformedEntries,
      count: transformedEntries.length,
    });

  } catch (error) {
    console.error("Error fetching waitlist entries:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch waitlist entries" },
      { status: 500 }
    );
  }
}
