import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Rosebud Quilting, where your passion for quilting meets
              our dedication to excellence. With years of experience and a deep
              love for the art of quilting, we specialize in providing top-notch
              long arm quilting services. Our state-of-the-art equipment and
              meticulous attention to detail ensure that every quilt we handle
              is finished to perfection. At Rosebud Quilting, we believe that
              every quilt tells a story, and we're here to help you tell yours
              with beauty and precision.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/masonryGrid/studio.webp"
              alt="Our Studio"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
