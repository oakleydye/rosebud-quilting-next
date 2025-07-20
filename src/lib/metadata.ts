import { Metadata } from "next";

export const siteConfig = {
  name: "Rosebud Quilting",
  description: "Rosebud quilting provides high quality quilting services for your quilt tops. We offer edge to edge, custom, and heirloom quilting services.",
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
    keywords: ["quilting", "long arm quilting", "custom quilting", "quilt services", "Utah quilting", "professional quilting"],
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
