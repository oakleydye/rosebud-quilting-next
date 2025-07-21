import { Metadata } from "next";

export const siteConfig = {
  name: "Rosebud Quilting",
  description: "Your complete quilting destination - professional longarm services, premium fabrics, expert classes, and quilting supplies. Visit our Hyrum, UT showroom or shop online.",
  url: "https://rosebudquilting.com", // Update with actual domain
  ogImage: "/images/og-image.webp", // Add OG image if available
};

export function generateMetadata({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
} = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Quality Quilting, Affordable Prices`,
    description: description || siteConfig.description,
    keywords: ["quilting", "longarm quilting", "quilting services", "quilting fabrics", "quilting classes", "quilting shop", "Utah quilting", "Hyrum quilting", "professional quilting", "quilting supplies", "quilting tools"],
    authors: [{ name: "Rosebud Quilting" }],
    creator: "Rosebud Quilting",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.name,
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
  };
}
