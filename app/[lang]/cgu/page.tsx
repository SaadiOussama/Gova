import { getDictionary } from "@/lib/dict";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.cgu.meta.title,
    description: dict.cgu.meta.description,
  };
}

export default async function CGUPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-gova-blue text-sm font-semibold border border-blue-100">
            {dict.cgu.label}
          </span>
          <h1 className="text-4xl font-black text-gova-dark">{dict.cgu.title}</h1>
          <p className="text-gova-gray">{dict.cgu.updated}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-gova-dark">
          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">1. Objet</h2>
            <p className="text-gova-gray leading-relaxed">
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent
              l&apos;utilisation de l&apos;application mobile et du site web GOVA,
              développés et exploités par SADEEM Informatique. En utilisant nos
              services, vous acceptez l&apos;intégralité de ces conditions.
            </p>
          </section>

          <section id="mentions">
            <h2 className="text-2xl font-bold text-gova-dark mb-3">2. Mentions légales</h2>
            <div className="bg-gova-light rounded-2xl p-6 space-y-2 text-sm text-gova-gray">
              <p><strong className="text-gova-dark">Éditeur :</strong> SADEEM Informatique</p>
              <p><strong className="text-gova-dark">Application :</strong> GOVA — VTC Algérie</p>
              <p><strong className="text-gova-dark">Contact :</strong> legal@gova.dz</p>
              <p><strong className="text-gova-dark">Pays :</strong> Algérie</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">3. Description du service</h2>
            <p className="text-gova-gray leading-relaxed">
              GOVA est une plateforme de mise en relation entre des passagers et des
              chauffeurs partenaires indépendants en Algérie. GOVA n&apos;est pas un
              service de transport mais un intermédiaire technologique facilitant la
              connexion entre les deux parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">4. Inscription et compte utilisateur</h2>
            <p className="text-gova-gray leading-relaxed">
              Pour utiliser GOVA, vous devez créer un compte en fournissant des
              informations exactes et à jour. Vous êtes responsable de la
              confidentialité de vos identifiants. GOVA se réserve le droit de
              suspendre tout compte en cas de violation des présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">5. Conditions d&apos;utilisation</h2>
            <p className="text-gova-gray leading-relaxed mb-3">En utilisant GOVA, vous vous engagez à :</p>
            <ul className="space-y-2 text-gova-gray list-disc list-inside">
              <li>Respecter les chauffeurs partenaires et le code de conduite GOVA</li>
              <li>Ne pas utiliser le service à des fins illicites</li>
              <li>Fournir des informations exactes lors de votre inscription</li>
              <li>Payer le montant exact affiché à l&apos;arrivée à destination</li>
              <li>Ne pas annuler abusivement des courses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">6. Tarification et paiement</h2>
            <p className="text-gova-gray leading-relaxed">
              Les tarifs sont calculés et affichés avant chaque course. Le paiement
              s&apos;effectue en espèces (DZD) directement au chauffeur à l&apos;arrivée. Les
              prix incluent toutes les taxes applicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">7. Responsabilité</h2>
            <p className="text-gova-gray leading-relaxed">
              GOVA agit en tant qu&apos;intermédiaire et ne peut être tenu responsable
              des actes ou omissions des chauffeurs partenaires indépendants. Chaque
              chauffeur est couvert par sa propre assurance professionnelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gova-dark mb-3">8. Droit applicable</h2>
            <p className="text-gova-gray leading-relaxed">
              Les présentes CGU sont soumises au droit algérien. Tout litige
              sera soumis aux juridictions compétentes d&apos;Alger, Algérie.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
