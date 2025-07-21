import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Scissors, Star, ShoppingBag, Ruler, Zap } from "lucide-react";

export const metadata = generateMetadata({
  title: "Professional Quilting Tools & Notions - Rulers, Cutters & More",
  description: "Complete selection of professional quilting tools and notions. Rotary cutters, rulers, cutting mats, threads, needles, and accessories for perfect results.",
});

const toolCategories = [
  {
    name: "Rotary Cutters & Blades",
    icon: "🔪",
    count: 25,
    description: "Precision cutting tools for accurate fabric preparation"
  },
  {
    name: "Quilting Rulers",
    icon: "📏",
    count: 40,
    description: "Essential measuring tools for precise cuts and alignment"
  },
  {
    name: "Cutting Mats",
    icon: "📋",
    count: 15,
    description: "Self-healing mats in various sizes for your workspace"
  },
  {
    name: "Threads & Needles",
    icon: "🧵",
    count: 80,
    description: "Premium threads and specialized needles for every project"
  },
  {
    name: "Marking Tools",
    icon: "✏️",
    count: 20,
    description: "Temporary marking pens, pencils, and templates"
  },
  {
    name: "Pressing Tools",
    icon: "🔥",
    count: 18,
    description: "Irons, pressing mats, and steam accessories"
  }
];

const featuredProducts = [
  {
    name: "Professional Rotary Cutter Set",
    brand: "Olfa",
    price: "$89.99",
    salePrice: "$69.99",
    image: "/images/masonryGrid/window.webp",
    description: "Complete set with 45mm cutter, extra blades, and safety lock",
    features: ["Ergonomic handle", "Safety lock", "5 replacement blades", "Carrying case"],
    sale: true,
    featured: true,
    rating: 4.9
  },
  {
    name: "Precision Quilting Ruler Set",
    brand: "Creative Grids",
    price: "$124.99",
    image: "/images/masonryGrid/feather.webp",
    description: "Essential ruler collection for accurate measuring and cutting",
    features: ["Non-slip backing", "Easy-to-read markings", "5 different sizes", "Storage rack included"],
    sale: false,
    featured: true,
    rating: 4.8
  },
  {
    name: "Self-Healing Cutting Mat",
    brand: "Fiskars",
    price: "$49.99",
    salePrice: "$39.99",
    image: "/images/masonryGrid/window_board.webp",
    description: "24\" x 36\" premium cutting mat with grid lines",
    features: ["Self-healing surface", "Imperial & metric", "Non-slip base", "Folds for storage"],
    sale: true,
    featured: false,
    rating: 4.7
  },
  {
    name: "Premium Thread Collection",
    brand: "Gutermann",
    price: "$79.99",
    image: "/images/masonryGrid/demi_flower.webp",
    description: "40-spool collection of high-quality cotton thread",
    features: ["100% cotton", "Colorfast", "Lint-free", "Organized storage box"],
    sale: false,
    featured: false,
    rating: 4.9
  },
  {
    name: "Quilter's Seam Ripper Set",
    brand: "Clover",
    price: "$24.99",
    image: "/images/masonryGrid/kite.webp",
    description: "Precision seam rippers in multiple sizes",
    features: ["Ergonomic grip", "Sharp point", "Safety cap", "3 different sizes"],
    sale: false,
    featured: false,
    rating: 4.6
  },
  {
    name: "Steam Iron Pro",
    brand: "Rowenta",
    price: "$159.99",
    salePrice: "$129.99",
    image: "/images/masonryGrid/brex_angle.webp",
    description: "Professional steam iron for quilters",
    features: ["Precision tip", "Variable steam", "Auto shut-off", "Stainless steel plate"],
    sale: true,
    featured: false,
    rating: 4.8
  }
];

const featuredItems = featuredProducts.filter(product => product.featured);

export default function NotionsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 pt-24 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/shop" className="hover:text-blue-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Notions & Tools</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Professional Grade Tools
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent overflow-visible">
              Notions & Tools
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Equip yourself with professional-grade quilting tools and notions. From precision 
              cutting tools to specialized accessories, we have everything you need for perfect results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Scissors className="mr-2 h-4 w-4" />
                Shop All Tools
              </Button>
              <Link href="/shop">
                <Button size="lg" variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Shop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find the right tools for every step of your quilting process</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {toolCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {category.count} items
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>{category.description}</CardDescription>
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
              Top-rated tools trusted by quilting professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {featuredItems.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
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
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{product.name}</CardTitle>
                      <p className="text-sm text-gray-500 mb-2">by {product.brand}</p>
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      {product.sale ? (
                        <div>
                          <span className="text-xl font-bold text-red-600">{product.salePrice}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{product.price}</span>
                        </div>
                      ) : (
                        <span className="text-xl font-bold text-blue-600">{product.price}</span>
                      )}
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Tools & Notions</h2>
            <p className="text-gray-600 text-lg">
              Complete selection of professional quilting tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white text-xs">
                      Sale
                    </Badge>
                  )}
                  {product.featured && (
                    <Badge className="absolute top-3 right-3 bg-yellow-500 text-white text-xs">
                      <Star className="w-3 h-3" />
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">by {product.brand}</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      {product.sale ? (
                        <div>
                          <span className="font-bold text-red-600 text-sm">{product.salePrice}</span>
                          <span className="text-xs text-gray-500 line-through ml-2">{product.price}</span>
                        </div>
                      ) : (
                        <span className="font-bold text-blue-600">{product.price}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Service CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Professional Tool Advice?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Our experts can help you select the right tools for your skill level and project needs. 
              Visit our store for hands-on demonstrations and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                <Zap className="mr-2 h-4 w-4" />
                Try Before You Buy
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
