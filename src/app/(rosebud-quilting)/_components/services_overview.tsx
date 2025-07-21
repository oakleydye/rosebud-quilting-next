import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Scissors, Heart, Wrench, Palette } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Longarm Quilting",
    description: "Professional longarm quilting services with precision and care",
    href: "/services/longarm",
    image: "/images/masonryGrid/studio.webp",
    startingPrice: "Starting at $0.015/sq inch",
    badge: "Most Popular"
  },
  {
    icon: Palette,
    title: "Custom Quilting",
    description: "Personalized designs tailored to your unique vision",
    href: "/services/custom",
    image: "/images/masonryGrid/demi_flower.webp",
    startingPrice: "Starting at $0.025/sq inch",
    badge: "Premium"
  },
  {
    icon: Wrench,
    title: "Quilt Repair",
    description: "Expert restoration and repair for treasured quilts",
    href: "/services/repair",
    image: "/images/masonryGrid/leaves.webp",
    startingPrice: "Starting at $50/hour",
    badge: "Restoration"
  },
  {
    icon: Scissors,
    title: "Binding Services",
    description: "Professional finishing touches for your quilts",
    href: "/services/binding",
    image: "/images/masonryGrid/pink_folded.webp",
    startingPrice: "Starting at $0.75/inch",
    badge: "Finishing"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-rose-100 text-rose-800 hover:bg-rose-200">
            Professional Services
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Expert Quilting Services
          </h2>
          <p className="text-gray-600 text-lg">
            From precision longarm quilting to custom designs and restoration, 
            we provide comprehensive quilting services with exceptional quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs">
                  {service.badge}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-rose-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-rose-600 font-medium mb-3">
                  {service.startingPrice}
                </div>
                <Link href={service.href}>
                  <Button size="sm" className="w-full bg-rose-600 hover:bg-rose-700 text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
