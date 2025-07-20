import { Fragment } from "react";
import HeroSection from "./_components/hero";
import AboutSection from "./_components/about";
import OurWork from "./_components/work";
import FaqSection from "./_components/faq";
import ContactSection from "./_components/contact";

export default function Homepage() {
  return (
    <Fragment>
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="work">
        <OurWork />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </Fragment>
  );
}
