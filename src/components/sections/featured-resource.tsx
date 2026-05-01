"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/ui/animate";

export function FeaturedResource() {
  return (
    <Section id="library" background="warm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Visual */}
        <AnimateIn direction="left">
          <div className="relative rounded-3xl overflow-hidden shadow-soft border border-br-primary/10 bg-br-surface">
            <Image
              src="/images/featured-resource.png"
              alt="Jumuʿah Digest — weekly Islamic family newsletter displayed on tablet and in print"
              width={640}
              height={640}
              className="w-full h-auto"
            />
          </div>
        </AnimateIn>

        {/* Content */}
        <div>
          <AnimateIn delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="free">Library</Badge>
              <Badge variant="new">Weekly</Badge>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h2 className="text-h2 text-br-text mb-6">
              Keep intention alive through the week.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-body-lg text-br-muted mb-8">
              Jumuʿah Digest is the first library rhythm: a short weekly note with beneficial 
              reminders, practical tarbiyah prompts, and one intentional family action.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.35}>
            <ul className="space-y-4 mb-10">
              {[
                "A focused intention for the parent",
                "One household practice to try",
                "A child-friendly conversation prompt",
                "A clear next step into the right pathway",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-br-text">
                  <span className="w-5 h-5 bg-br-primary-soft rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-br-primary/10">
                    <span className="text-br-primary text-xs font-bold">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <Button variant="primary" size="lg">
              Subscribe Free
            </Button>
          </AnimateIn>
        </div>
      </div>
    </Section>
  );
}
