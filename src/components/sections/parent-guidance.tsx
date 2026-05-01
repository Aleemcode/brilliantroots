"use client";

import Image from "next/image";
import { BookHeart, CalendarDays, MessageSquareText, Users } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const features = [
  {
    icon: BookHeart,
    title: "Parent Guides",
    description: "Step-by-step guidance on how to teach each topic with your child.",
  },
  {
    icon: CalendarDays,
    title: "Daily Routines",
    description: "Morning and evening rhythms that make tarbiyah a natural part of your day.",
  },
  {
    icon: MessageSquareText,
    title: "Teaching Prompts",
    description: "Simple conversation starters to deepen understanding at the right moments.",
  },
  {
    icon: Users,
    title: "Community Reminders",
    description: "Weekly encouragement from other parents walking the same path.",
  },
];

export function ParentGuidance() {
  return (
    <Section id="parent-guidance" background="soft-green">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Content */}
        <div>
          <AnimateIn>
            <p className="text-sm font-medium text-br-green mb-3 tracking-wide uppercase">
              For Parents
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h2 className="text-h2 text-br-navy mb-6">
              You are not just buying tools. You are building a home rhythm.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-body-lg text-br-muted mb-10">
              Every resource comes with parent support — because tarbiyah starts with you, and we want to make your role easier.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <feature.icon className="w-5 h-5 text-br-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-br-navy mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-br-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Visual */}
        <AnimateIn delay={0.2} direction="right">
          <div className="relative rounded-3xl overflow-hidden shadow-soft">
            <Image
              src="/images/parent-guidance.png"
              alt="A mother and child reading Qurʾān stories together in a warm home"
              width={640}
              height={640}
              className="w-full h-auto"
            />
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
