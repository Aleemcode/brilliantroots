import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "bg" | "white" | "soft-blue" | "warm" | "navy" | "soft-green" | "muted";
  id?: string;
  containerWidth?: "default" | "narrow" | "wide" | "full";
}

const bgMap = {
  default: "bg-br-bg",
  bg: "bg-br-bg",
  white: "bg-br-surface",
  "soft-blue": "bg-br-soft-blue",
  warm: "bg-br-surface-strong",
  navy: "bg-br-navy",
  "soft-green": "bg-br-soft-green",
  muted: "bg-br-card",
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
        "py-20 md:py-28 lg:py-32",
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
