import { generateMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, BookOpen, ArrowRight, CheckCircle, MapPin, Target, Award, Zap, Heart } from "lucide-react";

export const metadata = generateMetadata({
  title: "Quilting Workshops - Special Intensive Learning Experiences",
  description: "Join our special quilting workshops for intensive, focused learning. One-day and weekend intensives covering specialized techniques, guest instructors, and unique projects.",
});

const upcomingWorkshops = [
  {
    id: "modern-color-theory",
    title: "Modern Color Theory & Fabric Selection",
    instructor: "Sarah Mitchell",
    guestInstructor: true,
    date: "February 28, 2025",
    time: "10:00 AM - 4:00 PM",
    duration: "6 hours",
    price: 95,
    originalPrice: 120,
    maxStudents: 12,
    currentEnrollment: 9,
    level: "All Levels",
    image: "/images/masonryGrid/christmas_angle.webp",
    description: "Explore contemporary color combinations and create stunning modern quilts using advanced color theory principles.",
    detailedDescription: "Dive deep into the science and art of color in quilting. Learn to create dynamic color palettes, understand value relationships, and use color to create movement and focal points in your quilts.",
    whatYoullLearn: [
      "Color wheel applications beyond the basics",
      "Value studies and contrast techniques",
      "Creating mood and emotion with color",
      "Fabric audition techniques",
      "Digital tools for color planning",
      "Modern palette development"
    ],
    includes: [
      "Color theory workbook and reference materials",
      "Fabric samples for exercises",
      "Digital color tools tutorial",
      "Take-home color planning templates",
      "Light refreshments and lunch"
    ],
    featured: true
  },
  {
    id: "hand-applique",
    title: "Traditional Hand Appliqué Mastery",
    instructor: "Maria Rodriguez",
    guestInstructor: true,
    date: "March 8, 2025",
    time: "9:00 AM - 3:00 PM",
    duration: "6 hours",
    price: 85,
    maxStudents: 10,
    currentEnrollment: 4,
    level: "Intermediate",
    image: "/images/masonryGrid/leaves.webp",
    description: "Master the art of traditional hand appliqué with expert techniques for invisible stitches and beautiful results.",
    detailedDescription: "Learn time-honored hand appliqué techniques that create heirloom-quality quilts. Focus on precision, beauty, and the meditative aspects of hand stitching.",
    whatYoullLearn: [
      "Needle-turn appliqué techniques",
      "Invisible stitch methods",
      "Template making and placement",
      "Working with curves and points",
      "Thread selection and preparation",
      "Finishing techniques"
    ],
    includes: [
      "Appliqué template set",
      "High-quality appliqué fabrics",
      "Specialty needles and threads",
      "Reference guide and patterns",
      "Light refreshments"
    ]
  },
  {
    id: "longarm-demo",
    title: "Longarm Quilting Demonstration & Hands-On",
    instructor: "Jennifer Thompson",
    guestInstructor: false,
    date: "March 15, 2025",
    time: "1:00 PM - 4:00 PM",
    duration: "3 hours",
    price: 45,
    maxStudents: 15,
    currentEnrollment: 7,
    level: "All Levels",
    image: "/images/masonryGrid/studio.webp",
    description: "Experience professional longarm quilting up close and get hands-on time with our quilting machines.",
    detailedDescription: "Perfect introduction to longarm quilting or refresher for those considering professional quilting services. See the process from setup to finished quilt.",
    whatYoullLearn: [
      "Longarm machine operation basics",
      "Quilting design selection",
      "Thread and tension considerations",
      "Pricing and timing for projects",
      "When to choose longarm vs. home quilting",
      "Care and maintenance basics"
    ],
    includes: [
      "Hands-on machine time",
      "Sample quilt top for practice",
      "Resource list for longarm services",
      "Refreshments"
    ]
  },
  {
    id: "foundation-paper-piecing",
    title: "Foundation Paper Piecing Intensive",
    instructor: "Diana Dye",
    guestInstructor: false,
    date: "April 12, 2025",
    time: "10:00 AM - 5:00 PM",
    duration: "7 hours",
    price: 110,
    maxStudents: 8,
    currentEnrollment: 5,
    level: "Intermediate to Advanced",
    image: "/images/masonryGrid/brex_angle.webp",
    description: "Master foundation paper piecing techniques with complex patterns and professional finishing methods.",
    detailedDescription: "An intensive deep-dive into foundation paper piecing, from basic concepts to complex multi-section patterns. Perfect for quilters ready to tackle challenging designs.",
    whatYoullLearn: [
      "Multi-section paper piecing",
      "Complex pattern reading",
      "Precision techniques and troubleshooting",
      "Creating your own foundations",
      "Advanced joining methods",
      "Professional finishing"
    ],
    includes: [
      "Multiple foundation patterns",
      "Specialty paper piecing tools",
      "Fabric selection for projects",
      "Reference materials",
      "Lunch and refreshments"
    ]
  },
  {
    id: "free-motion-weekend",
    title: "Free-Motion Quilting Weekend Retreat",
    instructor: "Diana Dye & Guest Artists",
    guestInstructor: true,
    date: "May 3-4, 2025",
    time: "Saturday 9 AM - Sunday 4 PM",
    duration: "2 days",
    price: 275,
    originalPrice: 320,
    maxStudents: 10,
    currentEnrollment: 3,
    level: "All Levels",
    image: "/images/masonryGrid/feather.webp",
    description: "Immersive two-day retreat focusing on free-motion quilting techniques from basic to advanced artistic applications.",
    detailedDescription: "A comprehensive weekend retreat combining instruction, practice time, and creative exploration. Includes guest artists demonstrating advanced techniques.",
    whatYoullLearn: [
      "Basic to advanced free-motion techniques",
      "Artistic design development",
      "Thread painting methods",
      "Texture creation techniques",
      "Machine setup and maintenance",
      "Personal style development"
    ],
    includes: [
      "All practice materials",
      "Specialty threads and tools",
      "Meals for both days",
      "Take-home reference materials",
      "Guest artist demonstrations",
      "Retreat goodie bag"
    ],
    featured: true
  },
  {
    id: "quilt-photography",
    title: "Quilt Photography & Documentation",
    instructor: "Professional Photographer + Diana Dye",
    guestInstructor: true,
    date: "June 14, 2025",
    time: "2:00 PM - 6:00 PM",
    duration: "4 hours",
    price: 65,
    maxStudents: 12,
    currentEnrollment: 2,
    level: "All Levels",
    image: "/images/masonryGrid/window.webp",
    description: "Learn to photograph your quilts like a professional for portfolios, social media, and documentation.",
    detailedDescription: "Essential skills for any quilter who wants to showcase their work professionally. Learn lighting, composition, and editing techniques.",
    whatYoullLearn: [
      "Professional lighting setup",
      "Composition and styling",
      "Equipment recommendations",
      "Basic photo editing",
      "Social media optimization",
      "Portfolio preparation"
    ],
    includes: [
      "Photography equipment hands-on",
      "Editing software tutorial",
      "Resource list for equipment",
      "Digital templates",
      "Refreshments"
    ]
  }
];

