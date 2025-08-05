"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { imageData } from "@/lib/masonry_images";

export default function OurWork() {
  const [numImagesToShow, setNumImagesToShow] = useState(6);

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          Our Work
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageData.slice(0, numImagesToShow).map((image, index) => (
            <Card key={image.src} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover transition-transform hover:scale-105"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {numImagesToShow < imageData.length && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setNumImagesToShow(imageData.length)}
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
