"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/lib/dict";

const DictContext = createContext<Dictionary | null>(null);

export function DictProvider({
  dict,
  children,
}: {
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>;
}

export function useDictionary(): Dictionary {
  const ctx = useContext(DictContext);
  if (!ctx) throw new Error("useDictionary must be used within DictProvider");
  return ctx;
}
