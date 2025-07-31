import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Download, Star, ShoppingBag, Clock } from "lucide-react";

export const metadata = generateMetadata({
  title: "Quilt Patterns - Traditional, Modern & Digital Downloads",
  description: "Beautiful quilt patterns for all skill levels. Instant PDF downloads, traditional designs, modern patterns, and step-by-step instructions from expert designers.",
});

const skillLevels = [
  { name: "Beginner", count: 45, icon: "🌱", color: "green" },
  { name: "Intermediate", count: 78, icon: "🌿", color: "blue" },
  { name: "Advanced", count: 32, icon: "🌳", color: "purple" },
  { name: "Expert", count: 15, icon: "🏆", color: "amber" }
];

const patternStyles = [
  { name: "Traditional", count: 85, description: "Classic quilt designs with timeless appeal" },
  { name: "Modern", count: 52, description: "Contemporary patterns with clean lines" },
  { name: "Appliqué", count: 28, description: "Beautiful decorative fabric applications" },
  { name: "Paper Pieced", count: 35, description: "Precise foundation paper piecing patterns" },
  { name: "Baby Quilts", count: 40, description: "Sweet patterns perfect for little ones" },
  { name: "Holiday", count: 25, description: "Seasonal and festive quilt designs" }
];

const featuredPatterns = [
  {
    name: "Feathered Star Masterpiece",
    designer: "Traditional Quilts Co.",
    price: "$18.99",
    salePrice: "$12.99",
    image: "/images/masonryGrid/feather.webp",
    description: "Intricate feathered star pattern with detailed piecing instructions",
    difficulty: "Advanced",
    size: "Queen (90\" x 90\")",
    format: "PDF Download",
    pages: 24,
    sale: true,
    featured: true,
    rating: 4.9,
    downloads: 1250
  },
  {
    name: "Modern Geometric Dreams",
    designer: "Contemporary Quilts",
    price: "$15.99",
    image: "/images/masonryGrid/brex_full.webp",
    description: "Bold geometric pattern perfect for modern quilting enthusiasts",
    difficulty: "Intermediate",
    size: "Throw (60\" x 72\")",
    format: "PDF Download",
    pages: 18,
    sale: false,
    featured: true,
    rating: 4.8,
    downloads: 892
  },
  {
    name: "Christmas Magic",
    designer: "Holiday Quilts Studio",
    price: "$14.99",
    salePrice: "$9.99",
    image: "/images/masonryGrid/christmas_angle.webp",
    description: "Festive holiday quilt with appliqué details and seasonal charm",
    difficulty: "Intermediate",
    size: "Wall Hanging (36\" x 48\")",
    format: "PDF Download",
    pages: 16,
    sale: true,
    featured: false,
    rating: 4.7,
    downloads: 675
  },
  {
    name: "Delicate Garden",
    designer: "Floral Quilts",
    price: "$12.99",
    image: "/images/masonryGrid/demi_flower.webp",
    description: "Beautiful floral appliqué pattern with detailed placement guides",
    difficulty: "Beginner",
    size: "Baby (36\" x 42\")",
    format: "PDF Download",
    pages: 12,
    sale: false,
    featured: false,
    rating: 4.6,
    downloads: 445
  },
  {
    name: "Flying High Kites",
    designer: "Fun Quilts",
    price: "$11.99",
    image: "/images/masonryGrid/kite.webp",
    description: "Playful kite pattern perfect for children's quilts",
    difficulty: "Beginner",
    size: "Twin (60\" x 80\")",
    format: "PDF Download",
    pages: 14,
    sale: false,
    featured: false,
    rating: 4.5,
    downloads: 320
  },
  {
    name: "Autumn Leaves Cascade",
    designer: "Seasonal Quilts",
    price: "$16.99",
    salePrice: "$11.99",
    image: "/images/masonryGrid/leaves.webp",
    description: "Stunning autumn-themed quilt with leaf appliqués and rich colors",
    difficulty: "Intermediate",
    size: "King (108\" x 108\")",
    format: "PDF Download",
    pages: 22,
    sale: true,
    featured: false,
    rating: 4.8,
    downloads: 580
  }
];

