"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw,
  Check,
  Minus,
  Plus,
  ArrowLeft
} from 'lucide-react';
import { Product } from '@/types/shop';
import { useAtom } from 'jotai';
import { addToCartAtom, openCartAtom } from '@/lib/store/cart';
import { cn } from '@/lib/utils';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [, addToCart] = useAtom(addToCartAtom);
  const [, openCart] = useAtom(openCartAtom);

  const handleAddToCart = () => {
    addToCart({ product, quantity, options: selectedOptions });
    openCart();
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/shop" className="hover:text-purple-600">Shop</Link>
            <span>/</span>
            <Link href={`/shop/${product.category}`} className="hover:text-purple-600 capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/shop" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-white">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.salePrice && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  Sale
                </Badge>
              )}
              {product.newArrival && (
                <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                  New
                </Badge>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative aspect-square rounded-lg overflow-hidden border-2",
                      selectedImage === index ? "border-purple-500" : "border-gray-200"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline" className="capitalize">
                  {product.category}
                </Badge>
                {product.featured && (
                  <Badge className="bg-yellow-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                {product.bestseller && (
                  <Badge className="bg-purple-500 text-white">
                    Bestseller
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              {(product.brand || product.designer) && (
                <p className="text-gray-600 mb-4">
                  by {product.brand || product.designer}
                </p>
              )}

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStarRating(product.rating)}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                {product.salePrice ? (
                  <>
                    <span className="text-3xl font-bold text-red-600">
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <Badge className="bg-red-100 text-red-800">
                      Save {formatPrice(product.price - product.salePrice)}
                    </Badge>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.shortDescription}
              </p>
            </div>

            {/* Add to Cart Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium">Quantity:</span>
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-4 py-2 text-center min-w-[60px]">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={incrementQuantity}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {product.inStock ? (
                      <div className="flex items-center text-green-600">
                        <Check className="w-4 h-4 mr-1" />
                        <span className="text-sm">In Stock</span>
                      </div>
                    ) : (
                      <span className="text-red-600 text-sm">Out of Stock</span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    size="lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {product.digitalDownload && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Digital Download:</strong> Instant access after purchase. 
                      Download link will be sent to your email.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Shipping & Returns */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <Truck className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-medium text-sm">Free Shipping</h3>
                <p className="text-xs text-gray-500">Orders over $75</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-medium text-sm">Secure Payment</h3>
                <p className="text-xs text-gray-500">SSL Protected</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <RotateCcw className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-medium text-sm">30-Day Returns</h3>
                <p className="text-xs text-gray-500">Easy returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {product.tags.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  {product.specifications ? (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-3">Product Details</h3>
                          <dl className="space-y-2">
                            <div className="flex justify-between">
                              <dt className="text-gray-600">SKU:</dt>
                              <dd className="font-medium">{product.sku}</dd>
                            </div>
                            {product.specifications.material && (
                              <div className="flex justify-between">
                                <dt className="text-gray-600">Material:</dt>
                                <dd className="font-medium">{product.specifications.material}</dd>
                              </div>
                            )}
                            {product.specifications.difficulty && (
                              <div className="flex justify-between">
                                <dt className="text-gray-600">Difficulty:</dt>
                                <dd className="font-medium">{product.specifications.difficulty}</dd>
                              </div>
                            )}
                            {product.specifications.finishedSize && (
                              <div className="flex justify-between">
                                <dt className="text-gray-600">Finished Size:</dt>
                                <dd className="font-medium">{product.specifications.finishedSize}</dd>
                              </div>
                            )}
                          </dl>
                        </div>
                        
                        {(product.specifications.features || product.specifications.includes) && (
                          <div>
                            <h3 className="font-semibold mb-3">
                              {product.specifications.features ? 'Features' : 'Kit Includes'}
                            </h3>
                            <ul className="space-y-1">
                              {(product.specifications.features || product.specifications.includes || []).map((item, index) => (
                                <li key={index} className="flex items-center text-sm">
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">No specifications available.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {renderStarRating(product.rating)}
                      <span className="text-2xl font-bold ml-2">{product.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Based on {product.reviewCount} customer reviews
                    </p>
                    <Button variant="outline">Write a Review</Button>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-6">
                    {/* Sample reviews - in a real app, these would come from a database */}
                    <div className="border-b pb-6 last:border-b-0">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-1">
                          {renderStarRating(5)}
                        </div>
                        <span className="font-medium">Sarah M.</span>
                        <span className="text-gray-500 text-sm">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "Excellent quality and fast shipping. The colors are exactly as shown in the photos. 
                        Will definitely order from Rosebud Quilting again!"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
