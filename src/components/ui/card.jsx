import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("grid max-w-[300px] rounded border-2 bg-card text-card-foreground", className)} {...props} />);
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("grid gap-y-2 p-6", className)} {...props} />);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => <h3 ref={ref} className={cn("flex font-semibold leading-none tracking-tight", className)} {...props} />);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("self-end px-6 text-sm", className)} {...props} />);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