const featuredItems = featuredPatterns.filter(pattern => pattern.featured);

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-100 text-green-800";
    case "Intermediate": return "bg-blue-100 text-blue-800";
    case "Advanced": return "bg-purple-100 text-purple-800";
    case "Expert": return "bg-amber-100 text-amber-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function PatternsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 pt-24 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/shop" className="hover:text-green-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Quilt Patterns</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Instant Digital Downloads
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent overflow-visible">
              Quilt Patterns
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover beautiful quilt patterns from talented designers worldwide. Instant PDF downloads 
              with detailed instructions, cutting guides, and assembly diagrams for all skill levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse All Patterns
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

      {/* Skill Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Skill Level</h2>
            <p className="text-gray-600">Patterns designed for every quilter's journey</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {skillLevels.map((level, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-2">{level.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{level.name}</h3>
                  <p className="text-xs text-gray-500">{level.count} patterns</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {patternStyles.map((style, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{style.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {style.count} patterns
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{style.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Patterns */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Patterns</h2>
            <p className="text-gray-600 text-lg">
              Top-rated patterns loved by our quilting community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {featuredItems.map((pattern, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pattern.image}
                    alt={pattern.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {pattern.sale && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                      Sale
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                  <Badge className={`absolute bottom-4 left-4 ${getDifficultyColor(pattern.difficulty)}`}>
                    {pattern.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{pattern.name}</CardTitle>
                      <p className="text-sm text-gray-500 mb-2">by {pattern.designer}</p>
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{pattern.rating}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Download className="w-4 h-4 mr-1" />
                          {pattern.downloads}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{pattern.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <p className="font-medium">{pattern.size}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Pages:</span>
                      <p className="font-medium">{pattern.pages} pages</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      {pattern.sale ? (
                        <div>
                          <span className="text-xl font-bold text-red-600">{pattern.salePrice}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{pattern.price}</span>
                        </div>
                      ) : (
                        <span className="text-xl font-bold text-green-600">{pattern.price}</span>
                      )}
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Buy & Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Patterns Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Quilt Patterns</h2>
            <p className="text-gray-600 text-lg">
              Complete collection of downloadable quilt patterns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredPatterns.map((pattern, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pattern.image}
                    alt={pattern.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {pattern.sale && (
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white text-xs">
                      Sale
                    </Badge>
                  )}
                  {pattern.featured && (
                    <Badge className="absolute top-3 right-3 bg-yellow-500 text-white text-xs">
                      <Star className="w-3 h-3" />
                    </Badge>
                  )}
                  <Badge className={`absolute bottom-3 left-3 text-xs ${getDifficultyColor(pattern.difficulty)}`}>
                    {pattern.difficulty}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{pattern.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">by {pattern.designer}</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">{pattern.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{pattern.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{pattern.size}</span>
                    <span>{pattern.pages} pages</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      {pattern.sale ? (
                        <div>
                          <span className="font-bold text-red-600 text-sm">{pattern.salePrice}</span>
                          <span className="text-xs text-gray-500 line-through ml-2">{pattern.price}</span>
                        </div>
                      ) : (
                        <span className="font-bold text-green-600">{pattern.price}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Download className="w-3 h-3 mr-1" />
                      Buy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Benefits */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Digital Patterns?
            </h2>
            <p className="text-green-100 text-lg mb-8 leading-relaxed">
              Instant access, perfect prints every time, and eco-friendly quilting. Download once, 
              print as many copies as you need for your personal projects.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Download className="w-8 h-8 text-green-200 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Instant Access</h3>
                <p className="text-green-100 text-sm">Download immediately after purchase</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-200 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Lifetime Access</h3>
                <p className="text-green-100 text-sm">Re-download anytime from your account</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-green-200 mx-auto mb-2" />
                <h3 className="font-semibold text-white mb-1">Perfect Quality</h3>
                <p className="text-green-100 text-sm">Print as many copies as needed</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-50">
                Create Account
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                  Pattern Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
