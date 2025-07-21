"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { imageData } from "@/lib/masonry_images";

// Enhanced image data with categories and descriptions
const galleryImages = imageData.map((image, index) => ({
  ...image,
  id: index + 1,
  category: getImageCategory(image.src),
  title: getImageTitle(image.src),
  description: getImageDescription(image.src),
}));

function getImageCategory(src: string): string {
  if (src.includes('christmas')) return 'Holiday';
  if (src.includes('brex')) return 'Modern';
  if (src.includes('feather') || src.includes('leaves')) return 'Nature';
  if (src.includes('studio') || src.includes('window')) return 'Studio';
  return 'Traditional';
}

function getImageTitle(src: string): string {
  const filename = src.split('/').pop()?.replace('.webp', '') || '';
  return filename.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

function getImageDescription(src: string): string {
  const descriptions: { [key: string]: string } = {
    'pink_folded': 'Beautiful pink quilt with intricate folded details',
    'window_board': 'Elegant window pattern with precise piecing',
    'christmas_angle': 'Festive holiday quilt with seasonal motifs',
    'brex_full': 'Modern geometric design with bold patterns',
    'demi_flower': 'Delicate floral appliqué work',
    'feather': 'Classic feather quilting pattern',
    'kite': 'Playful kite-themed quilt design',
    'studio': 'Behind-the-scenes look at our quilting process',
    'window': 'Traditional window pane quilt pattern',
    'brex_angle': 'Contemporary angular design with precision',
    'christmas_close': 'Close-up detail of holiday quilting',
    'leaves': 'Nature-inspired leaf pattern quilting',
    'brex_table': 'Modern table runner with geometric elements'
  };
  
  const filename = src.split('/').pop()?.replace('.webp', '') || '';
  return descriptions[filename] || 'Beautiful handcrafted quilt showcasing expert craftsmanship';
}

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [numImagesToShow, setNumImagesToShow] = useState(12);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, numImagesToShow);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage) 
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            Our Portfolio
          </Badge>
          <h1 className="text-5xl md:text-6xl mb-6 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent overflow-visible">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore our collection of beautiful quilts, showcasing the artistry and 
            craftsmanship that goes into every project. From traditional patterns to 
            modern designs, each piece tells a unique story.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category);
                  setNumImagesToShow(12);
                }}
                className={selectedCategory === category 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "hover:bg-purple-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedImages.map((image) => (
              <Card 
                key={image.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(image.id)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">Click to view</p>
                      </div>
                    </div> */}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">{image.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-xs line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {numImagesToShow < filteredImages.length && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setNumImagesToShow(prev => prev + 8)}
                className="hover:bg-purple-50"
              >
                Load More Images
              </Button>
            </div>
          )}

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No images found in the {selectedCategory} category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImageData && (
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative aspect-square md:aspect-video">
                <Image
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  fill
                  className="object-cover"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-bold">{selectedImageData.title}</h2>
                  <Badge variant="secondary">{selectedImageData.category}</Badge>
                </div>
                <p className="text-gray-600">{selectedImageData.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Let us help bring your quilting vision to life with our professional 
            longarm quilting services and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/services">
                Explore Our Services
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
              <a href="/contact">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
