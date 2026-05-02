import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type RouteCardProps = {
  title: string;
  body: string;
  href: string;
  label?: string;
  meta?: string;
};

export function RouteCard({ title, body, href, label = "Open", meta }: RouteCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-br-border bg-br-surface p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-br-primary/30 hover:shadow-card dark:shadow-none"
    >
      <div>
        {meta && <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-br-primary">{meta}</p>}
        <h3 className="text-2xl font-semibold tracking-tight text-br-text">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-br-muted">{body}</p>
      </div>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-br-primary">
        {label}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function DetailPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-br-border bg-br-surface p-6 shadow-soft dark:shadow-none">
      <h2 className="text-xl font-semibold tracking-tight text-br-text">{title}</h2>
      <div className="mt-4 text-sm leading-relaxed text-br-muted">{children}</div>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-br-muted">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-br-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CTASection({
  title,
  body,
  href,
  label,
}: {
  title: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <section className="bg-br-primary-dark py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 sm:px-8 md:flex-row md:items-center lg:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{body}</p>
        </div>
        <Button asChild size="lg" className="bg-white text-br-primary-dark hover:bg-white/90">
          <Link href={href}>
            {label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
