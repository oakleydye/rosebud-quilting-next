import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingBag, Package, Star, Gift, CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: "Complete Quilt Kits - Everything Included Projects",
  description: "Complete quilting project kits with fabric, pattern, and instructions included. Perfect for gifts or trying new techniques. All skill levels available.",
});

const kitCategories = [
  { name: "Beginner Kits", count: 25, icon: "🌟", description: "Perfect first projects with simple techniques" },
  { name: "Intermediate Kits", count: 35, icon: "🎯", description: "Build skills with engaging projects" },
  { name: "Advanced Kits", count: 18, icon: "🏆", description: "Challenge yourself with complex designs" },
  { name: "Baby Quilts", count: 22, icon: "👶", description: "Adorable kits perfect for little ones" },
  { name: "Holiday Kits", count: 15, icon: "🎄", description: "Seasonal projects for home decoration" },
  { name: "Wall Hangings", count: 20, icon: "🖼️", description: "Beautiful decorative quilted art" }
];

const featuredKits = [
  {
    name: "Flying Kites Adventure Kit",
    designer: "Fun Quilts Studio",
    price: "$89.99",
    salePrice: "$69.99",
    image: "/images/masonryGrid/kite.webp",
    description: "Complete kit for a playful kite-themed baby quilt with coordinating fabrics",
    difficulty: "Beginner",
    size: "Baby (36\" x 42\")",
    includes: ["5 coordinating fabrics", "Pattern & instructions", "Batting", "Binding fabric", "Video tutorial access"],
    timeToComplete: "2-3 weeks",
    sale: true,
    featured: true,
    rating: 4.9,
    reviews: 145
  },
  {
    name: "Autumn Leaves Table Runner",
    designer: "Seasonal Quilts",
    price: "$45.99",
    image: "/images/masonryGrid/leaves.webp",
    description: "Beautiful fall table runner with appliqué leaves in rich autumn colors",
    difficulty: "Intermediate",
    size: "Table Runner (16\" x 54\")",
    includes: ["Pre-cut appliqué pieces", "Background fabric", "Pattern", "Fusible web", "Thread"],
    timeToComplete: "1-2 weeks",
    sale: false,
    featured: true,
    rating: 4.8,
    reviews: 89
  },
  {
    name: "Christmas Star Wall Hanging",
    designer: "Holiday Traditions",
    price: "$65.99",
    salePrice: "$49.99",
    image: "/images/masonryGrid/christmas_angle.webp",
    description: "Festive Christmas star with metallic accents and traditional holiday fabrics",
    difficulty: "Intermediate",
    size: "Wall Hanging (30\" x 30\")",
    includes: ["6 holiday fabrics", "Metallic thread", "Pattern", "Backing fabric", "Hanging sleeve kit"],
    timeToComplete: "2-3 weeks",
    sale: true,
    featured: false,
    rating: 4.7,
    reviews: 67
  },
  {
    name: "Delicate Garden Sampler",
    designer: "Floral Dreams",
    price: "$125.99",
    image: "/images/masonryGrid/demi_flower.webp",
    description: "Learn 12 different blocks with this comprehensive floral sampler quilt kit",
    difficulty: "Intermediate",
    size: "Throw (54\" x 72\")",
    includes: ["15 coordinated fabrics", "Detailed pattern booklet", "Batting", "Backing fabric", "All threads"],
    timeToComplete: "4-6 weeks",
    sale: false,
    featured: false,
    rating: 4.9,
    reviews: 203
  },
  {
    name: "Modern Geometry Throw",
    designer: "Contemporary Quilts",
    price: "$99.99",
    salePrice: "$79.99",
    image: "/images/masonryGrid/brex_full.webp",
    description: "Bold geometric design perfect for modern home decor",
    difficulty: "Advanced",
    size: "Throw (60\" x 72\")",
    includes: ["8 modern fabrics", "Precision-cut pieces", "Pattern", "Batting", "Coordinating binding"],
    timeToComplete: "3-4 weeks",
    sale: true,
    featured: false,
    rating: 4.6,
    reviews: 92
  },
  {
    name: "Pink Dreams Baby Quilt",
    designer: "Sweet Dreams Quilts",
    price: "$75.99",
    image: "/images/masonryGrid/pink_folded.webp",
    description: "Soft and sweet baby quilt in various shades of pink with cloud quilting pattern",
    difficulty: "Beginner",
    size: "Baby (40\" x 50\")",
    includes: ["6 pink fabrics", "Cloud quilting template", "Pattern", "Minky backing", "Binding"],
    timeToComplete: "2-3 weeks",
    sale: false,
    featured: false,
    rating: 4.8,
    reviews: 124
  }
];

