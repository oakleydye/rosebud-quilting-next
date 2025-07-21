export interface EmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  inquiryType: string;
  serviceCategory?: string;
  shopCategory?: string;
  classLevel?: string;
  quiltSize?: string;
  projectDetails?: string;
  timeline?: string;
  budget?: string;
  preferredContact: string;
  message: string;
}
