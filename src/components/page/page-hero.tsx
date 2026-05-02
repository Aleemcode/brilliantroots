import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  primary?: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("pt-28 pb-16 md:pt-36 md:pb-20 bg-br-bg", className)}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-5 font-mono text-sm font-medium tracking-tight text-br-primary">
            {eyebrow}
          </p>
          <h1 className="max-w-5xl text-[2.75rem] font-bold leading-[1.05] tracking-[-0.03em] text-br-text md:text-[4.25rem] lg:text-[5rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-br-muted md:text-xl">
            {body}
          </p>
          {(primary || secondary) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primary && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={primary.href}>
                    {primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondary && (
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
