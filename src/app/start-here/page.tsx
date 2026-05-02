import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SiteFrame } from "@/components/site-frame";
import { CTASection, DetailPanel, RouteCard } from "@/components/page/cards";
import { IntentionalityStrip } from "@/components/page/intentionality-strip";
import { PageHero } from "@/components/page/page-hero";
import { Button } from "@/components/ui/button";
import { startPaths } from "@/lib/site-content";

export default function StartHerePage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="START HERE"
        title="Begin with the parent need, not the product."
        body="This page helps a parent choose the most intentional next step for their family. The goal is not to consume more, but to clarify what needs nurturing right now."
        primary={{ label: "Explore pathways", href: "/pathways" }}
        secondary={{ label: "Read the method", href: "/library/method" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-sm text-br-primary">PARENT DECISION POINT</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-br-text md:text-5xl">
              What are you trying to nurture first?
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {startPaths.map((path) => (
              <RouteCard
                key={path.title}
                title={path.title}
                body={path.body}
                href={path.href}
                label="Follow this route"
              />
            ))}
          </div>
        </div>
      </section>

      <IntentionalityStrip />

      <section className="bg-br-bg py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-3 lg:px-12">
          {startPaths.slice(0, 3).map((path) => (
            <DetailPanel key={path.title} title={path.title}>
              <p>{path.firstStep}</p>
            </DetailPanel>
          ))}
        </div>
      </section>

      <CTASection
        title="Still unsure? Start with the method."
        body="The method explains how brilliantroots turns sincere concern into a deliberate tarbiyah sequence."
        href="/library/method"
        label="Read the method"
      />

      <section className="bg-br-surface py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Button asChild variant="ghost">
            <Link href="/contact">
              Ask for help choosing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteFrame>
  );
}
