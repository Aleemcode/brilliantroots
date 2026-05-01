"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { Quote } from "lucide-react";

const testimonials = [
  {
    before: "We had no structure for Islamic learning at home. I felt lost and overwhelmed.",
    after: "Now we have a daily rhythm. My children ask for their adhkār cards every morning. Alḥamdulillāh.",
    name: "Umm Yusuf",
    role: "Mother of 3",
  },
  {
    before: "My son struggled to stay focused during ṣalāh and would rush through it.",
    after: "The Ṣalāh System gave him visual steps. He now prays with calm and confidence.",
    name: "Abu Ibrahim",
    role: "Father of 2",
  },
  {
    before: "I bought many Islamic resources but never knew how to use them effectively.",
    after: "brilliantroots gave us a system, not just products. Everything connects and builds on itself.",
    name: "Umm Aisha",
    role: "Home-educating mother",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" background="white">
      <div className="text-center mb-14">
        <AnimateIn>
          <p className="text-sm font-medium text-br-gold mb-3 tracking-wide uppercase">
            Family Stories
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-h2 text-br-navy mb-4">
            Real Families, Real Transformation
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-body-lg text-br-muted max-w-2xl mx-auto">
            Hear from parents who are using brilliantroots™️ to build lasting Islamic habits in their homes.
          </p>
        </AnimateIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <Card className="h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="w-8 h-8 text-br-soft-gold mb-4 fill-br-soft-gold" />

                {/* Before */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-br-orange mb-1 uppercase tracking-wide">Before</p>
                  <p className="text-sm text-br-muted italic leading-relaxed">
                    &ldquo;{testimonial.before}&rdquo;
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-br-green mb-4" />

                {/* After */}
                <div className="mb-6 flex-1">
                  <p className="text-xs font-semibold text-br-green mb-1 uppercase tracking-wide">After</p>
                  <p className="text-sm text-br-text font-medium leading-relaxed">
                    &ldquo;{testimonial.after}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-br-border">
                  <div className="w-10 h-10 bg-br-soft-blue rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-br-blue">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-br-navy">{testimonial.name}</p>
                    <p className="text-xs text-br-muted">{testimonial.role}</p>
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
