import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { label: "Start Here", href: "#start-here" },
  { label: "Pathways", href: "#pathways" },
  { label: "Tools", href: "#tools" },
  { label: "Library", href: "#library" },
  { label: "About", href: "#method" },
];

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-br-bg/90 backdrop-blur-xl border-b border-br-border/10">
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Logo 
              variant="horizontal" 
              className="h-6 w-auto md:h-8 group-hover:scale-105 transition-transform duration-300 text-br-text" 
            />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-br-muted font-mono tracking-tight">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-br-text transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
