"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useDictionary } from "@/lib/DictContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const dict = useDictionary();
  const nav = dict.navbar;
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "fr";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "top-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl px-2"
            : "top-0 left-0 right-0 translate-x-0 w-full px-0"
        }`}
      >
        <nav
          className={`transition-all duration-300 px-6 py-3 ${
            scrolled
              ? "rounded-2xl bg-white dark:bg-gray-900 border border-[#EAB84C] shadow-lg shadow-black/5"
              : "bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-none rounded-none"
          }`}
        >
          <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto">

            {/* Logo */}
            <Link href={`/${lang}`} className="shrink-0">
              <Image src="/logo.png" alt="GOVA" width={100} height={36} className="h-9 w-auto" priority />
            </Link>

            {/* Links centre */}
            <div className="hidden md:flex gap-1 items-center">
              <Link href={`/${lang}`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">{nav.home}</Link>
              <Link href={`/${lang}/chauffeur`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">{nav.drivers}</Link>
              <Link href={`/${lang}/contact`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800">{nav.contact}</Link>
            </div>

            {/* CTA + langue droite */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSelector />
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full border-2 border-[#EAB84C] hover:bg-[#EAB84C]/10 transition-colors text-[#EAB84C]"
                  aria-label="Toggle dark mode"
                >
                  {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
              <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-full px-5 text-sm font-semibold shadow-none">
                {nav.download}
              </Button>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-2 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg px-4 py-4 flex flex-col gap-1 md:hidden">
            <Link href={`/${lang}`} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">{nav.home}</Link>
            <Link href={`/${lang}/chauffeur`} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">{nav.drivers}</Link>
            <Link href={`/${lang}/contact`} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">{nav.contact}</Link>
            <div className="pt-1 pb-1 border-t border-gray-100 dark:border-gray-700 mt-1 flex items-center justify-between">
              <LanguageSelector inMenu />
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full border-2 border-[#EAB84C] hover:bg-[#EAB84C]/10 transition-colors text-[#EAB84C]"
                  aria-label="Toggle dark mode"
                >
                  {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
            </div>
            <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white w-full rounded-full mt-1 font-semibold">{nav.downloadApp}</Button>
          </div>
        )}
      </div>
    </>
  );
}
