"use client";

import { Section } from "@/components/ui/section";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { BookOpen, CalendarDays, Compass, HeartHandshake, Repeat } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: HeartHandshake,
    title: "Intend",
    description: "Clarify what you are trying to nurture before adding another book, device, routine, or lesson.",
    highlights: ["Purpose first", "Parent clarity"]
  },
  {
    id: "02",
    icon: BookOpen,
    title: "Understand",
    description: "Learn the principle, parent role, and age/stage fit so the choice is grounded before it is beautiful.",
    highlights: ["Method before material", "Trustworthy context"]
  },
  {
    id: "03",
    icon: CalendarDays,
    title: "Practice",
    description: "Turn knowledge into repeatable household rhythms: conversations, listening, naming, salah, adab, and reminders.",
    highlights: ["Weekly action", "Family rhythm"]
  },
  {
    id: "04",
    icon: Compass,
    title: "Equip",
    description: "Choose the tool that serves the intention, instead of letting products decide the direction of the home.",
    highlights: ["Tool fit", "Clear use case"]
  },
  {
    id: "05",
    icon: Repeat,
    title: "Continue",
    description: "Return through reminders, library resources, and community support when life gets busy.",
    highlights: ["Gentle continuity", "Next faithful step"]
  }
];

const pathwayExamples = [
  "Foundations",
  "Family Rhythm",
  "Names & Identity",
  "Qur'an Companion",
  "Adab & Character",
  "Screen-Free Learning",
];

export function TarbiyahJourney() {
  return (
    <Section id="pathways" background="bg">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 pt-16 pb-24 border-t border-br-border/50">
        
        <div className="mb-16 max-w-3xl">
          <AnimateIn>
            <div className="flex items-center gap-2 mb-6 text-sm font-mono tracking-tight text-br-primary uppercase">
              <span>— 01 INTENTIONALITY FRAMEWORK</span>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.1}>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.03em] font-bold text-br-text mb-6">
              Not more Islamic content.<br className="hidden md:block" />
              <span className="text-br-primary">A way to choose what matters.</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-lg text-br-muted leading-relaxed">
              brilliantroots organizes tarbiyah around intention: clarify the purpose, understand 
              the principle, practice it in the home, choose the right tool, and keep returning with support.
            </p>
          </AnimateIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <StaggerItem key={step.id}>
              <div className="group relative bg-br-card rounded-2xl p-6 border border-br-border hover:border-br-primary/35 transition-colors duration-300 h-full flex flex-col shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm tracking-tight text-br-primary/70">
                    {"//"} {step.id}
                  </span>
                  <step.icon className="w-5 h-5 text-br-muted group-hover:text-br-primary transition-colors duration-300" />
                </div>

                <h3 className="text-lg font-bold text-br-text mb-3 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-br-muted text-sm leading-relaxed mb-8 flex-grow">
                  {step.description}
                </p>

                <div className="space-y-2 mt-auto pt-5 border-t border-br-border/50">
                  {step.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-xs text-br-muted">
                      <span className="text-br-primary mt-1 text-[9px]">♦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.25}>
          <div className="mt-10 flex flex-wrap gap-3">
            {pathwayExamples.map((pathway) => (
              <span
                key={pathway}
                className="rounded-full border border-br-primary/15 bg-br-primary-soft px-4 py-2 text-xs font-medium text-br-primary"
              >
                {pathway}
              </span>
            ))}
          </div>
        </AnimateIn>

      </div>
    </Section>
  );
}
