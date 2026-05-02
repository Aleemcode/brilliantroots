import { SiteFrame } from "@/components/site-frame";
import { DetailPanel, CTASection } from "@/components/page/cards";
import { IntentionalityStrip } from "@/components/page/intentionality-strip";
import { PageHero } from "@/components/page/page-hero";

export default function MethodPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="THE METHOD"
        title="Intentionality is the operating system."
        body="brilliantroots helps Muslim families move from sincere but scattered concern to deliberate, grounded, repeatable tarbiyah choices."
        primary={{ label: "Explore pathways", href: "/pathways" }}
        secondary={{ label: "Start here", href: "/start-here" }}
      />

      <IntentionalityStrip />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <DetailPanel title="Not a shop first">
            <p>Products are useful only when they serve a known tarbiyah intention and fit the family&apos;s stage.</p>
          </DetailPanel>
          <DetailPanel title="Not a content library first">
            <p>More Islamic content does not automatically create clarity. The method helps parents choose and practice.</p>
          </DetailPanel>
          <DetailPanel title="Parent before product">
            <p>The parent needs grounding, language, and a small repeatable action before the tool can do its best work.</p>
          </DetailPanel>
          <DetailPanel title="Continuity after purchase">
            <p>A tool should lead into reminders, practice, related pathways, and community support instead of ending at checkout.</p>
          </DetailPanel>
        </div>
      </section>

      <CTASection
        title="The method becomes visible through pathways."
        body="Each pathway translates intention into parent understanding, family practice, and fitting support."
        href="/pathways"
        label="View pathways"
      />
    </SiteFrame>
  );
}
