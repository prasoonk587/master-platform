import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const inputVariants = cva(
    "w-full min-w-0 rounded-lg border bg-clip-padding text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
    {
        variants: {
            variant: {
                default:
                    "border-input bg-transparent focus-visible:border-ring disabled:bg-input/50 dark:bg-input/30 dark:disabled:bg-input/80",
                ghost: "border-transparent bg-transparent hover:bg-muted focus-visible:border-ring focus-visible:bg-background disabled:bg-transparent dark:hover:bg-muted/50",
            },
            size: {
                default: "h-8 px-2.5 py-1",
                xs: "h-6 rounded-[min(var(--radius-md),10px)] px-2 py-1 text-xs",
                sm: "h-7 rounded-[min(var(--radius-md),12px)] px-2.5 py-1 text-[0.8rem]",
                lg: "h-9 px-2.5 py-1",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface InputProps
    extends Omit<React.ComponentProps<"input">, "size">, VariantProps<typeof inputVariants> {}

function Input({ className, type, variant = "default", size = "default", ...props }: InputProps) {
    return (
        <input
            type={type}
            data-slot="input"
            data-variant={variant}
            data-size={size}
            className={cn(inputVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Input, inputVariants };
