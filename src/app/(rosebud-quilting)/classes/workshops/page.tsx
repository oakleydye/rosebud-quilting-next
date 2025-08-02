import { generateMetadata } from "@/lib/metadata";
import { WaitlistSignup } from "@/components/classes/waitlist-signup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, Clock, Users, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Quilting Workshops - Join Our Waitlist",
  description:
    "Join our waitlist for intensive quilting workshops. Special one-day and weekend sessions focusing on specific techniques and skills.",
});

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="container mx-auto px-4 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              Join Our Waitlist
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Quilting Workshops
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Intensive hands-on workshops designed to teach specific techniques
              in focused sessions. Perfect for busy quilters who want to learn
              new skills in concentrated time periods. Join our waitlist to be
              notified when workshops become available!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-orange-600" />
                <span>1-2 day intensive sessions (planned)</span>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Users className="w-5 h-5 mr-3 text-orange-600" />
                <span>Small groups (6-10 students maximum)</span>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Calendar className="w-5 h-5 mr-3 text-orange-600" />
                <span>Flexible scheduling options</span>
              </div>
            </div>
            <Link href="#signup">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Bell className="mr-2 h-4 w-4" />
                Join Waitlist - Various Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Planned Workshops */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Planned Workshop Topics
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Specialized workshops we're developing for different skill levels
              and interests
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Modern Color Theory",
                  level: "All Levels",
                  duration: "1 Day",
                  price: "$95",
                  description:
                    "Explore contemporary color combinations and create stunning modern quilts.",
                },
                {
                  title: "Hand Appliqué Mastery",
                  level: "Intermediate",
                  duration: "1 Day",
                  price: "$85",
                  description:
                    "Learn traditional hand appliqué techniques with expert guidance.",
                },
                {
                  title: "Paper Piecing Intensive",
                  level: "Beginner+",
                  duration: "1 Day",
                  price: "$90",
                  description:
                    "Master foundation paper piecing with complex star patterns.",
                },
                {
                  title: "Free-Motion Quilting",
                  level: "Intermediate",
                  duration: "2 Days",
                  price: "$165",
                  description:
                    "Develop confidence and artistry in free-motion quilting techniques.",
                },
                {
                  title: "Longarm Demo & Try",
                  level: "All Levels",
                  duration: "Half Day",
                  price: "$45",
                  description:
                    "See professional longarm quilting in action and try it yourself.",
                },
                {
                  title: "Binding Perfection",
                  level: "All Levels",
                  duration: "Half Day",
                  price: "$55",
                  description:
                    "Master multiple binding techniques for professional finishes.",
                },
              ].map((workshop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{workshop.level}</Badge>
                      <span className="text-lg font-bold text-orange-600">
                        {workshop.price}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      {workshop.description}
                    </p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Duration: {workshop.duration}</span>
                    </div>
                    <Badge className="w-full justify-center bg-orange-100 text-orange-800 hover:bg-orange-200">
                      <Bell className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section id="signup" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Join the Waitlist
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Be the first to know when we launch our workshop series!
            </p>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <WaitlistSignup classLevel="workshop" className="mb-6" />
              </div>
              <div className="space-y-6">
                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Bell className="w-5 h-5 mr-3 text-orange-600" />
                        <span className="font-medium">
                          15+ people interested
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Perfect for quilters who want focused, intensive
                        learning experiences on specific techniques.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Workshop Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">
                          Intensive focus on specific techniques
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">
                          Small group personalized instruction
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">
                          Flexible weekend scheduling
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-orange-600 flex-shrink-0" />
                        <span className="text-sm">
                          All materials and supplies included
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Intensive Learning?
            </h2>
            <p className="text-orange-100 text-lg mb-8 leading-relaxed">
              Join our waitlist and be the first to access our specialized
              workshop series!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-gray-50"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Join Waitlist Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-orange-600 hover:bg-white hover:text-orange-600"
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
