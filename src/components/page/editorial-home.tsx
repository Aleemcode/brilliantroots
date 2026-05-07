"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Package, PenLine, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const exploreEntries = [
  {
    type: "Product",
    title: "MQCD: My Qur'an Companion Device",
    body: "A screen-light Qur'an companion designed to support listening, repetition, memorization, and beneficial audio in the home.",
    href: "/tools/quran-companion-device",
    image: "/mqcd-device.png",
    cta: "View MQCD",
    icon: Package,
  },
  {
    type: "Product",
    title: "Tarbiyah Pack",
    body: "A family learning pack for Qur'an listening, salah, adab, Qur'an knowledge, and eeman-building routines.",
    href: "/explore",
    image: "/tarbiyah-corner-book.png",
    cta: "View Tarbiyah Pack",
    icon: Sparkles,
  },
  {
    type: "Tool",
    title: "Baytul Asmaa",
    body: "A digital support tool for Muslim families choosing names with meaning, confidence, pronunciation, and reflection.",
    href: "https://baytul-asmaa.com/",
    image: "/baytul-asmaa-platform.png",
    cta: "Open Tool",
    icon: PenLine,
  },
];

const pathwayAudiences = [
  "Prospective spouses preparing for family life",
  "Families needing clarity before adding more resources",
  "Homes with foundation who want to consolidate and grow in eeman",
];

const publishedWorks = [
  {
    label: "Published Work",
    title: "[Placeholder] The Intentional Muslim Home",
    body: "A replaceable title for a future paid or free work that helps parents build clarity at home.",
  },
  {
    label: "Free Guide",
    title: "[Placeholder] A Parent's Weekly Tarbiyah Note",
    body: "A replaceable free guide for one small family action, reflection, or routine.",
  },
  {
    label: "Author Resource",
    title: "[Placeholder] Beneficial Work Submission",
    body: "A future entry point for Muslim writers whose work can serve families with care.",
  },
];

function EditorialCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`paper-panel overflow-hidden rounded-[18px] ${className}`}>{children}</div>;
}

