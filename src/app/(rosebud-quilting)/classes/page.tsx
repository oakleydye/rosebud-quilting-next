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
  Bell,
} from "lucide-react";

export const metadata = generateMetadata({
  title: "Quilting Classes & Workshops - Join Our Waitlist",
  description:
    "Join our waitlist for quilting classes! From beginner to advanced instruction with experienced teachers. Get notified when new sessions are scheduled.",
});

const classLevels = [
  {
    title: "Beginner Classes",
    href: "/classes/beginner",
    description: "Perfect introduction to quilting fundamentals",
    image: "/images/masonryGrid/brex_table.webp",
    icon: BookOpen,
    duration: "6 weeks",
    classSize: "8 students max",
    nextStart: "Join Waitlist",
    price: "$180",
    features: [
      "Basic cutting techniques",
      "Piecing fundamentals",
      "First quilt project",
      "Tools & supplies guidance",
      "Take-home materials included",
    ],
    badge: "Most Popular",
    waitlistCount: "12+ interested",
  },
  {
    title: "Intermediate Classes",
    href: "/classes/intermediate",
    description: "Build upon your skills with advanced techniques",
    image: "/images/masonryGrid/demi_flower.webp",
    icon: Star,
    duration: "8 weeks",
    classSize: "6 students max",
    nextStart: "Join Waitlist",
    price: "$240",
    features: [
      "Complex piecing patterns",
      "Color theory & design",
      "Machine quilting basics",
      "Binding techniques",
      "Pattern reading skills",
    ],
    badge: "Skill Building",
    waitlistCount: "8+ interested",
  },
  {
    title: "Advanced Techniques",
    href: "/classes/advanced",
    description: "Master complex methods and artistic expression",
    image: "/images/masonryGrid/feather.webp",
    icon: Users,
    duration: "10 weeks",
    classSize: "4 students max",
    nextStart: "Join Waitlist",
    price: "$320",
    features: [
      "Paper piecing mastery",
      "Appliqué techniques",
      "Free-motion quilting",
      "Design development",
      "Portfolio creation",
    ],
    badge: "Expert Level",
    waitlistCount: "5+ interested",
  },
];

const upcomingWorkshops = [
  {
    title: "Modern Color Theory",
    instructor: "Sarah Mitchell",
    date: "Coming Soon",
    time: "TBD",
    price: "$95",
    spots: "Join Waitlist",
    image: "/images/masonryGrid/christmas_angle.webp",
    description:
      "Explore contemporary color combinations and create stunning modern quilts.",
    waitlistCount: "6+ interested",
  },
  {
    title: "Hand Appliqué Workshop",
    instructor: "Maria Rodriguez",
    date: "Coming Soon",
    time: "TBD",
    price: "$85",
    spots: "Join Waitlist",
    image: "/images/masonryGrid/leaves.webp",
    description:
      "Learn traditional hand appliqué techniques with expert guidance.",
    waitlistCount: "4+ interested",
  },
  {
    title: "Longarm Quilting Demo",
    instructor: "Jennifer Thompson",
    date: "Coming Soon",
    time: "TBD",
    price: "$45",
    spots: "Join Waitlist",
    image: "/images/masonryGrid/studio.webp",
    description:
      "See professional longarm quilting in action and ask questions.",
    waitlistCount: "10+ interested",
  },
];

const instructors = [
  {
    name: "Diana Dye",
    title: "Lead Instructor",
    experience: "15 years of quilting and teaching",
    specialty: "Artistic quilting and design",
    bio: "Diana is passionate about sharing her love of quilting and helping students find their unique style. With over 15 years of experience, she specializes in artistic quilting techniques and design principles. Diana believes in creating a supportive, creative environment where students can explore their passion for quilting.",
  },
];

const benefits = [
  "Small class sizes for personalized attention",
  "All skill levels welcome",
  "Take-home materials included",
  "Flexible makeup sessions",
  "10% store discount for students",
  "Free pattern library access",
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Join Our Waitlist
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent overflow-visible">
              Quilting Classes & Workshops
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're developing an amazing quilting education program! Join our
              waitlist to be the first to know when we launch classes. From
              beginner fundamentals to advanced artistry, we'll have the perfect
              class for your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/classes/beginner">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Bell className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </Link>
              <a href="#class-levels">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Class Levels */}
      <section id="class-levels" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Find Your Perfect Class</h2>
            <p className="text-gray-600 text-lg">
              Join our waitlist for structured learning paths designed to build
              your skills progressively
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {classLevels.map((level, index) => (
              <Card
                key={level.title}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={level.image}
                    alt={level.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                    {level.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <level.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{level.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {level.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {level.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {level.classSize}
                    </div>
                    <div className="flex items-center">
                      <Bell className="w-4 h-4 mr-2" />
                      {level.waitlistCount}
                    </div>
                    <div className="font-semibold text-green-600 text-base">
                      {level.price}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {level.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={level.href}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Workshops</h2>
            <p className="text-gray-600 text-lg">
              Join our waitlist for special one-day workshops and intensive
              learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600 text-white">
                    {workshop.waitlistCount}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <CardDescription>{workshop.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Instructor:</span>
                      <span className="font-medium">{workshop.instructor}</span>
                    </div>
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
                      <span className="font-semibold text-green-600">
                        {workshop.price}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Join Waitlist
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Instructors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-gray-600 text-lg">
              Learn from experienced quilters passionate about sharing their
              craft
            </p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"> */}
          <div className="grid gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    {instructor.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Experience:</strong> {instructor.experience}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Specialty:</strong> {instructor.specialty}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{instructor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Learn With Us?</h2>
            <p className="text-gray-600 text-lg">
              Experience the benefits of learning in our supportive environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm"
              >
                <Star className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-green-100 text-lg mb-8 leading-relaxed">
              Join our waitlist to be the first to know when we launch our
              quilting classes! Whether you&apos;re a complete beginner or
              looking to refine your skills, we'll have the perfect class
              waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/classes/beginner">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-green-600 hover:bg-gray-50"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green-600 hover:bg-white hover:text-green-600"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
