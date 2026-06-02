"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { trackDownloadIOS, trackDownloadAndroid } from "@/lib/analytics";
import { APP_STORE_LINKS } from "@/lib/constants";

interface StoreBadgeProps {
  store: "ios" | "android";
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "dark" | "light";
}

export function StoreBadge({
  store,
  size = "md",
  className,
  variant = "dark",
}: StoreBadgeProps) {
  const handleClick = () => {
    if (store === "ios") trackDownloadIOS();
    else trackDownloadAndroid();
  };

  const sizes = {
    sm: "h-10",
    md: "h-12",
    lg: "h-14",
  };

  const isIOS = store === "ios";
  const href = isIOS ? APP_STORE_LINKS.ios : APP_STORE_LINKS.android;
  const label = isIOS ? "Télécharger sur App Store" : "Télécharger sur Google Play";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl border-2 px-5 transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gova-blue",
        sizes[size],
        variant === "dark"
          ? "bg-gova-dark border-gova-dark text-white hover:bg-gray-800 hover:border-gray-800"
          : "bg-white border-white text-gova-dark hover:bg-gray-100",
        className
      )}
    >
      {isIOS ? <AppleIcon /> : <PlayIcon />}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] opacity-75">
          {isIOS ? "Disponible sur" : "Télécharger sur"}
        </span>
        <span className="text-sm font-semibold">
          {isIOS ? "App Store" : "Google Play"}
        </span>
      </div>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3.18 23.62c.32.17.69.19 1.04.04L15.77 12 4.22.34C3.87.19 3.5.21 3.18.38 2.54.71 2.12 1.38 2.12 2.09v19.82c0 .71.42 1.38 1.06 1.71zm9.5-12.94L5.15 18.2 14.5 12l-1.82-1.32zM5.15 5.8l7.53 7.52L14.5 12 5.15 5.8zM16.15 11l2.75-1.6-2.28-2.28L16.15 11zm0 2l.47 3.88 2.28-2.28L16.15 13z" />
    </svg>
  );
}
