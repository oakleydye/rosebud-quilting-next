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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { quiltSizes } from "@/lib/quilt_sizes";
import { EmailRequest } from "@/types/email_request";
import { toast } from "sonner";

const inquiryTypes = [
  { value: "services", label: "Quilting Services" },
  { value: "shop", label: "Shop Products" },
  { value: "classes", label: "Classes & Workshops" },
  { value: "general", label: "General Inquiry" },
];

const serviceCategories = [
  { value: "longarm", label: "Longarm Quilting" },
  { value: "custom", label: "Custom Quilting" },
  { value: "repair", label: "Quilt Repair" },
  { value: "binding", label: "Binding Services" },
  { value: "consultation", label: "Design Consultation" },
];

const shopCategories = [
  { value: "machines", label: "Quilting Machines" },
  { value: "fabrics", label: "Fabrics" },
  { value: "notions", label: "Notions & Tools" },
  { value: "patterns", label: "Patterns" },
  { value: "kits", label: "Kits" },
  { value: "longarm-designs", label: "Longarm Designs" },
];

const classLevels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "workshops", label: "Special Workshops" },
];

const timelines = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-2weeks", label: "1-2 weeks" },
  { value: "1month", label: "Within 1 month" },
  { value: "2-3months", label: "2-3 months" },
  { value: "flexible", label: "Flexible" },
];

const budgetRanges = [
  { value: "under-100", label: "Under $100" },
  { value: "100-300", label: "$100 - $300" },
  { value: "300-500", label: "$300 - $500" },
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-plus", label: "$1,000+" },
  { value: "discuss", label: "Prefer to discuss" },
];

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [shopCategory, setShopCategory] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [quiltSize, setQuiltSize] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [preferredContact, setPreferredContact] = useState("email");
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
      inquiryType,
      serviceCategory: inquiryType === "services" ? serviceCategory : undefined,
      shopCategory: inquiryType === "shop" ? shopCategory : undefined,
      classLevel: inquiryType === "classes" ? classLevel : undefined,
      quiltSize: inquiryType === "services" ? quiltSize : undefined,
      projectDetails,
      timeline,
      budget,
      preferredContact,
      message,
    };

    try {
      const response = await fetch("/api/quilt-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `${inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1)} Inquiry from ${firstName} ${lastName}`,
          message: JSON.stringify(messageRequest, null, 2),
        }),
      });

      if (response.ok) {
        toast.success("Your request has been submitted successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setInquiryType("");
        setServiceCategory("");
        setShopCategory("");
        setClassLevel("");
        setQuiltSize("");
        setProjectDetails("");
        setTimeline("");
        setBudget("");
        setPreferredContact("email");
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Inquiry Type */}
      <div className="space-y-2">
        <Label>What can we help you with? *</Label>
        <Select value={inquiryType} onValueChange={setInquiryType} required>
          <SelectTrigger>
            <SelectValue placeholder="Select your inquiry type" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Services Specific Fields */}
      {inquiryType === "services" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Service Type *</Label>
              <Select value={serviceCategory} onValueChange={setServiceCategory} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quiltSize">Quilt Size</Label>
              <Select value={quiltSize} onValueChange={setQuiltSize}>
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectDetails">Project Details</Label>
            <Textarea
              id="projectDetails"
              rows={3}
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="Tell us about your quilt top, batting, backing, desired quilting style, etc."
            />
          </div>
        </>
      )}

      {/* Shop Specific Fields */}
      {inquiryType === "shop" && (
        <>
          <div className="space-y-2">
            <Label>Product Category *</Label>
            <Select value={shopCategory} onValueChange={setShopCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select product category" />
              </SelectTrigger>
              <SelectContent>
                {shopCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="productDetails">Product Details</Label>
            <Textarea
              id="productDetails"
              rows={3}
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="Describe what you're looking for - specific brands, colors, features, etc."
            />
          </div>
        </>
      )}

      {/* Classes Specific Fields */}
      {inquiryType === "classes" && (
        <>
          <div className="space-y-2">
            <Label>Skill Level *</Label>
            <Select value={classLevel} onValueChange={setClassLevel} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your skill level" />
              </SelectTrigger>
              <SelectContent>
                {classLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="classInterests">Class Interests</Label>
            <Textarea
              id="classInterests"
              rows={3}
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="What specific techniques or projects are you interested in learning?"
            />
          </div>
        </>
      )}

      {/* Timeline and Budget (for services and shop) */}
      {(inquiryType === "services" || inquiryType === "shop") && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Timeline</Label>
            <Select value={timeline} onValueChange={setTimeline}>
              <SelectTrigger>
                <SelectValue placeholder="When do you need this?" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((time) => (
                  <SelectItem key={time.value} value={time.value}>
                    {time.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Budget Range</Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Preferred Contact Method */}
      <div className="space-y-3">
        <Label>Preferred Contact Method *</Label>
        <RadioGroup value={preferredContact} onValueChange={setPreferredContact}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email-contact" />
            <Label htmlFor="email-contact">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone-contact" />
            <Label htmlFor="phone-contact">Phone Call</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="text" id="text-contact" />
            <Label htmlFor="text-contact">Text Message</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Additional Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Any additional details, questions, or special requests..."
        />
      </div>

      <Button 
        type="submit" 
        className="w-full md:w-auto md:px-8" 
        disabled={isSubmitting || !inquiryType}
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
