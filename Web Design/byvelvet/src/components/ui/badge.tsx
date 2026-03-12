import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-widest uppercase",
  {
    variants: {
      variant: {
        default: "border-transparent bg-charcoal text-cream",
        secondary: "border-transparent bg-cream text-charcoal",
        outline: "border-charcoal text-charcoal",
        velvet: "border-transparent bg-velvet-700 text-cream",
        new: "border-transparent bg-emerald-900/20 text-emerald-400 border border-emerald-900/30",
        sale: "border-transparent bg-red-900/20 text-red-400 border border-red-900/30",
      },
    },
    defaultVariants: {
      variant: "default",
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
