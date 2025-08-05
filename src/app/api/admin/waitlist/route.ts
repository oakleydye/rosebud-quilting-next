import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const classLevel = searchParams.get('classLevel');
    const status = searchParams.get('status');

    const where: any = {};
    if (classLevel) where.classLevel = classLevel.toUpperCase();
    if (status) where.status = status.toUpperCase();

    const waitlistEntries = await prisma.classWaitlist.findMany({
      where,
      orderBy: [
        { priority: 'desc' },
        { signupDate: 'asc' },
      ],
    });

    // Get counts by class level
    const counts = await prisma.classWaitlist.groupBy({
      by: ['classLevel'],
      where: { status: 'ACTIVE' },
      _count: {
        id: true,
      },
    });

    // Transform enum values for response
    const transformedEntries = waitlistEntries.map((entry: any) => ({
      ...entry,
      classLevel: entry.classLevel.toLowerCase(),
      preferredContact: entry.preferredContact.toLowerCase(),
      status: entry.status.toLowerCase(),
    }));

    const transformedCounts = counts.reduce((acc: any, count: any) => {
      acc[count.classLevel.toLowerCase()] = count._count.id;
      return acc;
    }, {});

    return NextResponse.json({
      entries: transformedEntries,
      counts: transformedCounts,
    });
  } catch (error) {
    console.error('Error fetching waitlist entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist entries' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    const waitlistEntry = await prisma.classWaitlist.update({
      where: { id },
      data: {
        ...updateData,
        status: updateData.status?.toUpperCase(),
        updatedAt: new Date(),
      },
    });

    // Transform enum values for response
    const transformedEntry = {
      ...waitlistEntry,
      classLevel: waitlistEntry.classLevel.toLowerCase(),
      preferredContact: waitlistEntry.preferredContact.toLowerCase(),
      status: waitlistEntry.status.toLowerCase(),
    };

    return NextResponse.json(transformedEntry);
  } catch (error) {
    console.error('Error updating waitlist entry:', error);
    return NextResponse.json(
      { error: 'Failed to update waitlist entry' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Entry ID is required' },
        { status: 400 }
      );
    }

    await prisma.classWaitlist.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting waitlist entry:', error);
    return NextResponse.json(
      { error: 'Failed to delete waitlist entry' },
      { status: 500 }
    );
  }
}
