import { generateMetadata } from "@/lib/metadata";
import { serviceSchema, breadcrumbListSchema } from "@/lib/structured-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, CheckCircle, Users, Award } from "lucide-react";

export const metadata = generateMetadata({
  title: "Northern Utah Longarm Quilting Services | Cache Valley's Premier Quilter",
  description: "Professional longarm quilting services in Northern Utah. Serving Cache Valley, Logan, Hyrum, Providence, Smithfield, and surrounding areas. Expert custom quilting with 15+ years experience.",
  keywords: [
    "northern utah longarm quilting",
    "cache valley longarm quilting", 
    "longarm quilting logan utah",
    "longarm quilting hyrum utah",
    "longarm quilting providence utah",
    "longarm quilting smithfield utah",
    "longarm quilting nibley utah",
    "cache valley quilting services",
    "northern utah custom quilting",
    "professional quilting cache valley",
    "longarm quilting near logan",
    "utah longarm quilting expert"
  ],
  canonical: "https://rosebudquilting.com/northern-utah-longarm-quilting"
});

const serviceAreas = [
  {
    city: "Logan",
    distance: "15 minutes",
    population: "52,000+",
    description: "Serving Utah State University community and downtown Logan quilters"
  },
  {
    city: "Hyrum", 
    distance: "0 minutes",
    population: "8,500+",
    description: "Our home base - convenient local pickup and delivery"
  },
  {
    city: "Providence",
    distance: "12 minutes", 
    population: "7,500+",
    description: "Regular pickup routes to Providence quilting enthusiasts"
  },
  {
    city: "Smithfield",
    distance: "8 minutes",
    population: "12,000+",
    description: "Close proximity for quick turnaround quilting services"
  },
  {
    city: "Nibley",
    distance: "18 minutes",
    population: "6,000+",
    description: "Extended service area with convenient scheduling"
  },
  {
    city: "Wellsville",
    distance: "20 minutes",
    population: "3,800+", 
    description: "Mountain valley community quilting services"
  }
];

const localFeatures = [
  {
    icon: Award,
    title: "15+ Years Serving Northern Utah",
    description: "Established reputation in the Cache Valley quilting community"
  },
  {
    icon: Users,
    title: "500+ Local Customers", 
    description: "Trusted by quilters throughout Northern Utah"
  },
  {
    icon: MapPin,
    title: "Convenient Cache Valley Location",
    description: "Central location in Hyrum for easy access from all areas"
  },
  {
    icon: Clock,
    title: "Local Pickup & Delivery",
    description: "Free pickup and delivery within 20 miles of our shop"
  }
];

export default function NorthernUtahLongarmQuiltingPage() {
  const localServiceSchema = serviceSchema({
    name: "Northern Utah Longarm Quilting Services",
    description: "Professional longarm quilting services throughout Northern Utah and Cache Valley, including Logan, Hyrum, Providence, Smithfield, and surrounding communities.",
    price: "0.015",
    url: "https://rosebudquilting.com/northern-utah-longarm-quilting"
  });

  const breadcrumbs = breadcrumbListSchema([
    { name: "Home", url: "https://rosebudquilting.com" },
    { name: "Northern Utah Longarm Quilting", url: "https://rosebudquilting.com/northern-utah-longarm-quilting" }
  ]);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localServiceSchema, breadcrumbs]) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Serving All of Northern Utah
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent overflow-visible">
              Northern Utah's Premier Longarm Quilting Service
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional longarm quilting services throughout Cache Valley and Northern Utah. Based in Hyrum, we proudly serve Logan, Providence, Smithfield, Nibley, Wellsville, and all surrounding communities with expert craftsmanship and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (801) 608-7461
                </Button>
              </Link>
              <Link href="/services/longarm">
                <Button size="lg" variant="outline">
                  View Our Services
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9/5 from 127+ local customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Serving Cache Valley & Northern Utah</h2>
            <p className="text-gray-600 text-lg">
              Convenient longarm quilting services for quilters throughout Northern Utah
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{area.city}</CardTitle>
                    <Badge variant="outline">{area.distance}</Badge>
                  </div>
                  <CardDescription className="text-sm text-blue-600 font-medium">
                    Population: {area.population}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Northern Utah */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Cache Valley Chooses Us</h2>
            <p className="text-gray-600 text-lg">
              Local expertise, professional results, and convenient service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {localFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Complete Longarm Quilting Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Professional Longarm Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Edge-to-Edge Quilting:</strong> Over 200 pantograph patterns starting at $0.015/sq inch
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Custom Quilting:</strong> Personalized designs and patterns for unique projects
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>T-Shirt Quilts:</strong> Transform memorable clothing into lasting keepsakes
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Memory Quilts:</strong> Preserve special moments in heirloom-quality quilts
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Quick Turnaround:</strong> Most quilts completed within 1-2 weeks
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/masonryGrid/studio.webp"
                  alt="Professional longarm quilting machine at Rosebud Quilting in Hyrum, Utah"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold">Hyrum, Utah</div>
                      <div className="text-sm text-gray-600">Cache Valley Location</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Northern Utah Quilters Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Diana does absolutely beautiful work! I've brought several quilts to her from Logan and she always exceeds my expectations. The longarm quilting is perfect every time."
                </p>
                <p className="font-semibold">Sarah M. - Logan, UT</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The pickup and delivery service is so convenient! Living in Providence, it's wonderful to have such professional longarm quilting so close by."
                </p>
                <p className="font-semibold">Jennifer K. - Providence, UT</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "I drive from Smithfield because the quality is unmatched. Diana helped me create a beautiful memory quilt from my father's shirts. Truly exceptional work."
                </p>
                <p className="font-semibold">Mary L. - Smithfield, UT</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Northern Utah's Best Longarm Quilting?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join hundreds of satisfied customers throughout Cache Valley. Contact us today for a free consultation and discover why we're Northern Utah's premier longarm quilting service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call (801) 608-7461
                </Button>
              </Link>
              <Link href="/services/longarm">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View Longarm Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
