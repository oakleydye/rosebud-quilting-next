export interface ServiceRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  inquiryType: 'service' | 'class' | 'shop' | 'general';
  serviceCategory?: 'longarm' | 'custom' | 'repair' | 'binding';
  shopCategory?: 'fabrics' | 'notions' | 'patterns' | 'kits';
  classLevel?: 'beginner' | 'intermediate' | 'advanced' | 'workshop';
  quiltSize?: string;
  projectDetails?: string;
  timeline?: string;
  budget?: string;
  preferredContact: 'email' | 'phone';
  message: string;
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  notes?: string;
  followUpDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Class {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'workshop';
  instructor: string;
  instructorBio?: string;
  price: number;
  duration: number; // in hours
  maxStudents: number;
  currentEnrollment: number;
  supplies: string[];
  prerequisites?: string[];
  images: string[];
  schedule: ClassSchedule[];
  featured: boolean;
  active: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ClassSchedule {
  id: string;
  classId: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  daysOfWeek: number[]; // 0=Sunday, 1=Monday, etc.
  location: string;
  available: boolean;
  enrollments: ClassEnrollment[];
}

export interface ClassEnrollment {
  id: string;
  scheduleId: string;
  studentName: string;
  studentEmail: string;
  studentPhone?: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  enrolledAt: Date;
  notes?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'staff';
  permissions: AdminPermission[];
  active: boolean;
  lastLogin?: Date;
  createdAt: Date;
}

export type AdminPermission = 
  | 'products.read'
  | 'products.write'
  | 'products.delete'
  | 'orders.read'
  | 'orders.write'
  | 'orders.delete'
  | 'classes.read'
  | 'classes.write'
  | 'classes.delete'
  | 'requests.read'
  | 'requests.write'
  | 'requests.delete'
  | 'users.read'
  | 'users.write'
  | 'users.delete'
  | 'reports.read'
  | 'settings.write';

export interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  totalClasses: number;
  totalServiceRequests: number;
  monthlyRevenue: number;
  newRequestsToday: number;
  upcomingClasses: number;
  lowStockProducts: number;
  revenueGrowth: number;
  orderGrowth: number;
}

export interface RevenueData {
  month: string;
  revenue: number;
  orders: number;
}

export interface TopProduct {
  id: string;
  name: string;
  category: string;
  sales: number;
  revenue: number;
}
