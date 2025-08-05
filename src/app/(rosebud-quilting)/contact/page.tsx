import { generateMetadata } from "@/lib/metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Car } from "lucide-react";
import ContactForm from "../../_components/contact_form";

export const metadata = generateMetadata({
  title: "Contact Us - Get in Touch with Rosebud Quilting",
  description: "Contact Rosebud Quilting for services, classes, or questions. Visit our store, call, email, or send us a message. We're here to help with all your quilting needs.",
});

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "(801) 608-7461",
    description: "Speak directly with our quilting experts",
    action: "tel:+18016087461"
  },
  {
    icon: Mail, 
    title: "Email Us",
    detail: "diana@rosebudquilting.com",
    description: "Send us your questions or project details",
    action: "mailto:diana@rosebudquilting.com"
  },
  // {
  //   icon: MapPin,
  //   title: "Visit Our Store", 
  //   detail: "572 S 690 E Hyrum, UT 84319",
  //   description: "See our showroom and speak with our team",
  //   action: "https://maps.google.com"
  // },
  {
    icon: MessageCircle,
    title: "Text Us",
    detail: "(801) 608-7461", 
    description: "Quick questions? Send us a text message",
    action: "sms:+18016087461"
  }
];

const storeHours = [
  { day: "Monday - Saturday", hours: "9:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 5:00 PM" }
];

const services = [
  {
    icon: Calendar,
    title: "Schedule Services",
    description: "Book longarm quilting, consultations, or class enrollment"
  },
  {
    icon: Car,
    title: "Pickup & Delivery", 
    description: "Convenient pickup and delivery service available"
  },
  {
    icon: MessageCircle,
    title: "Free Consultations",
    description: "Get expert advice on your quilting projects"
  }
];

const faqItems = [
  {
    question: "What are your longarm quilting turnaround times?",
    answer: "Most quilts are completed within 1-2 weeks. Rush services available for an additional fee."
  },
  {
    question: "Do you offer pickup and delivery?",
    answer: "Yes! We offer pickup and delivery service within a 20-mile radius for a small fee."
  },
  {
    question: "Can I bring my own batting and backing?", 
    answer: "Absolutely! You can bring your own materials or we can provide them for you."
  },
  {
    question: "Do you offer private quilting lessons?",
    answer: "Yes, we offer private lessons for $60/hour. Perfect for personalized instruction."
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
              We're Here to Help
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent overflow-visible">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services, classes, or products? Need a quote for your quilting project? 
              We&apos;d love to hear from you and help make your quilting dreams come true.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ways to Reach Us</h2>
            <p className="text-gray-600 text-lg">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
                    <method.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription className="font-medium text-cyan-600">{method.detail}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours during business days.
              </p>
              <ContactForm />
            </div>

            {/* Store Information */}
            <div className="space-y-8">
              {/* Store Hours */}
              {/* <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-cyan-600" />
                    <CardTitle>Store Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {storeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}

              {/* Services */}
              <Card>
                <CardHeader>
                  <CardTitle>How We Can Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <service.icon className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{service.title}</h4>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                    <CardTitle>Our Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-medium">Rosebud Quilting</div>
                    <div>572 S 690 E</div>
                    <div>Hyrum, UT 84319</div>
                    <div className="pt-2">
                      <Badge variant="outline">Free Parking Available</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="hover:shadow-sm transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-cyan-100 text-lg mb-8 leading-relaxed">
              Whether you need quilting services, want to take a class, or are looking for supplies, 
              we&apos;re here to help. Contact us today to discuss your quilting needs and discover 
              how we can bring your vision to life.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-200 mx-auto mb-2" />
                <div className="text-white font-medium">(801) 608-7461</div>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-200 mx-auto mb-2" />
                <div className="text-white font-medium">diana@rosebudquilting.com</div>
              </div>
              {/* <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-200 mx-auto mb-2" />
                <div className="text-white font-medium">123 Quilting Lane</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
