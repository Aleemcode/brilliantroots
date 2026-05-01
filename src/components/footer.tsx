import { Heart } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const footerLinks = {
  "Start Here": [
    { label: "Learn", href: "#" },
    { label: "Practice", href: "#" },
    { label: "Grow", href: "#" },
    { label: "Parent Guides", href: "#" },
  ],
  "Tarbiyah Systems": [
    { label: "Adhkār System", href: "#" },
    { label: "Ṣalāh System", href: "#" },
    { label: "Ādāb System", href: "#" },
    { label: "ʿAqīdah System", href: "#" },
  ],
  Resources: [
    { label: "Jumuʿah Digest", href: "#" },
    { label: "Daily Routines", href: "#" },
    { label: "Teaching Prompts", href: "#" },
    { label: "Free Downloads", href: "#" },
  ],
  Community: [
    { label: "WhatsApp Group", href: "#" },
    { label: "Telegram Channel", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
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
              Structured tarbiyah tools for Muslim families. Rooted in Qurʾān and Sunnah, upon the understanding of the Salaf.
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
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
