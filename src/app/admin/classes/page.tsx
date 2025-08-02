'use client';

import { useState, useEffect } from 'react';
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
import { Search, Trash2, Users, Bell, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

interface WaitlistEntry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  classLevel: 'beginner' | 'intermediate' | 'advanced' | 'workshop';
  preferredContact: 'email' | 'phone';
  message?: string;
  notifyWhenAvailable: boolean;
  status: 'active' | 'contacted' | 'enrolled' | 'declined' | 'expired';
  priority: number;
  signupDate: string;
  contactedDate?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface WaitlistCounts {
  beginner: number;
  intermediate: number;
  advanced: number;
  workshop: number;
}

const levelColors = {
  beginner: 'outline',
  intermediate: 'secondary',
  advanced: 'default',
  workshop: 'secondary',
} as const;

const statusColors = {
  active: 'outline',
  contacted: 'secondary',
  enrolled: 'default',
  declined: 'destructive',
  expired: 'secondary',
} as const;

export default function ClassWaitlistPage() {
  const [waitlistEntries, setWaitlistEntries] = useState<WaitlistEntry[]>([]);
  const [counts, setCounts] = useState<WaitlistCounts>({ beginner: 0, intermediate: 0, advanced: 0, workshop: 0 });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    fetchWaitlistEntries();
  }, [levelFilter, statusFilter]);

  const fetchWaitlistEntries = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (levelFilter !== 'all') params.append('classLevel', levelFilter);
      if (statusFilter !== 'all') params.append('status', statusFilter);

      const response = await fetch(`/api/admin/waitlist?${params}`);
      const data = await response.json();

      if (response.ok) {
        setWaitlistEntries(data.entries);
        setCounts(data.counts);
      } else {
        toast.error('Failed to fetch waitlist entries');
      }
    } catch (error) {
      toast.error('Error fetching waitlist entries');
    } finally {
      setLoading(false);
    }
  };

  const updateEntryStatus = async (id: string, status: string, notes?: string) => {
    try {
      const response = await fetch('/api/admin/waitlist', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id, 
          status, 
          notes,
          contactedDate: status === 'contacted' ? new Date().toISOString() : undefined 
        }),
      });

      if (response.ok) {
        toast.success('Status updated successfully');
        fetchWaitlistEntries();
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      toast.error('Error updating status');
    }
  };

  const deleteEntry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this waitlist entry?')) return;

    try {
      const response = await fetch(`/api/admin/waitlist?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Entry deleted successfully');
        fetchWaitlistEntries();
      } else {
        toast.error('Failed to delete entry');
      }
    } catch (error) {
      toast.error('Error deleting entry');
    }
  };

  const filteredEntries = waitlistEntries.filter((entry) => {
    const matchesSearch = 
      entry.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  if (loading) {
    return <div className="flex items-center justify-center h-96">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Class Waitlists</h1>
          <p className="text-gray-600 mt-2">Manage class waitlist signups and notifications</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Beginner</p>
                <p className="text-2xl font-bold text-blue-600">{counts.beginner || 0}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Intermediate</p>
                <p className="text-2xl font-bold text-purple-600">{counts.intermediate || 0}</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Advanced</p>
                <p className="text-2xl font-bold text-emerald-600">{counts.advanced || 0}</p>
              </div>
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Workshops</p>
                <p className="text-2xl font-bold text-orange-600">{counts.workshop || 0}</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="enrolled">Enrolled</SelectItem>
                <SelectItem value="declined">Declined</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Waitlist Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Waitlist Entries ({filteredEntries.length})</CardTitle>
              <CardDescription>All waitlist signups for classes</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Class Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Signup Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEntries.map((entry) => (
                <TableRow key={entry.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{entry.firstName} {entry.lastName}</p>
                      {entry.message && (
                        <p className="text-sm text-gray-600 truncate max-w-xs">{entry.message}</p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="w-3 h-3 mr-1" />
                        {entry.email}
                      </div>
                      {entry.phoneNumber && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-3 h-3 mr-1" />
                          {entry.phoneNumber}
                        </div>
                      )}
                      <Badge variant="outline" className="text-xs">
                        Prefers {entry.preferredContact}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={levelColors[entry.classLevel]} className="capitalize">
                      {entry.classLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Badge variant={statusColors[entry.status]} className="capitalize">
                        {entry.status}
                      </Badge>
                      {entry.notifyWhenAvailable && (
                        <div className="flex items-center text-xs text-gray-500">
                          <Bell className="w-3 h-3 mr-1" />
                          Notifications on
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(entry.signupDate).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Select
                        value={entry.status}
                        onValueChange={(value) => updateEntryStatus(entry.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="enrolled">Enrolled</SelectItem>
                          <SelectItem value="declined">Declined</SelectItem>
                          <SelectItem value="expired">Expired</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => deleteEntry(entry.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
