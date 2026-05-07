"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate";
import { ArrowRight, BookOpen, Compass, Package, PenTool } from "lucide-react";

const catalogueNotes = [
  {
    label: "Products",
    title: "Useful tools for learning, worship, adab, and routine.",
    icon: Package,
  },
  {
    label: "Pathway",
    title: "Guides for prospective spouses and Muslim homes seeking clarity.",
    icon: Compass,
  },
  {
    label: "Published Works",
    title: "Paid and free works selected for benefit and family use.",
    icon: BookOpen,
  },
  {
    label: "Tools",
    title: "Digital support like Baytul Asmaa, with more aids to come.",
    icon: PenTool,
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[86vh] flex-col justify-center overflow-hidden px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
      <div className="absolute inset-x-0 top-20 mx-auto h-px max-w-7xl bg-br-border/70" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <AnimateIn delay={0.1}>
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.16em] text-br-primary">
              Products, tools, and guidance for Muslim homes
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h1 className="max-w-4xl text-[3rem] font-bold leading-[1.02] tracking-[-0.04em] text-br-text md:text-[4.75rem] lg:text-[5.7rem]">
              Build a home that grows in faith, learning, and adab.
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-br-muted md:text-xl">
              brilliantroots creates Islamic products, parenting tools, Pathway guides, and curated published works for Muslim parents and prospective spouses who want clarity before they choose what enters the home.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                <Link href="/explore">
                  Explore the Catalogue
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full bg-br-surface/45 sm:w-auto">
                <Link href="/pathways">Read the Pathway</Link>
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            <p className="mt-7 max-w-2xl border-l border-br-primary/35 pl-4 font-serif text-base italic leading-relaxed text-br-muted">
              Useful tools. Beneficial works. Guidance for families trying to nurture righteous roots.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.25} direction="right">
          <div className="paper-panel relative overflow-hidden rounded-[24px] p-4 md:p-5">
            <div className="border-b editorial-rule px-2 pb-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-br-primary">Explore Shelf</p>
              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight text-br-text md:text-4xl">
                Choose what serves the home, not what merely fills it.
              </h2>
            </div>
            <div className="divide-y divide-br-border/60">
              {catalogueNotes.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.label === "Pathway" ? "/pathways" : "/explore"}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 px-2 py-5 transition-colors hover:bg-br-primary-soft/45"
                >
                  <span className="font-mono text-xs text-br-muted">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-br-text">
                      <item.icon className="h-4 w-4 text-br-primary" />
                      {item.label}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-br-muted">{item.title}</span>
                  </span>
                  <ArrowRight className="mt-1 h-4 w-4 text-br-muted transition-all group-hover:translate-x-1 group-hover:text-br-primary" />
                </Link>
              ))}
            </div>
            <div className="mt-3 rounded-[16px] border border-br-primary/20 bg-br-primary-soft/55 p-4">
              <p className="text-sm leading-relaxed text-br-text">
                Explore is the public catalogue. Products, tools, and works remain clear as types inside one calmer discovery experience.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
