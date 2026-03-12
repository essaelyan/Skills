import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-widest uppercase",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal text-cream hover:bg-charcoal/90 border border-charcoal",
        outline:
          "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-cream",
        ghost:
          "text-charcoal hover:bg-charcoal/5",
        link: "text-charcoal underline-offset-4 hover:underline",
        velvet:
          "bg-velvet-700 text-cream hover:bg-velvet-800 border border-velvet-700",
        cream:
          "bg-cream text-charcoal hover:bg-cream/90 border border-cream",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
