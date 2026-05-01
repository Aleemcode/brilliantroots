"use client";

import { BookOpen, CalendarCheck, Compass } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const pathways = [
  {
    icon: BookOpen,
    title: "I need foundations",
    description: "Start with parent-facing reminders and resources that clarify what tarbiyah is trying to build.",
    action: "Read the weekly digest",
    href: "#featured-resource",
    color: "text-br-blue",
    bg: "bg-br-soft-blue",
  },
  {
    icon: CalendarCheck,
    title: "I need family rhythm",
    description: "Find tools that help the home practice small, repeatable acts of learning, remembrance, and adab.",
    action: "Explore the tools",
    href: "#products",
    color: "text-br-green",
    bg: "bg-br-soft-green",
  },
  {
    icon: Compass,
    title: "I need direction",
    description: "See how the ecosystem fits together before choosing what your family should begin with.",
    action: "View the method",
    href: "#methodology",
    color: "text-br-orange",
    bg: "bg-br-primary-soft",
  },
];

export function StartHere() {
  return (
    <Section id="start-here" background="white">
      <div className="text-center mb-20">
        <AnimateIn>
          <p className="text-sm font-mono text-br-primary mb-4 tracking-tight uppercase">
            — 02 START WHERE YOU ARE
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-h2 text-br-navy mb-6">
            Every family enters from a different door.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-body-lg text-br-muted max-w-2xl mx-auto">
            Some parents need clarity, some need routine, and some need the right tool for a child 
            who is ready to engage. Choose the door that matches today.
          </p>
        </AnimateIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {pathways.map((pathway) => (
          <StaggerItem key={pathway.title}>
            <a href={pathway.href} className="block h-full">
              <Card className="h-full group cursor-pointer">
                <CardContent className="p-10 flex flex-col h-full">
                  <div
                    className={`w-14 h-14 ${pathway.bg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <pathway.icon className={`w-7 h-7 ${pathway.color}`} />
                  </div>
                  <h3 className="text-h3 text-br-navy mb-3">{pathway.title}</h3>
                  <p className="text-body text-br-muted mb-6 flex-1">
                    {pathway.description}
                  </p>
                  <span
                    className={`text-sm font-semibold ${pathway.color} group-hover:underline underline-offset-4`}
                  >
                    {pathway.action} →
                  </span>
                </CardContent>
              </Card>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
