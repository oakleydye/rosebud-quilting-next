import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Scissors, BookOpen, ShoppingBag } from "lucide-react";

const categories = [
  {
    icon: Package,
    title: "Premium Fabrics",
    description: "Curated collection of designer quilting cottons and specialty fabrics",
    href: "/shop/fabrics",
    image: "/images/masonryGrid/demi_flower.webp",
    badge: "New Arrivals",
    highlight: "100+ Designer Collections"
  },
  {
    icon: Scissors,
    title: "Tools & Notions",
    description: "Professional quilting tools and supplies for every project",
    href: "/shop/notions",
    image: "/images/masonryGrid/window.webp",
    badge: "Essential",
    highlight: "Professional Grade"
  },
  {
    icon: BookOpen,
    title: "Patterns",
    description: "Beautiful quilt patterns from beginner to advanced levels",
    href: "/shop/patterns",
    image: "/images/masonryGrid/feather.webp",
    badge: "Digital & Print",
    highlight: "Instant Downloads"
  },
  {
    icon: ShoppingBag,
    title: "Complete Kits",
    description: "Everything you need for your next project in one package",
    href: "/shop/kits",
    image: "/images/masonryGrid/kite.webp",
    badge: "All-in-One",
    highlight: "Perfect for Gifts"
  }
];

const featuredProducts = [
  {
    name: "Autumn Leaves Bundle",
    price: "$89.99",
    originalPrice: "$109.99",
    image: "/images/masonryGrid/leaves.webp",
    sale: true
  },
  {
    name: "Precision Tool Set",
    price: "$124.99",
    image: "/images/masonryGrid/window_board.webp"
  },
  {
    name: "Feathered Star Kit",
    price: "$49.99",
    image: "/images/masonryGrid/feather.webp"
  }
];

export default function ShopOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            Complete Quilting Store
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Everything for Your Quilting Journey
          </h2>
          <p className="text-gray-600 text-lg">
            Discover premium fabrics, professional tools, inspiring patterns, and complete project kits. 
            Shop online or visit our beautiful showroom.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {categories.map((category, index) => (
            <Card key={category.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs">
                  {category.badge}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-purple-600 font-medium mb-3">
                  {category.highlight}
                </div>
                <Link href={category.href}>
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-sm">
                    Browse Category
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Products</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.sale && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                      Sale
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-purple-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs px-3">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Store Info & CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Visit Our Store</h3>
              <p className="text-gray-600 mb-6">
                Experience our beautiful 3,000 sq ft showroom with hundreds of fabric bolts, 
                professional tools, and knowledgeable staff ready to help with your projects.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div><strong>Location:</strong> 123 Quilting Lane, Portland, OR</div>
                <div><strong>Hours:</strong> Mon-Sat 9am-7pm, Sun 11am-5pm</div>
                <div><strong>Perks:</strong> Free parking, cutting service, expert advice</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/shop">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Shop Online
                  </Button>
                </Link>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium">Free shipping on orders over $75</span>
                <Badge className="bg-purple-600">Free Ship</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium">Local pickup available</span>
                <Badge variant="outline">Pickup</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium">Expert advice & support</span>
                <Badge variant="outline">Support</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
