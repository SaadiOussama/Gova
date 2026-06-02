"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variant === "default" && "bg-primary text-white hover:bg-primary/90",
          variant === "outline" && "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
          variant === "ghost" && "hover:bg-gray-100 text-gray-700",
          variant === "link" && "text-primary underline-offset-4 hover:underline",
          size === "default" && "h-9 px-4 py-2",
          size === "sm" && "h-8 px-3 text-xs",
          size === "lg" && "h-10 px-8",
          size === "icon" && "h-9 w-9",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
