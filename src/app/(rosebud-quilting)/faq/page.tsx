import { generateMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/structured-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/comprehensive_faqs";
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { CategoryCard } from "./_components/category-card";

export const metadata = generateMetadata({
  title: "Frequently Asked Questions - Longarm Quilting Utah",
  description: "Get answers to common questions about longarm quilting services, pricing, classes, and more. Expert quilting advice from Northern Utah's premier quilting service.",
  keywords: [
    "longarm quilting faq utah",
    "quilting questions northern utah", 
    "longarm quilting pricing utah",
    "quilting services faq cache valley",
    "quilting classes questions utah"
  ]
});

const faqCategories = [
  {
    title: "General Questions",
    description: "Basic information about our business and services",
    icon: "HelpCircle",
    key: "general",
  },
  {
    title: "Services & Quilting",
    description: "Longarm quilting, repairs, custom work, and more",
    icon: "MessageCircle",
    key: "services",
  },
  {
    title: "Pricing & Payment",
    description: "Costs, payment options, and billing information",
    icon: "Phone",
    key: "pricing",
  },
  {
    title: "Classes & Learning",
    description: "Class information, skill levels, and registration",
    icon: "Mail",
    key: "classes",
  },
  {
    title: "Shop & Products",
    description: "Fabric, supplies, machines, and purchasing",
    icon: "HelpCircle",
    key: "shop",
  },
];

export default function FAQPage() {
  // Get all FAQs for structured data
  const allFaqs = [
    ...faqs.general,
    ...faqs.services, 
    ...faqs.pricing,
    ...faqs.classes,
    ...faqs.shop
  ];
  
  const faqStructuredData = faqSchema(allFaqs);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Help & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to the most common questions about our longarm quilting services, classes, pricing, and everything quilting in Northern Utah. Can't find what you're looking for? We're here to help!
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="max-w-2xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-4">
                    Still have questions?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our friendly team is always happy to help with any questions
                    not covered here.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Link href="tel:8016087461">
                      <Button variant="outline">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (801) 608-7461
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Categories Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Jump to the section most relevant to your questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {faqCategories.map((category, index) => (
              <CategoryCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => {
            const iconMap = {
              HelpCircle,
              Phone,
              Mail,
              MessageCircle,
            };
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];

            return (
              <div
                key={categoryIndex}
                id={`category-${category.key}`}
                className="mb-16 last:mb-0"
              >
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs[category.key as keyof typeof faqs].map(
                        (faq, index) => (
                          <AccordionItem
                            key={index}
                            value={`${category.key}-${index}`}
                          >
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        )
                      )}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Didn't Find Your Answer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help! Contact us directly and we'll get you the
            information you need for your quilting project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="sms:8016087461">
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Us a Message
              </Link>
            </Button>
            <Link href="tel:8016087461">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-blue-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (801) 608-7461
              </Button>
            </Link>
            <Link href="mailto:diana@rosebudquilting.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-blue-600"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
