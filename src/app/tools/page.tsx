import { SiteFrame } from "@/components/site-frame";
import { CheckList, CTASection, RouteCard } from "@/components/page/cards";
import { PageHero } from "@/components/page/page-hero";
import { tools } from "@/lib/site-content";

export default function ToolsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="TOOLS"
        title="Choose support after you know the intention."
        body="brilliantroots tools are not isolated products. Each one belongs to a parent need, a pathway, and a practical rhythm in the home."
        primary={{ label: "Find a pathway first", href: "/pathways" }}
        secondary={{ label: "Start here", href: "/start-here" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-sm text-br-primary">TOOL FINDER</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-br-text md:text-5xl">
              Every product page should answer what it serves, who it is for, and how to use it.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {tools.map((tool) => (
              <RouteCard
                key={tool.slug}
                title={tool.title}
                body={tool.purpose}
                href={`/tools/${tool.slug}`}
                meta={tool.subtitle}
                label="View tool"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-br-bg py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="font-mono text-sm text-br-primary">SELECTION LOGIC</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-br-text md:text-4xl">
              A calmer product system.
            </h2>
            <p className="mt-5 leading-relaxed text-br-muted">
              The tools page should help parents make a fit-based decision, not push every visitor into the same buying path.
            </p>
          </div>
          <CheckList
            items={[
              "Filter by need: names, Qur'an, foundations, rhythm, adab, or screen-light learning.",
              "Filter by stage: expecting parents, early years, young children, older children, or parent-only.",
              "Connect every product to a pathway and a recommended weekly use.",
              "Keep future commerce behind the guidance structure instead of replacing it.",
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Not sure which tool fits?"
        body="Start with the parent journey and let the product choice come after the intention."
        href="/start-here"
        label="Use Start Here"
      />
    </SiteFrame>
  );
}
