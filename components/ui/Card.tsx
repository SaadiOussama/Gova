import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({ children, className, hover = false, padding = "md" }: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-3xl shadow-card border border-gray-100",
        paddings[padding],
        hover && "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardIconProps {
  children: React.ReactNode;
  color?: "blue" | "amber" | "green" | "purple";
  size?: "sm" | "md" | "lg";
}

export function CardIcon({ children, color = "blue", size = "md" }: CardIconProps) {
  const colors = {
    blue: "bg-blue-50 text-gova-blue",
    amber: "bg-amber-50 text-gova-amber",
    green: "bg-green-50 text-gova-green",
    purple: "bg-purple-50 text-purple-600",
  };
  const sizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div
      className={cn(
        "rounded-2xl flex items-center justify-center flex-shrink-0",
        colors[color],
        sizes[size]
      )}
    >
      {children}
    </div>
  );
}
