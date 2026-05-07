import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";
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

  const sections = [
    ["The clarity needed", pathway.problem],
    ["The principle", pathway.principle],
    ["Practice this week", pathway.practice],
    ["Relevant support", pathway.tool],
  ];

  return (
    <SiteFrame>
      <section className="px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-7xl border-y-2 editorial-rule py-10">
          <p className="mb-6 max-w-max rounded-full border-2 border-[#B9F0D6] bg-[#E7FAF2] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#052E1C] shadow-[0_2px_0_#B9F0D6]">Pathway Guide</p>
          <h1 className="mt-6 max-w-5xl text-[3rem] font-bold leading-[1.02] tracking-[-0.04em] text-br-text md:text-[5.25rem]">
            {pathway.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-br-muted">{pathway.intent}</p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {sections.map(([title, body], index) => (
            <div key={title} className="paper-panel rounded-[18px] p-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-br-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-br-text">{title}</h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-br-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="paper-panel mx-auto grid max-w-7xl gap-8 rounded-[22px] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Next faithful step</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-br-text">Continue with intention.</h2>
          </div>
          <div>
            <ul className="space-y-4">
              {["Read the guide first.", "Choose one practice for the week.", "Explore support only after the purpose is clear."].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-br-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-br-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href={pathway.nextStepHref}>
                  {pathway.nextStep}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="bg-br-surface/40">
                <Link href="/pathways">All Pathway Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
