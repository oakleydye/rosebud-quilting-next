import { ServiceRequest } from '@/types/admin';

const API_BASE = '/api/admin';

export class ServiceRequestService {
  static async getAll(filters?: {
    status?: string;
    priority?: string;
    inquiryType?: string;
  }): Promise<ServiceRequest[]> {
    const searchParams = new URLSearchParams();
    
    if (filters?.status) searchParams.set('status', filters.status);
    if (filters?.priority) searchParams.set('priority', filters.priority);
    if (filters?.inquiryType) searchParams.set('inquiryType', filters.inquiryType);
    
    const url = `${API_BASE}/service-requests${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch service requests');
    }
    
    return response.json();
  }

  static async getById(id: string): Promise<ServiceRequest> {
    const response = await fetch(`${API_BASE}/service-requests/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch service request');
    }
    
    return response.json();
  }

  static async create(data: Omit<ServiceRequest, 'id' | 'createdAt' | 'updatedAt'>): Promise<ServiceRequest> {
    const response = await fetch(`${API_BASE}/service-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create service request');
    }
    
    return response.json();
  }

  static async update(id: string, data: Partial<ServiceRequest>): Promise<ServiceRequest> {
    const response = await fetch(`${API_BASE}/service-requests/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update service request');
    }
    
    return response.json();
  }

  static async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE}/service-requests/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete service request');
    }
  }

  static async updateStatus(id: string, status: ServiceRequest['status']): Promise<ServiceRequest> {
    return this.update(id, { status });
  }

  static async updatePriority(id: string, priority: ServiceRequest['priority']): Promise<ServiceRequest> {
    return this.update(id, { priority });
  }

  static async assignTo(id: string, assignedTo: string): Promise<ServiceRequest> {
    return this.update(id, { assignedTo });
  }

  static async addNotes(id: string, notes: string): Promise<ServiceRequest> {
    return this.update(id, { notes });
  }

  static async setFollowUpDate(id: string, followUpDate: Date): Promise<ServiceRequest> {
    return this.update(id, { followUpDate });
  }
}
