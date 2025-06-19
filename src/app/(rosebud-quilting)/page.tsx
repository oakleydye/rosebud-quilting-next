'use client';

import { Fragment } from "react";
import CustomAppBar from "../_components/custom_app_bar";
import HeroSection from "./_components/hero";
import AboutSection from "./_components/about";
import OurWork from "./_components/work";
import FaqSection from "./_components/faq";
import ContactSection from "./_components/contact";
import Footer from "../_components/footer";

const Homepage: React.FC = () => {
  return (
    <Fragment>
      <CustomAppBar />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <div id="work"><OurWork /></div>
      <div id="faq"><FaqSection /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
