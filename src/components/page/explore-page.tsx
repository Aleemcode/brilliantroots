import { SiteFrame } from "@/components/site-frame";
import { CheckList, CTASection, RouteCard } from "@/components/page/cards";
import { PageHero } from "@/components/page/page-hero";
import { tools } from "@/lib/site-content";

export function ExplorePage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="EXPLORE"
        title="Products, tools, works, and guides in one place."
        body="Explore is the brilliantroots catalogue: a warm, practical way to find physical products, digital tools, published works, free guides, and parent resources without losing the intention behind them."
        primary={{ label: "Browse the catalogue", href: "/explore" }}
        secondary={{ label: "Read the Pathway", href: "/pathways" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-sm text-br-primary">CURATED SHELVES</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-br-text md:text-5xl">
              Choose the kind of support your home needs next.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-br-muted md:text-base">
              Each entry should make the purpose clear: what it serves, who it is for, and how it fits into family life.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {tools.map((tool) => (
              <RouteCard
                key={tool.slug}
                title={tool.title}
                body={tool.purpose}
                href={tool.websiteHref || `/tools/${tool.slug}`}
                meta={tool.subtitle}
                label="Open entry"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-br-bg py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="font-mono text-sm text-br-primary">CATALOGUE LOGIC</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-br-text md:text-4xl">
              Commerce, but with counsel.
            </h2>
            <p className="mt-5 leading-relaxed text-br-muted">
              Explore should help families make a fit-based decision, not push every visitor into the same buying path.
            </p>
          </div>
          <CheckList
            items={[
              "Group entries by purpose: names, Qur'an, foundations, rhythm, adab, or screen-light learning.",
              "Make the format visible: product, digital tool, published work, free guide, or parental kit.",
              "Connect every entry to a pathway and a recommended household use.",
              "Let purchase, preorder, and waitlist CTAs follow the readiness of each entry.",
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Not sure where to begin?"
        body="Start with the Pathway and let the catalogue choice come after the intention."
        href="/pathways"
        label="Read the Pathway"
      />
    </SiteFrame>
  );
}
