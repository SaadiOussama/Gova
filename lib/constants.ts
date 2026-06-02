// Navigation links
export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Passagers", href: "#how-it-works" },
  { label: "Chauffeurs", href: "#driver-cta" },
  { label: "Contact", href: "#contact" },
] as const;

// App store links (placeholder until real links are available)
export const APP_STORE_LINKS = {
  ios: "https://apps.apple.com",
  android: "https://play.google.com",
} as const;

// Social media links
export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/govaalgerie", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com/govaalgerie", icon: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/gova", icon: "linkedin" },
  { label: "TikTok", href: "https://tiktok.com/@govaalgerie", icon: "tiktok" },
] as const;

// Cities covered
export const COVERED_CITIES = [
  { name: "Alger", available: true, lat: 36.7538, lng: 3.0588 },
  { name: "Oran", available: true, lat: 35.6969, lng: -0.6331 },
  { name: "Constantine", available: true, lat: 36.365, lng: 6.6147 },
  { name: "Annaba", available: true, lat: 36.9, lng: 7.7667 },
  { name: "Sétif", available: true, lat: 36.19, lng: 5.41 },
  { name: "Batna", available: false, lat: 35.56, lng: 6.17 },
  { name: "Béjaïa", available: false, lat: 36.75, lng: 5.07 },
  { name: "Tlemcen", available: false, lat: 34.88, lng: -1.32 },
] as const;

// FAQ items
export const FAQ_ITEMS = [
  {
    question: "Comment payer ma course ?",
    answer:
      "Avec GOVA, vous payez en espèces directement au chauffeur à l'arrivée. Le montant exact est affiché avant le départ, donc pas de mauvaise surprise. Pas besoin de carte bancaire.",
  },
  {
    question: "Comment GOVA vérifie-t-il les chauffeurs ?",
    answer:
      "Chaque chauffeur est validé manuellement par notre équipe : vérification du permis de conduire, de la carte grise, de l'assurance véhicule et d'un extrait de casier judiciaire. La validation prend moins de 48h.",
  },
  {
    question: "Que se passe-t-il si j'annule une course ?",
    answer:
      "Vous pouvez annuler gratuitement dans les 2 premières minutes suivant la confirmation du chauffeur. Au-delà, des frais d'annulation symboliques peuvent s'appliquer pour respecter le temps du chauffeur.",
  },
  {
    question: "Mon numéro de téléphone est-il visible par le chauffeur ?",
    answer:
      "Non. GOVA utilise un système de numéros masqués. Le chauffeur et le passager peuvent communiquer via l'application sans que les numéros réels soient jamais partagés.",
  },
  {
    question: "Comment devenir chauffeur partenaire ?",
    answer:
      "Téléchargez l'application GOVA Chauffeur, créez votre profil et soumettez vos documents (permis, carte grise, assurance). Notre équipe valide votre dossier sous 48h et vous pouvez commencer à rouler.",
  },
  {
    question: "GOVA est-il disponible dans ma ville ?",
    answer:
      "GOVA est actuellement disponible à Alger, Oran, Constantine, Annaba et Sétif. Nous nous déployons rapidement dans d'autres wilayas. Inscrivez-vous pour être notifié lors du lancement dans votre ville.",
  },
] as const;

// Ride types
export const RIDE_TYPES = [
  {
    id: "eco",
    name: "Économique",
    description:
      "Pour vos trajets du quotidien. Tarif accessible, véhicule confortable.",
    color: "blue",
    badge: "Le plus populaire",
  },
  {
    id: "premium",
    name: "Premium",
    description:
      "Pour vos déplacements importants. Véhicule de gamme supérieure, confort accru.",
    color: "amber",
    badge: "Recommandé",
  },
  {
    id: "express",
    name: "Express",
    description:
      "Quand chaque minute compte. Mise en relation prioritaire avec le chauffeur le plus proche.",
    color: "green",
    badge: "Plus rapide",
  },
] as const;

// Company info
export const COMPANY_INFO = {
  name: "GOVA",
  tagline: "VTC Algérie",
  mission: "Mettre en relation passagers et chauffeurs en Algérie. Simple, rapide, transparent.",
  address: "Alger, Algérie",
  phone: "+213 (0) 555 00 00 00",
  email: "support@gova.dz",
  hours: "Lun – Dim : 07h00 – 23h00",
} as const;

// Why GOVA features
export const WHY_GOVA_FEATURES = [
  {
    icon: "Eye",
    title: "Tarif transparent",
    description:
      "Le prix est calculé et affiché avant la course. Pas de mauvaise surprise à l'arrivée.",
    color: "blue",
  },
  {
    icon: "Wallet",
    title: "Paiement en espèces",
    description:
      "Réglez votre course comme vous en avez l'habitude, en toute simplicité.",
    color: "amber",
  },
  {
    icon: "ShieldCheck",
    title: "Chauffeurs vérifiés",
    description:
      "Chaque chauffeur GOVA est validé manuellement (permis, assurance, véhicule).",
    color: "green",
  },
  {
    icon: "Lock",
    title: "Communication sécurisée",
    description:
      "Chat intégré et appels via numéro masqué. Votre numéro reste privé.",
    color: "purple",
  },
] as const;

// How it works steps
export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    icon: "MapPin",
    title: "Choisissez votre destination",
    description:
      "Indiquez où vous allez. Le tarif s'affiche immédiatement, sans surprise.",
    color: "blue",
  },
  {
    step: "02",
    icon: "Car",
    title: "Un chauffeur arrive",
    description:
      "Suivez sa position en temps réel. Vous voyez son nom, sa note et son véhicule.",
    color: "amber",
  },
  {
    step: "03",
    icon: "Wallet",
    title: "Payez en espèces à l'arrivée",
    description:
      "Pas de carte bancaire. Vous payez le montant exact affiché, en main propre.",
    color: "green",
  },
] as const;
