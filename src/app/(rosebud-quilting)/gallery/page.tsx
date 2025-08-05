import { generateMetadata } from "@/lib/metadata";
import GalleryClient from "./_components/gallery-client";

export const metadata = generateMetadata({
  title: "Gallery - Beautiful Quilts & Portfolio | Rosebud Quilting",
  description: "Explore our stunning gallery of custom quilts, longarm quilting projects, and handcrafted masterpieces. See the quality and artistry that defines Rosebud Quilting.",
});

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <GalleryClient />
    </div>
  );
}
