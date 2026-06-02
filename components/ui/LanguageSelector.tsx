"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";
import { LOCALES } from "@/lib/dict";

const LANGUAGE_LABELS: Record<string, { short: string; label: string; flag: string; dir: "ltr" | "rtl" }> = {
  fr: { short: "FR", label: "Français", flag: "🇫🇷", dir: "ltr" },
  ar: { short: "AR", label: "العربية", flag: "🇩🇿", dir: "rtl" },
  en: { short: "EN", label: "English", flag: "🇬🇧", dir: "ltr" },
};

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const currentLang = LOCALES.includes(segments[1] as (typeof LOCALES)[number]) ? segments[1] : "fr";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLang: string) {
    const newSegments = [...segments];
    newSegments[1] = newLang;
    router.push(newSegments.join("/") || `/${newLang}`);
    setOpen(false);
  }

  const current = LANGUAGE_LABELS[currentLang] ?? LANGUAGE_LABELS.fr;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Sélecteur de langue"
        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary px-2.5 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.short}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Choisir une langue"
          className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg py-1.5 z-50"
        >
          {LOCALES.map((lang) => {
            const info = LANGUAGE_LABELS[lang];
            return (
              <button
                key={lang}
                role="option"
                aria-selected={currentLang === lang}
                onClick={() => switchLocale(lang)}
                className="w-full flex items-center justify-between px-3.5 py-2 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span className="text-base leading-none">{info.flag}</span>
                  <span className="font-semibold w-6" dir="ltr">{info.short}</span>
                  <span dir={info.dir}>{info.label}</span>
                </span>
                {currentLang === lang && (
                  <Check className="w-3.5 h-3.5 text-primary" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}


