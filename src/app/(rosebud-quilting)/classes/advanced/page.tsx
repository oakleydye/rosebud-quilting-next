import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, BookOpen, ArrowRight, CheckCircle, MapPin, Target, Award, Palette } from "lucide-react";

export const metadata = generateMetadata({
  title: "Advanced Quilting Classes - Master Complex Techniques",
  description: "Master advanced quilting techniques and artistic expression. Learn paper piecing, appliqué, free-motion quilting, and develop your personal design style in our expert-level program.",
});

const upcomingSessions = [
  {
    startDate: "April 5, 2025",
    endDate: "June 14, 2025",
    dayOfWeek: "Saturdays",
    time: "1:00 PM - 5:00 PM",
    spotsAvailable: 1,
    totalSpots: 4,
    instructor: "Diana Dye"
  },
  {
    startDate: "August 9, 2025", 
    endDate: "October 18, 2025",
    dayOfWeek: "Saturdays",
    time: "1:00 PM - 5:00 PM",
    spotsAvailable: 3,
    totalSpots: 4,
    instructor: "Diana Dye"
  },
  {
    startDate: "November 8, 2025",
    endDate: "January 17, 2026", 
    dayOfWeek: "Saturdays",
    time: "1:00 PM - 5:00 PM",
    spotsAvailable: 4,
    totalSpots: 4,
    instructor: "Diana Dye"
  }
];

const weeklySchedule = [
  {
    week: "Week 1",
    title: "Advanced Design Principles & Portfolio Planning",
    topics: [
      "Contemporary quilt design analysis",
      "Developing your personal artistic voice", 
      "Portfolio project planning and selection",
      "Advanced color theory and value studies",
      "Design software and digital tools introduction"
    ]
  },
  {
    week: "Week 2", 
    title: "Foundation Paper Piecing Mastery",
    topics: [
      "Complex foundation patterns and design",
      "Multi-section paper piecing projects",
      "Creating your own foundation patterns",
      "Precision techniques and troubleshooting",
      "Incorporating paper piecing into larger designs"
    ]
  },
  {
    week: "Week 3",
    title: "Advanced Appliqué Techniques",
    topics: [
      "Hand appliqué mastery and invisible stitches", 
      "Machine appliqué with decorative elements",
      "Raw edge and fusible appliqué methods",
      "Dimensional appliqué and layering",
      "Creating appliqué templates and patterns"
    ]
  },
  {
    week: "Week 4",
    title: "Curved Piecing & Complex Construction",
    topics: [
      "Advanced curved piecing techniques",
      "Double Wedding Ring and similar patterns",
      "Set-in seams and complex intersections",
      "Managing bias edges and distortion",
      "Alternative construction methods"
    ]
  },
  {
    week: "Week 5",
    title: "Free-Motion Quilting Artistry",
    topics: [
      "Advanced free-motion patterns and motifs",
      "Creating texture and dimension with quilting",
      "Thread painting and artistic effects",
      "Planning complex quilting designs",
      "Combining different quilting styles"
    ]
  },
  {
    week: "Week 6",
    title: "Mixed Media & Embellishment Techniques",
    topics: [
      "Incorporating non-traditional materials",
      "Beading and dimensional embellishments", 
      "Paint and dye techniques on fabric",
      "Photo transfer and printing methods",
      "Balancing embellishments with quilting"
    ]
  },
  {
    week: "Week 7",
    title: "Advanced Finishing & Edge Treatments",
    topics: [
      "Facing and alternative edge finishes",
      "Piped edges and decorative bindings",
      "Shaped quilts and irregular edges",
      "Hanging systems for art quilts",
      "Documentation and artist statements"
    ]
  },
  {
    week: "Week 8",
    title: "Critique & Exhibition Preparation",
    topics: [
      "Portfolio review and constructive critique",
      "Photography techniques for quilts",
      "Preparing pieces for exhibition",
      "Artist statements and documentation",
      "Planning future artistic development"
    ]
  },
  {
    week: "Weeks 9-10",
    title: "Independent Project Development",
    topics: [
      "One-on-one mentoring sessions",
      "Advanced technique refinement",
      "Personal project completion",
      "Final critique and celebration",
      "Career and exhibition guidance"
    ]
  }
];

const portfolioProjects = [
  {
    title: "Art Quilt Series",
    description: "Create 2-3 related pieces exploring a personal theme or technique",
    focus: "Artistic expression and cohesive body of work",
    timeframe: "Full 10-week program"
  },
  {
    title: "Traditional Pattern Innovation",
    description: "Take a classic pattern and reimagine it with contemporary techniques",
    focus: "Technical mastery with creative interpretation",
    timeframe: "6-8 weeks with refinement period"
  },
  {
    title: "Mixed Media Exploration", 
    description: "Combine quilting with other media for dimensional artwork",
    focus: "Experimental techniques and material exploration",
    timeframe: "Full program with multiple experiments"
  },
  {
    title: "Publication-Ready Piece",
    description: "Create a quilt suitable for magazine submission or exhibition",
    focus: "Professional finishing and documentation",
    timeframe: "8-10 weeks with professional photography"
  }
];

