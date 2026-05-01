"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";

const products = [
  {
    title: "Morning & Evening Adhkār Cards",
    benefit: "Beautiful cards that make daily remembrance easy and joyful for the whole family.",
    ageRange: "Age 5+",
    outcomeTag: "Builds daily adhkār",
    price: "£12.99",
    color: "bg-br-soft-blue",
  },
  {
    title: "My First Ṣalāh Poster Set",
    benefit: "Visual step-by-step prayer guide that children can follow independently.",
    ageRange: "Age 4+",
    outcomeTag: "Strengthens ṣalāh habit",
    price: "£9.99",
    color: "bg-br-soft-green",
  },
  {
    title: "30-Day Ādāb Challenge Kit",
    benefit: "A structured 30-day program to build beautiful manners through daily practice.",
    ageRange: "Age 6+",
    outcomeTag: "30-Day System",
    price: "£14.99",
    color: "bg-br-soft-gold",
  },
];

export function ProductHighlights() {
  return (
    <Section id="products" background="default">
      <div className="text-center mb-14">
        <AnimateIn>
          <p className="text-sm font-medium text-br-blue mb-3 tracking-wide uppercase">
            Featured Tools
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-h2 text-br-navy mb-4">
            Tools That Support Real Growth
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-body-lg text-br-muted max-w-2xl mx-auto">
            Every product is designed with clear learning outcomes and parent support built in.
          </p>
        </AnimateIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <StaggerItem key={product.title}>
            <Card className="h-full">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Color header */}
                <div className={`${product.color} h-48 rounded-t-3xl flex items-center justify-center`}>
                  <div className="w-24 h-32 bg-white/80 rounded-2xl shadow-sm flex items-center justify-center">
                    <span className="text-3xl">📘</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="age">{product.ageRange}</Badge>
                    <Badge variant="parentGuide">{product.outcomeTag}</Badge>
                  </div>

                  <h3 className="text-h4 text-br-navy mb-2">{product.title}</h3>
                  <p className="text-sm text-br-muted mb-6 flex-1">{product.benefit}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-br-navy">{product.price}</span>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
