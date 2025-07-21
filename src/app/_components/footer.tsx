import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/footer_logo.png"
                alt="Rosebud Quilting - Professional Quilting Services"
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-xl font-semibold font-amsterdam">Rosebud Quilting</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your complete quilting destination since 1999. Professional longarm quilting, premium fabrics, expert classes, and everything you need for your quilting journey in Portland, Oregon.
            </p>
            <div className="flex items-center space-x-2 text-slate-300 mb-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Mon-Sat: 9AM-6PM | Sun: 12PM-5PM</span>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <nav className="space-y-3">
              <Link href="/services" className="block text-slate-300 hover:text-white transition-colors">
                All Quilting Services
              </Link>
              <Link href="/services/longarm" className="block text-slate-300 hover:text-white transition-colors">
                Longarm Quilting
              </Link>
              <Link href="/services/custom" className="block text-slate-300 hover:text-white transition-colors">
                Custom Quilting
              </Link>
              <Link href="/services/repair" className="block text-slate-300 hover:text-white transition-colors">
                Quilt Repair & Restoration
              </Link>
              <Link href="/services/binding" className="block text-slate-300 hover:text-white transition-colors">
                Binding Services
              </Link>
            </nav>
          </div>

          {/* Shop & Classes Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Shop & Learn</h4>
            <nav className="space-y-3">
              <Link href="/shop" className="block text-slate-300 hover:text-white transition-colors">
                Quilting Shop
              </Link>
              <Link href="/shop/fabrics" className="block text-slate-300 hover:text-white transition-colors">
                Premium Fabrics
              </Link>
              <Link href="/shop/machines" className="block text-slate-300 hover:text-white transition-colors">
                Quilting Machines
              </Link>
              <Link href="/shop/notions" className="block text-slate-300 hover:text-white transition-colors">
                Tools & Notions
              </Link>
              <Link href="/classes" className="block text-slate-300 hover:text-white transition-colors">
                Quilting Classes
              </Link>
              <Link href="/classes/beginner" className="block text-slate-300 hover:text-white transition-colors">
                Beginner Classes
              </Link>
            </nav>
          </div>

          {/* Contact & Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <p className="font-medium">Visit Our Studio</p>
                  <p className="text-sm">Portland, Oregon</p>
                  <p className="text-sm">Serving Pacific Northwest</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <div>
                  <a href="tel:+15551234567" className="text-slate-300 hover:text-white transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <div>
                  <a href="mailto:info@rosebudquilting.com" className="text-slate-300 hover:text-white transition-colors">
                    info@rosebudquilting.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <nav className="space-y-2">
                <Link href="/about" className="block text-slate-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/faq" className="block text-slate-300 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
                <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with structured data */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              <p>&copy; {currentYear} Rosebud Quilting. All rights reserved.</p>
              <p className="mt-1">Professional Quilting Services | Portland, Oregon | Est. 1999</p>
            </div>
            <div className="text-slate-400 text-sm">
              <p>Serving quilters throughout the Pacific Northwest with quality and care.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rosebud Quilting",
            "description": "Professional quilting services, premium fabrics, quilting classes, and supplies in Portland, Oregon. Specializing in longarm quilting, custom designs, and quilt restoration since 1999.",
            "url": "https://www.rosebudquilting.com",
            "telephone": "+15551234567",
            "email": "info@rosebudquilting.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Portland",
              "addressRegion": "OR",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "45.5152",
              "longitude": "-122.6784"
            },
            "openingHours": [
              "Mo-Sa 09:00-18:00",
              "Su 12:00-17:00"
            ],
            "servesCuisine": [],
            "priceRange": "$$",
            "acceptedPaymentMethod": [
              "Cash",
              "Credit Card"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Quilting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Longarm Quilting",
                    "description": "Professional longarm quilting services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Quilting",
                    "description": "Personalized quilting designs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Quilting Classes",
                    "description": "Learn quilting from beginner to advanced levels"
                  }
                }
              ]
            }
          })
        }}
      />
    </footer>
  );
}