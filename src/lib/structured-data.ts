import { siteConfig } from './metadata';

export const generateArticleSchema = ({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image?: string | null;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": siteConfig.business.name,
    "url": siteConfig.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/logo.png`
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  },
  ...(image && {
    "image": {
      "@type": "ImageObject",
      "url": image
    }
  })
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.business.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "telephone": siteConfig.business.phone,
  "email": siteConfig.business.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "572 S 690 E",
    "addressLocality": "Hyrum",
    "addressRegion": "UT",
    "postalCode": "84319",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": siteConfig.business.coordinates.latitude,
    "longitude": siteConfig.business.coordinates.longitude
  },
  "openingHours": [
    "Mo-Sa 09:00-19:00",
    "Su 11:00-17:00"
  ],
  "paymentAccepted": "Cash, Check, Credit Card, Debit Card",
  "priceRange": "$$",
  "areaServed": {
    "@type": "State",
    "name": "Utah",
    "containsPlace": [
      {
        "@type": "City",
        "name": "Hyrum"
      },
      {
        "@type": "City", 
        "name": "Logan"
      },
      {
        "@type": "City",
        "name": "Smithfield"
      },
      {
        "@type": "City",
        "name": "Providence"
      },
      {
        "@type": "City",
        "name": "Nibley"
      }
    ]
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.business.coordinates.latitude,
      "longitude": siteConfig.business.coordinates.longitude
    },
    "geoRadius": "50000"
  }
};

export const quiltingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": siteConfig.business.name,
  "description": "Professional longarm quilting services, custom quilt design, and quilting education in Northern Utah",
  "url": siteConfig.url,
  "telephone": siteConfig.business.phone,
  "email": siteConfig.business.email,
  "address": {
    "@type": "PostalAddress", 
    "streetAddress": "572 S 690 E",
    "addressLocality": "Hyrum",
    "addressRegion": "UT",
    "postalCode": "84319",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": siteConfig.business.coordinates.latitude,
    "longitude": siteConfig.business.coordinates.longitude
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Quilting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Longarm Quilting",
          "description": "Professional longarm quilting with edge-to-edge and custom patterns"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "0.015",
          "priceCurrency": "USD",
          "unitText": "per square inch"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Quilt Design",
          "description": "Personalized quilt designs for special occasions and memory quilts"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "200",
          "priceCurrency": "USD",
          "unitText": "starting price"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Quilt Binding",
          "description": "Professional quilt binding and finishing services"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1.50",
          "priceCurrency": "USD",
          "unitText": "per linear foot"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quilt Repair & Restoration", 
          "description": "Expert restoration services for vintage and damaged quilts"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "50",
          "priceCurrency": "USD",
          "unitText": "per hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "EducationEvent",
          "name": "Quilting Classes",
          "description": "Quilting classes for all skill levels from beginner to advanced"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "180",
          "priceCurrency": "USD",
          "unitText": "per 6-week course"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5"
  },
  "openingHours": [
    "Mo-Sa 09:00-19:00",
    "Su 11:00-17:00"
  ],
  "areaServed": siteConfig.business.serviceArea
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.business.name,
  "url": siteConfig.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbListSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  price?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": siteConfig.business.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "572 S 690 E",
      "addressLocality": "Hyrum", 
      "addressRegion": "UT",
      "postalCode": "84319",
      "addressCountry": "US"
    },
    "telephone": siteConfig.business.phone
  },
  "areaServed": siteConfig.business.serviceArea,
  "url": service.url,
  ...(service.price && {
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "USD"
    }
  })
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
