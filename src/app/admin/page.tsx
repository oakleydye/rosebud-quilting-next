'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Package,
  ShoppingCart,
  GraduationCap,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Users,
  AlertTriangle,
} from 'lucide-react';
import { sampleDashboardStats, sampleServiceRequests, sampleRevenueData, sampleTopProducts } from '@/lib/admin-data';

const statsCards = [
  {
    title: 'Total Revenue',
    value: `$${sampleDashboardStats.monthlyRevenue.toLocaleString()}`,
    description: `+${sampleDashboardStats.revenueGrowth}% from last month`,
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Orders',
    value: sampleDashboardStats.totalOrders.toString(),
    description: `+${sampleDashboardStats.orderGrowth}% from last month`,
    icon: ShoppingCart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Products',
    value: sampleDashboardStats.totalProducts.toString(),
    description: `${sampleDashboardStats.lowStockProducts} low stock`,
    icon: Package,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Service Requests',
    value: sampleDashboardStats.totalServiceRequests.toString(),
    description: `${sampleDashboardStats.newRequestsToday} new today`,
    icon: MessageSquare,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export default function AdminDashboard() {
  const recentRequests = sampleServiceRequests.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, Emma! Here's what's happening with your business.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Service Requests */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Service Requests</CardTitle>
                <CardDescription>Latest customer inquiries and requests</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">{request.firstName} {request.lastName}</p>
                      <Badge 
                        variant={
                          request.status === 'new' ? 'destructive' :
                          request.status === 'contacted' ? 'secondary' :
                          request.status === 'in-progress' ? 'default' : 'outline'
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 capitalize">{request.inquiryType}</p>
                    <p className="text-xs text-gray-500">{request.createdAt.toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        request.priority === 'urgent' ? 'destructive' :
                        request.priority === 'high' ? 'secondary' : 'outline'
                      }
                    >
                      {request.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best performing products this month</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View Reports
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sampleTopProducts.map((product, index) => (
                <div key={product.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${product.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{product.sales} sales</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Package className="h-6 w-6" />
              <span>Add Product</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <GraduationCap className="h-6 w-6" />
              <span>Schedule Class</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <MessageSquare className="h-6 w-6" />
              <span>Review Requests</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span>View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
