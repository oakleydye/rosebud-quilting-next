import { getFeaturedPosts } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default async function BlogOverview() {
  const featuredPosts = await getFeaturedPosts();
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Quilting Insights</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips, tutorials, and inspiration from Northern Utah's longarm quilting specialists
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                  
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={post.publishedAt?.toISOString() || post.createdAt.toISOString()}>
                          {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Topics Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-background rounded-lg border">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧵</span>
            </div>
            <h3 className="font-semibold mb-2">Longarm Techniques</h3>
            <p className="text-sm text-muted-foreground">
              Master professional longarm quilting methods and patterns
            </p>
          </div>
          
          <div className="text-center p-6 bg-background rounded-lg border">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="font-semibold mb-2">Beginner Guides</h3>
            <p className="text-sm text-muted-foreground">
              Step-by-step tutorials for quilting newcomers
            </p>
          </div>
          
          <div className="text-center p-6 bg-background rounded-lg border">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏔️</span>
            </div>
            <h3 className="font-semibold mb-2">Local Community</h3>
            <p className="text-sm text-muted-foreground">
              Cache Valley quilting events and guild information
            </p>
          </div>
          
          <div className="text-center p-6 bg-background rounded-lg border">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-semibold mb-2">Design Tips</h3>
            <p className="text-sm text-muted-foreground">
              Creative inspiration and quilting design advice
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/blog">
              Explore All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
