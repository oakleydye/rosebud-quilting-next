# Email Configuration with Resend

This application now uses Resend for all email functionality. To configure email services, you need to set up the following environment variables:

## Required Environment Variables

```bash
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Email Addresses  
RESEND_FROM_EMAIL=hello@rosebudquilting.com
ADMIN_EMAIL=info@rosebudquilting.com
```

## Setup Instructions

1. **Get a Resend API Key:**
   - Sign up at https://resend.com
   - Create a new API key in your dashboard
   - Add your domain and verify it

2. **Configure Your Domain:**
   - Add your domain (e.g., rosebudquilting.com) to Resend
   - Verify domain ownership via DNS records
   - Set up SPF, DKIM, and DMARC records for better deliverability

3. **Set Environment Variables:**
   - Add the variables to your `.env` file
   - For production, set them in your hosting platform (Vercel, etc.)

## Email Features

The application sends the following types of emails:

### Waitlist Emails
- **User Confirmation:** Sent when someone joins a class waitlist
- **Admin Notification:** Notifies admin of new waitlist signups

### Service Request Emails  
- **User Confirmation:** Confirms service request submission
- **Admin Notification:** Notifies admin of new service requests

### Email Templates
All emails use professional HTML templates with:
- Responsive design
- Brand colors and styling
- Clear call-to-action buttons
- Both HTML and plain text versions
- Email tracking tags for analytics

## Migration from SendGrid

This replaces the previous SendGrid implementation:
- ✅ Removed `@sendgrid/mail` dependency
- ✅ Updated all API routes to use Resend
- ✅ Improved email templates with better design
- ✅ Added email tagging for better analytics
- ✅ Better error handling and fallbacks

## Testing

To test email functionality:

1. **Development:** Set up a Resend account and use real credentials
2. **Production:** Ensure all environment variables are set correctly
3. **Monitoring:** Check Resend dashboard for delivery analytics

## Troubleshooting

Common issues:
- **Emails not sending:** Check API key and domain verification
- **Emails in spam:** Verify SPF/DKIM/DMARC records
- **Wrong sender address:** Ensure RESEND_FROM_EMAIL matches verified domain
