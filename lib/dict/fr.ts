import type { Dictionary } from "./index";

const fr: Dictionary = {
  dir: "ltr",
  langName: "Français",

  meta: {
    title: "GOVA — VTC Algérie | Votre course à portée de main",
    description:
      "Application VTC en Algérie. Commandez une course, suivez votre chauffeur en temps réel, payez en espèces. Disponible sur iOS et Android.",
  },

  navbar: {
    home: "Accueil",
    passengers: "Passagers",
    drivers: "Chauffeurs",
    contact: "Contact",
    download: "Télécharger",
    downloadApp: "Télécharger l'app",
    soon: "Bientôt",
  },

  hero: {
    titleLine1: "Votre course,",
    titleHighlight: "à portée de main.",
    subtitle:
      "GOVA met en relation passagers et chauffeurs partenaires partout en Algérie. Simple, rapide, transparent.",
    googlePlayAlt: "Télécharger sur Google Play",
    appStoreAlt: "Télécharger sur l'App Store",
    badge: "Disponible sur iOS et Android · Inscription en moins d'une minute",
  },

  howItWorks: {
    title: "Commandez une course en 3 étapes",
    steps: [
      {
        title: "Choisissez votre destination",
        description:
          "Indiquez où vous allez. Le tarif s'affiche immédiatement, sans surprise.",
      },
      {
        title: "Un chauffeur arrive",
        description:
          "Suivez sa position en temps réel sur la carte.",
      },
      {
        title: "Payez en espèces à l'arrivée",
        description:
          "Pas de carte bancaire à saisir. Vous payez le montant exact affiché, en main propre.",
      },
    ],
  },

  rideTypes: {
    title: "Une course adaptée à chaque besoin",
    rides: [
      {
        title: "Économique",
        description:
          "Pour vos trajets du quotidien. Tarif accessible, véhicule confortable.",
      },
      {
        title: "Premium",
        description:
          "Pour vos déplacements importants. Véhicule de gamme supérieure, confort accru.",
      },
      {
        title: "Express",
        description:
          "Quand chaque minute compte. Mise en relation prioritaire.",
      },
    ],
  },

  whyGova: {
    title: "Pensé pour l'Algérie",
    subtitle:
      "Nous avons conçu GOVA pour répondre aux réalités locales. Une technologie de pointe au service de votre quotidien.",
    features: [
      {
        title: "Tarif transparent",
        description:
          "Le prix est calculé et affiché avant la course. Pas de mauvaise surprise.",
      },
      {
        title: "Paiement en espèces",
        description:
          "Réglez votre course comme vous en avez l'habitude, en toute simplicité.",
      },
      {
        title: "Chauffeurs vérifiés",
        description:
          "Chaque chauffeur GOVA est validé manuellement (permis, assurance, véhicule).",
      },
      {
        title: "Communication sécurisée",
        description:
          "Chat intégré et appels via numéro masqué. Votre numéro reste privé.",
      },
    ],
  },

  driverCTA: {
    title: "Roulez avec GOVA. Gagnez à votre rythme.",
    subtitle:
      "Vous avez un véhicule ? Transformez-le en source de revenus. Travaillez quand vous voulez, où vous voulez.",
    benefits: [
      {
        title: "Flexibilité totale",
        description: "Vous décidez quand vous êtes en ligne. Aucun horaire imposé.",
      },
      {
        title: "Revenus transparents",
        description: "Suivez vos gains et commissions en temps réel.",
      },
      {
        title: "Accompagnement",
        description: "Une équipe locale pour vous aider à démarrer.",
      },
    ],
    cta: "Devenir chauffeur partenaire",
    disclaimer:
      "Documents requis : permis, carte grise, assurance. Validation sous 48h.",
  },

  coverage: {
    title: "Nos villes desservies",
    subtitle:
      "GOVA est actuellement disponible dans les principales villes d'Algérie.",
    available: "Disponible",
    comingSoon: "Bientôt",
    notifyLabel: "Me notifier",
    notifyPlaceholder: "Votre email...",
    cities: ["Alger", "Oran", "Constantine", "Annaba", "Sétif"],
  },

  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Comment payer ma course ?",
        a: "GOVA accepte le paiement en espèces à l'arrivée. Le tarif est affiché avant le départ.",
      },
      {
        q: "Comment GOVA vérifie-t-il les chauffeurs ?",
        a: "Chaque chauffeur est validé manuellement : permis de conduire, carte grise, assurance et antécédents.",
      },
      {
        q: "Que se passe-t-il si j'annule une course ?",
        a: "Vous pouvez annuler gratuitement dans les 2 minutes suivant la confirmation.",
      },
      {
        q: "Mon numéro de téléphone est-il visible par le chauffeur ?",
        a: "Non. Toutes les communications passent par notre système de numéros masqués.",
      },
      {
        q: "Comment devenir chauffeur partenaire ?",
        a: "Inscrivez-vous via l'application ou notre site. Notre équipe vous contacte sous 48h.",
      },
      {
        q: "GOVA est-il disponible dans ma ville ?",
        a: "GOVA est actuellement disponible à Alger, Oran, Constantine, Annaba et Sétif.",
      },
    ],
  },

  downloadBanner: {
    title: "Prêt à commander votre première course ?",
    subtitle:
      "Téléchargez l'application GOVA et rejoignez des milliers de passagers qui nous font déjà confiance.",
    googlePlayAlt: "Télécharger sur Google Play",
    appStoreAlt: "Télécharger sur l'App Store",
  },

  contact: {
    title: "Contactez-nous",
    subtitle: "Notre équipe est à votre écoute pour toute question.",
    form: {
      fullName: "Nom complet",
      fullNamePlaceholder: "Ex: Mohamed Amine",
      email: "Email",
      emailPlaceholder: "contact@exemple.com",
      phone: "Téléphone",
      phonePlaceholder: "555 00 00 00",
      subject: "Sujet",
      subjectPlaceholder: "Sélectionnez un sujet",
      message: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      send: "Envoyer le message",
      subjects: [
        "Support Passager",
        "Support Chauffeur",
        "Partenariat",
        "Autre demande",
      ],
    },
    info: {
      title: "Informations",
      address: "Centre des affaires, Bab Ezzouar, Alger, Algérie",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      phoneValue: "+213 (0) 23 00 00 00",
      emailLabel: "Email",
      emailValue: "contact@gova-app.dz",
      hoursLabel: "Heures d'ouverture",
      hoursValue: "Dim - Jeu : 08h00 - 17h00\nSupport d'urgence 24/7",
      followUs: "Suivez-nous",
    },
  },

  footer: {
    mission:
      "L'alternative locale de VTC en Algérie. Fièrement pensée pour les besoins de notre marché avec transparence et sécurité.",
    columns: {
      passengers: {
        title: "Passagers",
        links: [
          { label: "Télécharger l'app", href: "#download" },
          { label: "Comment ça marche", href: "#how-it-works" },
          { label: "Tarifs", href: "#" },
          { label: "Support", href: "/contact" },
        ],
      },
      drivers: {
        title: "Chauffeurs",
        links: [
          { label: "Devenir chauffeur", href: "/chauffeur" },
          { label: "Documents requis", href: "/chauffeur" },
          { label: "FAQ chauffeur", href: "#faq" },
        ],
      },
      legal: {
        title: "Légal",
        links: [
          { label: "Conditions Générales", href: "/cgu" },
          { label: "Confidentialité", href: "/confidentialite" },
          { label: "Mentions légales", href: "/cgu#mentions" },
          { label: "Cookies", href: "/confidentialite" },
        ],
      },
    },
    copyright:
      "© 2026 GOVA. Tous droits réservés. · Une plateforme développée par SADEEM Informatique.",
    skipToContent: "Aller au contenu principal",
  },

  chauffeur: {
    meta: {
      title: "Devenir Chauffeur Partenaire",
      description:
        "Rejoignez GOVA en tant que chauffeur partenaire. Travaillez à votre rythme, gagnez en transparence.",
    },
    hero: {
      title: "Devenez chauffeur",
      titleHighlight: "GOVA",
      subtitle:
        "Transformez votre temps libre en revenus. Rejoignez la plateforme VTC locale qui respecte ses chauffeurs partenaires.",
      cta: "Commencer l'inscription",
    },
    requirements: {
      title: "Documents requis",
      subtitle: "Préparez ces documents pour valider votre compte rapidement.",
      items: [
        "Permis de conduire valide",
        "Carte grise du véhicule",
        "Assurance en cours de validité",
        "Contrôle technique à jour",
        "Casier judiciaire vierge",
        "Smartphone (Android ou iOS) avec connexion 4G",
      ],
    },
    steps: {
      title: "Les étapes pour nous rejoindre",
      items: [
        {
          step: "1",
          title: "Inscription en ligne",
          desc: "Créez votre compte en quelques clics et soumettez vos documents via notre portail sécurisé.",
        },
        {
          step: "2",
          title: "Vérification",
          desc: "Notre équipe locale vérifie vos documents sous 48h. Un entretien téléphonique peut être programmé.",
        },
        {
          step: "3",
          title: "Activation",
          desc: "Votre compte est activé. Téléchargez l'app Chauffeur, connectez-vous et commencez à recevoir des courses.",
        },
      ],
    },
  },

  contactPage: {
    meta: {
      title: "Contact",
      description:
        "Contactez l'équipe GOVA. Support passager, support chauffeur, partenariats.",
    },
    heading: "Support & Contact",
  },

  cgu: {
    meta: {
      title: "Conditions Générales d'Utilisation",
      description: "Conditions Générales d'Utilisation de l'application GOVA VTC Algérie.",
    },
    label: "Documents légaux",
    title: "Conditions Générales d'Utilisation",
    updated: "Dernière mise à jour : Mai 2026",
  },

  privacy: {
    meta: {
      title: "Politique de Confidentialité",
      description:
        "Politique de confidentialité de GOVA VTC Algérie. Découvrez comment nous protégeons vos données personnelles.",
    },
    label: "Documents légaux",
    title: "Politique de Confidentialité",
    updated: "Dernière mise à jour : Mai 2026",
  },

  cookieBanner: {
    message:
      "Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. Vous pouvez accepter ou refuser leur utilisation.",
    accept: "Accepter",
    decline: "Refuser",
    learnMore: "En savoir plus",
  },
};

export default fr;
