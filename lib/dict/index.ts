export type FooterLink = { label: string; href: string };

export type Dictionary = {
  dir: "ltr" | "rtl";
  langName: string;

  meta: { title: string; description: string };

  navbar: {
    home: string;
    passengers: string;
    drivers: string;
    contact: string;
    download: string;
    downloadApp: string;
    soon: string;
  };

  hero: {
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    googlePlayAlt: string;
    appStoreAlt: string;
    badge: string;
  };

  howItWorks: {
    title: string;
    steps: Array<{ title: string; description: string }>;
  };

  rideTypes: {
    title: string;
    rides: Array<{ title: string; description: string }>;
  };

  whyGova: {
    title: string;
    subtitle: string;
    features: Array<{ title: string; description: string }>;
  };

  driverCTA: {
    title: string;
    subtitle: string;
    benefits: Array<{ title: string; description: string }>;
    cta: string;
    disclaimer: string;
  };

  coverage: {
    title: string;
    subtitle: string;
    available: string;
    comingSoon: string;
    notifyLabel: string;
    notifyPlaceholder: string;
    cities: string[];
  };

  faq: {
    title: string;
    items: Array<{ q: string; a: string }>;
  };

  downloadBanner: {
    title: string;
    subtitle: string;
    googlePlayAlt: string;
    appStoreAlt: string;
  };

  contact: {
    title: string;
    subtitle: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      subjects: string[];
    };
    info: {
      title: string;
      address: string;
      addressLabel: string;
      phoneLabel: string;
      phoneValue: string;
      emailLabel: string;
      emailValue: string;
      hoursLabel: string;
      hoursValue: string;
      followUs: string;
    };
  };

  footer: {
    mission: string;
    columns: {
      passengers: { title: string; links: FooterLink[] };
      drivers: { title: string; links: FooterLink[] };
      legal: { title: string; links: FooterLink[] };
    };
    copyright: string;
    skipToContent: string;
  };

  chauffeur: {
    meta: { title: string; description: string };
    hero: { title: string; titleHighlight: string; subtitle: string; cta: string };
    requirements: { title: string; subtitle: string; items: string[] };
    steps: { title: string; items: Array<{ step: string; title: string; desc: string }> };
  };

  contactPage: {
    meta: { title: string; description: string };
    heading: string;
  };

  cgu: {
    meta: { title: string; description: string };
    label: string;
    title: string;
    updated: string;
  };

  privacy: {
    meta: { title: string; description: string };
    label: string;
    title: string;
    updated: string;
  };

  cookieBanner: {
    message: string;
    accept: string;
    decline: string;
    learnMore: string;
  };
};

export const LOCALES = ["fr", "ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("./fr").then((m) => m.default),
  ar: () => import("./ar").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const loader = dictionaries[locale as Locale] ?? dictionaries[DEFAULT_LOCALE];
  return loader();
}
