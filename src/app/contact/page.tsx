import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";

const routes = [
  ["Product Questions", "Ask about fit, availability, preorder, age/stage, or how a product should be used at home."],
  ["Publishing Inquiries", "Ask about published works, author submissions, collaboration, or distribution."],
  ["Parent Support", "Ask about Pathway guides, family clarity, or which support may fit your current season."],
  ["General Questions", "Reach out for anything else connected to brilliantroots."],
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <section className="px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-7xl border-y-2 editorial-rule py-10">
          <p className="mb-6 max-w-max rounded-full border-2 border-[#FFC9AE] bg-[#FFF0E8] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#431407] shadow-[0_2px_0_#FFC9AE]">Contact Us</p>
          <h1 className="mt-6 max-w-5xl text-[3rem] font-bold leading-[1.02] tracking-[-0.04em] text-br-text md:text-[5.5rem]">
            Ask the right question. We will route it with care.
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-br-muted">
            Use this page for product questions, publishing inquiries, author submissions, parent support, and general questions.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {routes.map(([title, body], index) => (
            <div key={title} className="paper-panel rounded-[18px] p-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-br-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-br-text">{title}</h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-br-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="paper-panel mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[22px] p-8 md:flex-row md:items-center md:p-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-br-primary">Next</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.035em] text-br-text">
              Most visitors should find clarity before contacting us.
            </h2>
          </div>
          <Button asChild size="lg">
            <Link href="/explore">
              Browse Explore
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteFrame>
  );
}
