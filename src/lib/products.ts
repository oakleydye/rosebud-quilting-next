import { Product } from '@/types/shop';

export const sampleProducts: Product[] = [
  // Fabrics
  {
    id: 'fab-001',
    name: 'Autumn Leaves Collection',
    slug: 'autumn-leaves-collection',
    description: 'Beautiful fall-inspired fabric collection featuring warm oranges, deep reds, and golden yellows. Perfect for seasonal quilts, table runners, and home decor projects. Each fabric in this collection is 100% cotton with a smooth, crisp hand that is easy to work with for quilters of all skill levels.',
    shortDescription: 'Beautiful fall-inspired prints with warm oranges, deep reds, and golden yellows',
    price: 12.99,
    salePrice: 9.99,
    category: 'fabrics',
    subcategory: 'fat-quarters',
    images: ['/images/masonryGrid/leaves.webp', '/images/masonryGrid/leaves.webp'],
    thumbnails: ['/images/masonryGrid/leaves.webp'],
    inStock: true,
    stockQuantity: 25,
    sku: 'FAB-AUT-001',
    designer: 'Sarah Miller',
    rating: 4.9,
    reviewCount: 87,
    tags: ['autumn', 'fall', 'seasonal', 'fat quarters', '100% cotton'],
    specifications: {
      material: '100% Cotton',
      width: '44-45 inches',
      weight: 'Medium weight quilting cotton',
      care: ['Machine wash cold', 'Tumble dry low', 'Iron on cotton setting']
    },
    featured: true,
    bestseller: true,
    newArrival: false,
    digitalDownload: false,
    shippingWeight: 0.5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'fab-002',
    name: 'Modern Geometry Bundle',
    slug: 'modern-geometry-bundle',
    description: 'Contemporary geometric fabric collection with bold patterns and clean lines. This 8-piece fat quarter bundle features coordinating prints in a sophisticated color palette perfect for modern quilting projects.',
    shortDescription: 'Contemporary geometric patterns perfect for modern quilting projects',
    price: 14.99,
    category: 'fabrics',
    subcategory: 'fat-quarters',
    images: ['/images/masonryGrid/brex_full.webp', '/images/masonryGrid/brex_angle.webp'],
    thumbnails: ['/images/masonryGrid/brex_full.webp'],
    inStock: true,
    stockQuantity: 18,
    sku: 'FAB-MOD-002',
    designer: 'Studio Design Co.',
    rating: 4.8,
    reviewCount: 64,
    tags: ['modern', 'geometric', 'contemporary', 'fat quarters'],
    specifications: {
      material: '100% Cotton',
      width: '44-45 inches',
      weight: 'Medium weight quilting cotton',
      care: ['Machine wash cold', 'Tumble dry low', 'Iron on cotton setting']
    },
    featured: true,
    bestseller: false,
    newArrival: true,
    digitalDownload: false,
    shippingWeight: 0.6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  
  // Tools/Notions
  {
    id: 'tool-001',
    name: 'Professional Rotary Cutter Set',
    slug: 'professional-rotary-cutter-set',
    description: 'Complete rotary cutting system with ergonomic 45mm cutter, extra blades, and safety features. Includes carrying case and blade disposal container. Perfect for precision fabric cutting with smooth, clean cuts every time.',
    shortDescription: 'Complete set with 45mm cutter, extra blades, and safety lock',
    price: 89.99,
    salePrice: 69.99,
    category: 'notions',
    subcategory: 'cutting-tools',
    images: ['/images/masonryGrid/window.webp', '/images/masonryGrid/window_board.webp'],
    thumbnails: ['/images/masonryGrid/window.webp'],
    inStock: true,
    stockQuantity: 12,
    sku: 'TOOL-ROT-001',
    brand: 'Olfa',
    rating: 4.9,
    reviewCount: 145,
    tags: ['rotary cutter', 'cutting tools', 'precision', 'ergonomic'],
    specifications: {
      size: '45mm blade diameter',
      features: ['Ergonomic handle', 'Safety lock', 'Dual-action safety', 'Comfortable grip'],
      compatibility: ['Standard 45mm blades', 'All rotary cutting mats']
    },
    featured: true,
    bestseller: true,
    newArrival: false,
    digitalDownload: false,
    shippingWeight: 1.2,
    dimensions: { length: 8, width: 6, height: 2 },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  
  // Patterns
  {
    id: 'pat-001',
    name: 'Feathered Star Masterpiece',
    slug: 'feathered-star-masterpiece',
    description: 'Intricate feathered star pattern with detailed piecing instructions and diagrams. This advanced-level pattern includes full-size templates, cutting guides, and step-by-step assembly instructions. Perfect for experienced quilters looking for a challenging and rewarding project.',
    shortDescription: 'Intricate feathered star pattern with detailed piecing instructions',
    price: 18.99,
    salePrice: 12.99,
    category: 'patterns',
    subcategory: 'traditional',
    images: ['/images/masonryGrid/feather.webp'],
    thumbnails: ['/images/masonryGrid/feather.webp'],
    inStock: true,
    stockQuantity: 999, // Digital download
    sku: 'PAT-FEAT-001',
    designer: 'Traditional Quilts Co.',
    rating: 4.9,
    reviewCount: 203,
    tags: ['feathered star', 'traditional', 'advanced', 'digital download'],
    specifications: {
      difficulty: 'Advanced',
      finishedSize: 'Queen (90" x 90")',
      blockSize: '18" blocks',
      technique: ['Piecing', 'Template work', 'Set-in seams'],
      pages: 24
    },
    featured: true,
    bestseller: true,
    newArrival: false,
    digitalDownload: true,
    shippingWeight: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  
  // Kits
  {
    id: 'kit-001',
    name: 'Flying Kites Adventure Kit',
    slug: 'flying-kites-adventure-kit',
    description: 'Complete baby quilt kit featuring a playful kite design with coordinated fabrics in cheerful colors. Everything you need is included: pre-cut fabrics, pattern, batting, backing, binding, and access to video tutorials. Perfect for beginners or as a gift.',
    shortDescription: 'Complete kit for a playful kite-themed baby quilt with coordinating fabrics',
    price: 89.99,
    salePrice: 69.99,
    category: 'kits',
    subcategory: 'baby-quilts',
    images: ['/images/masonryGrid/kite.webp'],
    thumbnails: ['/images/masonryGrid/kite.webp'],
    inStock: true,
    stockQuantity: 8,
    sku: 'KIT-KITE-001',
    designer: 'Fun Quilts Studio',
    rating: 4.9,
    reviewCount: 156,
    tags: ['baby quilt', 'complete kit', 'beginner friendly', 'kites'],
    specifications: {
      difficulty: 'Beginner',
      finishedSize: 'Baby (36" x 42")',
      includes: [
        '5 coordinating fabrics (pre-cut)',
        'Pattern with detailed instructions',
        'Batting',
        'Backing fabric',
        'Binding fabric',
        'Video tutorial access'
      ],
      timeToComplete: '2-3 weeks',
      requiredTools: ['Sewing machine', 'Basic sewing supplies', 'Iron']
    },
    featured: true,
    bestseller: true,
    newArrival: false,
    digitalDownload: false,
    shippingWeight: 3.5,
    dimensions: { length: 14, width: 11, height: 4 },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Helper function to get all products
export function getProducts(): Product[] {
  return sampleProducts;
}

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return sampleProducts.find(product => product.slug === slug);
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return sampleProducts.filter(product => product.category === category);
}

// Helper function to get featured products
export function getFeaturedProducts(): Product[] {
  return sampleProducts.filter(product => product.featured);
}

// Helper function to get bestselling products
export function getBestsellerProducts(): Product[] {
  return sampleProducts.filter(product => product.bestseller);
}

// Helper function to search products
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return sampleProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    product.designer?.toLowerCase().includes(searchTerm) ||
    product.brand?.toLowerCase().includes(searchTerm)
  );
}
