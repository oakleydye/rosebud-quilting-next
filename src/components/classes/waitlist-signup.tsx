"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Bell, Mail, Phone, CheckCircle, Clock } from "lucide-react";

interface WaitlistSignupProps {
  classLevel: 'beginner' | 'intermediate' | 'advanced' | 'workshop';
  className?: string;
}

interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  preferredContact: 'email' | 'phone';
  message: string;
  notifyWhenAvailable: boolean;
}

export function WaitlistSignup({ classLevel, className = "" }: WaitlistSignupProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    preferredContact: "email",
    message: "",
    notifyWhenAvailable: true,
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof WaitlistFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          classLevel,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.existing) {
          toast.info("You're already on the waitlist for this class level!");
        } else {
          throw new Error(data.error || "Failed to join waitlist");
        }
        return;
      }

      setIsSubmitted(true);
      toast.success("Successfully joined the waitlist! You'll receive a confirmation email shortly.");
    } catch (error) {
      console.error("Error joining waitlist:", error);
      toast.error("Failed to join waitlist. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`${className} border-green-200 bg-green-50`}>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-900">You're on the waitlist!</h3>
              <p className="text-green-700">
                We'll notify you as soon as spots become available for {classLevel} classes.
                Check your email for confirmation details.
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
          <Bell className="w-5 h-5 text-blue-600" />
          <CardTitle className="text-xl">Join the Waitlist</CardTitle>
        </div>
        <CardDescription>
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="outline" className="capitalize">
              {classLevel} Level
            </Badge>
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              Get notified when classes are available
            </span>
          </div>
          <p>
            Be the first to know when we schedule new {classLevel} quilting classes. 
            We'll contact you as soon as spots become available!
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div className="space-y-3">
            <Label>Preferred Contact Method *</Label>
            <RadioGroup
              value={formData.preferredContact}
              onValueChange={(value) => handleInputChange("preferredContact", value)}
              className="flex space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-contact" />
                <Label htmlFor="email-contact" className="flex items-center space-x-2 cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-contact" />
                <Label htmlFor="phone-contact" className="flex items-center space-x-2 cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span>Phone</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your quilting experience, specific interests, or any questions..."
              rows={3}
            />
          </div>

          {/* Notification Preference */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="notify"
              checked={formData.notifyWhenAvailable}
              onCheckedChange={(checked) => handleInputChange("notifyWhenAvailable", !!checked)}
            />
            <Label htmlFor="notify" className="text-sm cursor-pointer">
              Send me notifications about class availability and quilting updates
            </Label>
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
                Joining Waitlist...
              </>
            ) : (
              <>
                <Bell className="mr-2 h-4 w-4" />
                Join Waitlist
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By joining the waitlist, you agree to receive notifications about class availability. 
            You can unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
