import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Home, ArrowRight, Scissors, Heart } from "lucide-react";
import { Header } from "./_components/header";
import Footer from "./_components/footer";
import { CartSidebar } from "@/components/cart/cart-sidebar";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-rose-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full mb-8 mt-10">
                <span className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">404</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Oops! This Page Got Lost in the Fabric Stash
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't worry - even the best quilters sometimes lose a piece! 
                The page you're looking for might have been moved, deleted, or is hiding in the wrong pile.
              </p>
            </div>

            {/* Helpful Links Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Home className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Home</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Start fresh from our homepage and explore all our quilting services.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/">
                      Go Home <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Scissors className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Services</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Discover our longarm quilting, repairs, and made to order quilt services.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/services">
                      View Services <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Heart className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Classes</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Join our waitlist for upcoming beginner to advanced quilting classes.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/classes">
                      View Classes <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Still Can't Find What You're Looking For?</h2>
                  <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
                    Our quilting experts are here to help! Whether you need assistance with a project, 
                    have questions about our services, or want to chat about quilting techniques, we'd love to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-50">
                      <Link href="/contact">
                        Contact Us <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white text-rose-600 hover:bg-white hover:text-rose-600">
                      <Link href="/gallery">
                        View Gallery <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fun Quilting Fact */}
            <div className="mt-12 text-center">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="font-semibold text-amber-800 mb-2">Did You Know? 🧵</h3>
                <p className="text-amber-700 text-sm">
                  The oldest known quilted garment dates back to around 3400 BCE! 
                  Just like those ancient quilters, we're still piecing things together - 
                  including finding the right page for you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
}
