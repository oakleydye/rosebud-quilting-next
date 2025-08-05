import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sampleServiceRequests = [
  {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phoneNumber: '(555) 123-4567',
    inquiryType: 'SERVICE',
    serviceCategory: 'LONGARM',
    quiltSize: 'Queen (90" x 108")',
    projectDetails: 'Wedding quilt with intricate hand-pieced blocks. Looking for custom quilting design.',
    timeline: '2-3 weeks',
    budget: '$300-400',
    preferredContact: 'EMAIL',
    message: 'This is a special wedding gift and I want it to be perfect. I have some design ideas I\'d like to discuss.',
    status: 'NEW',
    priority: 'HIGH',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'mchen@email.com',
    phoneNumber: '(555) 234-5678',
    inquiryType: 'CLASS',
    classLevel: 'BEGINNER',
    preferredContact: 'PHONE',
    message: 'I\'m completely new to quilting and would like to start with a beginner class. When is the next session?',
    status: 'CONTACTED',
    priority: 'MEDIUM',
    assignedTo: 'Emma Wilson',
    notes: 'Called and scheduled for March beginner class',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-13')
  },
  {
    firstName: 'Lisa',
    lastName: 'Thompson',
    email: 'lisa.thompson@email.com',
    phoneNumber: '(555) 345-6789',
    inquiryType: 'SERVICE',
    serviceCategory: 'REPAIR',
    projectDetails: 'Antique quilt from 1920s with torn binding and some loose seams',
    timeline: 'No rush',
    budget: '$150-250',
    preferredContact: 'PHONE',
    message: 'This quilt belonged to my grandmother. It needs some repairs but I want to preserve its original character.',
    status: 'IN_PROGRESS',
    priority: 'MEDIUM',
    assignedTo: 'Emma Wilson',
    followUpDate: new Date('2024-01-20'),
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-15')
  },
  {
    firstName: 'Jennifer',
    lastName: 'Davis',
    email: 'jen.davis@email.com',
    phoneNumber: '(555) 456-7890',
    inquiryType: 'SHOP',
    shopCategory: 'FABRICS',
    preferredContact: 'EMAIL',
    message: 'Looking for Japanese cotton fabrics for a special project. Do you carry any?',
    status: 'COMPLETED',
    priority: 'LOW',
    assignedTo: 'Emma Wilson',
    notes: 'Referred to online catalog and provided fabric recommendations',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-06')
  }
];

async function main() {
  console.log('Seeding service requests...');
  
  for (const request of sampleServiceRequests) {
    await prisma.serviceRequest.create({
      data: request as any,
    });
  }
  
  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
