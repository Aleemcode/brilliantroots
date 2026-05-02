"use client";

import Link from "next/link";
import { BookOpen, CalendarCheck, Compass, MonitorOff } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const pathways = [
  {
    icon: BookOpen,
    title: "Foundations",
    description: "For parents who need clarity before adding more tools, routines, or lessons.",
    action: "Begin with purpose",
    href: "/pathways/foundations",
  },
  {
    icon: CalendarCheck,
    title: "Family Rhythm",
    description: "For families trying to turn reminders, salah, adab, and conversations into repeatable practice.",
    action: "Shape the rhythm",
    href: "/pathways/family-rhythm",
  },
  {
    icon: Compass,
    title: "Names & Identity",
    description: "For expecting or new parents who want naming, identity, and meaning to be deliberate.",
    action: "Choose intentionally",
    href: "/pathways/names-and-identity",
  },
  {
    icon: MonitorOff,
    title: "Screen-Free Learning",
    description: "For parents replacing passive screen time with purposeful listening, reading, and guided tools.",
    action: "Find the right tool",
    href: "/pathways/screen-free-learning",
  },
];

export function StartHere() {
  return (
    <Section id="start-here" background="white">
      <div className="text-center mb-20">
        <AnimateIn>
          <p className="text-sm font-mono text-br-primary mb-4 tracking-tight uppercase">
            — 02 START WITH INTENTION
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-h2 text-br-text mb-6">
            What are you trying to nurture first?
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-body-lg text-br-muted max-w-2xl mx-auto">
            Do not begin with a product. Begin with the intention, then follow the pathway that 
            fits the season your family is actually in.
          </p>
        </AnimateIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {pathways.map((pathway) => (
          <StaggerItem key={pathway.title}>
            <Link href={pathway.href} className="block h-full">
              <Card className="h-full group cursor-pointer hover:border-br-primary/35">
                <CardContent className="p-7 flex flex-col h-full">
                  <div className="w-14 h-14 bg-br-primary-soft rounded-2xl flex items-center justify-center mb-6 border border-br-primary/10 transition-colors duration-300">
                    <pathway.icon className="w-7 h-7 text-br-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-br-text mb-3 tracking-tight">{pathway.title}</h3>
                  <p className="text-body text-br-muted mb-6 flex-1">
                    {pathway.description}
                  </p>
                  <span className="text-sm font-semibold text-br-primary group-hover:underline underline-offset-4">
                    {pathway.action} →
                  </span>
                </CardContent>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
