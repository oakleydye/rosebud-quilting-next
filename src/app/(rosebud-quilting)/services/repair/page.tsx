import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Star, ArrowRight, CheckCircle, Heart, Shield, Sparkles, Camera } from "lucide-react";

export const metadata = generateMetadata({
  title: "Professional Quilt Repair & Restoration Services",
  description: "Expert quilt repair and restoration services to preserve your cherished quilts. From minor fixes to complete restoration, we bring new life to damaged quilts.",
});

const repairServices = [
  {
    name: "Minor Repairs",
    price: "Starting at $25",
    description: "Small fixes to keep your quilt in good condition",
    features: [
      "Small tear and hole repairs",
      "Loose seam reinforcement",
      "Button and binding fixes",
      "Same-day service available",
      "Color-matched materials"
    ],
    popular: false
  },
  {
    name: "Major Restoration",
    price: "Starting at $150",
    description: "Comprehensive restoration for damaged or worn quilts",
    features: [
      "Extensive damage assessment",
      "Fabric replacement and patching",
      "Complete rebinding services",
      "Structural reinforcement",
      "Historical documentation"
    ],
    popular: true
  },
  {
    name: "Antique Preservation",
    price: "Quote Required",
    description: "Specialized care for vintage and antique quilts",
    features: [
      "Museum-quality techniques",
      "Historical fabric sourcing",
      "Conservation assessment",
      "Archival materials only",
      "Photo documentation included"
    ],
    popular: false
  }
];

const specialties = [
  {
    icon: Heart,
    title: "Family Heirloom Care",
    description: "Preserve precious family quilts for future generations with expert restoration."
  },
  {
    icon: Shield,
    title: "Damage Prevention",
    description: "Preventive maintenance and reinforcement to extend your quilt's lifespan."
  },
  {
    icon: Sparkles,
    title: "Vintage Restoration",
    description: "Specialized techniques for antique and vintage quilts requiring delicate care."
  },
  {
    icon: Camera,
    title: "Documentation",
    description: "Before and after photos plus detailed condition reports for insurance."
  }
];

const repairTypes = [
  {
    type: "Binding Repair",
    description: "Replace worn or damaged binding with matching or complementary fabrics",
    turnaround: "3-5 days"
  },
  {
    type: "Fabric Patching",
    description: "Carefully patch holes and tears with period-appropriate or matching fabrics",
    turnaround: "1-2 weeks"
  },
  {
    type: "Seam Reinforcement",
    description: "Strengthen loose seams and prevent further deterioration",
    turnaround: "2-3 days"
  },
  {
    type: "Complete Restoration",
    description: "Full assessment and restoration of extensively damaged quilts",
    turnaround: "3-6 weeks"
  }
];

const process = [
  {
    step: "1",
    title: "Assessment & Documentation",
    description: "Thorough evaluation of damage with detailed photos and condition report."
  },
  {
    step: "2", 
    title: "Repair Plan & Quote",
    description: "Comprehensive repair strategy with transparent pricing and timeline."
  },
  {
    step: "3",
    title: "Expert Restoration",
    description: "Skilled artisans perform repairs using appropriate techniques and materials."
  },
  {
    step: "4",
    title: "Quality Check & Care Guide",
    description: "Final inspection and personalized care instructions for ongoing preservation."
  }
];

export default function QuiltRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Restoration & Repair
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Quilt Repair & Restoration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Breathe new life into damaged or worn quilts with our expert repair and restoration 
              services. From family heirlooms to everyday quilts, we preserve the memories and 
              extend the life of your cherished pieces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">Trusted with 200+ restorations</span>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">
                Preserving Quilting Heritage
              </h2>
              <p className="text-muted-foreground mb-6">
                Every quilt tells a story, and damage shouldn't end that narrative. Our skilled 
                artisans use time-tested techniques and modern conservation methods to restore 
                quilts while preserving their original character and historical integrity.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Expert damage assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Period-appropriate materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Conservation documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Lifetime care guidance</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/masonryGrid/pink_folded.webp"
                alt="Quilt repair and restoration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold">1-6 Week Timeline</div>
                    <div className="text-sm text-muted-foreground">Depends on repair complexity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Repair Specialties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive repair services for all types of quilt damage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-emerald-100 rounded-full w-fit">
                    <specialty.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {specialty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Repair Services
            </h2>
            <p className="text-xl text-muted-foreground">
              From minor fixes to major restoration projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {repairTypes.map((repair, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{repair.type}</CardTitle>
                    <Badge variant="outline">{repair.turnaround}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {repair.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Repair & Restoration Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing based on the scope of restoration needed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {repairServices.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? 'ring-2 ring-emerald-500' : ''} hover:shadow-lg transition-shadow`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500">Most Common</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600 mt-4">
                    {service.price}
                  </div>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={service.popular ? "default" : "outline"}>
                    Get Assessment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Repair Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Careful assessment and skilled restoration every step of the way
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-6 -right-4 w-6 h-6 text-emerald-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Restore Your Cherished Quilt?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let damage diminish the beauty of your quilts. Let our experts 
            assess and restore your precious pieces with care and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Assessment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-emerald-600" asChild>
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
