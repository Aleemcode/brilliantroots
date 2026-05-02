import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/site-frame";
import { CTASection, DetailPanel } from "@/components/page/cards";
import { PageHero } from "@/components/page/page-hero";
import { pathways, type PathwaySlug } from "@/lib/site-content";

type PathwayPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pathways.map((pathway) => ({ slug: pathway.slug }));
}

export async function generateMetadata({ params }: PathwayPageProps) {
  const { slug } = await params;
  const pathway = pathways.find((item) => item.slug === slug);

  return {
    title: pathway ? `${pathway.title} | brilliantroots` : "Pathway | brilliantroots",
    description: pathway?.intent,
  };
}

export default async function PathwayDetailPage({ params }: PathwayPageProps) {
  const { slug } = await params;
  const pathway = pathways.find((item) => item.slug === (slug as PathwaySlug));

  if (!pathway) {
    notFound();
  }

  return (
    <SiteFrame>
      <PageHero
        eyebrow="PATHWAY DETAIL"
        title={pathway.title}
        body={pathway.intent}
        primary={{ label: pathway.nextStep, href: pathway.nextStepHref }}
        secondary={{ label: "All pathways", href: "/pathways" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <DetailPanel title="The parent problem">
            <p>{pathway.problem}</p>
          </DetailPanel>
          <DetailPanel title="The tarbiyah principle">
            <p>{pathway.principle}</p>
          </DetailPanel>
          <DetailPanel title="Practice this week">
            <p>{pathway.practice}</p>
          </DetailPanel>
          <DetailPanel title="Recommended support">
            <p>{pathway.tool}</p>
          </DetailPanel>
        </div>
      </section>

      <CTASection
        title={`Use this pathway with ${pathway.recommendedTool}.`}
        body="The tool is positioned inside the parent journey, so the family knows why it belongs and how to use it."
        href={pathway.recommendedToolHref}
        label={pathway.recommendedTool}
      />
    </SiteFrame>
  );
}
