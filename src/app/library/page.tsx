import { SiteFrame } from "@/components/site-frame";
import { CTASection, RouteCard } from "@/components/page/cards";
import { PageHero } from "@/components/page/page-hero";

const libraryRoutes = [
  {
    title: "Jumu'ah Digest",
    href: "/library/jumuah-digest",
    body: "A weekly low-friction reminder that helps parents return to one intentional practice.",
  },
  {
    title: "The brilliantroots Method",
    href: "/library/method",
    body: "The operating system behind the site: intention, understanding, practice, tools, and continuity.",
  },
  {
    title: "Parent Guides",
    href: "/library",
    body: "Longer guidance for foundations, family rhythm, adab, and choosing tools. Coming as the library grows.",
  },
  {
    title: "Family Routines",
    href: "/library",
    body: "Simple repeatable household rhythms that make tarbiyah easier to sustain. Coming as the practice layer grows.",
  },
];

export default function LibraryPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="LIBRARY"
        title="Keep intention alive through the week."
        body="The library is the practice layer: digest, guides, routines, and method pages that help families continue before and after choosing a tool."
        primary={{ label: "Read the method", href: "/library/method" }}
        secondary={{ label: "Open Jumu'ah Digest", href: "/library/jumuah-digest" }}
      />

      <section className="bg-br-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-2">
            {libraryRoutes.map((route) => (
              <RouteCard
                key={route.title}
                title={route.title}
                body={route.body}
                href={route.href}
                label="Open"
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="The library should support consistency, not content overload."
        body="Every guide, routine, and digest issue should connect back to a pathway or parent intention."
        href="/pathways"
        label="Explore pathways"
      />
    </SiteFrame>
  );
}
