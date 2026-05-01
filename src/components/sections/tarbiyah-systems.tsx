"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const systems = [
  {
    name: "Adhkār System",
    outcome: "Builds daily morning & evening remembrance",
    ageRange: "Age 5+",
    includes: "30 adhkār cards, parent guide, daily tracker",
    color: "border-t-br-blue",
    tag: "Builds daily adhkār",
    tagVariant: "system" as const,
  },
  {
    name: "Ṣalāh System",
    outcome: "Strengthens the prayer habit step by step",
    ageRange: "Age 6+",
    includes: "Salah steps poster, wuḍūʾ guide, dua cards",
    color: "border-t-br-green",
    tag: "Strengthens ṣalāh habit",
    tagVariant: "age" as const,
  },
  {
    name: "Ādāb System",
    outcome: "Teaches beautiful manners from the Sunnah",
    ageRange: "Age 4+",
    includes: "Manners cards, scenario prompts, reward chart",
    color: "border-t-br-gold",
    tag: "Teaches manners visually",
    tagVariant: "parentGuide" as const,
  },
  {
    name: "ʿAqīdah System",
    outcome: "Foundations of faith made clear for young hearts",
    ageRange: "Age 7+",
    includes: "Belief pillars poster, Q&A cards, discussion guide",
    color: "border-t-br-navy",
    tag: "Foundations of faith",
    tagVariant: "paid" as const,
  },
];

export function TarbiyahSystems() {
  return (
    <Section id="tarbiyah-systems" background="default">
      <div className="text-center mb-20">
        <AnimateIn>
          <p className="text-sm font-medium text-br-green mb-4 tracking-wide uppercase">
            Tarbiyah Systems
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-h2 text-br-navy mb-6">
            Structured Tools for Every Pillar of Growth
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-body-lg text-br-muted max-w-2xl mx-auto">
            Each system is designed to help your family learn, practice, and build lasting Islamic habits at home.
          </p>
        </AnimateIn>
      </div>

      {/* Systems Image */}
      <AnimateIn delay={0.2} className="mb-16">
        <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/images/tarbiyah-systems.png"
            alt="Four tarbiyah system cards — Adhkār, Ṣalāh, Ādāb, and ʿAqīdah learning systems"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </AnimateIn>

      {/* System Cards */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {systems.map((system) => (
          <StaggerItem key={system.name}>
            <Card className={`h-full border-t-4 ${system.color}`}>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant={system.tagVariant}>{system.tag}</Badge>
                  <Badge variant="age">{system.ageRange}</Badge>
                </div>
                <h3 className="text-h4 text-br-navy mb-2">{system.name}</h3>
                <p className="text-sm text-br-muted mb-3">{system.outcome}</p>
                <p className="text-xs text-br-muted/70 mb-6 flex-1">
                  Includes: {system.includes}
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Explore System
                </Button>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
