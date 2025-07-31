import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
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
  Heart,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "About Rosebud Quilting - Your Complete Quilting Destination",
  description:
    "Learn about Rosebud Quilting's story, our expert team, and commitment to providing exceptional quilting services, supplies, and education since 2023.",
});

const milestones = [
  { year: "Jan 2023", event: "Founded as a home-based longarm quilting service" },
  { year: "Feb 2025", event: "Expanded to include fabric sales and classes" },
  { year: "Jul 2025", event: "Launched online store and virtual classes" },
  { year: "Jan 2026", event: "Opening our first retail location" },
];

const teamMembers = [
  {
    name: "Diana Dye",
    title: "Founder & Master Quilter",
    experience: "15+ years",
    bio: "Diana founded Rosebud Quilting with a passion for preserving traditional techniques while embracing modern innovation.",
    specialties: ["Longarm Quilting", "Traditional Patterns", "Color Theory"],
  },
];

const services = [
  {
    icon: Heart,
    title: "Longarm Quilting Services",
    description:
      "Professional quilting with precision and care using state-of-the-art machines.",
  },
  // {
  //   icon: Award,
  //   title: "Retail Shop",
  //   description:
  //     "Curated selection of premium fabrics, tools, patterns, and complete project kits.",
  // },
  {
    icon: Users,
    title: "Education Programs",
    description:
      "Comprehensive classes and workshops for quilters of all skill levels.",
  },
  {
    icon: Clock,
    title: "Custom Services",
    description:
      "Personalized quilting designs, repairs, and consultation services.",
  },
];

const stats = [
  { number: "100+", label: "Quilts Completed" },
  { number: "15", label: "Years of Experience" },
];

const values = [
  {
    title: "Quality Craftsmanship",
    description:
      "We take pride in every stitch, ensuring each project meets our highest standards.",
  },
  {
    title: "Personal Service",
    description:
      "Every customer receives individual attention and expert guidance for their projects.",
  },
  {
    title: "Community Building",
    description:
      "We foster a welcoming environment where quilters connect, learn, and grow together.",
  },
  {
    title: "Tradition & Innovation",
    description:
      "We honor quilting heritage while embracing new techniques and technologies.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
                Established 2023
              </Badge>
              <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent overflow-visible">
                Our Story
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since our establishment in 2023, Rosebud Quilting has been your
                trusted partner in all things quilting. What started as a
                passion project in our founder&apos;s home has grown into a
                comprehensive quilting destination serving quilters throughout
                Northern Utah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/store">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    Visit Our Store
                  </Button>
                </Link>
                <Link href="#team" scroll={true}>
                  <Button size="lg" variant="outline">
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/masonryGrid/studio.webp"
                alt="Rosebud Quilting Studio"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-500">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive quilting services under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
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

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              Key milestones in our quilting story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 h-12 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold mr-6">
                  {milestone.year}
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-gray-700">{milestone.event}</p>
                  {index < milestones.length - 1 && (
                    <Separator className="mt-8" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div id="team" className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">
              Passionate quilters dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-amber-600 font-medium">
                    {member.title}
                  </CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge
                          key={specialtyIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white rounded-lg shadow-sm border"
              >
                <Star className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Visit Us Today
                </h2>
                <p className="text-amber-100 text-lg mb-8 leading-relaxed">
                  Come experience our beautiful showroom, meet our friendly
                  staff, and see why quilters throughout the region choose
                  Rosebud Quilting for all their quilting needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-amber-100">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>572 S 690 E Hyrum, UT 84319</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>(801) 608-7461</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>diana@rosebudquilting.com</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>Mon-Sat 9am-7pm, Sun 11am-5pm</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Store Hours
                </h3>
                <div className="space-y-2 text-amber-100">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full mt-6 bg-white text-amber-600 hover:bg-gray-50"
                >
                  <Link href="https://goo.gl/maps/xyz123" target="_blank" className="flex items-center justify-center space-x-2">
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
