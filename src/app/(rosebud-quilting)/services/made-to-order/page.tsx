import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
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
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Palette,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata = generateMetadata({
  title: "Made to Order Quilt Services",
  description:
    "Create one-of-a-kind quilts with our made to order quilt design services. From personalized patterns to bespoke quilting motifs, bring your unique vision to life.",
});

const designTypes = [
  {
    name: "Personalized Quilts",
    price: "Starting at $150",
    description:
      "Custom patterns designed specifically for your quilt",
    features: [
      "One-on-one design consultation",
      "Personalized quilting motifs",
      "Pattern digitization included",
      "Unlimited revisions until perfect",
      "Digital pattern files provided",
    ],
    popular: false,
  },
  {
    name: "Memory Quilts",
    price: "Starting at $200",
    description:
      "Transform cherished memories into beautiful quilted keepsakes",
    features: [
      "T-shirt and clothing integration",
      "Photo transfer options",
      "Memorial and tribute quilts",
      "Family history preservation",
      "Custom embroidery available",
    ],
    popular: true,
  },
  {
    name: "Wedding & Celebration Quilts",
    price: "Starting at $250",
    description: "Special occasion quilts for life's most important moments",
    features: [
      "Wedding signature quilts",
      "Anniversary commemoratives",
      "Baby milestone quilts",
      "Custom monogramming",
      "Heirloom-quality construction",
    ],
    popular: false,
  },
];

const services = [
  {
    icon: Heart,
    title: "Memory Preservation",
    description:
      "Transform clothing, photos, and mementos into lasting quilted memories.",
  },
  {
    icon: Palette,
    title: "Artistic Design",
    description:
      "Work with our designers to create unique patterns that reflect your personal style.",
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description:
      "Celebrate weddings, births, graduations, and other milestones with custom quilts.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description:
      "We work closely with you throughout the design process to ensure your vision comes to life.",
  },
];

const process = [
  {
    step: "1",
    title: "Design Consultation",
    description:
      "Meet with our design team to discuss your vision, inspiration, and any special materials you'd like to incorporate.",
  },
  {
    step: "2",
    title: "Concept Development",
    description:
      "We create initial design concepts and sketches, working with you to refine the perfect pattern.",
  },
  {
    step: "3",
    title: "Material Selection",
    description:
      "Choose fabrics, threads, and any special elements that will bring your custom design to life.",
  },
  {
    step: "4",
    title: "Expert Creation",
    description:
      "Our skilled artisans carefully craft your one-of-a-kind quilt with meticulous attention to detail.",
  },
];

export default function CustomQuiltingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Commisioned Quilt Services
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Made to Order Quilt Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create one-of-a-kind quilts that tell your story. Our custom
              design services help you transform memories, celebrate special
              occasions, and express your unique style through the art of
              quilting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">
                  Trusted by 500+ families
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-4">
                Your Story, Your Quilt
              </h2>
              <p className="text-muted-foreground mb-6">
                Every custom quilt begins with your story. Whether it's
                preserving cherished memories, celebrating milestones, or
                creating something uniquely beautiful, we work with you to
                design and craft a quilt that's truly one-of-a-kind.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Personalized design consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Memory and photo integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Heirloom quality construction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Unlimited design revisions</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/masonryGrid/brex_angle.webp"
                alt="Custom quilting design process"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-rose-600" />
                  <div>
                    <div className="font-semibold">2-4 Week Timeline</div>
                    <div className="text-sm text-muted-foreground">
                      From concept to completion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Design Specialties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating custom quilts for every occasion and
              memory
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-rose-100 rounded-full w-fit">
                    <service.icon className="w-8 h-8 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Types & Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Design Options
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect custom quilting service for your project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designTypes.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${tier.popular ? "ring-2 ring-rose-500" : ""} hover:shadow-lg transition-shadow`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-rose-500">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-rose-600 mt-4">
                    {tier.price}
                  </div>
                  <CardDescription className="mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full mt-6"
                      variant={tier.popular ? "default" : "outline"}
                    >
                      Start Design Process
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From initial concept to finished masterpiece
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-6 -right-4 w-6 h-6 text-rose-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Custom Quilt?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with a personalized quilting
            experience. Schedule a consultation to discuss your custom design
            ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-rose-600"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
