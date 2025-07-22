"use server";

import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { prisma } from "@/lib/prisma";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { subject, message } = await request.json();
    
    // Send email (original functionality)
    const msg = {
      to: process.env.PRIMARY_CONTACT_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject,
      text: message,
    };

    await sgMail.send(msg);

    // Parse the message to extract individual fields for database storage
    let parsedData;
    try {
      parsedData = JSON.parse(message);
    } catch (parseError) {
      // If parsing fails, create a basic service request with the raw message
      parsedData = {
        firstName: 'Unknown',
        lastName: 'Customer',
        email: 'noreply@example.com',
        phoneNumber: 'Not provided',
        inquiryType: 'general',
        message: message,
      };
    }

    // Save to database with proper field mapping
    await prisma.serviceRequest.create({
      data: {
        firstName: parsedData.firstName || 'Unknown',
        lastName: parsedData.lastName || 'Customer', 
        email: parsedData.email || 'noreply@example.com',
        phoneNumber: parsedData.phoneNumber || 'Not provided',
        inquiryType: mapInquiryType(parsedData.inquiryType),
        serviceCategory: mapServiceCategory(parsedData.serviceCategory),
        shopCategory: mapShopCategory(parsedData.shopCategory),
        classLevel: mapClassLevel(parsedData.classLevel),
        quiltSize: parsedData.quiltSize || undefined,
        projectDetails: parsedData.projectDetails || undefined,
        timeline: parsedData.timeline || undefined,
        budget: parsedData.budget || undefined,
        preferredContact: mapPreferredContact(parsedData.preferredContact),
        message: parsedData.message || message,
        status: 'NEW',
        priority: 'MEDIUM',
      },
    });

    return NextResponse.json(
      { success: true, message: "Email sent and request saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quilt request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process request." },
      { status: 500 }
    );
  }
}

// Helper functions to map form values to database enums
function mapInquiryType(type: string): "SERVICE" | "CLASS" | "SHOP" | "GENERAL" {
  const mapping: { [key: string]: "SERVICE" | "CLASS" | "SHOP" | "GENERAL" } = {
    'services': 'SERVICE',
    'shop': 'SHOP', 
    'classes': 'CLASS',
    'general': 'GENERAL'
  };
  return mapping[type] || 'GENERAL';
}

function mapServiceCategory(category: string | undefined): "LONGARM" | "REPAIR" | "CUSTOM" | "BINDING" | undefined {
  if (!category) return undefined;
  const mapping: { [key: string]: "LONGARM" | "REPAIR" | "CUSTOM" | "BINDING" } = {
    'longarm': 'LONGARM',
    'custom': 'CUSTOM',
    'repair': 'REPAIR',
    'binding': 'BINDING'
  };
  return mapping[category];
}

function mapShopCategory(category: string | undefined): "FABRICS" | "NOTIONS" | "PATTERNS" | "KITS" | undefined {
  if (!category) return undefined;
  const mapping: { [key: string]: "FABRICS" | "NOTIONS" | "PATTERNS" | "KITS" } = {
    'fabrics': 'FABRICS',
    'notions': 'NOTIONS',
    'patterns': 'PATTERNS',
    'kits': 'KITS'
  };
  return mapping[category];
}

function mapClassLevel(level: string | undefined): "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "WORKSHOP" | undefined {
  if (!level) return undefined;
  const mapping: { [key: string]: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "WORKSHOP" } = {
    'beginner': 'BEGINNER',
    'intermediate': 'INTERMEDIATE', 
    'advanced': 'ADVANCED',
    'workshops': 'WORKSHOP'
  };
  return mapping[level];
}

function mapPreferredContact(contact: string): "EMAIL" | "PHONE" {
  const mapping: { [key: string]: "EMAIL" | "PHONE" } = {
    'email': 'EMAIL',
    'phone': 'PHONE'
  };
  return mapping[contact] || 'EMAIL';
}
