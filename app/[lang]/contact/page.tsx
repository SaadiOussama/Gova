import { getDictionary } from "@/lib/dict";
import ContactSection from "@/components/sections/ContactSection";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.contactPage.meta.title,
    description: dict.contactPage.meta.description,
  };
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <div className="bg-gray-50 pt-16 pb-8 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            {dict.contactPage.heading}
          </h1>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
