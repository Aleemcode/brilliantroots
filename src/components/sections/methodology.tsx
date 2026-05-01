"use client";

import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate";

export function Methodology() {
  return (
    <Section id="methodology" background="bg">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 py-24 border-t border-br-border/50">
        
        {/* Header Area */}
        <div className="mb-20 max-w-3xl">
          <AnimateIn>
            <div className="flex items-center gap-2 mb-6 text-sm font-mono tracking-tight text-br-primary uppercase">
              <span>— 04 METHOD & TRUST</span>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.1}>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.03em] font-bold text-br-text mb-6">
              A quieter standard for family resources.<br />
              <span className="text-br-primary">Grounded before it is beautiful.</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-lg text-br-muted leading-relaxed max-w-2xl">
              The goal is not to make Islamic learning feel like another trend. The goal is to help 
              the home preserve what is true, practice what is beneficial, and avoid overwhelm.
            </p>
          </AnimateIn>
        </div>

        {/* Comparison Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Column: Typical Store */}
          <AnimateIn delay={0.3}>
            <div className="h-full bg-br-card rounded-2xl p-8 border border-br-border shadow-sm dark:shadow-none">
              <div className="mb-8">
                <span className="font-mono text-xs tracking-tight text-br-muted uppercase">
                  {"// WHAT OFTEN HAPPENS"}
                </span>
              </div>
              
              <ul className="space-y-6">
                {[
                  "Advice arrives in fragments with no clear first step",
                  "Beautiful products compete for attention without a household rhythm",
                  "Parents feel responsible but under-equipped",
                  "Children receive resources before the home has a shared method"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-br-muted">
                    <span className="text-br-muted/50 font-mono mt-0.5">x</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Right Column: Brilliantroots */}
          <AnimateIn delay={0.4}>
            <div className="h-full bg-br-primary-soft rounded-2xl p-8 border border-br-primary/20 shadow-sm dark:shadow-none">
              <div className="mb-8">
                <span className="font-mono text-xs tracking-tight text-br-primary uppercase">
                  {"// THE GUIDED JOURNEY"}
                </span>
              </div>
              
              <ul className="space-y-6">
                {[
                  "Begin with parent clarity and sound foundations",
                  "Build repeatable family rhythms before adding more",
                  "Choose tools that match a real stage in the journey",
                  "Return often to Qur'an, Sunnah, and the understanding of the Salaf"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-br-text font-medium">
                    <span className="text-br-primary font-mono mt-0.5">→</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

        </div>
      </div>
    </Section>
  );
}
