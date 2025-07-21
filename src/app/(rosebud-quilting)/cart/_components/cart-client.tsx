"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft, 
  Truck,
  CreditCard,
  Shield
} from 'lucide-react';
import { useAtom } from 'jotai';
import {
  cartItemsAtom,
  cartItemCountAtom,
  cartSubtotalAtom,
  cartTaxAtom,
  cartShippingAtom,
  cartTotalAtom,
  updateCartQuantityAtom,
  removeFromCartAtom,
  clearCartAtom
} from '@/lib/store/cart';
import { cn } from '@/lib/utils';

export default function CartClient() {
  const [items] = useAtom(cartItemsAtom);
  const [itemCount] = useAtom(cartItemCountAtom);
  const [subtotal] = useAtom(cartSubtotalAtom);
  const [tax] = useAtom(cartTaxAtom);
  const [shipping] = useAtom(cartShippingAtom);
  const [total] = useAtom(cartTotalAtom);
  const [, updateQuantity] = useAtom(updateCartQuantityAtom);
  const [, removeItem] = useAtom(removeFromCartAtom);
  const [, clearCart] = useAtom(clearCartAtom);

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet. 
              Browse our collection to find the perfect quilting supplies.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-6">
          <Link href="/shop" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">
                  Shopping Cart ({itemCount} item{itemCount !== 1 ? 's' : ''})
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700"
                >
                  Clear Cart
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {items.map((item, index) => (
                    <div key={`${item.productId}-${index}`} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white border">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900 mb-1">
                                <Link 
                                  href={`/shop/product/${item.product.slug}`}
                                  className="hover:text-purple-600"
                                >
                                  {item.product.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-500 mb-2">
                                {item.product.brand || item.product.designer}
                              </p>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="text-xs capitalize">
                                  {item.product.category}
                                </Badge>
                                {item.product.digitalDownload && (
                                  <Badge className="text-xs bg-blue-100 text-blue-800">
                                    Digital
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="font-semibold text-gray-900 mb-2">
                                {item.product.salePrice ? (
                                  <div className="space-y-1">
                                    <div className="text-red-600">
                                      {formatPrice(item.product.salePrice)}
                                    </div>
                                    <div className="text-sm text-gray-500 line-through">
                                      {formatPrice(item.product.price)}
                                    </div>
                                  </div>
                                ) : (
                                  formatPrice(item.product.price)
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border rounded-lg">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity({ productId: item.productId, quantity: item.quantity - 1 })}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="px-4 py-2 text-center min-w-[60px]">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity({ productId: item.productId, quantity: item.quantity + 1 })}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <div className="font-semibold">
                                {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.productId)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>

                {shipping === 0 && subtotal >= 75 && (
                  <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                    🎉 You qualified for free shipping!
                  </div>
                )}

                {shipping > 0 && subtotal < 75 && (
                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    Add {formatPrice(75 - subtotal)} more for free shipping
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                
                <Button asChild size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/checkout">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proceed to Checkout
                  </Link>
                </Button>
                
                <div className="text-center">
                  <Link href="/shop" className="text-purple-600 hover:text-purple-700 text-sm">
                    Continue Shopping
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Truck className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <h4 className="font-medium text-sm">Free Shipping</h4>
                  <p className="text-xs text-gray-500">On orders over $75</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <h4 className="font-medium text-sm">Secure Checkout</h4>
                  <p className="text-xs text-gray-500">SSL encrypted payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
