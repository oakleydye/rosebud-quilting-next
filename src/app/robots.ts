import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_*',
          '/checkout',
          '/cart'
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      }
    ],
    sitemap: 'https://rosebudquilting.com/sitemap.xml',
    host: 'https://rosebudquilting.com',
  };
}
