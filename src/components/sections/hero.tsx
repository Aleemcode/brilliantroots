"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "intentional tarbiyah";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    // Initial delay before typing starts
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentText += fullText[currentIndex];
          setTypedText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Typing speed
      
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden min-h-[82vh] flex flex-col justify-center bg-br-bg">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 relative z-10 w-full text-center">
        
        {/* Pre-title with Typewriter Effect */}
        <AnimateIn delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-8 text-sm md:text-base font-mono tracking-tight text-br-muted h-6">
            <span className="text-br-primary">$</span> 
            <span>{typedText}</span>
            <span className="w-[8px] h-[18px] bg-br-primary/70 animate-pulse ml-0.5"></span>
          </div>
        </AnimateIn>

        {/* Massive Headline */}
        <AnimateIn delay={0.2}>
          <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-[-0.04em] font-bold text-br-text mb-8 max-w-5xl mx-auto">
            Choose tarbiyah with intention.<br />
            <span className="text-br-primary">Then practice it at home.</span>
          </h1>
        </AnimateIn>

        {/* Subtitle */}
        <AnimateIn delay={0.3}>
          <p className="text-lg md:text-xl text-br-muted max-w-2xl mx-auto leading-relaxed mb-12">
            brilliantroots helps Muslim families turn sincere concern into deliberate choices: 
            clear pathways, household rhythms, and tools that serve a known purpose.
          </p>
        </AnimateIn>

        {/* CTA Buttons */}
        <AnimateIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
              <a href="#start-here">Start With Intention</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
              <a href="#pathways">Explore Pathways</a>
            </Button>
          </div>
        </AnimateIn>

        {/* Meta Info */}
        <AnimateIn delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-br-muted tracking-tight">
            <span>Rooted in Qur&apos;an & Sunnah</span>
            <span className="text-br-border hidden sm:block">·</span>
            <span>Understanding of the Salaf</span>
            <span className="text-br-border hidden sm:block">·</span>
            <span>Tools With Purpose</span>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
