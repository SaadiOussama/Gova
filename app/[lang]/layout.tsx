import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, LOCALES, type Locale } from "@/lib/dict";
import { DictProvider } from "@/lib/DictContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import CookieBanner from "@/components/ui/CookieBanner";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gova.dz";

type Props = { params: Promise<{ lang: string }>; children: React.ReactNode };

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;

  if (!LOCALES.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GOVA",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: dict.meta.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@gova.dz",
      contactType: "customer service",
      availableLanguage: ["French", "Arabic", "English"],
    },
    sameAs: [
      "https://www.facebook.com/govaapp",
      "https://www.instagram.com/govaapp",
      "https://www.linkedin.com/company/govaapp",
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "GOVA — VTC Algérie",
    operatingSystem: "Android, iOS",
    applicationCategory: "TravelApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "DZD",
    },
    description: dict.meta.description,
    url: BASE_URL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item: { q: string; a: string }) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <DictProvider dict={dict}>
      <JsonLd data={organizationSchema} />
      <JsonLd data={appSchema} />
      <JsonLd data={faqSchema} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-gova-blue text-white px-4 py-2 rounded-lg font-semibold"
      >
        {dict.footer.skipToContent}
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <CookieBanner />
    </DictProvider>
  );
}
