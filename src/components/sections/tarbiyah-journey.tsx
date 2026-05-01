"use client";

import { Section } from "@/components/ui/section";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { BookOpen, CalendarDays, Compass, HeartHandshake } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: HeartHandshake,
    title: "Begin with the parent",
    description: "A child cannot be led into what the home has not learned to value. We start by helping parents strengthen their own understanding and intention.",
    highlights: ["Parent formation", "Sound foundations"]
  },
  {
    id: "02",
    icon: CalendarDays,
    title: "Shape a household rhythm",
    description: "Tarbiyah becomes real in repeated moments: names, adhkar, salah, stories, manners, and gentle conversations that return again and again.",
    highlights: ["Daily practice", "Repeatable routines"]
  },
  {
    id: "03",
    icon: BookOpen,
    title: "Choose tools with purpose",
    description: "Resources should not add noise. Each brilliantroots product is designed to support a clear part of the parent journey.",
    highlights: ["Child-ready tools", "Coherent ecosystem"]
  },
  {
    id: "04",
    icon: Compass,
    title: "Grow with guidance",
    description: "Families need reminders, encouragement, and a path back when life gets busy. The journey is built for steady return, not perfection.",
    highlights: ["Community support", "Gentle next steps"]
  }
];

export function TarbiyahJourney() {
  return (
    <Section id="tarbiyah-journey" background="bg">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 pt-16 pb-24 border-t border-br-border/50">
        
        <div className="mb-16 max-w-3xl">
          <AnimateIn>
            <div className="flex items-center gap-2 mb-6 text-sm font-mono tracking-tight text-br-primary uppercase">
              <span>— 01 THE PARENT JOURNEY</span>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.1}>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.03em] font-bold text-br-text mb-6">
              Most parents do not need more noise.<br className="hidden md:block" />
              <span className="text-br-primary">They need a path.</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-lg text-br-muted leading-relaxed">
              The desire is already there: to raise children upon Qur&apos;an and Sunnah with love, 
              confidence, and consistency. The challenge is knowing what to do next when advice, 
              products, and routines all feel disconnected.
            </p>
          </AnimateIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.id}>
              <div className="group relative bg-br-card rounded-2xl p-8 border border-br-border hover:border-br-primary/50 transition-colors duration-300 h-full flex flex-col shadow-sm">
                
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm tracking-tight text-br-primary/70">
                    {"//"} {step.id}
                  </span>
                  <step.icon className="w-5 h-5 text-br-muted group-hover:text-br-primary transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-br-text mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-br-muted leading-relaxed mb-8 flex-grow">
                  {step.description}
                </p>

                {/* Optional Highlights */}
                <div className="space-y-2 mt-auto pt-6 border-t border-br-border/50">
                  {step.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-br-muted">
                      <span className="text-br-primary mt-1 text-[10px]">♦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </Section>
  );
}
