import { Fragment } from "react";
import HeroSection from "./_components/hero";
import AboutSection from "./_components/about";
import ServicesOverview from "./_components/services_overview";
// import ShopOverview from "./_components/shop_overview";
import ClassesOverview from "./_components/classes_overview";
import ContactSection from "./_components/contact";
import BlogOverview from "./_components/blog_overview";
import { localBusinessSchema, quiltingBusinessSchema, websiteSchema } from "@/lib/structured-data";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Northern Utah's Premier Longarm Quilting Service",
  description: "Professional longarm quilting in Hyrum, UT. Expert custom quilting, T-shirt quilts, quilt repair, and classes. Serving Cache Valley with 15+ years experience. Call (801) 608-7461.",
  keywords: [
    "longarm quilting northern utah", 
    "professional quilting hyrum utah",
    "longarm quilting cache valley",
    "quilting services logan utah",
    "custom quilting utah",
    "t-shirt quilts utah",
    "quilt repair cache valley",
    "quilting classes hyrum"
  ]
});

export default function Homepage() {
  const jsonLd = [localBusinessSchema, quiltingBusinessSchema, websiteSchema];

  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesOverview />
      </div>
      {/* <div id="shop">
        <ShopOverview />
      </div> */}
      <div id="classes">
        <ClassesOverview />
      </div>
      <div id="blog">
        <BlogOverview />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </Fragment>
  );
}
