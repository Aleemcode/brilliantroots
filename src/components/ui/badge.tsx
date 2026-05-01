import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        age: "bg-br-soft-green text-br-navy",
        free: "bg-br-soft-blue text-br-blue",
        new: "bg-br-soft-orange text-br-orange",
        parentGuide: "bg-br-soft-gold text-br-navy",
        system: "bg-br-soft-blue text-br-navy",
        paid: "bg-br-navy text-white",
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
