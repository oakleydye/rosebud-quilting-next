export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  category: 'fabrics' | 'notions' | 'patterns' | 'kits';
  subcategory?: string;
  images: string[];
  thumbnails: string[];
  inStock: boolean;
  stockQuantity: number;
  sku: string;
  brand?: string;
  designer?: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  specifications?: ProductSpecifications;
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  digitalDownload?: boolean;
  shippingWeight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductSpecifications {
  // For Fabrics
  material?: string;
  width?: string;
  weight?: string;
  care?: string[];
  
  // For Patterns
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  finishedSize?: string;
  blockSize?: string;
  technique?: string[];
  pages?: number;
  
  // For Tools/Notions
  size?: string;
  compatibility?: string[];
  features?: string[];
  
  // For Kits
  includes?: string[];
  timeToComplete?: string;
  requiredTools?: string[];
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  shippingAddress: ShippingAddress;
  billingAddress: ShippingAddress;
  customerEmail: string;
  customerPhone?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  trackingNumber?: string;
  estimatedDelivery?: Date;
}
