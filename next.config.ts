import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Improve Core Web Vitals
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression
  compress: true,
  
  // Better performance
  poweredByHeader: false,
  
  // SEO improvements
  async rewrites() {
    return [
      {
        source: '/longarm-quilting-northern-utah',
        destination: '/northern-utah-longarm-quilting',
      },
      {
        source: '/cache-valley-longarm-quilting',
        destination: '/northern-utah-longarm-quilting',
      },
      {
        source: '/logan-utah-longarm-quilting',
        destination: '/northern-utah-longarm-quilting',
      }
    ];
  },

  // Headers for SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          }
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      }
    ];
  },
};

export default nextConfig;
