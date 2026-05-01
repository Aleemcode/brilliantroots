"use client";

import { BookOpen, RotateCcw, CheckCircle2, Sprout } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const steps = [
  {
    icon: BookOpen,
    number: "01",
    title: "Learn",
    description: "Access guided resources built on authentic Islamic knowledge.",
    color: "text-br-blue",
    bg: "bg-br-soft-blue",
  },
  {
    icon: CheckCircle2,
    number: "02",
    title: "Practice",
    description: "Use structured tools to turn knowledge into daily family actions.",
    color: "text-br-green",
    bg: "bg-br-soft-green",
  },
  {
    icon: RotateCcw,
    number: "03",
    title: "Repeat",
    description: "Build consistency through habit trackers and gentle routines.",
    color: "text-br-orange",
    bg: "bg-br-soft-orange",
  },
  {
    icon: Sprout,
    number: "04",
    title: "Grow",
    description: "Watch your family flourish in knowledge, character, and practice.",
    color: "text-br-gold",
    bg: "bg-br-soft-gold",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" background="white">
      <div className="text-center mb-20">
        <AnimateIn>
          <p className="text-sm font-medium text-br-orange mb-3 tracking-wide uppercase">
            How It Works
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-h2 text-br-navy mb-6">
            A Simple Path to Lasting Growth
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-body-lg text-br-muted max-w-2xl mx-auto">
            Our approach is built on the natural cycle of learning and growth. No overwhelm — just steady, guided progress.
          </p>
        </AnimateIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <StaggerItem key={step.title}>
            <div className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-br-border" />
              )}

              <div className={`w-20 h-20 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 relative`}>
                <step.icon className={`w-9 h-9 ${step.color}`} />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-br-navy text-white rounded-full text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="text-h4 text-br-navy mb-2">{step.title}</h3>
              <p className="text-sm text-br-muted leading-relaxed max-w-[220px] mx-auto">
                {step.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
