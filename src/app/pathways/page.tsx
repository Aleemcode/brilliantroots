import { SiteFrame } from "@/components/site-frame";
import { CTASection, RouteCard } from "@/components/page/cards";
import { IntentionalityStrip } from "@/components/page/intentionality-strip";
import { PageHero } from "@/components/page/page-hero";
import { pathways } from "@/lib/site-content";

export default function PathwaysPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="PATHWAYS"
        title="Intentional tarbiyah needs a sequence."
        body="Pathways are the signature structure of brilliantroots: a parent intention translated into understanding, household practice, tools, and continuity."
        primary={{ label: "Start with foundations", href: "/pathways/foundations" }}
        secondary={{ label: "Use Start Here", href: "/start-here" }}
      />

      <IntentionalityStrip />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-sm text-br-primary">CHOOSE A PATHWAY</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-br-text md:text-5xl">
              Each route starts with an intention, then gives the family a next practice.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pathways.map((pathway) => (
              <RouteCard
                key={pathway.slug}
                title={pathway.shortTitle}
                body={pathway.intent}
                href={pathway.href}
                label="Open pathway"
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Tools come after the pathway."
        body="This keeps brilliantroots from feeling like a shop first. The parent understands the purpose before choosing support."
        href="/tools"
        label="Explore tools"
      />
    </SiteFrame>
  );
}
