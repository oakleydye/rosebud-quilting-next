"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "@/styles/hero.css";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const texts = [
    "Services • Shop • Classes • Community",
    "Your Complete Quilting Destination",
  ];

  useLayoutEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayText(texts[currentTextIndex]);
      return;
    }

    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentTextIndex, isTyping]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: "url(/images/hero2.webp)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
        <div className="flex justify-center">
          <Card className="w-full max-w-4xl text-center">
            <CardContent className="p-12 sm:p-16">
              <h1 className="text-2xl sm:text-4xl mb-8">
                {isMobile ? (
                  <span>{displayText}</span>
                ) : (
                  <span className="typing-cursor">{displayText}</span>
                )}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Welcome to Rosebud Quilting – your one-stop destination for
                professional quilting services, premium fabrics, expert classes,
                and everything you need for your quilting journey. From longarm
                quilting to learning new techniques, we're here to support your
                passion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500"
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-rose-600 text-rose-600 hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 hover:text-white"
                  onClick={() => {
                    const servicesSection = document.getElementById("services");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
