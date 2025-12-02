import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#09090b]">
      <div className="container-lg py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-semibold text-lg">
              Sacca Solutions
            </Link>
            <p className="text-sm text-zinc-500 mt-3 max-w-xs">
              AI products and automation systems that replace manual work.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-medium mb-4">Products</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/betterdatingai" className="text-zinc-400 hover:text-white transition-colors">
                  BetterDatingAI
                </Link>
              </li>
              <li>
                <Link href="/products/dreamfluent" className="text-zinc-400 hover:text-white transition-colors">
                  DreamFluent
                </Link>
              </li>
              <li>
                <Link href="/products/photohut" className="text-zinc-400 hover:text-white transition-colors">
                  PhotoHut
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-zinc-400 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:robert@saccasolutions.com" className="text-zinc-400 hover:text-white transition-colors">
                  robert@saccasolutions.com
                </a>
              </li>
              <li>
                <a href="tel:+12155095121" className="text-zinc-400 hover:text-white transition-colors">
                  (215) 509-5121
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Sacca Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