export function EditorialHome() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <AnimateIn>
              <p className="mb-6 max-w-max border-y editorial-rule py-3 font-mono text-xs uppercase tracking-[0.18em] text-br-primary">
                Products, tools, and guidance for Muslim homes
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="max-w-5xl text-[3rem] font-bold leading-[1.01] tracking-[-0.04em] text-br-text md:text-[5rem] lg:text-[6.25rem]">
                Build a home that grows in faith, learning, and adab.
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.16}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-br-muted md:text-xl">
                brilliantroots creates Islamic products, parenting tools, Pathway guides, and curated published works for Muslim parents and prospective spouses who want clarity before they choose what enters the home.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/explore">
                    Explore the Catalogue
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="bg-br-surface/40">
                  <Link href="/pathways">Read the Pathway</Link>
                </Button>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.18} direction="right">
            <EditorialCard>
              <div className="grid grid-cols-[4.5rem_1fr] border-b editorial-rule">
                <div className="flex items-center justify-center border-r editorial-rule font-mono text-xs text-br-muted">01</div>
                <div className="p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">brilliantroots</p>
                  <p className="mt-4 font-serif text-3xl italic leading-tight text-br-text">
                    Useful tools. Beneficial works. Guidance for families trying to nurture righteous roots.
                  </p>
                </div>
              </div>
              <div className="grid divide-y divide-br-border/45">
                {["Products", "Pathway", "Published Works", "Tools"].map((item) => (
                  <Link key={item} href={item === "Pathway" ? "/pathways" : "/explore"} className="group flex items-center justify-between px-5 py-4 text-sm font-semibold text-br-text transition hover:bg-br-primary-soft/45">
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-br-muted transition group-hover:translate-x-1 group-hover:text-br-primary" />
                  </Link>
                ))}
              </div>
            </EditorialCard>
          </AnimateIn>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 border-y editorial-rule py-10 md:grid-cols-[0.75fr_1.25fr]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Explore</p>
            <div>
              <h2 className="text-4xl font-bold leading-tight tracking-[-0.035em] text-br-text md:text-6xl">
                Practical support for learning, worship, adab, and family life.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-br-muted">
                Start with the support that fits your family&apos;s current need. Some entries are ready to buy, some open for preorder, some are free to read, and others are being prepared for launch.
              </p>
            </div>
          </div>

          <StaggerContainer className="grid gap-5 md:grid-cols-3">
            {exploreEntries.map((entry, index) => (
              <StaggerItem key={entry.title}>
                <Link href={entry.href} className="group block h-full">
                  <EditorialCard className="flex h-full flex-col">
                    <div className="grid grid-cols-[4rem_1fr] border-b editorial-rule">
                      <div className="flex items-center justify-center border-r editorial-rule font-mono text-xs text-br-muted">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="flex items-center justify-between gap-4 p-4">
                        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-br-primary">{entry.type}</span>
                        <entry.icon className="h-4 w-4 text-br-primary" />
                      </div>
                    </div>
                    <div className="relative m-4 aspect-[1.12] overflow-hidden rounded-[12px] border editorial-rule bg-br-card/70">
                      <Image src={entry.image} alt={entry.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <div className="flex flex-1 flex-col p-6 pt-2">
                      <h3 className="text-3xl font-semibold leading-[1.05] tracking-tight text-br-text">{entry.title}</h3>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-br-muted">{entry.body}</p>
                      <span className="mt-8 flex items-center justify-between border-t editorial-rule pt-4 text-sm font-semibold text-br-primary">
                        {entry.cta}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </EditorialCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Pathway</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-br-text md:text-6xl">
              Guidance before the next purchase.
            </h2>
          </div>
          <EditorialCard>
            <div className="border-b editorial-rule p-6">
              <p className="text-lg leading-relaxed text-br-muted">
                Pathway is a guide for prospective spouses, families that need clarity, and families with foundation who want to consolidate that background and grow in eeman.
              </p>
            </div>
            <div className="divide-y divide-br-border/45">
              {pathwayAudiences.map((item, index) => (
                <div key={item} className="grid grid-cols-[4rem_1fr]">
                  <div className="flex items-center justify-center border-r editorial-rule font-mono text-xs text-br-muted">{String(index + 1).padStart(2, "0")}</div>
                  <p className="p-5 text-sm font-medium leading-relaxed text-br-text">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6">
              <Button asChild variant="secondary" className="bg-br-surface/40">
                <Link href="/pathways">Read Pathway Guides</Link>
              </Button>
            </div>
          </EditorialCard>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Our Published Works</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-br-text md:text-6xl">
              Curated Muslim works for parents, readers, and growing homes.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {publishedWorks.map((work) => (
              <EditorialCard key={work.title} className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-br-primary">{work.label}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-br-text">{work.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-br-muted">{work.body}</p>
              </EditorialCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <EditorialCard className="p-8">
            <Quote className="h-8 w-8 text-br-primary" />
            <h2 className="mt-8 text-3xl font-semibold tracking-tight text-br-text">Parent testimonial prompt</h2>
            <p className="mt-4 text-sm leading-relaxed text-br-muted">
              What changed in your home after using a brilliantroots product or guide? What became easier, clearer, or more consistent?
            </p>
          </EditorialCard>
          <EditorialCard className="p-8">
            <HeartHandshake className="h-8 w-8 text-br-primary" />
            <h2 className="mt-8 text-3xl font-semibold tracking-tight text-br-text">Author testimonial prompt</h2>
            <p className="mt-4 text-sm leading-relaxed text-br-muted">
              How did brilliantroots help your work reach Muslim families with clarity, care, and benefit?
            </p>
          </EditorialCard>
        </div>
      </section>
    </>
  );
}
