import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const serviceRequest = await prisma.serviceRequest.findUnique({
      where: { id },
    });

    if (!serviceRequest) {
      return NextResponse.json(
        { error: 'Service request not found' },
        { status: 404 }
      );
    }

    // Transform enum values to match TypeScript interface
    const transformedRequest = {
      ...serviceRequest,
      inquiryType: serviceRequest.inquiryType.toLowerCase(),
      serviceCategory: serviceRequest.serviceCategory?.toLowerCase(),
      shopCategory: serviceRequest.shopCategory?.toLowerCase(),
      classLevel: serviceRequest.classLevel?.toLowerCase(),
      preferredContact: serviceRequest.preferredContact.toLowerCase(),
      status: serviceRequest.status.toLowerCase().replace('_', '-'),
      priority: serviceRequest.priority.toLowerCase(),
    };

    return NextResponse.json(transformedRequest);
  } catch (error) {
    console.error('Error fetching service request:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service request' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updateData: any = {};
    
    // Only update fields that are provided
    if (body.firstName !== undefined) updateData.firstName = body.firstName;
    if (body.lastName !== undefined) updateData.lastName = body.lastName;
    if (body.email !== undefined) updateData.email = body.email;
    if (body.phoneNumber !== undefined) updateData.phoneNumber = body.phoneNumber;
    if (body.inquiryType !== undefined) updateData.inquiryType = body.inquiryType.toUpperCase();
    if (body.serviceCategory !== undefined) updateData.serviceCategory = body.serviceCategory?.toUpperCase();
    if (body.shopCategory !== undefined) updateData.shopCategory = body.shopCategory?.toUpperCase();
    if (body.classLevel !== undefined) updateData.classLevel = body.classLevel?.toUpperCase();
    if (body.quiltSize !== undefined) updateData.quiltSize = body.quiltSize;
    if (body.projectDetails !== undefined) updateData.projectDetails = body.projectDetails;
    if (body.timeline !== undefined) updateData.timeline = body.timeline;
    if (body.budget !== undefined) updateData.budget = body.budget;
    if (body.preferredContact !== undefined) updateData.preferredContact = body.preferredContact.toUpperCase();
    if (body.message !== undefined) updateData.message = body.message;
    if (body.status !== undefined) updateData.status = body.status.toUpperCase().replace('-', '_');
    if (body.priority !== undefined) updateData.priority = body.priority.toUpperCase();
    if (body.assignedTo !== undefined) updateData.assignedTo = body.assignedTo;
    if (body.notes !== undefined) updateData.notes = body.notes;
    if (body.followUpDate !== undefined) {
      updateData.followUpDate = body.followUpDate ? new Date(body.followUpDate) : null;
    }

    const serviceRequest = await prisma.serviceRequest.update({
      where: { id },
      data: updateData,
    });

    // Transform enum values back for response
    const transformedRequest = {
      ...serviceRequest,
      inquiryType: serviceRequest.inquiryType.toLowerCase(),
      serviceCategory: serviceRequest.serviceCategory?.toLowerCase(),
      shopCategory: serviceRequest.shopCategory?.toLowerCase(),
      classLevel: serviceRequest.classLevel?.toLowerCase(),
      preferredContact: serviceRequest.preferredContact.toLowerCase(),
      status: serviceRequest.status.toLowerCase().replace('_', '-'),
      priority: serviceRequest.priority.toLowerCase(),
    };

    return NextResponse.json(transformedRequest);
  } catch (error) {
    console.error('Error updating service request:', error);
    return NextResponse.json(
      { error: 'Failed to update service request' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.serviceRequest.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Service request deleted successfully' });
  } catch (error) {
    console.error('Error deleting service request:', error);
    return NextResponse.json(
      { error: 'Failed to delete service request' },
      { status: 500 }
    );
  }
}
