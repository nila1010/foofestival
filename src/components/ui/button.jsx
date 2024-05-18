import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("max-w-fit flex items-center justify-center whitespace-nowrap rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "relative z-[1] overflow-hidden text-textsecon before:bg-primary before:content-[''] before:w-full before:h-full before:absolute before:inset-0 before:z-[-2] after:z-[-1] after:content-[''] after:w-0 after:h-full after:absolute after:top-0 after:left-[-40%] after:skew-x-[50deg] after:bg-secondary after:transition-all after:ease-out after:duration-700 hover:text-primary hover:after:w-[200%]",

      defaultline: "relative z-[1] text-textsecon before:bg-primary before:content-[''] before:w-full before:h-full before:absolute before:inset-0 before:z-[-2] after:z-[-1] after:content-[''] after:w-0 after:h-full after:absolute after:top-0 after:left-[-40%] after:skew-x-[50deg] after:bg-secondary after:transition-all after:ease-out after:duration-700 hover:outline hover:outline-primary hover:text-primary hover:after:w-[200%]",

      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-btntextsecon shadow-sm hover:bg-secondary/80",
      ghost: "hover:text-btntextsecon",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-sm px-3 text-xs",
      lg: "py-2 rounded-sm text-lg font-medium px-8",
      xl: "py-2 rounded-sm px-8 text-xl font-bold",
      icon: "h-9 w-9",
      checkbox: "h-9 px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
