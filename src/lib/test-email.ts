import { EmailService } from './email';

// Simple email testing utility
// Run this with: npx tsx src/lib/test-email.ts

async function testEmails() {
  console.log('🧪 Testing Resend Email Integration...\n');

  try {
    // Test 1: Waitlist Confirmation Email
    console.log('📧 Testing waitlist confirmation email...');
    const waitlistResult = await EmailService.sendWaitlistConfirmation({
      to: 'test@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      classLevel: 'beginner'
    });
    console.log('✅ Waitlist confirmation sent:', waitlistResult.data?.id);

    // Test 2: Service Request Confirmation Email
    console.log('\n📧 Testing service request confirmation email...');
    const serviceResult = await EmailService.sendServiceRequestConfirmation({
      to: 'test@example.com',
      firstName: 'John',
      lastName: 'Smith',
      inquiryType: 'Service',
      serviceCategory: 'Longarm Quilting',
      requestId: 'test-123'
    });
    console.log('✅ Service confirmation sent:', serviceResult.data?.id);

    // Test 3: Admin Notification Email
    console.log('\n📧 Testing admin notification email...');
    const adminResult = await EmailService.sendWaitlistAdminNotification({
      firstName: 'Test',
      lastName: 'User',
      email: 'testuser@example.com',
      phoneNumber: '(555) 123-4567',
      classLevel: 'intermediate',
      preferredContact: 'email',
      message: 'This is a test message from the email testing utility.'
    });
    console.log('✅ Admin notification sent:', adminResult.data?.id);

    console.log('\n🎉 All email tests completed successfully!');
    console.log('Check your Resend dashboard for delivery status.');

  } catch (error) {
    console.error('❌ Email test failed:', error);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check that RESEND_API_KEY is set in your environment');
    console.log('2. Verify your domain is configured in Resend');
    console.log('3. Make sure FROM_EMAIL matches your verified domain');
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testEmails();
}

export { testEmails };
