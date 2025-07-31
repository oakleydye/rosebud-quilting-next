import { generateMetadata } from "@/lib/metadata";
import { WaitlistSignup } from "@/components/classes/waitlist-signup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Advanced Quilting Classes - Join Our Waitlist",
  description: "Join our waitlist for advanced quilting classes. Master complex techniques, artistic expression, and professional-level skills.",
});

export default function AdvancedClassesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              Join Our Waitlist
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Advanced Quilting Classes
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Master the art of quilting with our planned 10-week advanced program. 
              Perfect for experienced quilters ready to explore complex techniques, artistic expression, 
              and professional-level skills. Join our waitlist to be notified when classes become available!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-emerald-600" />
                <span>10 weeks • 3-4 hours per session (planned)</span>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Users className="w-5 h-5 mr-3 text-emerald-600" />
                <span>Small class size (4 students maximum)</span>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Star className="w-5 h-5 mr-3 text-emerald-600" />
                <span>Master-level techniques and artistry</span>
              </div>
            </div>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Bell className="mr-2 h-4 w-4" />
              Join Waitlist - $320 (when launched)
            </Button>
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Join the Waitlist</h2>
            <p className="text-gray-600 text-center mb-12">
              Be the first to know when we launch our advanced quilting classes!
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <WaitlistSignup classLevel="advanced" className="mb-6" />
              </div>
              <div className="space-y-6">
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Bell className="w-5 h-5 mr-3 text-emerald-600" />
                        <span className="font-medium">5+ people interested</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        For experienced quilters ready to master professional techniques and artistic expression.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What You'll Master</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Paper piecing mastery and complex patterns</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Advanced appliqué techniques</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Free-motion quilting artistry</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Original design development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Portfolio creation and presentation</span>
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
            <h2 className="text-4xl font-bold text-center mb-4">Prerequisites</h2>
            <p className="text-gray-600 text-center mb-12">
              This class is designed for experienced quilters ready for a challenge
            </p>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Completed 10+ quilts with varied techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Proficient in intermediate piecing and appliqué</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Experience with machine quilting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Strong foundation in color theory and design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm">Commitment to creative exploration and artistic growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Master Your Craft?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              Join our waitlist and become part of an elite group of advanced quilting artists!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-50">
                <Bell className="mr-2 h-4 w-4" />
                Join Waitlist Now
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-emerald-600 hover:bg-white hover:text-emerald-600">
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
