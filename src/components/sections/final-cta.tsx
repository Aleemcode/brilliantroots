"use client";

import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate";

export function FinalCTA() {
  return (
    <section className="bg-br-primary-dark py-24 md:py-32 relative overflow-hidden border-t border-br-primary/30">
      {/* Subtle decorative motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-br-primary rounded-bl-[400px] opacity-25 -translate-y-1/2 translate-x-1/3 pointer-events-none transition-colors duration-700" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-br-secondary rounded-tr-[400px] opacity-20 translate-y-1/2 -translate-x-1/2 pointer-events-none transition-colors duration-700" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 text-center">
        <AnimateIn>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/15">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.03em] font-bold text-white mb-6">
            Take the next faithful step.
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto font-serif italic leading-relaxed">
            A strong home is not built in one dramatic moment. It grows through sincere intention, 
            sound guidance, and small acts repeated by Allah&apos;s permission.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              Start With the Digest
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[200px] border-white/20 bg-white/10 text-white hover:bg-white/15">
              Explore the Ecosystem
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
