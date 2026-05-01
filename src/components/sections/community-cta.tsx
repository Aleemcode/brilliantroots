"use client";

import { MessageCircle, Send } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate";

export function CommunityCTA() {
  return (
    <Section id="community" background="soft-blue">
      <div className="text-center max-w-3xl mx-auto">
        <AnimateIn>
          <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-br-blue" />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="text-h2 text-br-navy mb-6">
            Join a Growing Community of Muslim Families
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-body-lg text-br-muted mb-10 max-w-2xl mx-auto">
            Connect with other parents building homes upon knowledge, practice, and character. Share experiences, ask questions, and grow together.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="green" size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Community
            </Button>
            <Button variant="secondary" size="lg" className="gap-2">
              <Send className="w-5 h-5" />
              Join Telegram
            </Button>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <p className="text-sm text-br-muted mt-6">
            500+ families already growing together
          </p>
        </AnimateIn>
      </div>
    </Section>
  );
}
