import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingBag, Package, Scissors, BookOpen } from "lucide-react";

export const metadata = generateMetadata({
  title: "Quilting Shop - Fabrics, Tools, Patterns & Kits",
  description: "Your complete quilting destination. Premium fabrics, professional tools, inspiring patterns, and complete project kits. Shop online or visit our store.",
});

const categories = [
  {
    title: "Premium Fabrics",
    href: "/shop/fabrics",
    description: "Curated collection of high-quality quilting cottons, batiks, and specialty fabrics",
    image: "/images/masonryGrid/demi_flower.webp",
    icon: Package,
    features: [
      "100% cotton quilting fabrics",
      "Designer collections",
      "Fat quarters & bundles",
      "Precuts available"
    ],
    badge: "New Arrivals"
  },
  {
    title: "Notions & Tools", 
    href: "/shop/notions",
    description: "Professional quilting tools and supplies for every project",
    image: "/images/masonryGrid/window.webp",
    icon: Scissors,
    features: [
      "Rotary cutters & mats",
      "Quilting rulers",
      "Threads & needles",
      "Cutting accessories"
    ],
    badge: "Essential Tools"
  },
  {
    title: "Quilt Patterns",
    href: "/shop/patterns",
    description: "Beautiful patterns from beginner to advanced skill levels",
    image: "/images/masonryGrid/feather.webp",
    icon: BookOpen,
    features: [
      "PDF instant downloads",
      "Traditional designs",
      "Modern patterns",
      "All skill levels"
    ],
    badge: "Digital & Print"
  },
  {
    title: "Complete Kits",
    href: "/shop/kits",
    description: "Everything you need for your next quilting project in one convenient package",
    image: "/images/masonryGrid/kite.webp",
    icon: ShoppingBag,
    features: [
      "Fabric & pattern included",
      "Skill level rated",
      "Video tutorials",
      "Perfect for gifts"
    ],
    badge: "All-in-One"
  }
];

const featuredProducts = [
  {
    name: "Autumn Leaves Collection",
    category: "Fabric Bundle",
    price: "$89.99",
    originalPrice: "$109.99",
    image: "/images/masonryGrid/leaves.webp",
    sale: true
  },
  {
    name: "Precision Cutting Set",
    category: "Tools & Notions",
    price: "$124.99",
    image: "/images/masonryGrid/window_board.webp",
    sale: false
  },
  {
    name: "Feathered Star Pattern",
    category: "Digital Pattern",
    price: "$12.99",
    image: "/images/masonryGrid/feather.webp",
    sale: false
  }
];

const benefits = [
  "Free shipping on orders over $75",
  "Local pickup available",
  "Expert advice and support",
  "30-day return policy",
  "Loyalty rewards program",
  "New products weekly"
];

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Your Complete Quilting Destination
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent overflow-visible">
              Quilting Shop
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover everything you need for your quilting journey. From premium fabrics and professional tools 
              to inspiring patterns and complete project kits – we have it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Start Shopping
              </Button>
              <Button size="lg" variant="outline">
                Visit Our Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">
              Find exactly what you need for your next quilting project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card key={category.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                    {category.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={category.href}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Browse {category.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">
              Hand-picked favorites and newest arrivals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.sale && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                      Sale
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="text-sm text-purple-600 font-medium">{product.category}</div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-purple-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Shop With Us?</h2>
            <p className="text-gray-600 text-lg">
              Experience the benefits of shopping with quilting experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-4 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Visit Our Physical Store
                </h2>
                <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                  Can&apos;t decide online? Visit our beautiful showroom to see and feel our fabrics, 
                  test our tools, and get expert advice from our knowledgeable staff.
                </p>
                <div className="text-purple-100 space-y-2 mb-8">
                  <div><strong>Address:</strong> 123 Quilting Lane, Portland, OR 97201</div>
                  <div><strong>Hours:</strong> Mon-Sat 9am-7pm, Sun 11am-5pm</div>
                  <div><strong>Phone:</strong> (555) 123-4567</div>
                </div>
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-50">
                  Get Directions
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Store Exclusive Perks</h3>
                  <ul className="space-y-3 text-purple-100">
                    <li>• Touch and feel fabrics before buying</li>
                    <li>• Free fabric cutting services</li>
                    <li>• In-store quilting consultations</li>
                    <li>• First access to new arrivals</li>
                    <li>• Member-only workshops</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Browse our complete collection online or visit our store for personalized service. 
              We&apos;re here to help you find exactly what you need to bring your quilting vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Online Now
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Plan Your Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
