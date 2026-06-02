import { getDictionary } from "@/lib/dict";
import ChauffeurContent from "@/components/sections/ChauffeurContent";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.chauffeur.meta.title,
    description: dict.chauffeur.meta.description,
  };
}

export default function ChauffeurPage() {
  return <ChauffeurContent />;
}
