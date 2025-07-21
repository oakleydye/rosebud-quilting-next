import { Fragment } from "react";
import HeroSection from "./_components/hero";
import AboutSection from "./_components/about";
import ServicesOverview from "./_components/services_overview";
import ShopOverview from "./_components/shop_overview";
import ClassesOverview from "./_components/classes_overview";
import OurWork from "./_components/work";
import ContactSection from "./_components/contact";

export default function Homepage() {
  return (
    <Fragment>
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesOverview />
      </div>
      <div id="shop">
        <ShopOverview />
      </div>
      <div id="classes">
        <ClassesOverview />
      </div>
      <div id="work">
        <OurWork />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </Fragment>
  );
}
