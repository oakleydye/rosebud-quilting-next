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
  Ruler,
  Palette,
  Zap,
} from "lucide-react";

export const metadata = generateMetadata({
  title: "Professional Longarm Quilting Services",
  description:
    "Expert longarm quilting with precision stitching, quick turnaround, and competitive pricing. Transform your quilt tops into finished masterpieces.",
});

const pricingTiers = [
  {
    name: "Basic Edge-to-Edge",
    price: "$0.02",
    unit: "per sq inch",
    description: "Simple, continuous patterns across the entire quilt",
    features: [
      "Over 200 pantograph patterns",
      "Basic thread colors",
      "2-week turnaround",
    ],
    popular: false,
  },
  {
    name: "Premium Edge-to-Edge",
    price: "$0.025",
    unit: "per sq inch",
    description: "Enhanced patterns with premium thread options",
    features: [
      "Premium pantograph collection",
      "Premium thread selection",
      "1-week turnaround",
      "Thread color consultation",
    ],
    popular: true,
  },
  {
    name: "Custom Quilting",
    price: "$0.03",
    unit: "per sq inch",
    description: "Fully customized quilting design",
    features: [
      "Completely custom design",
      "Design consultation included",
      "Priority scheduling",
      "Digital pattern keepsake",
    ],
    popular: false,
  },
];

const services = [
  {
    icon: Ruler,
    title: "All Quilt Sizes",
    description:
      "From baby quilts to king size, we handle projects of every dimension with precision.",
  },
  {
    icon: Palette,
    title: "Thread Selection",
    description:
      "Extensive collection of high-quality threads in every color to match your vision.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Most quilts completed within 1-2 weeks, with rush services available.",
  },
];

const process = [
  {
    step: "1",
    title: "Drop Off Your Quilt Top",
    description:
      "Bring your quilt top, backing, and batting (or we can provide). We'll discuss your vision and preferences.",
  },
  {
    step: "2",
    title: "Design Selection",
    description:
      "Choose from our extensive pantograph library or discuss custom quilting options.",
  },
  {
    step: "3",
    title: "Expert Quilting",
    description:
      "Our skilled quilters bring your project to life with precision and care using professional longarm machines.",
  },
  {
    step: "4",
    title: "Quality Check & Pickup",
    description:
      "Final inspection ensures perfection before your finished quilt is ready for pickup or delivery.",
  },
];

export default function LongarmQuiltingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Professional Longarm Services
              </Badge>
              <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent overflow-visible">
                Longarm Quilting Excellence
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your quilt tops into stunning finished pieces with our
                professional longarm quilting services. Precision stitching,
                beautiful patterns, and expert craftsmanship in every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="outline">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/masonryGrid/studio.webp"
                alt="Professional longarm quilting machine"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="font-semibold">
                      100+ Satisfied Customers
                    </div>
                    <div className="text-sm text-gray-500">
                      5-star average rating
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
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Our Longarm Services?
            </h2>
            <p className="text-gray-600 text-lg">
              Professional equipment, expert techniques, and attention to detail
              in every stitch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-600" />
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

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">
              Quality longarm quilting at competitive rates with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${tier.popular ? "border-blue-500 border-2 shadow-lg" : ""}`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">
                      {tier.price}
                    </span>
                    <span className="text-gray-500 ml-2">{tier.unit}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full mt-6 ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      Choose This Option
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
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg">
              Simple steps to get your quilt professionally finished
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < process.length - 1 && <Separator className="mt-8" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Quilt Top?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Get started with a free consultation and quote. We&apos;ll help
              you choose the perfect quilting pattern and discuss all your
              options to create a stunning finished quilt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
