import { ServiceRequest, Class, ClassSchedule, AdminUser, DashboardStats, RevenueData, TopProduct } from '@/types/admin';

// Sample Service Requests
export const sampleServiceRequests: ServiceRequest[] = [
  {
    id: 'req-001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phoneNumber: '(555) 123-4567',
    inquiryType: 'service',
    serviceCategory: 'longarm',
    quiltSize: 'Queen (90" x 108")',
    projectDetails: 'Wedding quilt with intricate hand-pieced blocks. Looking for custom quilting design.',
    timeline: '2-3 weeks',
    budget: '$300-400',
    preferredContact: 'email',
    message: 'This is a special wedding gift and I want it to be perfect. I have some design ideas I\'d like to discuss.',
    status: 'new',
    priority: 'high',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'req-002',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'mchen@email.com',
    phoneNumber: '(555) 234-5678',
    inquiryType: 'class',
    classLevel: 'beginner',
    preferredContact: 'phone',
    message: 'I\'m completely new to quilting and would like to start with a beginner class. When is the next session?',
    status: 'contacted',
    priority: 'medium',
    assignedTo: 'Emma Wilson',
    notes: 'Called and scheduled for March beginner class',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-13')
  },
  {
    id: 'req-003',
    firstName: 'Lisa',
    lastName: 'Thompson',
    email: 'lisa.thompson@email.com',
    phoneNumber: '(555) 345-6789',
    inquiryType: 'service',
    serviceCategory: 'repair',
    projectDetails: 'Antique quilt from 1920s with torn binding and some loose seams',
    timeline: 'No rush',
    budget: '$150-250',
    preferredContact: 'phone',
    message: 'This quilt belonged to my grandmother. It needs some repairs but I want to preserve its original character.',
    status: 'in-progress',
    priority: 'medium',
    assignedTo: 'Emma Wilson',
    followUpDate: new Date('2024-01-20'),
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'req-004',
    firstName: 'Jennifer',
    lastName: 'Davis',
    email: 'jen.davis@email.com',
    phoneNumber: '(555) 456-7890',
    inquiryType: 'shop',
    shopCategory: 'fabrics',
    preferredContact: 'email',
    message: 'Looking for Japanese cotton fabrics for a special project. Do you carry any?',
    status: 'completed',
    priority: 'low',
    assignedTo: 'Emma Wilson',
    notes: 'Referred to online catalog and provided fabric recommendations',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-06')
  }
];

// Sample Classes
export const sampleClasses: Class[] = [
  {
    id: 'class-001',
    title: 'Quilting Fundamentals',
    slug: 'quilting-fundamentals',
    description: 'Learn the basics of quilting including cutting, piecing, and binding. Perfect for absolute beginners who want to create their first quilt from start to finish.',
    shortDescription: 'Learn quilting basics from cutting to binding',
    level: 'beginner',
    instructor: 'Emma Wilson',
    instructorBio: 'Emma has been quilting for over 20 years and teaching for 10. She specializes in traditional techniques and loves helping new quilters discover their passion.',
    price: 150,
    duration: 12,
    maxStudents: 8,
    currentEnrollment: 6,
    supplies: [
      'Fabric (provided)',
      'Rotary cutter and mat',
      'Quilting ruler',
      'Pins',
      'Thread',
      'Sewing machine (available to use)'
    ],
    images: ['/images/classes/fundamentals-1.jpg', '/images/classes/fundamentals-2.jpg'],
    schedule: [],
    featured: true,
    active: true,
    tags: ['beginner', 'fundamentals', 'hand-on'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'class-002',
    title: 'Paper Piecing Workshop',
    slug: 'paper-piecing-workshop',
    description: 'Master the art of foundation paper piecing with this intensive workshop. Learn to create precise points and complex designs.',
    shortDescription: 'Master foundation paper piecing techniques',
    level: 'intermediate',
    instructor: 'Sarah Martinez',
    instructorBio: 'Sarah is known for her precision piecing and contemporary quilt designs. She\'s been featured in Quilting Arts Magazine.',
    price: 85,
    duration: 6,
    maxStudents: 10,
    currentEnrollment: 8,
    supplies: [
      'Paper foundation patterns (provided)',
      'Fabric scraps',
      'Add-a-quarter ruler',
      'Small rotary cutter',
      'Removal tool'
    ],
    prerequisites: ['Basic sewing machine skills', 'Comfort with rotary cutting'],
    images: ['/images/classes/paper-piecing-1.jpg'],
    schedule: [],
    featured: false,
    active: true,
    tags: ['intermediate', 'paper-piecing', 'precision'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];

// Sample Admin Users
export const sampleAdminUsers: AdminUser[] = [
  {
    id: 'admin-001',
    email: 'emma@rosebudquilting.com',
    name: 'Emma Wilson',
    role: 'admin',
    permissions: [
      'products.read', 'products.write', 'products.delete',
      'orders.read', 'orders.write', 'orders.delete',
      'classes.read', 'classes.write', 'classes.delete',
      'requests.read', 'requests.write', 'requests.delete',
      'users.read', 'users.write', 'users.delete',
      'reports.read', 'settings.write'
    ],
    active: true,
    lastLogin: new Date('2024-01-15'),
    createdAt: new Date('2023-06-01')
  },
  {
    id: 'admin-002',
    email: 'sarah@rosebudquilting.com',
    name: 'Sarah Martinez',
    role: 'manager',
    permissions: [
      'products.read', 'products.write',
      'orders.read', 'orders.write',
      'classes.read', 'classes.write',
      'requests.read', 'requests.write',
      'reports.read'
    ],
    active: true,
    lastLogin: new Date('2024-01-14'),
    createdAt: new Date('2023-08-15')
  }
];

// Sample Dashboard Stats
export const sampleDashboardStats: DashboardStats = {
  totalProducts: 156,
  totalOrders: 234,
  totalClasses: 12,
  totalServiceRequests: 45,
  monthlyRevenue: 12450,
  newRequestsToday: 3,
  upcomingClasses: 5,
  lowStockProducts: 8,
  revenueGrowth: 15.2,
  orderGrowth: 8.7
};

// Sample Revenue Data
export const sampleRevenueData: RevenueData[] = [
  { month: 'Jan', revenue: 8450, orders: 142 },
  { month: 'Feb', revenue: 9200, orders: 156 },
  { month: 'Mar', revenue: 10800, orders: 174 },
  { month: 'Apr', revenue: 11200, orders: 189 },
  { month: 'May', revenue: 12100, orders: 203 },
  { month: 'Jun', revenue: 12450, orders: 234 },
];

// Sample Top Products
export const sampleTopProducts: TopProduct[] = [
  {
    id: 'prod-001',
    name: 'Premium Cotton Fat Quarter Bundle',
    category: 'Fabrics',
    sales: 89,
    revenue: 2670
  },
  {
    id: 'prod-002',
    name: 'Olfa Rotary Cutter Set',
    category: 'Notions',
    sales: 67,
    revenue: 2010
  },
  {
    id: 'prod-003',
    name: 'Modern Sampler Quilt Pattern',
    category: 'Patterns',
    sales: 134,
    revenue: 1340
  },
  {
    id: 'prod-004',
    name: 'Beginner Quilt Kit - Garden Path',
    category: 'Kits',
    sales: 23,
    revenue: 1840
  }
];
