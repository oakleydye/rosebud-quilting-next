import { Resend } from 'resend';

// Configuration
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'hello@rosebudquilting.com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@rosebudquilting.com';

// Initialize Resend only when needed
function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY environment variable is required');
  }
  return new Resend(process.env.RESEND_API_KEY);
}

// Email templates
export const emailTemplates = {
  waitlistConfirmation: (data: {
    firstName: string;
    lastName: string;
    classLevel: string;
  }) => ({
    subject: `Welcome to the ${data.classLevel} Quilting Class Waitlist!`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Waitlist Confirmation - Rosebud Quilting</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin-bottom: 10px;">Rosebud Quilting</h1>
            <p style="color: #666; font-size: 16px;">572 S 690 E, Hyrum, UT 84319</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #2563eb, #3b82f6); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h2 style="margin: 0 0 15px 0; font-size: 24px;">You're on the Waitlist! 🎉</h2>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">We'll notify you as soon as ${data.classLevel} quilting classes become available.</p>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #1f2937; margin-top: 0;">Hi ${data.firstName},</h3>
            <p>Thank you for your interest in our ${data.classLevel} quilting classes! We're excited to have you on our waitlist.</p>
            
            <p><strong>What happens next?</strong></p>
            <ul style="color: #4b5563;">
              <li>We'll contact you as soon as we schedule new ${data.classLevel} classes</li>
              <li>You'll get first access to enrollment before we open it to the public</li>
              <li>No commitment required - you can always decline when we reach out</li>
            </ul>
          </div>
          
          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin-bottom: 25px;">
            <h4 style="color: #92400e; margin-top: 0;">Planning Your Quilting Journey</h4>
            <p style="color: #78350f; margin-bottom: 0;">While you wait, feel free to browse our services, check out our gallery, or contact us with any questions about quilting techniques and projects!</p>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://rosebudquilting.com/gallery" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-right: 10px;">View Gallery</a>
            <a href="https://rosebudquilting.com/contact" style="display: inline-block; background: #6b7280; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">Contact Us</a>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Questions? Reply to this email or call us at <a href="tel:+1234567890" style="color: #2563eb;">(123) 456-7890</a></p>
            <p style="margin-bottom: 0;">Rosebud Quilting Studio<br>572 S 690 E, Hyrum, UT 84319</p>
          </div>
        </body>
      </html>
    `,
    text: `
Welcome to the ${data.classLevel} Quilting Class Waitlist!

Hi ${data.firstName},

Thank you for your interest in our ${data.classLevel} quilting classes! We're excited to have you on our waitlist.

What happens next?
- We'll contact you as soon as we schedule new ${data.classLevel} classes
- You'll get first access to enrollment before we open it to the public  
- No commitment required - you can always decline when we reach out

While you wait, feel free to browse our services, check out our gallery, or contact us with any questions!

Visit us online: https://rosebudquilting.com
Contact us: Reply to this email or call (123) 456-7890

Rosebud Quilting Studio
572 S 690 E, Hyrum, UT 84319
    `.trim()
  }),

  waitlistAdminNotification: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    classLevel: string;
    preferredContact: string;
    message?: string;
  }) => ({
    subject: `New ${data.classLevel} Class Waitlist Signup - ${data.firstName} ${data.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Waitlist Signup</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1f2937; color: white; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
            <h2 style="margin: 0 0 10px 0;">New Waitlist Signup</h2>
            <p style="margin: 0; opacity: 0.8;">Someone just joined the ${data.classLevel} class waitlist!</p>
          </div>
          
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a></td>
              </tr>
              ${data.phoneNumber ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${data.phoneNumber}" style="color: #2563eb;">${data.phoneNumber}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Prefers:</td>
                <td style="padding: 8px 0; color: #1f2937; text-transform: capitalize;">${data.preferredContact} contact</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Class Level:</td>
                <td style="padding: 8px 0;">
                  <span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500; text-transform: uppercase;">${data.classLevel}</span>
                </td>
              </tr>
            </table>
          </div>
          
          ${data.message ? `
          <div style="background: #fffbeb; border: 1px solid #f3f4f6; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="color: #92400e; margin-top: 0;">Additional Message:</h4>
            <p style="color: #78350f; margin-bottom: 0; font-style: italic;">"${data.message}"</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${data.email}" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-right: 10px;">Reply to ${data.firstName}</a>
            <a href="https://rosebudquilting.com/admin/classes" style="display: inline-block; background: #6b7280; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">View All Waitlists</a>
          </div>
        </body>
      </html>
    `,
    text: `
New ${data.classLevel} Class Waitlist Signup

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
${data.phoneNumber ? `- Phone: ${data.phoneNumber}` : ''}
- Prefers: ${data.preferredContact} contact
- Class Level: ${data.classLevel}

${data.message ? `Additional Message: "${data.message}"` : ''}

You can reply directly to this email to contact ${data.firstName}.
    `.trim()
  }),

  serviceRequestConfirmation: (data: {
    firstName: string;
    lastName: string;
    inquiryType: string;
    serviceCategory?: string;
    requestId: string;
  }) => ({
    subject: `Service Request Received - ${data.inquiryType} Inquiry`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Service Request Confirmation - Rosebud Quilting</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin-bottom: 10px;">Rosebud Quilting</h1>
            <p style="color: #666; font-size: 16px;">572 S 690 E, Hyrum, UT 84319</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h2 style="margin: 0 0 15px 0; font-size: 24px;">Request Received! ✅</h2>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">We'll get back to you within 24 hours.</p>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #1f2937; margin-top: 0;">Hi ${data.firstName},</h3>
            <p>Thank you for contacting Rosebud Quilting! We've received your ${data.inquiryType.toLowerCase()} inquiry and will respond within 24 hours.</p>
            
            <div style="background: white; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Request ID:</strong> <code style="background: #e5e7eb; padding: 2px 6px; border-radius: 3px; font-family: monospace;">${data.requestId}</code></p>
              <p style="margin: 8px 0 0 0;"><strong>Type:</strong> ${data.inquiryType}${data.serviceCategory ? ` - ${data.serviceCategory}` : ''}</p>
            </div>
            
            <p><strong>What's next?</strong></p>
            <ul style="color: #4b5563;">
              <li>We'll review your request and prepare a personalized response</li>
              <li>You'll hear back from us within 24 hours (usually much sooner!)</li>
              <li>We'll provide detailed information and next steps</li>
            </ul>
          </div>
          
          <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 25px;">
            <h4 style="color: #065f46; margin-top: 0;">Need Immediate Help?</h4>
            <p style="color: #047857; margin-bottom: 0;">For urgent quilting emergencies or questions, feel free to call us directly at <a href="tel:+1234567890" style="color: #059669;">(123) 456-7890</a></p>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://rosebudquilting.com/services" style="display: inline-block; background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-right: 10px;">Our Services</a>
            <a href="https://rosebudquilting.com/faq" style="display: inline-block; background: #6b7280; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">FAQ</a>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Questions about this request? Reply to this email with your request ID: ${data.requestId}</p>
            <p style="margin-bottom: 0;">Rosebud Quilting Studio<br>572 S 690 E, Hyrum, UT 84319</p>
          </div>
        </body>
      </html>
    `,
    text: `
Service Request Received - ${data.inquiryType} Inquiry

Hi ${data.firstName},

Thank you for contacting Rosebud Quilting! We've received your ${data.inquiryType.toLowerCase()} inquiry and will respond within 24 hours.

Request Details:
- Request ID: ${data.requestId}
- Type: ${data.inquiryType}${data.serviceCategory ? ` - ${data.serviceCategory}` : ''}

What's next?
- We'll review your request and prepare a personalized response
- You'll hear back from us within 24 hours (usually much sooner!)
- We'll provide detailed information and next steps

Need immediate help? Call us at (123) 456-7890

Rosebud Quilting Studio
572 S 690 E, Hyrum, UT 84319
    `.trim()
  }),

  serviceRequestAdminNotification: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    inquiryType: string;
    serviceCategory?: string;
    shopCategory?: string;
    classLevel?: string;
    message: string;
    requestId: string;
    preferredContact: string;
  }) => ({
    subject: `New ${data.inquiryType} Request - ${data.firstName} ${data.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Service Request</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1f2937; color: white; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
            <h2 style="margin: 0 0 10px 0;">New Service Request</h2>
            <p style="margin: 0; opacity: 0.8;">Request ID: <code style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 3px;">${data.requestId}</code></p>
          </div>
          
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a></td>
              </tr>
              ${data.phoneNumber ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${data.phoneNumber}" style="color: #2563eb;">${data.phoneNumber}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Prefers:</td>
                <td style="padding: 8px 0; color: #1f2937; text-transform: capitalize;">${data.preferredContact} contact</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #fef3c7; border: 1px solid #f3f4f6; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="color: #92400e; margin-top: 0;">Request Details</h4>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 4px 0; font-weight: 600; color: #78350f; width: 120px;">Type:</td>
                <td style="padding: 4px 0; color: #92400e;">${data.inquiryType}</td>
              </tr>
              ${data.serviceCategory ? `
              <tr>
                <td style="padding: 4px 0; font-weight: 600; color: #78350f;">Service:</td>
                <td style="padding: 4px 0; color: #92400e;">${data.serviceCategory}</td>
              </tr>
              ` : ''}
              ${data.shopCategory ? `
              <tr>
                <td style="padding: 4px 0; font-weight: 600; color: #78350f;">Shop Category:</td>
                <td style="padding: 4px 0; color: #92400e;">${data.shopCategory}</td>
              </tr>
              ` : ''}
              ${data.classLevel ? `
              <tr>
                <td style="padding: 4px 0; font-weight: 600; color: #78350f;">Class Level:</td>
                <td style="padding: 4px 0; color: #92400e;">${data.classLevel}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="background: #f0f9ff; border: 1px solid #e0f2fe; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="color: #0c4a6e; margin-top: 0;">Message:</h4>
            <p style="color: #0369a1; margin-bottom: 0; font-style: italic; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${data.email}?subject=Re: Your ${data.inquiryType} Request (${data.requestId})" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-right: 10px;">Reply to ${data.firstName}</a>
            <a href="https://rosebudquilting.com/admin/requests" style="display: inline-block; background: #6b7280; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">View All Requests</a>
          </div>
        </body>
      </html>
    `,
    text: `
New ${data.inquiryType} Request

Request ID: ${data.requestId}

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
${data.phoneNumber ? `- Phone: ${data.phoneNumber}` : ''}
- Prefers: ${data.preferredContact} contact

Request Details:
- Type: ${data.inquiryType}
${data.serviceCategory ? `- Service: ${data.serviceCategory}` : ''}
${data.shopCategory ? `- Shop Category: ${data.shopCategory}` : ''}
${data.classLevel ? `- Class Level: ${data.classLevel}` : ''}

Message:
${data.message}

Reply directly to this email to contact ${data.firstName}.
    `.trim()
  })
};

// Email service functions
export class EmailService {
  static async sendWaitlistConfirmation(data: {
    to: string;
    firstName: string;
    lastName: string;
    classLevel: string;
  }) {
    const template = emailTemplates.waitlistConfirmation(data);
    const resend = getResendClient();
    
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: data.to,
      subject: template.subject,
      html: template.html,
      text: template.text,
      tags: [
        { name: 'category', value: 'waitlist-confirmation' },
        { name: 'class-level', value: data.classLevel }
      ]
    });
  }

  static async sendWaitlistAdminNotification(data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    classLevel: string;
    preferredContact: string;
    message?: string;
  }) {
    const template = emailTemplates.waitlistAdminNotification(data);
    const resend = getResendClient();
    
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: template.subject,
      html: template.html,
      text: template.text,
      tags: [
        { name: 'category', value: 'waitlist-admin' },
        { name: 'class-level', value: data.classLevel }
      ]
    });
  }

  static async sendServiceRequestConfirmation(data: {
    to: string;
    firstName: string;
    lastName: string;
    inquiryType: string;
    serviceCategory?: string;
    requestId: string;
  }) {
    const template = emailTemplates.serviceRequestConfirmation(data);
    const resend = getResendClient();
    
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: data.to,
      subject: template.subject,
      html: template.html,
      text: template.text,
      tags: [
        { name: 'category', value: 'service-confirmation' },
        { name: 'inquiry-type', value: data.inquiryType }
      ]
    });
  }

  static async sendServiceRequestAdminNotification(data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    inquiryType: string;
    serviceCategory?: string;
    shopCategory?: string;
    classLevel?: string;
    message: string;
    requestId: string;
    preferredContact: string;
  }) {
    const template = emailTemplates.serviceRequestAdminNotification(data);
    const resend = getResendClient();
    
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: template.subject,
      html: template.html,
      text: template.text,
      tags: [
        { name: 'category', value: 'service-admin' },
        { name: 'inquiry-type', value: data.inquiryType }
      ]
    });
  }

  // Generic email sender for custom emails
  static async sendCustomEmail(data: {
    to: string | string[];
    subject: string;
    html?: string;
    text: string;
    tags?: { name: string; value: string }[];
  }) {
    const resend = getResendClient();
    
    return await resend.emails.send({
      from: FROM_EMAIL,
      ...data
    });
  }
}

export default EmailService;
