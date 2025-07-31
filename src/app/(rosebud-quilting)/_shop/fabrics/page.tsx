import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Star, ShoppingBag } from "lucide-react";

export const metadata = generateMetadata({
  title: "Premium Quilting Fabrics - Cotton, Batiks & Designer Collections",
  description: "Discover our curated selection of premium quilting fabrics. 100% cotton, designer collections, fat quarters, precuts, and specialty fabrics for all your projects.",
});

const fabricCollections = [
  {
    name: "Autumn Leaves Collection",
    designer: "Sarah Miller",
    price: "$12.99",
    salePrice: "$9.99",
    image: "/images/masonryGrid/leaves.webp",
    description: "Beautiful fall-inspired prints with warm oranges, deep reds, and golden yellows",
    type: "Fat Quarter Bundle",
    pieces: 6,
    sale: true,
    featured: true
  },
  {
    name: "Modern Geometry",
    designer: "Studio Design Co.",
    price: "$14.99",
    image: "/images/masonryGrid/brex_full.webp",
    description: "Contemporary geometric patterns perfect for modern quilting projects",
    type: "Fat Quarter Bundle",
    pieces: 8,
    sale: false,
    featured: true
  },
  {
    name: "Christmas Elegance",
    designer: "Holiday Fabrics",
    price: "$16.99",
    salePrice: "$12.99",
    image: "/images/masonryGrid/christmas_angle.webp",
    description: "Festive holiday prints with elegant gold accents and traditional motifs",
    type: "Fat Quarter Bundle",
    pieces: 10,
    sale: true,
    featured: false
  },
  {
    name: "Delicate Florals",
    designer: "Garden Party",
    price: "$11.99",
    image: "/images/masonryGrid/demi_flower.webp",
    description: "Soft, romantic floral prints in pastel and muted tones",
    type: "Fat Quarter Bundle",
    pieces: 5,
    sale: false,
    featured: false
  },
  {
    name: "Pink Dreams",
    designer: "Blush Collection",
    price: "$13.99",
    image: "/images/masonryGrid/pink_folded.webp",
    description: "Various shades of pink from soft blush to vibrant fuchsia",
    type: "Fat Quarter Bundle",
    pieces: 7,
    sale: false,
    featured: false
  },
  {
    name: "Window Pane Basics",
    designer: "Classic Quilts",
    price: "$8.99",
    image: "/images/masonryGrid/window_board.webp",
    description: "Timeless plaid and check patterns in neutral colors",
    type: "Individual Yards",
    pieces: 1,
    sale: false,
    featured: false
  }
];

const fabricTypes = [
  { name: "100% Cotton", count: 150, icon: "🧵" },
  { name: "Batiks", count: 45, icon: "🎨" },
  { name: "Fat Quarters", count: 200, icon: "📐" },
  { name: "Precuts", count: 75, icon: "✂️" },
  { name: "Specialty", count: 30, icon: "⭐" }
];

const featuredCollections = fabricCollections.filter(fabric => fabric.featured);
const allCollections = fabricCollections;

export default function FabricsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 pt-24 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/shop" className="hover:text-purple-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Premium Fabrics</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">
              Premium Quality Guaranteed
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent overflow-visible">
              Premium Fabrics
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium quilting fabrics. From designer collections 
              to timeless basics, find the perfect materials for your next quilting masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Package className="mr-2 h-4 w-4" />
                Shop All Fabrics
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

      {/* Fabric Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Type</h2>
            <p className="text-gray-600">Find exactly what you need for your project</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {fabricTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{type.name}</h3>
                  <p className="text-xs text-gray-500">{type.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Collections</h2>
            <p className="text-gray-600 text-lg">
              Hand-picked designer collections and customer favorites
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {featuredCollections.map((fabric, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={fabric.image}
                    alt={fabric.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {fabric.sale && (
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
                      <CardTitle className="text-xl mb-1">{fabric.name}</CardTitle>
                      <p className="text-sm text-gray-500 mb-2">by {fabric.designer}</p>
                      <Badge variant="outline" className="text-xs">
                        {fabric.type} • {fabric.pieces} pieces
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{fabric.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      {fabric.sale ? (
                        <div>
                          <span className="text-xl font-bold text-red-600">{fabric.salePrice}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{fabric.price}</span>
                        </div>
                      ) : (
                        <span className="text-xl font-bold text-pink-600">{fabric.price}</span>
                      )}
                    </div>
                    <Button className="bg-pink-600 hover:bg-pink-700">
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

      {/* All Collections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Fabric Collections</h2>
            <p className="text-gray-600 text-lg">
              Complete selection of our premium quilting fabrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allCollections.map((fabric, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={fabric.image}
                    alt={fabric.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {fabric.sale && (
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white text-xs">
                      Sale
                    </Badge>
                  )}
                  {fabric.featured && (
                    <Badge className="absolute top-3 right-3 bg-yellow-500 text-white text-xs">
                      <Star className="w-3 h-3" />
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{fabric.name}</CardTitle>
                  <p className="text-xs text-gray-500">by {fabric.designer}</p>
                  <Badge variant="outline" className="text-xs w-fit">
                    {fabric.type}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{fabric.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      {fabric.sale ? (
                        <div>
                          <span className="font-bold text-red-600">{fabric.salePrice}</span>
                          <span className="text-xs text-gray-500 line-through ml-2">{fabric.price}</span>
                        </div>
                      ) : (
                        <span className="font-bold text-pink-600">{fabric.price}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help Choosing Fabrics?
            </h2>
            <p className="text-pink-100 text-lg mb-8 leading-relaxed">
              Our fabric experts are here to help you select the perfect materials for your project. 
              Visit our store for personalized color matching and texture consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-50">
                Visit Our Store
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-pink-600">
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
