import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
import { pathways } from "@/lib/site-content";

export default function PathwaysPage() {
  return (
    <SiteFrame>
      <section className="px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-7xl border-y editorial-rule py-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Pathway</p>
          <h1 className="mt-6 max-w-5xl text-[3rem] font-bold leading-[1.02] tracking-[-0.04em] text-br-text md:text-[5.5rem]">
            Guidance for the home you are preparing, building, or strengthening.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-br-muted">
            Pathway is a content hub for prospective spouses, parents, and families who want clarity in faith, family life, learning, adab, and growth in eeman before choosing routines, products, and resources.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#guides">Read the Guides</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-br-surface/40">
              <Link href="/explore">Explore Related Support</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="guides" className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pathways.map((pathway) => (
              <Link
                key={pathway.slug}
                href={pathway.href}
                className="paper-panel group flex min-h-full flex-col rounded-[18px] p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-br-primary">{pathway.shortTitle}</p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-br-text">{pathway.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-br-muted">{pathway.intent}</p>
                <span className="mt-8 flex items-center justify-between border-t editorial-rule pt-4 text-sm font-semibold text-br-primary">
                  Read guide
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
