import { SiteFrame } from "@/components/site-frame";
import { CheckList, CTASection, DetailPanel } from "@/components/page/cards";
import { PageHero } from "@/components/page/page-hero";

export default function JumuahDigestPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="JUMU'AH DIGEST"
        title="One weekly reminder for intentional family practice."
        body="The digest gives parents a small return point each week: one reflection, one household practice, and one route back into the brilliantroots ecosystem."
        primary={{ label: "Read the method", href: "/library/method" }}
        secondary={{ label: "All library", href: "/library" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <DetailPanel title="Who it serves">
            <p>Parents who want to keep tarbiyah present in the home without beginning a large curriculum every week.</p>
          </DetailPanel>
          <DetailPanel title="How it works">
            <p>Each issue should connect to one pathway, one parent reflection, one child-facing conversation, and one practical step.</p>
          </DetailPanel>
          <div className="rounded-2xl border border-br-border bg-br-surface p-6 shadow-soft dark:shadow-none md:col-span-2">
            <h2 className="text-xl font-semibold tracking-tight text-br-text">Digest structure</h2>
            <div className="mt-5">
              <CheckList
                items={[
                  "A short parent note that names the intention.",
                  "One household practice that can happen this week.",
                  "A related pathway for deeper context.",
                  "A recommended tool only when it genuinely supports the practice.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Use the digest as continuity."
        body="The digest should keep families returning to the work after a page visit, product choice, or community conversation."
        href="/start-here"
        label="Choose a starting point"
      />
    </SiteFrame>
  );
}
