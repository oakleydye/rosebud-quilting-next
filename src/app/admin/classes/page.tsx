'use client';

import { useState } from 'react';
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
import { Search, Plus, Edit, Trash2, Eye, Calendar, Users } from 'lucide-react';
import { sampleClasses } from '@/lib/admin-data';
import type { Class } from '@/types/admin';

const levelColors = {
  beginner: 'outline',
  intermediate: 'secondary',
  advanced: 'default',
  workshop: 'secondary',
} as const;

export default function ClassesPage() {
  const [classes] = useState<Class[]>(sampleClasses);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredClasses = classes.filter((classItem) => {
    const matchesSearch = 
      classItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLevel = levelFilter === 'all' || classItem.level === levelFilter;
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && classItem.active) ||
      (statusFilter === 'inactive' && !classItem.active);
    
    return matchesSearch && matchesLevel && matchesStatus;
  });

  const getEnrollmentStatus = (classItem: Class) => {
    const percentage = (classItem.currentEnrollment / classItem.maxStudents) * 100;
    if (percentage >= 90) return { status: 'Full', color: 'destructive' as const };
    if (percentage >= 75) return { status: 'Nearly Full', color: 'secondary' as const };
    if (percentage >= 50) return { status: 'Filling Up', color: 'default' as const };
    return { status: 'Available', color: 'outline' as const };
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Classes</h1>
          <p className="text-gray-600 mt-2">Manage quilting classes and workshops</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Class
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Classes</p>
                <p className="text-2xl font-bold text-gray-900">{classes.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Classes</p>
                <p className="text-2xl font-bold text-green-600">
                  {classes.filter(c => c.active).length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-purple-600">
                  {classes.reduce((sum, c) => sum + c.currentEnrollment, 0)}
                </p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Featured</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {classes.filter(c => c.featured).length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-yellow-600" />
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
                  placeholder="Search classes..."
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
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Classes Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Classes ({filteredClasses.length})</CardTitle>
              <CardDescription>All quilting classes and workshops</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Enrollment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClasses.map((classItem) => {
                const enrollmentStatus = getEnrollmentStatus(classItem);
                return (
                  <TableRow key={classItem.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{classItem.title}</p>
                        <p className="text-sm text-gray-600">{classItem.duration} hours</p>
                        <div className="flex space-x-1 mt-1">
                          {classItem.featured && (
                            <Badge variant="secondary" className="text-xs">Featured</Badge>
                          )}
                          {classItem.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs capitalize">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{classItem.instructor}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={levelColors[classItem.level]}>
                        {classItem.level}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">${classItem.price}</span>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">
                            {classItem.currentEnrollment}/{classItem.maxStudents}
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-600 h-2 rounded-full" 
                              style={{ 
                                width: `${(classItem.currentEnrollment / classItem.maxStudents) * 100}%` 
                              }}
                            />
                          </div>
                        </div>
                        <Badge variant={enrollmentStatus.color} className="text-xs mt-1">
                          {enrollmentStatus.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={classItem.active ? 'outline' : 'secondary'}>
                        {classItem.active ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Calendar className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
