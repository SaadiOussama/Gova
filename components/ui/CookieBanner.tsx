"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/lib/DictContext";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_KEY = "gova_cookie_consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGtagConsent(granted: boolean) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: granted ? "granted" : "denied",
    });
  }
}

export default function CookieBanner() {
  const dict = useDictionary();
  const { message, accept, decline, learnMore } = dict.cookieBanner;
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "fr";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    } else if (consent === "granted") {
      updateGtagConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateGtagConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateGtagConsent(false);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-gova-gray flex-1">
              {message}{" "}
              <Link
                href={`/${lang}/confidentialite`}
                className="text-gova-blue underline underline-offset-2 hover:no-underline"
              >
                {learnMore}
              </Link>
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 dark:border-gray-600 text-gova-gray hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {decline}
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-[#EAB84C] text-white hover:bg-[#D97706] transition-colors"
              >
                {accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
