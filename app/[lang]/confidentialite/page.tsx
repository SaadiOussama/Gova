import { getDictionary } from "@/lib/dict";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.privacy.meta.title,
    description: dict.privacy.meta.description,
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-gova-blue text-sm font-semibold border border-blue-100">
            {dict.privacy.label}
          </span>
          <h1 className="text-4xl font-black text-gova-dark">{dict.privacy.title}</h1>
          <p className="text-gova-gray">{dict.privacy.updated}</p>
        </div>

        <div className="space-y-8 text-gova-dark">
          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">1. Introduction</h2>
            <p className="text-gova-gray leading-relaxed">
              GOVA, édité par SADEEM Informatique, s&apos;engage à protéger la vie
              privée de ses utilisateurs. Cette politique de confidentialité
              explique comment nous collectons, utilisons et protégeons vos
              données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">2. Données collectées</h2>
            <div className="space-y-4">
              <div className="bg-gova-light rounded-2xl p-5">
                <h3 className="font-bold text-gova-dark mb-2">Données d&apos;identité</h3>
                <p className="text-sm text-gova-gray">Nom, prénom, numéro de téléphone, adresse email.</p>
              </div>
              <div className="bg-gova-light rounded-2xl p-5">
                <h3 className="font-bold text-gova-dark mb-2">Données de localisation</h3>
                <p className="text-sm text-gova-gray">Position GPS lors de l&apos;utilisation, avec votre consentement.</p>
              </div>
              <div className="bg-gova-light rounded-2xl p-5">
                <h3 className="font-bold text-gova-dark mb-2">Données d&apos;utilisation</h3>
                <p className="text-sm text-gova-gray">Historique des courses, évaluations, interactions.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">3. Utilisation des données</h2>
            <ul className="space-y-2 text-gova-gray list-disc list-inside">
              <li>Fournir et améliorer nos services</li>
              <li>Assurer la sécurité des utilisateurs</li>
              <li>Traiter les demandes de support</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-bold text-gova-dark mb-3">4. Cookies</h2>
            <p className="text-gova-gray leading-relaxed">
              Notre site utilise des cookies techniques nécessaires au
              fonctionnement et des cookies analytiques. Vous pouvez gérer vos
              préférences via notre bandeau de consentement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">5. Vos droits</h2>
            <ul className="space-y-2 text-gova-gray list-disc list-inside">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p className="text-gova-gray leading-relaxed mt-4">
              Pour exercer vos droits : <a href="mailto:privacy@gova.dz" className="text-primary underline">privacy@gova.dz</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
