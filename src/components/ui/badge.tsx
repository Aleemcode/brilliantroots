import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        age: "bg-br-primary-soft text-br-primary",
        free: "bg-br-primary-soft text-br-primary",
        new: "bg-br-surface border border-br-primary/15 text-br-primary",
        parentGuide: "bg-br-primary-soft text-br-primary",
        system: "bg-br-primary-soft text-br-primary",
        paid: "bg-br-primary text-white",
      },
    },
    defaultVariants: {
      variant: "age",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
