"use client";

import { BookOpen, Shield, Star, Heart } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate";

const trustItems = [
  { icon: BookOpen, label: "Rooted in Qurʾān & Sunnah" },
  { icon: Shield, label: "Upon the Understanding of the Salaf" },
  { icon: Star, label: "Used by 500+ Families" },
  { icon: Heart, label: "Parent-Guided Learning" },
];

export function TrustStrip() {
  return (
    <section className="bg-br-soft-blue/50 border-y border-br-border/50 py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <AnimateIn>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 text-br-muted"
              >
                <item.icon className="w-4 h-4 text-br-blue shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
