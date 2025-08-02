import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Star, Users, Calendar, Clock } from "lucide-react";

const classLevels = [
  {
    icon: BookOpen,
    title: "Beginner Classes",
    description: "Perfect introduction to quilting fundamentals and basic techniques",
    href: "/classes/beginner",
    image: "/images/masonryGrid/brex_table.webp",
    duration: "6 weeks",
    price: "$180",
    nextStart: "March 15",
    badge: "Most Popular"
  },
  {
    icon: Star,
    title: "Intermediate",
    description: "Build upon your skills with advanced techniques and complex patterns",
    href: "/classes/intermediate",
    image: "/images/masonryGrid/demi_flower.webp",
    duration: "8 weeks",
    price: "$240",
    nextStart: "March 22",
    badge: "Skill Building"
  },
  {
    icon: Users,
    title: "Advanced Techniques",
    description: "Master complex methods and develop your artistic quilting expression",
    href: "/classes/advanced",
    image: "/images/masonryGrid/feather.webp",
    duration: "10 weeks",
    price: "$320",
    nextStart: "April 5",
    badge: "Expert Level"
  }
];

const upcomingWorkshops = [
  {
    title: "Modern Color Theory",
    date: "Feb 28",
    time: "10am-4pm",
    price: "$95",
    instructor: "Sarah Mitchell",
    spots: "3 spots left"
  },
  {
    title: "Hand Appliqué Workshop",
    date: "Mar 8",
    time: "9am-3pm",
    price: "$85",
    instructor: "Maria Rodriguez",
    spots: "6 spots available"
  },
  {
    title: "Longarm Demo",
    date: "Mar 15",
    time: "1pm-4pm",
    price: "$45",
    instructor: "Jennifer Thompson",
    spots: "8 spots available"
  }
];

const benefits = [
  "Small class sizes (max 8 students)",
  "All materials included",
  "Expert instruction",
  "Flexible makeup sessions",
  "10% store discount for students",
  "Take-home project"
];

export default function ClassesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            Learn from Experts
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Quilting Classes & Workshops
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the joy of quilting with expert instruction in a supportive, creative environment. 
            From beginner fundamentals to advanced artistry.
          </p>
        </div>

        {/* Class Levels */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {classLevels.map((level, index) => (
            <Card key={level.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={level.image}
                  alt={level.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs">
                  {level.badge}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <level.icon className="w-4 h-4 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{level.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">{level.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {level.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Starts {level.nextStart}
                  </div>
                </div>
                <div className="text-lg font-semibold text-green-600 mb-3">
                  {level.price}
                </div>
                <Link href={level.href}>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-sm">
                    Enroll Now
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Workshops */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Upcoming Workshops</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{workshop.title}</CardTitle>
                  <CardDescription className="text-xs">with {workshop.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{workshop.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-medium">{workshop.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-semibold text-green-600">{workshop.price}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-3 text-xs">{workshop.spots}</Badge>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-sm">
                    Register
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Benefits & CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Learn With Us?</h3>
              <p className="text-gray-600 mb-6">
                Join our welcoming community of quilters in a supportive learning environment 
                with expert instructors and comprehensive curriculum.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/classes">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    View All Classes
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Ask Questions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">25+</div>
                <div className="text-sm text-gray-600">Years Teaching Experience</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Students Taught</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
