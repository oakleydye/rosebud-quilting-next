import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, BookOpen, ArrowRight, CheckCircle, MapPin, Target } from "lucide-react";

export const metadata = generateMetadata({
  title: "Intermediate Quilting Classes - Build Advanced Skills",
  description: "Take your quilting to the next level with intermediate techniques. Learn complex piecing, color theory, and machine quilting in our comprehensive 8-week program.",
});

const upcomingSessions = [
  {
    startDate: "March 22, 2025",
    endDate: "May 17, 2025",
    dayOfWeek: "Saturdays",
    time: "2:00 PM - 5:00 PM",
    spotsAvailable: 2,
    totalSpots: 6,
    instructor: "Diana Dye"
  },
  {
    startDate: "June 7, 2025", 
    endDate: "August 2, 2025",
    dayOfWeek: "Saturdays",
    time: "2:00 PM - 5:00 PM",
    spotsAvailable: 5,
    totalSpots: 6,
    instructor: "Diana Dye"
  },
  {
    startDate: "September 6, 2025",
    endDate: "November 1, 2025", 
    dayOfWeek: "Saturdays",
    time: "2:00 PM - 5:00 PM",
    spotsAvailable: 6,
    totalSpots: 6,
    instructor: "Diana Dye"
  }
];

const weeklySchedule = [
  {
    week: "Week 1",
    title: "Advanced Cutting & Precision Techniques",
    topics: [
      "Complex cutting techniques and templates",
      "Working with bias cuts and curved pieces", 
      "Precision marking and measuring",
      "Advanced rotary cutting skills",
      "Troubleshooting accuracy issues"
    ]
  },
  {
    week: "Week 2", 
    title: "Complex Piecing Patterns",
    topics: [
      "Flying geese and half-square triangles",
      "Y-seams and set-in pieces",
      "Chain piecing for efficiency",
      "Curved piecing fundamentals",
      "Managing multiple fabric combinations"
    ]
  },
  {
    week: "Week 3",
    title: "Color Theory & Design Principles",
    topics: [
      "Understanding color relationships", 
      "Value and contrast in quilting",
      "Creating focal points and movement",
      "Fabric selection strategies",
      "Planning complex color schemes"
    ]
  },
  {
    week: "Week 4",
    title: "Advanced Block Construction",
    topics: [
      "Complex block patterns and variations",
      "Foundation paper piecing introduction",
      "Managing large and small pieces",
      "Block modification techniques",
      "Creating your own block designs"
    ]
  },
  {
    week: "Week 5",
    title: "Sashing, Borders & Layout Design",
    topics: [
      "Creative sashing techniques",
      "Planning and cutting complex borders",
      "Mitered corners and special treatments",
      "Secondary patterns in layout",
      "Balancing positive and negative space"
    ]
  },
  {
    week: "Week 6",
    title: "Machine Quilting Fundamentals",
    topics: [
      "Preparing your quilt for machine quilting",
      "Walking foot techniques and patterns",
      "Straight-line quilting designs", 
      "Managing large quilts on home machines",
      "Thread and tension considerations"
    ]
  },
  {
    week: "Week 7",
    title: "Free-Motion Quilting Introduction",
    topics: [
      "Setting up for free-motion quilting",
      "Basic free-motion patterns and motifs",
      "Developing smooth quilting motion",
      "Planning quilting designs",
      "Practice exercises and troubleshooting"
    ]
  },
  {
    week: "Week 8",
    title: "Professional Finishing Techniques",
    topics: [
      "Advanced binding techniques",
      "Bias binding for curves",
      "Hand-finished binding methods",
      "Final pressing and blocking",
      "Photography and documentation"
    ]
  }
];

const projectOptions = [
  {
    title: "Sampler Quilt",
    description: "Create a variety of intermediate blocks to build your skill set",
    size: "60\" x 72\"",
    complexity: "Progressive difficulty"
  },
  {
    title: "Modern Medallion",
    description: "Design a contemporary medallion quilt with multiple borders",
    size: "72\" x 72\"", 
    complexity: "Design-focused"
  },
  {
    title: "Curved Piecing Project",
    description: "Master curved seams with a Drunkard's Path variation",
    size: "54\" x 68\"",
    complexity: "Technique-focused"
  }
];

