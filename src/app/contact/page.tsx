import { SiteFrame } from "@/components/site-frame";
import { DetailPanel, CTASection } from "@/components/page/cards";
import { PageHero } from "@/components/page/page-hero";

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="CONTACT"
        title="Ask a clearer question. Get routed to the right support."
        body="Contact should handle product questions, pathway guidance, community inquiries, wholesale/publishing questions, and general support without making every visitor guess where to go."
        primary={{ label: "Start here instead", href: "/start-here" }}
        secondary={{ label: "About brilliantroots", href: "/about" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <DetailPanel title="Product questions">
            <p>For fit, availability, usage, age/stage, and which pathway a tool belongs to.</p>
          </DetailPanel>
          <DetailPanel title="Pathway guidance">
            <p>For parents who know something needs attention, but do not yet know where to begin.</p>
          </DetailPanel>
          <DetailPanel title="Community">
            <p>For continuity, reminders, etiquette, and joining future parent support spaces.</p>
          </DetailPanel>
          <DetailPanel title="Partnerships">
            <p>For wholesale, school, publishing, author, or broader ecosystem conversations.</p>
          </DetailPanel>
        </div>
      </section>

      <CTASection
        title="Most visitors should not need contact first."
        body="A strong IA answers the common questions through Start Here, Pathways, Tools, Library, and About."
        href="/pathways"
        label="Explore pathways"
      />
    </SiteFrame>
  );
}
