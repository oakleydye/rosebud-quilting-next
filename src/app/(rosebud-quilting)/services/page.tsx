import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: "Professional Quilting Services",
  description: "Complete quilting services including longarm quilting, custom designs, repair, and binding. Expert craftsmanship for your precious quilts.",
});

const services = [
  {
    title: "Longarm Quilting",
    href: "/services/longarm",
    description: "Professional longarm quilting services with precision and care",
    image: "/images/masonryGrid/studio.webp",
    features: ["Edge-to-edge quilting", "Custom pantographs", "Fast turnaround", "All quilt sizes"],
    startingPrice: "$0.015/sq inch",
    badge: "Most Popular"
  },
  {
    title: "Custom Quilting",
    href: "/services/custom",
    description: "Personalized quilting designs tailored to your unique vision",
    image: "/images/masonryGrid/demi_flower.webp",
    features: ["One-of-a-kind designs", "Digitized patterns", "Consultation included", "Heirloom quality"],
    startingPrice: "$0.025/sq inch",
    badge: "Premium"
  },
  {
    title: "Quilt Repair",
    href: "/services/repair",
    description: "Expert restoration and repair for your treasured quilts",
    image: "/images/masonryGrid/leaves.webp",
    features: ["Damage assessment", "Color matching", "Historical preservation", "Free estimates"],
    startingPrice: "$50/hour",
    badge: "Restoration"
  },
  {
    title: "Binding Services",
    href: "/services/binding",
    description: "Professional quilt binding and finishing touches",
    image: "/images/masonryGrid/pink_folded.webp",
    features: ["Machine binding", "Hand binding", "Bias tape creation", "Perfect corners"],
    startingPrice: "$0.75/inch",
    badge: "Finishing"
  }
];

const whyChooseUs = [
  "15+ years of quilting experience",
  "State-of-the-art longarm machines",
  "Quick turnaround times",
  "Satisfaction guarantee",
  "Free consultations",
  "Pickup and delivery available"
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-rose-100 text-rose-800 hover:bg-rose-200">
              Professional Services
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent overflow-visible">
              Expert Quilting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From precision longarm quilting to custom designs and restoration, we bring decades of expertise 
              to every project. Your quilts deserve the finest care and attention to detail.
            </p>
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive quilting services to bring your projects to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.badge && (
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="font-semibold text-rose-600">{service.startingPrice}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={service.href}>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Rosebud Quilting?</h2>
              <p className="text-gray-600 text-lg">
                Experience the difference that expertise and passion make
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-rose-100 text-lg mb-8 leading-relaxed">
              Contact us today for a free consultation and quote. We&apos;re here to help bring your quilting vision to life 
              with the highest quality craftsmanship and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-50">
                <Clock className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-rose-600 hover:bg-white hover:text-rose-600">
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
