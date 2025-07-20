"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "About Us", href: "#about" },
  { name: "Our Work", href: "#work" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

const scrollToSection = (sectionName: string) => {
  const sectionElement = document.getElementById(sectionName);
  const offset = 128;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4">
          <nav className="flex h-14 items-center justify-between rounded-full bg-background/80 px-6 backdrop-blur-md border border-border">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Rosebud Quilting"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-bold text-lg">Rosebud Quilting</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="text-sm font-medium"
                >
                  {item.name}
                </Button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/footer_logo.png"
                        alt="Rosebud Quilting"
                        width={200}
                        height={80}
                      />
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    Navigate to different sections of our site
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      onClick={() => {
                        scrollToSection(item.href.substring(1));
                        setIsOpen(false);
                      }}
                      className="justify-start"
                    >
                      {item.name}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
