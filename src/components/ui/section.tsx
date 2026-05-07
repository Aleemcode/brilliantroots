import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "bg" | "white" | "soft-blue" | "warm" | "navy" | "soft-green" | "muted";
  id?: string;
  containerWidth?: "default" | "narrow" | "wide" | "full";
}

const bgMap = {
  default: "bg-transparent",
  bg: "bg-transparent",
  white: "bg-br-surface/55",
  "soft-blue": "bg-br-soft-blue",
  warm: "bg-br-surface-strong/70",
  navy: "bg-br-navy",
  "soft-green": "bg-br-soft-green",
  muted: "bg-br-card/45",
};

const containerMap = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[1400px]",
  full: "max-w-full",
};

export function Section({
  children,
  className,
  background = "default",
  id,
  containerWidth = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 lg:py-32",
        bgMap[background],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-6 sm:px-8 lg:px-12",
          containerMap[containerWidth]
        )}
      >
        {children}
      </div>
    </section>
  );
}
