import { NextRequest, NextResponse } from "next/server";
import { EmailService } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { recipients, subject, message } = body;

    // Validate input
    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json(
        { success: false, error: "Recipients array is required" },
        { status: 400 }
      );
    }

    if (!subject || !message) {
      return NextResponse.json(
        { success: false, error: "Subject and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = recipients.filter((email: string) => !emailRegex.test(email));
    
    if (invalidEmails.length > 0) {
      return NextResponse.json(
        { success: false, error: `Invalid email addresses: ${invalidEmails.join(', ')}` },
        { status: 400 }
      );
    }

    // Limit recipients to prevent abuse
    if (recipients.length > 50) {
      return NextResponse.json(
        { success: false, error: "Maximum 50 recipients allowed per email" },
        { status: 400 }
      );
    }

    const results = [];

    // Send email to each recipient individually for better tracking
    for (const recipient of recipients) {
      try {
        const result = await EmailService.sendCustomEmail({
          to: recipient,
          subject: subject,
          text: message,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${subject}</title>
              </head>
              <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="color: #2563eb; margin-bottom: 10px;">Rosebud Quilting</h1>
                  <p style="color: #666; font-size: 16px;">572 S 690 E, Hyrum, UT 84319</p>
                </div>
                
                <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                  <h2 style="color: #1f2937; margin-top: 0;">${subject}</h2>
                  <div style="white-space: pre-wrap; color: #4b5563;">${message}</div>
                </div>
                
                <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
                  <p>Questions? Reply to this email or call us at <a href="tel:+14355550123" style="color: #2563eb;">(435) 555-0123</a></p>
                  <p style="margin-bottom: 0;">Rosebud Quilting Studio<br>572 S 690 E, Hyrum, UT 84319</p>
                </div>
              </body>
            </html>
          `,
          tags: [
            { name: 'category', value: 'custom-admin' },
            { name: 'type', value: 'bulk-email' }
          ]
        });

        results.push({
          recipient,
          success: true,
          id: result.data?.id,
        });

      } catch (emailError) {
        console.error(`Failed to send email to ${recipient}:`, emailError);
        results.push({
          recipient,
          success: false,
          error: emailError instanceof Error ? emailError.message : 'Unknown error',
        });
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;

    return NextResponse.json({
      success: true,
      message: `Email sent to ${successCount} recipient${successCount !== 1 ? 's' : ''}${failureCount > 0 ? ` (${failureCount} failed)` : ''}`,
      results,
      stats: {
        total: recipients.length,
        success: successCount,
        failed: failureCount,
      },
    });

  } catch (error) {
    console.error("Error sending custom email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