const workshopCategories = [
  {
    title: "Technique Intensives",
    description: "Deep-dive workshops focusing on specific quilting techniques",
    icon: Target,
    workshops: ["foundation-paper-piecing", "hand-applique", "free-motion-weekend"]
  },
  {
    title: "Design & Color",
    description: "Workshops focused on design principles, color theory, and artistic development", 
    icon: Heart,
    workshops: ["modern-color-theory", "quilt-photography"]
  },
  {
    title: "Equipment & Process",
    description: "Learn about quilting equipment, processes, and professional techniques",
    icon: Zap,
    workshops: ["longarm-demo"]
  }
];

const workshopBenefits = [
  "Intensive, focused learning in a single day or weekend",
  "Expert instruction from specialized guest teachers",
  "Small class sizes for personalized attention",
  "All materials and tools provided",
  "Take-home resources and references",
  "Network with other passionate quilters",
  "Try new techniques without long-term commitment",
  "Professional development opportunities"
];

const faqs = [
  {
    question: "What skill level do I need for workshops?",
    answer: "Each workshop lists its recommended skill level. 'All Levels' workshops accommodate beginners through advanced quilters, while 'Intermediate' workshops assume basic quilting knowledge and experience."
  },
  {
    question: "Are materials included in the workshop fee?",
    answer: "Most workshops include all necessary materials, tools, and supplies. Check the 'What's Included' section for each workshop for specific details."
  },
  {
    question: "What if I need to cancel my registration?",
    answer: "Cancellations made 7+ days before the workshop receive a full refund. Cancellations 3-6 days before receive a 50% refund. No refunds for cancellations less than 3 days before the workshop."
  },
  {
    question: "Do you offer private group workshops?",
    answer: "Yes! We can arrange private workshops for guilds, groups of 6 or more, or corporate team-building events. Contact us to discuss your needs and pricing."
  },
  {
    question: "What should I bring to a workshop?",
    answer: "Unless specified otherwise, just bring yourself and enthusiasm to learn! We provide all tools, materials, and supplies. Some workshops may have optional items you can bring from home."
  }
];

