// Google Analytics and tracking utilities for SEO
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track pageview
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track quilting service inquiries
export const trackServiceInquiry = (service: string) => {
  event({
    action: 'service_inquiry',
    category: 'lead_generation',
    label: service,
  });
};

// Track class signups
export const trackClassSignup = (className: string) => {
  event({
    action: 'class_signup',
    category: 'conversion',
    label: className,
  });
};

// Track contact form submissions
export const trackContactForm = (formType: string) => {
  event({
    action: 'form_submission',
    category: 'lead_generation', 
    label: formType,
  });
};

// Track phone calls (for call tracking)
export const trackPhoneCall = () => {
  event({
    action: 'phone_call',
    category: 'conversion',
    label: 'header_phone_click',
  });
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
