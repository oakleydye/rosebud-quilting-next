'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Mail, Send, Users, CheckCircle } from 'lucide-react';

interface CustomEmailProps {
  className?: string;
}

export function CustomEmailSender({ className = "" }: CustomEmailProps) {
  const [formData, setFormData] = useState({
    recipients: '',
    subject: '',
    message: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Parse recipients (comma-separated emails)
      const recipients = formData.recipients
        .split(',')
        .map(email => email.trim())
        .filter(email => email.length > 0);

      if (recipients.length === 0) {
        toast.error('Please enter at least one recipient email address');
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const invalidEmails = recipients.filter(email => !emailRegex.test(email));
      
      if (invalidEmails.length > 0) {
        toast.error(`Invalid email addresses: ${invalidEmails.join(', ')}`);
        return;
      }

      const response = await fetch("/api/admin/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipients,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setIsSent(true);
      toast.success(`Email sent successfully to ${recipients.length} recipient${recipients.length > 1 ? 's' : ''}!`);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSent(false);
        setFormData({
          recipients: '',
          subject: '',
          message: '',
        });
      }, 3000);

    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSent) {
    return (
      <Card className={`${className} border-green-200 bg-green-50`}>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-900">Email Sent Successfully!</h3>
              <p className="text-green-700">
                Your email has been delivered. You can send another email in a moment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-blue-600" />
          <CardTitle className="text-xl">Send Custom Email</CardTitle>
        </div>
        <p className="text-sm text-gray-600">
          Send custom emails to customers, waitlist members, or other contacts
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipients */}
          <div className="space-y-2">
            <Label htmlFor="recipients">Recipients *</Label>
            <Input
              id="recipients"
              type="text"
              required
              value={formData.recipients}
              onChange={(e) => handleInputChange("recipients", e.target.value)}
              placeholder="email1@example.com, email2@example.com"
            />
            <p className="text-xs text-gray-500">
              Enter email addresses separated by commas
            </p>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              placeholder="Enter email subject"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Write your email message here..."
              rows={8}
            />
            <p className="text-xs text-gray-500">
              Plain text email. Line breaks will be preserved.
            </p>
          </div>

          {/* Quick Templates */}
          <div className="space-y-3">
            <Label>Quick Templates</Label>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    subject: 'Class Update from Rosebud Quilting',
                    message: `Hi there!\n\nWe wanted to update you about our upcoming quilting classes.\n\n[Your message here]\n\nBest regards,\nRosebud Quilting Team\n572 S 690 E, Hyrum, UT 84319\n(435) 555-0123`
                  }));
                }}
              >
                Class Update
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    subject: 'Service Update from Rosebud Quilting',
                    message: `Hello!\n\nWe have an update regarding your quilting service request.\n\n[Your message here]\n\nIf you have any questions, please don't hesitate to reach out.\n\nBest regards,\nRosebud Quilting Team\n572 S 690 E, Hyrum, UT 84319\n(435) 555-0123`
                  }));
                }}
              >
                Service Update
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    subject: 'Thank You from Rosebud Quilting',
                    message: `Dear Valued Customer,\n\nThank you for choosing Rosebud Quilting!\n\n[Your message here]\n\nWe appreciate your business and look forward to serving you again.\n\nWarm regards,\nRosebud Quilting Team\n572 S 690 E, Hyrum, UT 84319\n(435) 555-0123`
                  }));
                }}
              >
                Thank You
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Email...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Email
              </>
            )}
          </Button>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs text-amber-800">
              <strong>Note:</strong> Emails will be sent from your configured sender address. 
              Make sure to follow email best practices and only send to contacts who have 
              opted in to receive communications.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
