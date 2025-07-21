"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quiltSizes } from "@/lib/quilt_sizes";
import { EmailRequest } from "@/types/email_request";
import { toast } from "sonner";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quiltSize, setQuiltSize] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageRequest: EmailRequest = {
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        quiltSize: quiltSize,
        message,
        inquiryType: "",
        preferredContact: ""
    };

    try {
      const response = await fetch("/api/quilt-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `Quilt Order Request from ${firstName} ${lastName}`,
          message: JSON.stringify(messageRequest, null, 2),
        }),
      });

      if (response.ok) {
        toast.success("Your request has been submitted successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setQuiltSize("");
        setMessage("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast.error(
        "There was an error submitting your request. Please call or email us directly, and we will get back to you as soon as possible."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="quiltSize">Quilt Size *</Label>
        <Select value={quiltSize} onValueChange={setQuiltSize} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a quilt size" />
          </SelectTrigger>
          <SelectContent>
            {quiltSizes.map((size, index) => (
              <SelectItem key={index} value={size.size}>
                {`${size.size} (${size.width}" x ${size.length}")`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us more about your quilting project..."
        />
      </div>

      <Button 
        type="submit" 
        className="w-full md:w-auto md:px-8" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
