import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";

const entries = [
  {
    slug: "mqcd",
    type: "Product",
    title: "MQCD: My Qur'an Companion Device",
    body: "A screen-light Qur'an companion designed to support listening, repetition, memorization, and beneficial audio in the home.",
    image: "/mqcd-device.png",
    bestFor: "Young children, memorization support, bedtime listening, and family review routines.",
    benefits: [
      "Supports Qur'an listening without turning practice into more screen time.",
      "Gives children a simple, independent audio companion for review.",
      "Fits bedtime, school, madrasah, and family listening rhythms.",
    ],
    status: "Preorder / Waitlist",
    primaryCta: "Join Waitlist",
  },
  {
    slug: "tarbiyah-pack",
    type: "Product",
    title: "Tarbiyah Pack",
    body: "A family learning pack that brings together MQCD, Solah Guide, Adab Flash Cards, Qur'an Knowledge Flash Cards, and an Eeman Pack.",
    image: "/tarbiyah-corner-book.png",
    bestFor: "Parents who want a joined-up learning kit instead of separate disconnected resources.",
    benefits: [
      "Combines listening, worship, adab, Qur'an knowledge, and eeman-building prompts.",
      "Helps parents create a calmer learning shelf at home.",
      "Designed for family use, not isolated product collecting.",
    ],
    status: "Coming Soon",
    primaryCta: "Get Launch Updates",
  },
  {
    slug: "modern-quran-stand",
    type: "Product",
    title: "Modern Qur'an Stand",
    body: "A simple, dignified stand for Qur'an reading, review, and family learning spaces.",
    image: "/guide-poses/guide_pose_pointing_up_1777588956957.png",
    bestFor: "Families creating a dedicated, respectful reading and review area.",
    benefits: [
      "Helps make Qur'an reading visible and cared for in the home.",
      "Supports individual review and family learning sessions.",
      "Keeps the learning space simple, dignified, and usable.",
    ],
    status: "Coming Soon",
    primaryCta: "Get Updates",
  },
  {
    slug: "intentional-muslim-home",
    type: "Published Work",
    title: "[Placeholder] The Intentional Muslim Home",
    body: "A replaceable title for a future work that supports Islamic learning, parenting, family formation, and beneficial reading.",
    image: "/guide-poses/guide_pose_pointing_left_1777589018178.png",
    bestFor: "Parents and prospective spouses who want deeper reading before choosing routines or tools.",
    benefits: [
      "Frames the home as a place of faith, learning, adab, and intention.",
      "Supports thoughtful reading before product decisions.",
      "Leaves room for future author-led works and brilliantroots publications.",
    ],
    status: "Placeholder",
    primaryCta: "Ask About Published Works",
  },
  {
    slug: "jumuah-digest",
    type: "Free Guide",
    title: "Jumu'ah Digest",
    body: "A weekly dose of bite-sized wisdom, insights, and beneficial perks to help intentional parents and families nurture righteous roots.",
    image: "/guide-poses/guide_pose_waving_1777588966929.png",
    bestFor: "Families who need one small action rather than another large plan.",
    benefits: [
      "Keeps intention alive through a weekly rhythm.",
      "Gives parents one practical prompt to carry into the home.",
      "Connects reading, reflection, and family practice.",
    ],
    status: "Free",
    primaryCta: "Join Digest Updates",
  },
];

type ExploreEntryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ExploreEntryPageProps) {
  const { slug } = await params;
  const entry = entries.find((item) => item.slug === slug);

  return {
    title: entry ? `${entry.title} | brilliantroots` : "Explore | brilliantroots",
    description: entry?.body,
  };
}

export default async function ExploreEntryPage({ params }: ExploreEntryPageProps) {
  const { slug } = await params;
  const entry = entries.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <SiteFrame>
      <section className="px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-6 max-w-max rounded-full border-2 editorial-rule bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-br-primary shadow-[0_2px_0_var(--color-border)]">
              {entry.type} / {entry.status}
            </p>
            <h1 className="text-[3rem] font-bold leading-[1.02] tracking-[-0.04em] text-br-text md:text-[5.25rem]">
              {entry.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-br-muted">{entry.body}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  {entry.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-br-surface/40">
                <Link href="/explore">Back to Explore</Link>
              </Button>
            </div>
          </div>
          <div className="paper-panel overflow-hidden rounded-[22px] p-5">
            <div className="relative aspect-square overflow-hidden rounded-[16px] border-2 editorial-rule bg-br-surface-strong">
              <Image src={entry.image} alt={entry.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="paper-panel rounded-[18px] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Best For</p>
            <p className="mt-5 text-lg leading-relaxed text-br-text">{entry.bestFor}</p>
          </div>
          <div className="paper-panel rounded-[18px] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Key Benefits</p>
            <ul className="mt-6 space-y-4">
              {entry.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-br-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-br-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