const skillsYoullMaster = [
  "Complex piecing techniques including Y-seams and curves",
  "Advanced color theory and fabric selection",
  "Foundation paper piecing methods",
  "Machine quilting with walking foot and free-motion",
  "Professional binding and finishing techniques",
  "Design principles and layout planning",
  "Precision cutting and measurement techniques",
  "Problem-solving and troubleshooting skills"
];

const prerequisites = [
  "Completion of beginner quilting class or equivalent experience",
  "Comfortable using rotary cutter and basic sewing machine functions",
  "Have completed at least one full quilt project",
  "Understanding of basic quilting terminology",
  "Ability to maintain 1/4\" seam allowance consistently"
];

const whoBenefits = [
  "Quilters who have completed 2-3 basic projects",
  "Students wanting to improve accuracy and speed", 
  "Those ready to tackle more complex patterns",
  "Quilters interested in machine quilting techniques",
  "Anyone wanting to develop their own design style"
];

export default function IntermediateClassesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                Skill Building
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Intermediate Quilting Classes
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to take your quilting skills to the next level? Our comprehensive 8-week intermediate program 
                introduces complex techniques, color theory, and machine quilting while building confidence in your abilities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-emerald-600" />
                  <span>8 weeks • 3 hours per session</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-emerald-600" />
                  <span>Small class size (6 students maximum)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 mr-3 text-emerald-600" />
                  <span>Choose from multiple project options</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Enroll Now - $240
                </Button>
                <Button size="lg" variant="outline">
                  Download Syllabus
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/masonryGrid/demi_flower.webp"
                  alt="Intermediate quilting techniques"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold text-emerald-600">$240</div>
                <div className="text-sm text-gray-600">Materials list provided</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Upcoming Sessions</h2>
            <p className="text-gray-600 text-center mb-12">Limited to 6 students per session for personalized instruction</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingSessions.map((session, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={session.spotsAvailable <= 2 ? "destructive" : "secondary"}>
                        {session.spotsAvailable} spots left
                      </Badge>
                      <div className="text-sm text-gray-600">{session.spotsAvailable}/{session.totalSpots} available</div>
                    </div>
                    <CardTitle className="text-lg">
                      {session.startDate} - {session.endDate}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {session.dayOfWeek}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {session.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Instructor: {session.instructor}
                      </div>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      {session.spotsAvailable <= 2 ? "Secure Your Spot" : "Enroll Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Choose Your Project</h2>
            <p className="text-gray-600 text-center mb-12">
              Select a project that matches your interests and goals for skill development
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {projectOptions.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-medium">{project.size}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Focus:</span>
                        <span className="font-medium">{project.complexity}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-full justify-center">
                      Popular Choice
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                Project selection happens during the first class based on your interests and skill goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">8-Week Learning Journey</h2>
            <p className="text-gray-600 text-center mb-12">Progressive skill building from precision techniques to creative design</p>
            
            <div className="space-y-6">
              {weeklySchedule.map((week, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-emerald-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{week.week}: {week.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {week.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
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

      {/* Skills & Prerequisites */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Advanced Skills You'll Master</h2>
                <div className="grid gap-4">
                  {skillsYoullMaster.map((skill, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                      <Star className="w-5 h-5 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-emerald-600" />
                      Prerequisites
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-emerald-600" />
                      Who Benefits Most
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {whoBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                    Class Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-sm text-gray-600">Rosebud Quilting Studio<br />572 S 690 E, Hyrum, UT 84319</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Class Size</h4>
                    <p className="text-sm text-gray-600">Maximum 6 students for detailed instruction</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Materials</h4>
                    <p className="text-sm text-gray-600">Detailed supply list provided upon enrollment. Some tools provided during class.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Support</h4>
                    <p className="text-sm text-gray-600">Email support between classes and flexible makeup sessions</p>
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/masonryGrid/feather.webp"
                  alt="Advanced quilting techniques demonstration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Quilting?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              Take the next step in your quilting journey. Develop advanced skills, explore creative techniques, 
              and join a community of passionate quilters committed to growing their craft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-50">
                <Calendar className="mr-2 h-4 w-4" />
                Secure Your Spot - $240
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                  Questions? Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
