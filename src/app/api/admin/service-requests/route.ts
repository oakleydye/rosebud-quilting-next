import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const inquiryType = searchParams.get('inquiryType');

    const where = {
      ...(status && { status: status.toUpperCase() }),
      ...(priority && { priority: priority.toUpperCase() }),
      ...(inquiryType && { inquiryType: inquiryType.toUpperCase() }),
    };

    const serviceRequests = await prisma.serviceRequest.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Transform enum values to match TypeScript interface
    const transformedRequests = serviceRequests.map((request: any) => ({
      ...request,
      inquiryType: request.inquiryType.toLowerCase(),
      serviceCategory: request.serviceCategory?.toLowerCase(),
      shopCategory: request.shopCategory?.toLowerCase(),
      classLevel: request.classLevel?.toLowerCase(),
      preferredContact: request.preferredContact.toLowerCase(),
      status: request.status.toLowerCase().replace('_', '-'),
      priority: request.priority.toLowerCase(),
    }));

    return NextResponse.json(transformedRequests);
  } catch (error) {
    console.error('Error fetching service requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service requests' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const serviceRequest = await prisma.serviceRequest.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        inquiryType: body.inquiryType.toUpperCase(),
        serviceCategory: body.serviceCategory?.toUpperCase(),
        shopCategory: body.shopCategory?.toUpperCase(),
        classLevel: body.classLevel?.toUpperCase(),
        quiltSize: body.quiltSize,
        projectDetails: body.projectDetails,
        timeline: body.timeline,
        budget: body.budget,
        preferredContact: body.preferredContact.toUpperCase(),
        message: body.message,
        status: body.status?.toUpperCase().replace('-', '_') || 'NEW',
        priority: body.priority?.toUpperCase() || 'MEDIUM',
        assignedTo: body.assignedTo,
        notes: body.notes,
        followUpDate: body.followUpDate ? new Date(body.followUpDate) : null,
      },
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

    return NextResponse.json(transformedRequest, { status: 201 });
  } catch (error) {
    console.error('Error creating service request:', error);
    return NextResponse.json(
      { error: 'Failed to create service request' },
      { status: 500 }
    );
  }
}
