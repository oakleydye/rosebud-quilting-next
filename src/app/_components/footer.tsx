import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/footer_logo.png"
                alt="Rosebud Quilting Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-xl font-semibold">Rosebud Quilting</h3>
            </div>
            <p className="text-slate-300 max-w-md">
              Creating beautiful, custom quilts with precision and care. 
              From traditional patterns to modern designs, we bring your vision to life.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-300">
              <p>Email: info@rosebudquilting.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Location: Portland, Oregon</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Rosebud Quilting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}