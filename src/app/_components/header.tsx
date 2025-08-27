"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, ChevronDown, ChevronRight, ShoppingCart } from "lucide-react";
import { useAtom } from 'jotai';
import { cartItemCountAtom, cartOpenAtom, toggleCartAtom } from '@/lib/store/cart';
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "All Services",
        href: "/services",
        description: "Explore all our quilting services",
      },
      {
        name: "Longarm Quilting",
        href: "/services/longarm",
        description: "Professional longarm quilting services",
      },
      {
        name: "Made to Order Quilts",
        href: "/services/made-to-order",
        description: "Personalized quilt commissions",
      },
      {
        name: "Quilt Repair",
        href: "/services/repair",
        description: "Expert quilt restoration and repair",
      },
      {
        name: "Binding Services",
        href: "/services/binding",
        description: "Professional quilt binding and finishing",
      },
    ],
  },
  // {
  //   name: "Shop",
  //   href: "/shop",
  //   children: [
  //     {
  //       name: "All Products",
  //       href: "/shop",
  //       description: "Browse our complete quilting shop",
  //     },
  //     {
  //       name: "Fabrics",
  //       href: "/shop/fabrics",
  //       description: "Premium quilting fabrics and collections",
  //     },
  //     {
  //       name: "Notions & Tools",
  //       href: "/shop/notions",
  //       description: "Essential quilting tools and supplies",
  //     },
  //     {
  //       name: "Patterns",
  //       href: "/shop/patterns",
  //       description: "Quilt patterns for all skill levels",
  //     },
  //     {
  //       name: "Kits",
  //       href: "/shop/kits",
  //       description: "Complete quilting project kits",
  //     },
  //   ],
  // },
  {
    name: "Classes",
    href: "/classes",
    children: [
      {
        name: "All Classes",
        href: "/classes",
        description: "Explore all our quilting classes",
      },
      {
        name: "Beginner Classes",
        href: "/classes/beginner",
        description: "Learn the fundamentals of quilting",
      },
      {
        name: "Intermediate",
        href: "/classes/intermediate",
        description: "Build on your quilting skills",
      },
      {
        name: "Advanced Techniques",
        href: "/classes/advanced",
        description: "Master complex quilting methods",
      },
      {
        name: "Workshops",
        href: "/classes/workshops",
        description: "Special events and guest instructors",
      },
    ],
  },
  {
    name: "More",
    href: "#",
    children: [
      {
        name: "About",
        href: "/about",
        description: "Learn about Rosebud Quilting's story",
      },
      {
        name: "Gallery",
        href: "/gallery",
        description: "View our quilting portfolio and projects",
      },
      {
        name: "FAQ",
        href: "/faq",
        description: "Frequently asked questions",
      },
    ],
  },
];

// Mobile Navigation Item Component
function MobileNavItem({ 
  item, 
  isOpen, 
  onToggle, 
  onClose 
}: { 
  item: any; 
  isOpen?: boolean;
  onToggle?: () => void;
  onClose: () => void; 
}) {
  return (
    <div className="space-y-1">
      {item.children ? (
        <>
          <button
            onClick={onToggle}
            className="flex w-full items-center justify-between rounded-md p-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
          >
            {item.name}
            <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </button>
          {isOpen && (
            <div className="pl-4 space-y-1">
              {item.children.map((child: any) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className="block rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={onClose}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          className="block rounded-md p-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          onClick={onClose}
        >
          {item.name}
        </Link>
      )}
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [itemCount] = useAtom(cartItemCountAtom);
  const [, toggleCart] = useAtom(toggleCartAtom);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4">
          <nav className="flex h-16 items-center justify-between rounded-full bg-background/90 px-6 backdrop-blur-md border border-border shadow-lg">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Rosebud Quilting"
                width={225}
                height={100}
              />
            </Link>

            {/* Right Side Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Desktop Navigation */}
              <NavigationMenu>
                <NavigationMenuList>
                  {navigation.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger className="bg-transparent">
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.children.map((child) => (
                                <ListItem
                                  key={child.name}
                                  title={child.name}
                                  href={child.href}
                                >
                                  {child.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        >
                          {item.name}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Contact CTA Button */}
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white">
                  Contact Us
                </Button>
              </Link>

              {/* Cart Icon */}
              {/* <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCart()}
                className="relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
                <span className="sr-only">Shopping cart</span>
              </Button> */}
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[350px] flex flex-col p-6">
                <SheetHeader className="flex-shrink-0 pb-4">
                  <SheetTitle>
                    <div className="flex items-center space-x-2">
                      <h1>Rosebud Quilting</h1>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="text-xs">
                    Your complete quilting destination
                  </SheetDescription>
                </SheetHeader>
                
                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto py-2 space-y-2 px-1">
                  {navigation.map((item) => (
                    <MobileNavItem 
                      key={item.name} 
                      item={item} 
                      isOpen={openSubmenu === item.name}
                      onToggle={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                      onClose={() => setIsOpen(false)} 
                    />
                  ))}
                </div>

                {/* Fixed bottom actions */}
                <div className="flex-shrink-0 border-t pt-4 mt-4 space-y-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white">
                      Contact Us
                    </Button>
                  </Link>

                  {/* <Button
                    variant="outline"
                    onClick={() => {
                      toggleCart();
                      setIsOpen(false);
                    }}
                    className="w-full justify-start mt-4"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Cart
                    {itemCount > 0 && (
                      <span className="ml-auto bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {itemCount}
                      </span>
                    )}
                  </Button> */}
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}

const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
