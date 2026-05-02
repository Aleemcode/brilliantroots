import { intentionSteps } from "@/lib/site-content";

export function IntentionalityStrip() {
  return (
    <section className="bg-br-surface-strong py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-4 md:grid-cols-5">
          {intentionSteps.map((step, index) => (
            <div
              key={step.label}
              className="rounded-2xl border border-br-border/70 bg-br-surface p-5 shadow-soft dark:shadow-none"
            >
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-br-primary text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-br-primary">
                {step.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-br-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-br-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
