import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Users,
  Star,
  BookOpen,
  ArrowRight,
  CheckCircle,
  MapPin,
  Bell,
} from "lucide-react";
import { WaitlistSignup } from "@/components/classes/waitlist-signup";

export const metadata = generateMetadata({
  title: "Beginner Quilting Classes - Join Our Waitlist",
  description:
    "Join our waitlist for comprehensive beginner quilting classes. Learn fundamental techniques and complete your first quilt with expert instruction.",
});

const weeklySchedule = [
  {
    week: "Week 1",
    title: "Getting Started & Tool Introduction",
    topics: [
      "Introduction to quilting history and terminology",
      "Essential tools and their uses",
      "Fabric selection and preparation",
      "Setting up your workspace",
      "Safety guidelines and best practices",
    ],
  },
  {
    week: "Week 2",
    title: "Cutting Fundamentals",
    topics: [
      "Rotary cutting techniques",
      "Measuring and marking fabric",
      "Cutting accurate strips and squares",
      "Organizing cut pieces",
      "Troubleshooting common cutting issues",
    ],
  },
  {
    week: "Week 3",
    title: "Basic Piecing",
    topics: [
      "Understanding seam allowances",
      "Chain piecing techniques",
      "Pressing methods and tips",
      "Creating four-patch blocks",
      "Quality control and accuracy",
    ],
  },
  {
    week: "Week 4",
    title: "Block Assembly & Layout",
    topics: [
      "Assembling larger blocks",
      "Layout design principles",
      "Color placement strategies",
      "Sashing and borders introduction",
      "Planning your quilt top",
    ],
  },
  {
    week: "Week 5",
    title: "Quilt Top Assembly",
    topics: [
      "Joining blocks together",
      "Adding sashing strips",
      "Measuring and cutting borders",
      "Pressing techniques for large pieces",
      "Preparing for quilting",
    ],
  },
  {
    week: "Week 6",
    title: "Finishing Techniques",
    topics: [
      "Layering (sandwiching) your quilt",
      "Basic quilting stitches",
      "Binding preparation and application",
      "Final pressing and finishing",
      "Care and storage of quilts",
    ],
  },
];

const includedSupplies = [
  "All fabric for your first quilt project",
  "Complete pattern and instructions",
  "Basic quilting tools starter kit",
  "Thread and notions",
  "Batting and backing fabric",
  "Take-home reference materials",
];

const whatYoullLearn = [
  "Fundamental cutting techniques using rotary cutters and rulers",
  "Basic piecing methods and seam accuracy",
  "How to press seams properly for professional results",
  "Block assembly and layout design principles",
  "Simple quilting techniques for finishing your project",
  "Binding application for a polished edge",
  "Fabric selection and color coordination",
  "Essential quilting vocabulary and terminology",
];

const prerequisites = [
  "No prior quilting experience required",
  "Basic sewing machine operation helpful but not required",
  "Enthusiasm to learn and create!",
];

export default function BeginnerClassesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 mt-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Join Our Waitlist
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Beginner Quilting Classes
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get ready for an amazing quilting journey! We're developing a
                comprehensive 6-week beginner program that will guide you
                through creating your very first quilt while building a strong
                foundation in quilting fundamentals. Join our waitlist to be the
                first to know when classes launch!
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  <span>6 weeks • 3 hours per session (planned)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Small class size (8 students maximum)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Star className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Complete your first quilt project</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#signup">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Bell className="mr-2 h-4 w-4" />
                    Join Waitlist - $180 (when launched)
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/masonryGrid/brex_table.webp"
                  alt="Beginner quilting class in session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">$180</div>
                <div className="text-sm text-gray-600">
                  All materials included
                </div>
              </div>
            </div>
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
              Be the first to know when we launch our beginner quilting classes!
            </p>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <WaitlistSignup classLevel="beginner" className="mb-6" />
              </div>
              <div className="space-y-6">
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Bell className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="font-medium">
                          12+ people interested
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Join our growing community of future quilters! The more
                        interest we receive, the sooner we can launch these
                        classes.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Why Join the Waitlist?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm">
                          First access to class enrollment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm">
                          Early bird pricing when available
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm">
                          Updates on class development
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm">No commitment required</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              What You'll Learn Each Week
            </h2>
            <p className="text-gray-600 text-center mb-12">
              A structured approach to building your quilting skills
            </p>

            <div className="space-y-6">
              {weeklySchedule.map((week, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-blue-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {week.week}: {week.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {week.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-blue-600 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Everything You Need Included
                </h2>
                <p className="text-gray-600 mb-8">
                  We provide all the materials you need for your first quilt
                  project, so you can focus on learning without worrying about
                  what to buy.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {includedSupplies.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/masonryGrid/christmas_close.webp"
                    alt="Quilting supplies and materials"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills You'll Master */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Skills You'll Master
            </h2>
            <p className="text-gray-600 text-center mb-12">
              By the end of this course, you'll have the confidence and skills
              to create beautiful quilts on your own
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {whatYoullLearn.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm"
                >
                  <Star className="w-5 h-5 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites & FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Class Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-sm text-gray-600">
                      Rosebud Quilting Studio
                      <br />
                      572 S 690 E, Hyrum, UT 84319
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Class Size</h4>
                    <p className="text-sm text-gray-600">
                      Maximum 8 students for personalized attention
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">What to Bring</h4>
                    <p className="text-sm text-gray-600">
                      Just yourself and enthusiasm to learn! All materials
                      provided.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Makeup Policy</h4>
                    <p className="text-sm text-gray-600">
                      Flexible makeup sessions available for missed classes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Quilting Journey?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join our waitlist to be part of an amazing quilting community
              that's about to launch! Your first quilt adventure is just around
              the corner!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Join Waitlist Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
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
