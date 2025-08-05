'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Search, Filter, Eye, Edit, MessageCircle, Phone, Mail, Loader2, Smartphone } from 'lucide-react';
import { ServiceRequestService } from '@/lib/services/service-request.service';
import type { ServiceRequest } from '@/types/admin';

const statusColors = {
  new: 'destructive',
  contacted: 'secondary',
  'in-progress': 'default',
  completed: 'outline',
  cancelled: 'outline',
} as const;

const priorityColors = {
  low: 'outline',
  medium: 'secondary',
  high: 'secondary',
  urgent: 'destructive',
} as const;

export default function ServiceRequestsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);

  const queryClient = useQueryClient();

  // Fetch service requests
  const { 
    data: requests = [], 
    isLoading, 
    error, 
    refetch 
  } = useQuery({
    queryKey: ['serviceRequests', statusFilter, priorityFilter],
    queryFn: () => ServiceRequestService.getAll({
      status: statusFilter !== 'all' ? statusFilter : undefined,
      priority: priorityFilter !== 'all' ? priorityFilter : undefined,
    }),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Update status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: ServiceRequest['status'] }) =>
      ServiceRequestService.updateStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['serviceRequests'] });
    },
  });

  // Update priority mutation  
  const updatePriorityMutation = useMutation({
    mutationFn: ({ id, priority }: { id: string; priority: ServiceRequest['priority'] }) =>
      ServiceRequestService.updatePriority(id, priority),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['serviceRequests'] });
    },
  });

  const filteredRequests = requests.filter((request) => {
    const matchesSearch = 
      request.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const updateRequestStatus = (requestId: string, newStatus: ServiceRequest['status']) => {
    updateStatusMutation.mutate({ id: requestId, status: newStatus });
  };

  const updateRequestPriority = (requestId: string, newPriority: ServiceRequest['priority']) => {
    updatePriorityMutation.mutate({ id: requestId, priority: newPriority });
  };

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Service Requests</h1>
          <p className="text-gray-600 mt-2">Manage customer inquiries and service requests</p>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-red-600 mb-4">Failed to load service requests</p>
              <Button onClick={() => refetch()}>Try Again</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Service Requests</h1>
        <p className="text-gray-600 mt-2">Manage customer inquiries and service requests</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Requests Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                Requests ({isLoading ? '...' : filteredRequests.length})
              </CardTitle>
              <CardDescription>All service requests and inquiries</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2">Loading requests...</span>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{request.firstName} {request.lastName}</p>
                        <p className="text-sm text-gray-600">{request.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="capitalize font-medium">{request.inquiryType}</p>
                        {request.serviceCategory && (
                          <p className="text-sm text-gray-600 capitalize">{request.serviceCategory}</p>
                        )}
                        {request.classLevel && (
                          <p className="text-sm text-gray-600 capitalize">{request.classLevel}</p>
                        )}
                        {request.shopCategory && (
                          <p className="text-sm text-gray-600 capitalize">{request.shopCategory}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={request.status}
                        onValueChange={(value) => updateRequestStatus(request.id, value as ServiceRequest['status'])}
                        disabled={updateStatusMutation.isPending}
                      >
                        <SelectTrigger className="w-32">
                          <Badge variant={statusColors[request.status]}>
                            {request.status}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={request.priority}
                        onValueChange={(value) => updateRequestPriority(request.id, value as ServiceRequest['priority'])}
                        disabled={updatePriorityMutation.isPending}
                      >
                        <SelectTrigger className="w-28">
                          <Badge variant={priorityColors[request.priority]}>
                            {request.priority}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      {new Date(request.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedRequest(request)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Service Request Details</DialogTitle>
                              <DialogDescription>
                                Request from {request.firstName} {request.lastName}
                              </DialogDescription>
                            </DialogHeader>
                            {selectedRequest && <RequestDetails request={selectedRequest} />}
                          </DialogContent>
                        </Dialog>
                        
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        
                        <Button variant="ghost" size="sm">
                          {request.preferredContact === 'phone' ? (
                            <Phone className="h-4 w-4" />
                          ) : request.preferredContact === 'email' ? (
                            <Mail className="h-4 w-4" />
                          ) : <Smartphone className="h-4 w-4" />}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function RequestDetails({ request }: { request: ServiceRequest }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium text-gray-900">Contact Information</h4>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Name:</span> {request.firstName} {request.lastName}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> {request.email}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Phone:</span> {request.phoneNumber}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Preferred Contact:</span> {request.preferredContact}
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900">Request Details</h4>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Type:</span> {request.inquiryType}
            </p>
            {request.serviceCategory && (
              <p className="text-sm text-gray-600">
                <span className="font-medium">Service:</span> {request.serviceCategory}
              </p>
            )}
            {request.quiltSize && (
              <p className="text-sm text-gray-600">
                <span className="font-medium">Size:</span> {request.quiltSize}
              </p>
            )}
            {request.timeline && (
              <p className="text-sm text-gray-600">
                <span className="font-medium">Timeline:</span> {request.timeline}
              </p>
            )}
            {request.budget && (
              <p className="text-sm text-gray-600">
                <span className="font-medium">Budget:</span> {request.budget}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {request.projectDetails && (
        <div>
          <h4 className="font-medium text-gray-900">Project Details</h4>
          <p className="text-sm text-gray-600 mt-1">{request.projectDetails}</p>
        </div>
      )}
      
      <div>
        <h4 className="font-medium text-gray-900">Message</h4>
        <p className="text-sm text-gray-600 mt-1">{request.message}</p>
      </div>
      
      {request.notes && (
        <div>
          <h4 className="font-medium text-gray-900">Internal Notes</h4>
          <p className="text-sm text-gray-600 mt-1">{request.notes}</p>
        </div>
      )}
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Created: {new Date(request.createdAt).toLocaleString()}</span>
        <span>Updated: {new Date(request.updatedAt).toLocaleString()}</span>
      </div>
    </div>
  );
}
