import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { CartItem, Product } from '@/types/shop';

// Base atoms
export const cartItemsAtom = atomWithStorage<CartItem[]>('rosebud-cart-items', []);
export const cartOpenAtom = atom<boolean>(false);

// Derived atoms for calculations
export const cartItemCountAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((total, item) => total + item.quantity, 0);
});

export const cartSubtotalAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.reduce((total, item) => {
    const price = item.product.salePrice || item.product.price;
    return total + (price * item.quantity);
  }, 0);
});

export const cartTaxAtom = atom((get) => {
  const subtotal = get(cartSubtotalAtom);
  const taxRate = 0.0875; // 8.75% tax rate for Utah
  return subtotal * taxRate;
});

export const cartShippingAtom = atom((get) => {
  const subtotal = get(cartSubtotalAtom);
  const items = get(cartItemsAtom);
  const hasDigitalOnly = items.every(item => item.product.digitalDownload);
  
  if (hasDigitalOnly) return 0; // Free shipping for digital items
  if (subtotal >= 75) return 0; // Free shipping over $75
  
  return 8.95; // Standard shipping rate
});

export const cartTotalAtom = atom((get) => {
  return get(cartSubtotalAtom) + get(cartTaxAtom) + get(cartShippingAtom);
});

// Action atoms
export const addToCartAtom = atom(
  null,
  (get, set, { product, quantity = 1, options = {} }: { 
    product: Product; 
    quantity?: number; 
    options?: Record<string, string> 
  }) => {
    const items = get(cartItemsAtom);
    const existingItem = items.find(
      item => item.productId === product.id && 
      JSON.stringify(item.selectedOptions) === JSON.stringify(options)
    );

    if (existingItem) {
      set(cartItemsAtom, items.map(item =>
        item.productId === product.id && 
        JSON.stringify(item.selectedOptions) === JSON.stringify(options)
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      set(cartItemsAtom, [
        ...items,
        {
          productId: product.id,
          product,
          quantity,
          selectedOptions: options
        }
      ]);
    }
  }
);

export const removeFromCartAtom = atom(
  null,
  (get, set, productId: string) => {
    const items = get(cartItemsAtom);
    set(cartItemsAtom, items.filter(item => item.productId !== productId));
  }
);

export const updateCartQuantityAtom = atom(
  null,
  (get, set, { productId, quantity }: { productId: string; quantity: number }) => {
    if (quantity <= 0) {
      const items = get(cartItemsAtom);
      set(cartItemsAtom, items.filter(item => item.productId !== productId));
      return;
    }

    const items = get(cartItemsAtom);
    set(cartItemsAtom, items.map(item =>
      item.productId === productId
        ? { ...item, quantity }
        : item
    ));
  }
);

export const clearCartAtom = atom(
  null,
  (get, set) => {
    set(cartItemsAtom, []);
  }
);

export const toggleCartAtom = atom(
  null,
  (get, set) => {
    const isOpen = get(cartOpenAtom);
    set(cartOpenAtom, !isOpen);
  }
);

export const openCartAtom = atom(
  null,
  (get, set) => {
    set(cartOpenAtom, true);
  }
);

export const closeCartAtom = atom(
  null,
  (get, set) => {
    set(cartOpenAtom, false);
  }
);
