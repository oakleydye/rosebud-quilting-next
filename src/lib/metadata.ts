import { Metadata } from "next";

export const siteConfig = {
  name: "Rosebud Quilting",
  description: "Northern Utah's #1 professional longarm quilting service in Hyrum, UT. Expert longarm quilting, custom quilt design, classes, and premium fabrics. Serving Cache Valley since 2009.",
  url: "https://rosebudquilting.com", // Update with actual domain
  ogImage: "/images/og-image.webp", // Add OG image if available
  business: {
    name: "Rosebud Quilting",
    address: "572 S 690 E, Hyrum, UT 84319",
    phone: "(801) 608-7461",
    email: "diana@rosebudquilting.com",
    hours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM", 
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 7:00 PM",
      sunday: "11:00 AM - 5:00 PM"
    },
    coordinates: {
      latitude: 41.6341,
      longitude: -111.8533
    },
    serviceArea: ["Cache Valley", "Northern Utah", "Logan", "Hyrum", "Smithfield", "Nibley", "Providence", "Millville", "Wellsville", "Preston"]
  }
};

export function generateMetadata({
  title,
  description,
  image,
  keywords,
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
  canonical?: string;
} = {}): Metadata {
  const defaultKeywords = [
    "longarm quilting northern utah",
    "professional quilting services hyrum",
    "longarm quilting cache valley", 
    "custom quilting utah",
    "quilting classes logan utah",
    "longarm quilting near me",
    "professional quilting hyrum ut",
    "quilt finishing services utah",
    "quilting shop cache valley",
    "expert longarm quilting",
    "quilting services logan",
    "t-shirt quilts utah",
    "quilt repair northern utah",
    "quilting fabric hyrum",
    "memory quilts utah",
    "wedding quilts cache valley",
    "baby quilts utah",
    "vintage quilt restoration",
    "quilting batting and backing",
    "quilting thread selection"
  ];

  const combinedKeywords = keywords ? [...defaultKeywords, ...keywords] : defaultKeywords;

  return {
    metadataBase: new URL(siteConfig.url),
    title: title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Northern Utah's Premier Longarm Quilting Service`,
    description: description || siteConfig.description,
    keywords: combinedKeywords,
    authors: [{ name: "Rosebud Quilting" }],
    creator: "Rosebud Quilting",
    category: "Quilting Services",
    classification: "Business",
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || siteConfig.url,
      title: title || `${siteConfig.name} | Northern Utah's Premier Longarm Quilting`,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Professional Longarm Quilting Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || `${siteConfig.name} | Northern Utah Longarm Quilting`,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
      creator: "@rosebudquilting", // Update if Twitter handle exists
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "US-UT",
      "geo.placename": "Hyrum, Utah",
      "geo.position": `${siteConfig.business.coordinates.latitude};${siteConfig.business.coordinates.longitude}`,
      "ICBM": `${siteConfig.business.coordinates.latitude}, ${siteConfig.business.coordinates.longitude}`,
      "business.phone": siteConfig.business.phone,
      "business.email": siteConfig.business.email,
    },
  };
}
