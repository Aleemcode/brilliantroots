import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/site-frame";
import { CheckList, CTASection, DetailPanel } from "@/components/page/cards";
import { PageHero } from "@/components/page/page-hero";
import { tools, type ToolSlug } from "@/lib/site-content";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);

  return {
    title: tool ? `${tool.title} | brilliantroots` : "Tool | brilliantroots",
    description: tool?.purpose,
  };
}

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === (slug as ToolSlug));

  if (!tool) {
    notFound();
  }

  return (
    <SiteFrame>
      <PageHero
        eyebrow={tool.subtitle}
        title={tool.title}
        body={tool.purpose}
        primary={
          tool.websiteHref
            ? { label: `Visit ${tool.title}`, href: tool.websiteHref }
            : { label: `Open ${tool.pathway}`, href: tool.pathwayHref }
        }
        secondary={{ label: "All tools", href: "/tools" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <DetailPanel title="Best fit">
            <p>{tool.bestFor}</p>
          </DetailPanel>
          <div className="rounded-2xl border border-br-border bg-br-surface p-6 shadow-soft dark:shadow-none">
            <h2 className="text-xl font-semibold tracking-tight text-br-text">Why this tool exists</h2>
            <div className="mt-5">
              <CheckList items={tool.details} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="See the pathway before choosing."
        body="This product belongs inside a parent journey. The pathway gives the context, practice, and next step."
        href={tool.pathwayHref}
        label={tool.pathway}
      />
    </SiteFrame>
  );
}
