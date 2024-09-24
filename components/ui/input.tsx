import * as React from "react";

import { cn } from "@/lib/utils";

const inputVariants = {
  variants: {
    variant: {
      editInput:
        "border-0 border-b-2 border-b-gray-400 rounded-none hover:ring-0 focus:ring-0 focus-visible:ring-0 focus:border-teal-700 disabled:border-none px-0 disabled:opacity-100",
    },
  },
};
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof (typeof inputVariants)["variants"]["variant"];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
          variant && inputVariants.variants.variant[variant],
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
