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
  Scissors,
  Ruler,
  Palette,
  Zap,
} from "lucide-react";

export const metadata = generateMetadata({
  title: "Professional Quilt Binding Services",
  description:
    "Expert quilt binding and finishing services. Choose from machine or hand binding options to perfectly complete your quilting projects.",
});

const bindingOptions = [
  {
    name: "Machine Binding",
    price: "$1.50",
    unit: "per linear foot",
    description: "Professional machine-applied binding for durability",
    features: [
      "Mitered corners",
      "Even stitch line",
      "Quick turnaround (2-3 days)",
      "Wide fabric selection",
      "Perfect for everyday quilts",
    ],
    popular: true,
  },
  {
    name: "Hand Binding",
    price: "$3.00",
    unit: "per linear foot",
    description: "Traditional hand-stitched binding for heirloom quality",
    features: [
      "Hand-stitched finish",
      "Invisible stitching",
      "Heirloom quality",
      "Perfect mitered corners",
      "Custom thread selection",
    ],
    popular: false,
  },
  {
    name: "Piped Binding",
    price: "$2.00",
    unit: "per linear foot",
    description: "Decorative piped edge for a professional finish",
    features: [
      "Coordinating or contrasting piping",
      "Professional appearance",
      "Machine applied",
      "Color-matched cording",
      "Great for wall hangings",
    ],
    popular: false,
  },
];

const services = [
  {
    icon: Scissors,
    title: "Precision Cutting",
    description:
      "Perfectly cut binding strips on the bias or straight grain for optimal results.",
  },
  {
    icon: Ruler,
    title: "Professional Mitering",
    description:
      "Expert corner mitering techniques for crisp, clean corners every time.",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description:
      "Help choosing the perfect binding fabric to complement your quilt design.",
  },
  {
    icon: Zap,
    title: "Quick Service",
    description:
      "Fast turnaround times to get your finished quilt back in your hands quickly.",
  },
];

const bindingStyles = [
  {
    style: "Traditional Straight",
    description:
      "Classic straight-grain binding, perfect for most quilt projects",
    bestFor: "Everyday quilts, geometric patterns",
  },
  {
    style: "Bias Binding",
    description: "Cut on the bias for curved edges and smoother application",
    bestFor: "Curved quilts, scalloped edges",
  },
  {
    style: "Contrasting Binding",
    description: "Bold contrasting colors to frame and highlight your quilt",
    bestFor: "Modern quilts, bold designs",
  },
  {
    style: "Matching Binding",
    description: "Blends seamlessly with your quilt for a cohesive look",
    bestFor: "Traditional quilts, scrappy designs",
  },
];

const process = [
  {
    step: "1",
    title: "Binding Selection",
    description:
      "Choose your binding style, fabric, and application method based on your quilt's needs.",
  },
  {
    step: "2",
    title: "Preparation",
    description:
      "We trim your quilt edges, prepare binding strips, and ensure everything is ready.",
  },
  {
    step: "3",
    title: "Professional Application",
    description:
      "Expert application with precise mitered corners and consistent seam allowances.",
  },
  {
    step: "4",
    title: "Quality Finishing",
    description:
      "Final inspection and any touch-ups to ensure your binding is perfectly finished.",
  },
];

export default function BindingServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Finishing Services
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Professional Quilt Binding
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete your quilting project with professional binding services.
              Whether you prefer machine or hand binding, we'll give your quilt
              the perfect finishing touch it deserves.
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
                  1000+ quilts bound perfectly
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-4">
                The Perfect Finishing Touch
              </h2>
              <p className="text-muted-foreground mb-6">
                Binding is the final step that transforms your quilt top into a
                finished masterpiece. Our experienced team ensures crisp
                corners, even stitching, and a professional finish that will
                last for generations.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Perfect mitered corners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Even, professional stitching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Wide fabric selection available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Quick 2-5 day turnaround</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/masonryGrid/brex_full.webp"
                alt="Professional quilt binding"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-semibold">2-5 Day Service</div>
                    <div className="text-sm text-muted-foreground">
                      Depending on binding type
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
              Why Choose Our Binding Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional techniques and attention to detail for the perfect
              finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                    <service.icon className="w-8 h-8 text-purple-600" />
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

      {/* Binding Styles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Binding Style Options
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect binding style for your quilt
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bindingStyles.map((style, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{style.style}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-3">
                    {style.description}
                  </CardDescription>
                  <div className="text-sm">
                    <span className="font-medium">Best for: </span>
                    <span className="text-muted-foreground">
                      {style.bestFor}
                    </span>
                  </div>
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
              Binding Service Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional binding at competitive prices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bindingOptions.map((option, index) => (
              <Card
                key={index}
                className={`relative ${option.popular ? "ring-2 ring-purple-500" : ""} hover:shadow-lg transition-shadow`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-500">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{option.name}</CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mt-4">
                    {option.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {option.unit}
                  </div>
                  <CardDescription className="mt-2">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full mt-6"
                      variant={option.popular ? "default" : "outline"}
                    >
                      Choose This Option
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Need Help Calculating?
                </h3>
                <p className="text-muted-foreground mb-4">
                  To estimate your binding cost, measure the perimeter of your
                  quilt (length + width) × 2 + 10 inches for corners and seams.
                </p>
                <p className="text-sm text-muted-foreground">
                  Example: A 60" × 80" quilt needs approximately 290 linear feet
                  of binding
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Binding Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional steps for perfect results every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-6 -right-4 w-6 h-6 text-purple-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Finish Your Quilt?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us give your quilt the professional binding it deserves. Contact
            us to discuss your binding options and schedule your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Binding Service</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-purple-600"
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