export default function WorkshopsPage() {
  const featuredWorkshops = upcomingWorkshops.filter(w => w.featured);
  const regularWorkshops = upcomingWorkshops.filter(w => !w.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
              Intensive Learning
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Quilting Workshops & Intensives
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Accelerate your quilting skills with focused, intensive workshops. Learn specialized techniques, 
              work with expert guest instructors, and dive deep into specific areas of quilting artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Calendar className="mr-2 h-4 w-4" />
                Browse Workshops
              </Button>
              <Button size="lg" variant="outline">
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      {featuredWorkshops.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">Featured Workshops</h2>
              <p className="text-gray-600 text-center mb-12">Don't miss these special intensive learning opportunities</p>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-amber-200">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={workshop.image}
                        alt={workshop.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                        Featured
                      </Badge>
                      {workshop.originalPrice && (
                        <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                          Save ${workshop.originalPrice - workshop.price}
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{workshop.level}</Badge>
                        <div className="text-sm text-gray-600">
                          {workshop.maxStudents - workshop.currentEnrollment} spots left
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{workshop.title}</CardTitle>
                      <CardDescription className="text-base">{workshop.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {workshop.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {workshop.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Max {workshop.maxStudents} students
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          {workshop.instructor}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-amber-600">${workshop.price}</span>
                          {workshop.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">${workshop.originalPrice}</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {workshop.currentEnrollment}/{workshop.maxStudents} enrolled
                        </div>
                      </div>

                      <Button className="w-full bg-amber-600 hover:bg-amber-700 mb-3">
                        Register Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Workshop Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Workshop Categories</h2>
            <p className="text-gray-600 text-center mb-12">Find the perfect workshop for your learning goals</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {workshopCategories.map((category, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <category.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-amber-600">
                      {category.workshops.length} workshop{category.workshops.length !== 1 ? 's' : ''} available
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Workshops */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">All Upcoming Workshops</h2>
            <p className="text-gray-600 text-center mb-12">Comprehensive list of our upcoming intensive learning opportunities</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularWorkshops.map((workshop) => (
                <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
                      {workshop.level}
                    </Badge>
                    {workshop.guestInstructor && (
                      <Badge className="absolute top-3 left-3 bg-amber-600 text-white">
                        Guest Instructor
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{workshop.title}</CardTitle>
                    <CardDescription className="text-sm">{workshop.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{workshop.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{workshop.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instructor:</span>
                        <span className="font-medium text-xs">{workshop.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Available:</span>
                        <span className="font-medium">
                          {workshop.maxStudents - workshop.currentEnrollment} of {workshop.maxStudents}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-amber-600">${workshop.price}</span>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 mb-2">
                      Register
                    </Button>
                    <Button variant="ghost" className="w-full text-sm">
                      View Full Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Why Choose Our Workshops?</h2>
                <p className="text-gray-600 mb-8">
                  Our workshops offer intensive, focused learning experiences that complement our regular class offerings. 
                  Perfect for busy quilters who want to learn new skills quickly or dive deep into specific techniques.
                </p>
                <div className="grid gap-4">
                  {workshopBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/masonryGrid/brex_full.webp"
                  alt="Workshop learning environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-center mb-12">Get answers to common workshop questions</p>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Learning?
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Join fellow quilters for intensive, hands-on learning experiences. Our workshops offer the perfect opportunity 
              to master new techniques, get inspired, and connect with our vibrant quilting community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-50">
                <Calendar className="mr-2 h-4 w-4" />
                Register for a Workshop
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                  Custom Group Workshop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
