import { createBlogPost } from '@/lib/blog-data';

const samplePosts = [
  {
    title: "The Complete Guide to Preparing Your Quilt Top for Longarm Quilting",
    slug: "preparing-quilt-top-longarm-quilting",
    excerpt: "Essential steps to prepare your quilt top for professional longarm quilting services, including pressing, backing, and measurement tips.",
    content: `
      <p>Preparing your quilt top properly is crucial for achieving professional longarm quilting results. Whether you're bringing your quilt to our Hyrum studio or working with any longarm quilter, following these essential steps will ensure your project turns out beautifully.</p>

      <h2>Step 1: Press Your Quilt Top Thoroughly</h2>
      <p>Before bringing your quilt top to our longarm quilting service, make sure all seams are pressed properly. We recommend pressing seams to one side rather than open, as this creates stronger seams and better durability.</p>

      <h3>Key Pressing Tips:</h3>
      <ul>
        <li>Use a hot, dry iron (no steam)</li>
        <li>Press from the right side of the fabric</li>
        <li>Ensure all seams lay flat with no pleats or tucks</li>
        <li>Check that your quilt top is square and flat</li>
      </ul>

      <h2>Step 2: Measure and Square Your Quilt</h2>
      <p>Accurate measurements are essential for proper longarm quilting. Measure your quilt top in multiple places to ensure it's square and provide these measurements when you bring it to our Cache Valley studio.</p>

      <h3>What to Measure:</h3>
      <ul>
        <li>Width at top, middle, and bottom</li>
        <li>Length at left side, center, and right side</li>
        <li>Both diagonal measurements</li>
      </ul>

      <h2>Step 3: Prepare Your Backing Fabric</h2>
      <p>Your backing fabric should be at least 4 inches larger than your quilt top on all sides. This extra fabric is essential for proper longarm setup and tensioning.</p>

      <p>At Rosebud Quilting in Hyrum, Utah, we serve quilters throughout Cache Valley, including Logan, Providence, Smithfield, and surrounding areas. Our professional longarm quilting services transform your carefully crafted quilt tops into heirloom-quality finished quilts.</p>

      <p>Contact us today at (801) 608-7461 to discuss your longarm quilting project!</p>
    `,
    category: "Longarm Quilting",
    author: "Diana Dye",
    readTime: "8 min read",
    image: "/images/blog/quilt-prep.webp",
    featured: true,
    status: 'PUBLISHED' as const,
    publishedAt: new Date('2024-01-15'),
    seoTitle: "Complete Guide to Preparing Quilt Tops for Longarm Quilting | Northern Utah",
    seoDescription: "Expert tips for preparing your quilt top for professional longarm quilting. Serving Cache Valley with pressing, measuring, and backing preparation guidance.",
    seoKeywords: [
      "prepare quilt top longarm quilting",
      "longarm quilting preparation utah",
      "quilt top preparation cache valley",
      "professional quilting prep northern utah"
    ],
    tags: ["longarm quilting", "quilt preparation", "northern utah", "cache valley", "quilting tips"]
  },
  {
    title: "5 Best Longarm Quilting Patterns for Beginners in 2024",
    slug: "best-longarm-patterns-beginners",
    excerpt: "Discover the most beginner-friendly longarm quilting patterns that create stunning results without overwhelming complexity.",
    content: `
      <p>Choosing the right longarm quilting pattern can make the difference between a successful first project and a frustrating experience. At our Hyrum studio, we work with many first-time longarm quilting customers and have identified the patterns that consistently deliver beautiful results for beginners.</p>

      <h2>1. Simple Meandering</h2>
      <p>Meandering is the perfect starting pattern for beginners. This organic, flowing design is forgiving and hides minor imperfections while creating beautiful texture across your quilt.</p>

      <h2>2. Simple Loops</h2>
      <p>Loop patterns create consistent, attractive designs that are easy to maintain across large areas. They're perfect for building confidence in longarm quilting.</p>

      <h2>3. Gentle Waves</h2>
      <p>Wave patterns add movement and interest to your quilt while remaining simple enough for beginners to master quickly.</p>

      <h2>4. Basic Stippling</h2>
      <p>Stippling creates beautiful texture and is very forgiving for new longarm quilters. Start with larger stippling and work your way down to smaller patterns as you gain confidence.</p>

      <h2>5. Simple Feathers</h2>
      <p>Once you've mastered the basics, simple feather patterns add elegance without overwhelming complexity.</p>

      <p>At Rosebud Quilting in Hyrum, Utah, we offer these beginner-friendly patterns as part of our longarm quilting services. Contact us to discuss which pattern would work best for your first longarm quilting project!</p>
    `,
    category: "Tutorials",
    author: "Diana Dye",
    readTime: "6 min read",
    image: "/images/blog/beginner-patterns.webp",
    featured: true,
    status: 'PUBLISHED' as const,
    publishedAt: new Date('2024-01-10'),
    seoTitle: "5 Best Longarm Quilting Patterns for Beginners | Utah Quilting Expert",
    seoDescription: "Discover beginner-friendly longarm quilting patterns that create beautiful results. Expert advice from Northern Utah's premier longarm quilting service.",
    seoKeywords: [
      "beginner longarm quilting patterns",
      "easy quilting patterns utah",
      "simple longarm designs cache valley"
    ],
    tags: ["beginner quilting", "longarm patterns", "quilting tutorials", "northern utah"]
  },
  {
    title: "How to Choose the Right Batting for Your Longarm Quilting Project",
    slug: "choosing-right-batting-longarm-quilting",
    excerpt: "Understanding different batting materials and weights to make the best choice for your quilting project's intended use and style.",
    content: `
      <p>Choosing the right batting is crucial for your quilting project's success. Different batting materials offer different benefits and characteristics that can dramatically affect the final look and feel of your quilt.</p>
      
      <h2>Cotton Batting</h2>
      <p>100% cotton batting provides a traditional feel and excellent breathability. It's perfect for hand quilting and creates beautiful drape. Cotton batting typically requires closer quilting lines (every 3-4 inches) but offers excellent stitch definition.</p>
      
      <h2>Polyester Batting</h2>
      <p>Lightweight and easy to care for, polyester batting is great for everyday quilts and machine washing. It's very forgiving and can handle larger quilting spaces without shifting.</p>

      <h2>Cotton-Poly Blends</h2>
      <p>These combine the best of both worlds - the natural feel of cotton with the stability of polyester. Popular blends include 80/20 cotton-poly mixes.</p>

      <h2>Wool Batting</h2>
      <p>Wool batting is lightweight, breathable, and naturally temperature regulating. It's perfect for quilts that will be used year-round.</p>

      <h2>Bamboo Batting</h2>
      <p>Eco-friendly and naturally antimicrobial, bamboo batting offers similar properties to cotton but with added environmental benefits.</p>

      <p>At Rosebud Quilting, we help our Cache Valley customers choose the perfect batting for each project. Our experience with different batting types ensures your quilt will have the exact feel and durability you're looking for.</p>
    `,
    category: "Materials",
    author: "Diana Dye",
    readTime: "10 min read",
    image: "/images/blog/batting-guide.webp",
    featured: false,
    status: 'PUBLISHED' as const,
    publishedAt: new Date('2024-01-05'),
    seoTitle: "How to Choose the Right Quilting Batting | Northern Utah Expert Guide",
    seoDescription: "Expert guide to selecting the perfect batting for your quilting project. Professional advice from Cache Valley's longarm quilting specialists.",
    seoKeywords: ["quilting batting guide", "batting types utah", "longarm batting selection"],
    tags: ["batting", "quilting materials", "longarm quilting", "utah"]
  }
];

export async function seedBlogPosts() {
  console.log('Seeding blog posts...');
  
  for (const postData of samplePosts) {
    try {
      const post = await createBlogPost(postData);
      console.log(`Created post: ${post.title}`);
    } catch (error) {
      console.error(`Error creating post "${postData.title}":`, error);
    }
  }
  
  console.log('Blog posts seeding completed!');
}

// If running this file directly
if (require.main === module) {
  seedBlogPosts()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
