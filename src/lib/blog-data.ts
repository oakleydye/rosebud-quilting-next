import { prisma } from './prisma';
import { BlogPost, BlogPostStatus } from '@prisma/client';

export type { BlogPost, BlogPostStatus };

// Blog categories - can be expanded later
export const blogCategories = [
  "Longarm Quilting",
  "Tutorials", 
  "Materials",
  "Custom Quilts",
  "Community",
  "Techniques"
];

// Database functions
export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  return await prisma.blogPost.findUnique({
    where: { slug }
  });
};

export const getPublishedPosts = async (): Promise<BlogPost[]> => {
  return await prisma.blogPost.findMany({
    where: { 
      status: BlogPostStatus.PUBLISHED,
      publishedAt: { lte: new Date() }
    },
    orderBy: { publishedAt: 'desc' }
  });
};

export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  return await prisma.blogPost.findMany({
    where: { 
      featured: true,
      status: BlogPostStatus.PUBLISHED,
      publishedAt: { lte: new Date() }
    },
    orderBy: { publishedAt: 'desc' },
    take: 3
  });
};

export const getPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  return await prisma.blogPost.findMany({
    where: { 
      category: {
        equals: category,
        mode: 'insensitive'
      },
      status: BlogPostStatus.PUBLISHED,
      publishedAt: { lte: new Date() }
    },
    orderBy: { publishedAt: 'desc' }
  });
};

export const getRelatedPosts = async (currentSlug: string, category: string, limit: number = 2): Promise<BlogPost[]> => {
  return await prisma.blogPost.findMany({
    where: {
      slug: { not: currentSlug },
      category: {
        equals: category,
        mode: 'insensitive'
      },
      status: BlogPostStatus.PUBLISHED,
      publishedAt: { lte: new Date() }
    },
    orderBy: { publishedAt: 'desc' },
    take: limit
  });
};

export const getAllPosts = async (): Promise<BlogPost[]> => {
  return await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  });
};

export const createBlogPost = async (data: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorEmail?: string;
  readTime: string;
  image?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  tags?: string[];
  status?: BlogPostStatus;
  publishedAt?: Date;
}): Promise<BlogPost> => {
  return await prisma.blogPost.create({
    data: {
      ...data,
      seoKeywords: data.seoKeywords || [],
      tags: data.tags || [],
      status: data.status || BlogPostStatus.DRAFT
    }
  });
};

export const updateBlogPost = async (id: string, data: Partial<BlogPost>): Promise<BlogPost> => {
  return await prisma.blogPost.update({
    where: { id },
    data
  });
};

export const deleteBlogPost = async (id: string): Promise<BlogPost> => {
  return await prisma.blogPost.delete({
    where: { id }
  });
};

export const incrementViews = async (slug: string): Promise<BlogPost> => {
  return await prisma.blogPost.update({
    where: { slug },
    data: {
      views: { increment: 1 }
    }
  });
};

// Utility function to generate reading time estimate
export const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

// Generate unique slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};