const expertSkills = [
  "Foundation paper piecing pattern creation and modification",
  "Advanced appliqué techniques including dimensional work",
  "Complex free-motion quilting and thread painting",
  "Mixed media integration and embellishment mastery",
  "Personal design development and artistic voice",
  "Professional finishing techniques and edge treatments",
  "Portfolio development and exhibition preparation",
  "Teaching and pattern writing skills",
  "Advanced problem-solving and technique adaptation",
  "Color theory application in complex compositions"
];

const prerequisites = [
  "Completion of intermediate quilting class or equivalent advanced experience",
  "Proficiency with complex piecing techniques and machine quilting",
  "Portfolio of at least 5 completed quilts demonstrating skill progression",
  "Comfort with both hand and machine sewing techniques",
  "Strong foundation in color theory and design principles",
  "Ability to work independently and self-direct learning",
  "Commitment to completing portfolio project outside of class time"
];

const careerBenefits = [
  "Develop skills for teaching quilting classes",
  "Create exhibition-quality pieces for shows and galleries", 
  "Build portfolio for pattern design and publication",
  "Establish foundation for quilting-related business",
  "Connect with professional quilting community",
  "Gain expertise for guild leadership roles"
];

export default function AdvancedClassesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                Expert Level
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Advanced Quilting Mastery
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master the most complex quilting techniques and develop your unique artistic voice. Our intensive 10-week 
                advanced program combines technical excellence with creative exploration in an intimate learning environment.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-purple-600" />
                  <span>10 weeks • 4 hours per session</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-purple-600" />
                  <span>Exclusive small group (4 students maximum)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="w-5 h-5 mr-3 text-purple-600" />
                  <span>Portfolio development & mentoring</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Apply Now - $320
                </Button>
                <Button size="lg" variant="outline">
                  View Prerequisites
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/masonryGrid/feather.webp"
                  alt="Advanced quilting artistry and techniques"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold text-purple-600">$320</div>
                <div className="text-sm text-gray-600">Includes mentoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Notice */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-800">Application Required</h3>
            </div>
            <p className="text-yellow-700">
              Due to the intensive nature of this program, enrollment requires an application with portfolio review. 
              We want to ensure all students are prepared for the advanced curriculum and will benefit most from the experience.
            </p>
            <Button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white">
              Download Application
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Upcoming Sessions</h2>
            <p className="text-gray-600 text-center mb-12">Limited to 4 students per session for intensive mentoring</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingSessions.map((session, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-purple-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={session.spotsAvailable <= 1 ? "destructive" : "secondary"}>
                        {session.spotsAvailable} spot{session.spotsAvailable !== 1 ? 's' : ''} left
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
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      {session.spotsAvailable <= 1 ? "Apply for Last Spot" : "Apply Now"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Portfolio Project Options</h2>
            <p className="text-gray-600 text-center mb-12">
              Choose a focused project path that aligns with your artistic goals and career aspirations
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Palette className="w-5 h-5 mr-2 text-purple-600" />
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-900">Focus Area:</span>
                        <p className="text-sm text-gray-600">{project.focus}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-900">Timeline:</span>
                        <p className="text-sm text-gray-600">{project.timeframe}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                Portfolio project selection happens during application process based on your goals and experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Comprehensive 10-Week Program</h2>
            <p className="text-gray-600 text-center mb-12">Intensive skill development with personalized mentoring</p>
            
            <div className="space-y-6">
              {weeklySchedule.map((week, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1 <= 8 ? index + 1 : '9-10'}
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
                          <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
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

      {/* Expert Skills & Prerequisites */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Expert-Level Skills You'll Master</h2>
                <div className="space-y-4">
                  {expertSkills.map((skill, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                      <Star className="w-5 h-5 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-purple-600" />
                      Prerequisites & Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2 text-purple-600" />
                      Career & Professional Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {careerBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
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

      {/* Program Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                    Program Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-sm text-gray-600">Rosebud Quilting Studio<br />572 S 690 E, Hyrum, UT 84319</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Group Size</h4>
                    <p className="text-sm text-gray-600">Maximum 4 students for intensive, personalized instruction</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Materials</h4>
                    <p className="text-sm text-gray-600">Specialized supply list provided. Advanced tools and equipment available for use.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Mentoring</h4>
                    <p className="text-sm text-gray-600">One-on-one guidance sessions included, plus email support throughout the program</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Certificate</h4>
                    <p className="text-sm text-gray-600">Completion certificate with portfolio review and recommendations</p>
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/masonryGrid/studio.webp"
                  alt="Advanced quilting studio environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Master Your Craft?
            </h2>
            <p className="text-purple-100 text-lg mb-8 leading-relaxed">
              Join an exclusive group of dedicated quilters committed to reaching the highest levels of artistry and technique. 
              This intensive program will challenge you, inspire you, and elevate your quilting to professional standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-50">
                <Award className="mr-2 h-4 w-4" />
                Apply Now - $320
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
