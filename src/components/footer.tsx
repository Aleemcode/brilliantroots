import { Heart } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const footerLinks = {
  Explore: [
    { label: "Catalogue", href: "/explore" },
    { label: "Products", href: "/explore" },
    { label: "Published Works", href: "/explore#published-works" },
    { label: "Free Guides", href: "/explore#catalogue" },
  ],
  Products: [
    { label: "MQCD", href: "/explore/mqcd" },
    { label: "Tarbiyah Pack", href: "/explore/tarbiyah-pack" },
    { label: "Modern Qur'an Stand", href: "/explore/modern-quran-stand" },
    { label: "Baytul Asmaa", href: "https://baytul-asmaa.com/" },
  ],
  Pathway: [
    { label: "Foundations", href: "/pathways/foundations" },
    { label: "Family Rhythm", href: "/pathways/family-rhythm" },
    { label: "Names & Identity", href: "/pathways/names-and-identity" },
    { label: "Screen-Free Learning", href: "/pathways/screen-free-learning" },
  ],
  brilliantroots: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Publishing Inquiries", href: "/contact" },
    { label: "Jumu'ah Digest", href: "/explore/jumuah-digest" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-br-primary-dark text-white transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Logo variant="horizontal" className="h-7 w-auto text-white" />
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Products, tools, guides, and published works for Muslim homes seeking faith, learning, adab, and family clarity.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-br-gold mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} brilliantroots™️. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-br-orange fill-br-orange" /> for the Muslim Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}
