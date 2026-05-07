import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFrame } from "@/components/site-frame";
import { Button } from "@/components/ui/button";

const principles = [
  "Products should serve a known family need.",
  "Guides should reduce confusion, not add pressure.",
  "Published works should reach homes with clarity and care.",
  "Tools should support correct manhaj and tarbiyah, not distract from them.",
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <section className="px-6 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36 lg:px-12">
        <div className="mx-auto max-w-7xl border-y-2 editorial-rule py-10">
          <p className="mb-6 max-w-max rounded-full border-2 border-[#BFD9FF] bg-[#EAF3FF] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#001F51] shadow-[0_2px_0_#BFD9FF]">About Us</p>
          <h1 className="mt-6 max-w-5xl text-[3rem] font-bold leading-[1.02] tracking-[-0.04em] text-br-text md:text-[5.5rem]">
            Tools, works, and guidance for Muslim homes with intention.
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-br-muted">
            brilliantroots exists to support parents, prospective spouses, and families with products, tools, Pathway guides, and published works that help nurture faith, learning, adab, and family life upon correct manhaj and tarbiyah.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="paper-panel rounded-[18px] p-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-br-primary">Mission</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-br-text">
              Parent clarity before product noise.
            </h2>
          </div>
          <div className="paper-panel rounded-[18px] p-8">
            <ul className="space-y-4">
              {principles.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-br-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-br-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="paper-panel mx-auto max-w-7xl rounded-[22px] p-8 md:p-10">
          <p className="font-serif text-3xl italic leading-tight text-br-text md:text-5xl">
            We are not trying to become another Islamic shop. We are building a clearer way for Muslim homes to choose what is beneficial.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/explore">
                Explore the Catalogue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" className="bg-br-surface/40">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
