import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save, Eye, Upload, Bold, Italic, Link as LinkIcon, List, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

const categories = [
  "Longarm Quilting",
  "Tutorials",
  "Materials", 
  "Custom Quilts",
  "Community",
  "Techniques"
];

export default function BlogEditorPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/blog">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Posts
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Create New Post</h1>
            <p className="text-gray-600 mt-1">Write and publish your quilting blog content</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline">
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            Publish Post
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title">Post Title</Label>
                <Input 
                  id="title"
                  placeholder="Enter your post title..."
                  className="text-lg font-semibold"
                />
              </div>

              {/* Slug */}
              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input 
                  id="slug"
                  placeholder="url-friendly-slug"
                  className="font-mono text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  URL: rosebudquilting.com/blog/your-slug-here
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea 
                  id="excerpt"
                  placeholder="Brief description of your post for previews and SEO..."
                  className="min-h-20"
                />
              </div>

              {/* Content Editor */}
              <div>
                <Label>Content</Label>
                <div className="border rounded-lg">
                  {/* Toolbar */}
                  <div className="border-b px-3 py-2 flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Italic className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <LinkIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <List className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ImageIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  {/* Content Area */}
                  <Textarea 
                    placeholder="Write your blog post content here. You can use HTML tags for formatting..."
                    className="min-h-96 border-0 focus:ring-0 resize-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your post for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="seo-title">SEO Title</Label>
                <Input 
                  id="seo-title"
                  placeholder="Custom title for search results..."
                />
                <p className="text-xs text-gray-500 mt-1">60 characters recommended</p>
              </div>
              
              <div>
                <Label htmlFor="seo-description">Meta Description</Label>
                <Textarea 
                  id="seo-description"
                  placeholder="Description that appears in search results..."
                  className="min-h-20"
                />
                <p className="text-xs text-gray-500 mt-1">155 characters recommended</p>
              </div>

              <div>
                <Label htmlFor="keywords">Keywords</Label>
                <Input 
                  id="keywords"
                  placeholder="longarm quilting, northern utah, cache valley..."
                />
                <p className="text-xs text-gray-500 mt-1">Comma-separated keywords</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publishing Options */}
          <Card>
            <CardHeader>
              <CardTitle>Publishing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="publish-date">Publish Date</Label>
                <Input 
                  id="publish-date"
                  type="datetime-local"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="featured" />
                <Label htmlFor="featured">Featured Post</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="comments" />
                <Label htmlFor="comments">Allow Comments</Label>
              </div>
            </CardContent>
          </Card>

          {/* Post Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="author">Author</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diana-dye">Diana Dye</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="read-time">Read Time</Label>
                <Input 
                  id="read-time"
                  placeholder="5 min read"
                />
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload featured image</p>
                <Button variant="outline" size="sm">
                  Choose File
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Recommended: 1200x630px for optimal social media sharing
              </p>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <Input 
                placeholder="Add tags separated by commas..."
              />
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="secondary">longarm quilting</Badge>
                <Badge variant="secondary">northern utah</Badge>
                <Badge variant="secondary">cache valley</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Related Posts</CardTitle>
              <CardDescription>Choose related posts to display</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Search posts..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="post1">Preparing Your Quilt Top</SelectItem>
                  <SelectItem value="post2">Best Longarm Patterns</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
