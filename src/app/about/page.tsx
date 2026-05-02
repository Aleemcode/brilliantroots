import { SiteFrame } from "@/components/site-frame";
import { CheckList, CTASection, DetailPanel } from "@/components/page/cards";
import { PageHero } from "@/components/page/page-hero";

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="ABOUT"
        title="A tarbiyah ecosystem for intentional Muslim families."
        body="brilliantroots exists to help parents make grounded, purposeful choices in the home: what to learn, what to practice, which tools to use, and how to continue."
        primary={{ label: "Read the method", href: "/library/method" }}
        secondary={{ label: "Contact", href: "/contact" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <DetailPanel title="Mission">
            <p>To help Muslim families turn sincere concern into deliberate, repeatable tarbiyah choices rooted in Qur&apos;an and Sunnah, upon the understanding of the Salaf.</p>
          </DetailPanel>
          <DetailPanel title="What brilliantroots avoids">
            <p>Scattered content, product-first pressure, vague inspiration, and tools without parent context.</p>
          </DetailPanel>
          <div className="rounded-2xl border border-br-border bg-br-surface p-6 shadow-soft dark:shadow-none md:col-span-2">
            <h2 className="text-xl font-semibold tracking-tight text-br-text">Trust questions this page should keep answering</h2>
            <div className="mt-5">
              <CheckList
                items={[
                  "Who is behind brilliantroots?",
                  "What methodology guides the work?",
                  "How are resources reviewed?",
                  "What does brilliantroots include, avoid, and defer to people of knowledge?",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Trust should lead back into practice."
        body="About is not a dead-end page. It should help a parent understand the mission and then choose the right next step."
        href="/start-here"
        label="Start the journey"
      />
    </SiteFrame>
  );
}
