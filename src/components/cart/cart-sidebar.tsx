'use client';

import { useAtom } from 'jotai';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { 
  cartOpenAtom, 
  cartItemsAtom, 
  cartItemCountAtom,
  cartSubtotalAtom,
  removeFromCartAtom,
  closeCartAtom
} from '@/lib/store/cart';
import { Trash2, ShoppingBag } from 'lucide-react';

export function CartSidebar() {
  const [isOpen] = useAtom(cartOpenAtom);
  const [items] = useAtom(cartItemsAtom);
  const [itemCount] = useAtom(cartItemCountAtom);
  const [subtotal] = useAtom(cartSubtotalAtom);
  const [, removeItem] = useAtom(removeFromCartAtom);
  const [, closeCart] = useAtom(closeCartAtom);

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] p-6">
        <SheetHeader className="pb-6">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </SheetTitle>
          <SheetDescription>
            Review your items and checkout when ready
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full -mt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12 px-4">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some items to get started!</p>
              <Link href="/shop">
                <Button onClick={closeCart} className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-6 px-1">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.productId}-${JSON.stringify(item.selectedOptions)}`} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                        {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                          <p className="text-xs text-gray-400">
                            {Object.entries(item.selectedOptions).map(([key, value]) => 
                              `${key}: ${value}`
                            ).join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <p className="text-sm font-medium text-gray-900">
                          {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.productId)}
                          className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="border-t pt-6 px-2">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>{formatPrice(subtotal)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="space-y-3">
                  <Link href="/checkout" className="w-full">
                    <Button onClick={closeCart} className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700">
                      Checkout
                    </Button>
                  </Link>
                  <Link href="/cart" className="w-full">
                    <Button onClick={closeCart} variant="outline" className="w-full">
                      View Full Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
