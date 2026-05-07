import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Gift, Package, PenTool, Sparkles } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";

const categories = [
  "Products",
  "Tools",
  "Published Works",
  "Free Guides",
  "Parental Kits",
  "Author Resources",
];

const entries = [
  {
    type: "Product",
    title: "MQCD: My Qur'an Companion Device",
    body: "A screen-light Qur'an companion designed to support listening, repetition, memorization, and beneficial audio in the home.",
    bestFor: "Young children, memorization support, bedtime listening, and family review routines.",
    href: "/explore/mqcd",
    image: "/mqcd-device.png",
    cta: "View MQCD",
    status: "Preorder / Waitlist",
    icon: Package,
  },
  {
    type: "Product",
    title: "Tarbiyah Pack",
    body: "A family learning pack that brings together MQCD, Solah Guide, Adab Flash Cards, Qur'an Knowledge Flash Cards, and an Eeman Pack.",
    bestFor: "Parents who want a joined-up learning kit instead of separate disconnected resources.",
    href: "/explore/tarbiyah-pack",
    image: "/tarbiyah-corner-book.png",
    cta: "Join Waitlist",
    status: "Coming Soon",
    icon: Gift,
  },
  {
    type: "Tool",
    title: "Baytul Asmaa",
    body: "A digital platform designed to help Muslim families choose intentional, historically grounded names for their children.",
    bestFor: "Expecting parents, new parents, and families revisiting identity conversations.",
    href: "https://baytul-asmaa.com/",
    image: "/baytul-asmaa-platform.png",
    cta: "Open Tool",
    status: "Available",
    icon: PenTool,
  },
  {
    type: "Published Work",
    title: "[Placeholder] The Intentional Muslim Home",
    body: "A replaceable title for a future work that supports Islamic learning, parenting, family formation, and beneficial reading.",
    bestFor: "Parents and prospective spouses who want deeper reading before choosing routines or tools.",
    href: "/explore/intentional-muslim-home",
    image: "/images/featured-resource.png",
    cta: "Preview Work",
    status: "Placeholder",
    icon: BookOpen,
  },
  {
    type: "Free Guide",
    title: "[Placeholder] A Parent's Weekly Tarbiyah Note",
    body: "A short, practical guide format for one intention, one household practice, and one family conversation.",
    bestFor: "Families who need one small action rather than another large plan.",
    href: "/explore/jumuah-digest",
    image: "/images/featured-resource.png",
    cta: "Read Guide",
    status: "Free",
    icon: FileText,
  },
  {
    type: "Author Resource",
    title: "[Placeholder] Beneficial Work Submission",
    body: "A future entry point for Muslim writers whose work can serve families with clarity, care, and benefit.",
    bestFor: "Authors, educators, and collaborators with family-serving Muslim intellectual work.",
    href: "/contact",
    image: "/images/featured-resource.png",
    cta: "Submit Inquiry",
    status: "Inquiry",
    icon: Sparkles,
  },
];

export function ExplorePage() {
  return (
    <SiteFrame>
      <section className="px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-y editorial-rule py-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Explore</p>
            <div>
              <h1 className="max-w-5xl text-[3rem] font-bold leading-[1.02] tracking-[-0.04em] text-br-text md:text-[5.5rem]">
                Products, tools, works, and guides in one place.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-br-muted">
                Explore is the brilliantroots catalogue: a warm, practical way to find physical products, digital tools, published works, free guides, and parent resources without losing the intention behind them.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#catalogue">Browse the Catalogue</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="bg-br-surface/40">
                  <Link href="/pathways">Read the Pathway</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full border editorial-rule bg-br-surface/35 px-4 py-2 text-xs font-medium text-br-muted">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogue" className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Curated Shelves</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-br-text md:text-6xl">
              Choose the kind of support your home needs next.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-br-muted">
              Each entry makes the purpose clear: what it serves, who it is for, and how it fits into family life.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {entries.map((entry, index) => (
              <Link key={entry.title} href={entry.href} className="paper-panel group flex min-h-full flex-col overflow-hidden rounded-[18px]">
                <div className="grid grid-cols-[4rem_1fr] border-b editorial-rule">
                  <div className="flex items-center justify-center border-r editorial-rule font-mono text-xs text-br-muted">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex min-h-16 items-center justify-between gap-4 p-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-br-primary">{entry.type}</span>
                    <entry.icon className="h-4 w-4 text-br-primary" />
                  </div>
                </div>
                <div className="relative m-4 aspect-[1.2] overflow-hidden rounded-[12px] border editorial-rule bg-br-card/70">
                  <Image src={entry.image} alt={entry.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-2">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-br-primary/20 bg-br-primary-soft/45 px-3 py-1 text-[11px] font-semibold text-br-primary">
                      {entry.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold leading-[1.05] tracking-tight text-br-text">{entry.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-br-muted">{entry.body}</p>
                  <p className="mt-5 border-l border-br-primary/25 pl-4 text-xs leading-relaxed text-br-muted">
                    Best for: {entry.bestFor}
                  </p>
                  <span className="mt-8 flex items-center justify-between border-t editorial-rule pt-4 text-sm font-semibold text-br-primary">
                    {entry.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