const featuredItems = featuredKits.filter(kit => kit.featured);

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-100 text-green-800";
    case "Intermediate": return "bg-blue-100 text-blue-800";
    case "Advanced": return "bg-purple-100 text-purple-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const benefits = [
  "Everything included in one package",
  "Perfectly coordinated fabric selections",
  "Detailed step-by-step instructions",
  "Video tutorials for most kits",
  "Perfect for gift giving",
  "Great way to try new techniques"
];

export default function KitsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 pt-24 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/shop" className="hover:text-orange-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Complete Kits</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              Everything You Need Included
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent overflow-visible">
              Complete Kits
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the guesswork out of fabric selection with our complete quilt kits. Each kit includes 
              perfectly coordinated fabrics, detailed patterns, and all supplies needed to create beautiful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Package className="mr-2 h-4 w-4" />
                Shop All Kits
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

      {/* Kit Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Find the perfect project for your skill level and interests</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {kitCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {category.count} kits
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

      {/* Featured Kits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Kits</h2>
            <p className="text-gray-600 text-lg">
              Our most popular complete quilting project kits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {featuredItems.map((kit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={kit.image}
                    alt={kit.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {kit.sale && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                      Sale
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                  <Badge className={`absolute bottom-4 left-4 ${getDifficultyColor(kit.difficulty)}`}>
                    {kit.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{kit.name}</CardTitle>
                      <p className="text-sm text-gray-500 mb-2">by {kit.designer}</p>
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{kit.rating} ({kit.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{kit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <p className="font-medium">{kit.size}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Time:</span>
                      <p className="font-medium">{kit.timeToComplete}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Kit Includes:</h4>
                    <ul className="space-y-1">
                      {kit.includes.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {kit.includes.length > 3 && (
                        <li className="text-xs text-gray-500">+ {kit.includes.length - 3} more items</li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {kit.sale ? (
                        <div>
                          <span className="text-xl font-bold text-red-600">{kit.salePrice}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{kit.price}</span>
                        </div>
                      ) : (
                        <span className="text-xl font-bold text-orange-600">{kit.price}</span>
                      )}
                    </div>
                    <Button className="bg-orange-600 hover:bg-orange-700">
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

      {/* All Kits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Complete Kits</h2>
            <p className="text-gray-600 text-lg">
              Browse our full collection of quilting project kits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredKits.map((kit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={kit.image}
                    alt={kit.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {kit.sale && (
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white text-xs">
                      Sale
                    </Badge>
                  )}
                  {kit.featured && (
                    <Badge className="absolute top-3 right-3 bg-yellow-500 text-white text-xs">
                      <Star className="w-3 h-3" />
                    </Badge>
                  )}
                  <Badge className={`absolute bottom-3 left-3 text-xs ${getDifficultyColor(kit.difficulty)}`}>
                    {kit.difficulty}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{kit.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">by {kit.designer}</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">{kit.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{kit.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{kit.size}</span>
                    <span>{kit.timeToComplete}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    Includes {kit.includes.length} items
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      {kit.sale ? (
                        <div>
                          <span className="font-bold text-red-600 text-sm">{kit.salePrice}</span>
                          <span className="text-xs text-gray-500 line-through ml-2">{kit.price}</span>
                        </div>
                      ) : (
                        <span className="font-bold text-orange-600">{kit.price}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Complete Kits?</h2>
            <p className="text-gray-600 text-lg">
              The benefits of all-inclusive quilting project kits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                <CheckCircle className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Perfect Gifts for Quilters
            </h2>
            <p className="text-orange-100 text-lg mb-8 leading-relaxed">
              Complete kits make wonderful gifts for quilting enthusiasts of all skill levels. 
              Each kit comes beautifully packaged and includes everything needed to create something special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-50">
                <Gift className="mr-2 h-4 w-4" />
                Gift Cards Available
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                  Custom Kit Requests
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
