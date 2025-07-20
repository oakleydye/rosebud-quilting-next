"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "@/styles/hero.css";

export default function HeroSection() {
  const [text, setText] = useState<string>(
    "Craft Your Quilting Dreams with Rosebud Quilting"
  );
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleAnimationIteration = () => {
      setText((prevText) =>
        prevText === "Craft Your Quilting Dreams with Rosebud Quilting"
          ? "Professional Quilting Services to Bring Your Creations to Life"
          : "Craft Your Quilting Dreams with Rosebud Quilting"
      );
    };

    const node = textRef.current;
    if (node) {
      node.addEventListener("animationiteration", handleAnimationIteration);

      return () => {
        node.removeEventListener(
          "animationiteration",
          handleAnimationIteration
        );
      };
    }
  }, []);

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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex justify-center">
          <Card className="w-full max-w-4xl text-center">
            <CardContent className="p-12 sm:p-16">
              <h1 
                ref={textRef}
                className="text-2xl sm:text-4xl font-bold mb-8 overflow-hidden whitespace-nowrap border-r-2 border-primary animate-typing sm:block hidden"
                style={{
                  animation: 'typing 8s steps(40, end) infinite'
                }}
              >
                {text}
              </h1>
              
              <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:hidden block">
                {text}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                At Rosebud Quilting, our mission is simple: to provide the highest
                quality quilting at the most affordable prices. We believe that
                every quilt deserves the best care, and we are committed to making
                professional quilting accessible to everyone.
              </p>

              <Button size="lg" onClick={scrollToContact}>
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
