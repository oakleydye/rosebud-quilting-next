import { generateMetadata } from "@/lib/metadata";
import { WaitlistSignup } from "@/components/classes/waitlist-signup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Intermediate Quilting Classes - Join Our Waitlist",
  description:
    "Join our waitlist for intermediate quilting classes. Build advanced skills with complex piecing, color theory, and machine quilting techniques.",
});

export default function IntermediateClassesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Join Our Waitlist
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Intermediate Quilting Classes
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to take your quilting skills to the next level? Our planned
              8-week intermediate program will guide you through complex
              piecing, color theory, and machine quilting techniques. Join our
              waitlist to be notified when classes become available!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-purple-600" />
                <span>8 weeks • 3 hours per session (planned)</span>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Users className="w-5 h-5 mr-3 text-purple-600" />
                <span>Small class size (6 students maximum)</span>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Star className="w-5 h-5 mr-3 text-purple-600" />
                <span>Advanced techniques and projects</span>
              </div>
            </div>
            <Link href="#signup">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Bell className="mr-2 h-4 w-4" />
                Join Waitlist - $240 (when launched)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section id="signup" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Join the Waitlist
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Be the first to know when we launch our intermediate quilting
              classes!
            </p>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <WaitlistSignup classLevel="intermediate" className="mb-6" />
              </div>
              <div className="space-y-6">
                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Bell className="w-5 h-5 mr-3 text-purple-600" />
                        <span className="font-medium">
                          8+ people interested
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Perfect for quilters ready to advance their skills with
                        more complex techniques and projects.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span className="text-sm">
                          Complex piecing patterns and techniques
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span className="text-sm">
                          Color theory and design principles
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span className="text-sm">Machine quilting basics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span className="text-sm">
                          Advanced binding techniques
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Prerequisites
            </h2>
            <p className="text-gray-600 text-center mb-12">
              This class is designed for quilters with some experience
            </p>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm">
                      Completed at least 2-3 quilts or equivalent experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm">
                      Comfortable with rotary cutting and basic piecing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm">
                      Familiar with sewing machine operation and settings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm">
                      Ready to challenge yourself with new techniques
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Advance Your Skills?
            </h2>
            <p className="text-purple-100 text-lg mb-8 leading-relaxed">
              Join our waitlist and be part of the next generation of
              intermediate quilters!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-50"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Join Waitlist Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-purple-600 hover:bg-white hover:text-purple-600"
                >
                  Ask Questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
