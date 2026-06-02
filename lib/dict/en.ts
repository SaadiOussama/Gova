import type { Dictionary } from "./index";

const en: Dictionary = {
  dir: "ltr",
  langName: "English",

  meta: {
    title: "GOVA — VTC Algeria | Your ride at your fingertips",
    description:
      "Ride-hailing app in Algeria. Book a ride, track your driver in real time, pay in cash. Available on iOS and Android.",
  },

  navbar: {
    home: "Home",
    passengers: "Passengers",
    drivers: "Drivers",
    contact: "Contact",
    download: "Download",
    downloadApp: "Download the app",
    soon: "Soon",
  },

  hero: {
    titleLine1: "Your ride,",
    titleHighlight: "at your fingertips.",
    subtitle:
      "GOVA connects passengers with partner drivers across Algeria. Simple, fast, transparent.",
    googlePlayAlt: "Download on Google Play",
    appStoreAlt: "Download on the App Store",
    badge: "Available on iOS and Android · Sign up in under a minute",
  },

  howItWorks: {
    title: "Book a ride in 3 steps",
    steps: [
      {
        title: "Choose your destination",
        description:
          "Enter where you're going. The fare is displayed instantly, no surprises.",
      },
      {
        title: "A driver arrives",
        description:
          "Track their position on the map in real time.",
      },
      {
        title: "Pay cash on arrival",
        description:
          "No credit card needed. You pay the exact amount shown, in hand.",
      },
    ],
  },

  rideTypes: {
    title: "A ride for every need",
    rides: [
      {
        title: "Economy",
        description:
          "For your everyday trips. Affordable fare, comfortable vehicle.",
      },
      {
        title: "Premium",
        description:
          "For your important journeys. Higher-end vehicle, enhanced comfort.",
      },
      {
        title: "Express",
        description:
          "When every minute matters. Priority match with the nearest driver.",
      },
    ],
  },

  whyGova: {
    title: "Built for Algeria",
    subtitle:
      "We designed GOVA to meet local realities. Cutting-edge technology serving your daily life.",
    features: [
      {
        title: "Transparent pricing",
        description:
          "The fare is calculated and shown before the ride. No surprises on arrival.",
      },
      {
        title: "Cash payment",
        description:
          "Pay for your ride the way you're used to, simply and easily.",
      },
      {
        title: "Verified drivers",
        description:
          "Every GOVA driver is manually verified (licence, insurance, vehicle).",
      },
      {
        title: "Secure communication",
        description:
          "In-app chat and calls via masked number. Your number stays private.",
      },
    ],
  },

  driverCTA: {
    title: "Drive with GOVA. Earn at your own pace.",
    subtitle:
      "Got a car? Turn it into a source of income. Work when you want, where you want.",
    benefits: [
      {
        title: "Total flexibility",
        description: "You decide when you're online. No imposed schedule.",
      },
      {
        title: "Transparent earnings",
        description: "Track your earnings and commissions in real time.",
      },
      {
        title: "Support",
        description: "A local team to help you get started and grow.",
      },
    ],
    cta: "Become a partner driver",
    disclaimer:
      "Required documents: driver's licence, registration, insurance. Validation within 48h.",
  },

  coverage: {
    title: "Cities we serve",
    subtitle: "GOVA is currently available in Algeria's main cities.",
    available: "Available",
    comingSoon: "Coming soon",
    notifyLabel: "Notify me",
    notifyPlaceholder: "Your email...",
    cities: ["Algiers", "Oran", "Constantine", "Annaba", "Sétif"],
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How do I pay for my ride?",
        a: "GOVA accepts cash payment on arrival. The fare is shown before departure.",
      },
      {
        q: "How does GOVA verify drivers?",
        a: "Every driver is manually verified: driver's licence, registration, insurance and background check.",
      },
      {
        q: "What happens if I cancel a ride?",
        a: "You can cancel for free within 2 minutes of driver confirmation.",
      },
      {
        q: "Is my phone number visible to the driver?",
        a: "No. All communication goes through our masked number system.",
      },
      {
        q: "How do I become a partner driver?",
        a: "Sign up through the app or our website. Our team will contact you within 48h.",
      },
      {
        q: "Is GOVA available in my city?",
        a: "GOVA is currently available in Algiers, Oran, Constantine, Annaba and Sétif.",
      },
    ],
  },

  downloadBanner: {
    title: "Ready to book your first ride?",
    subtitle:
      "Download the GOVA app and join thousands of passengers who already trust us.",
    googlePlayAlt: "Download on Google Play",
    appStoreAlt: "Download on the App Store",
  },

  contact: {
    title: "Contact us",
    subtitle: "Our team is here to answer any question.",
    form: {
      fullName: "Full name",
      fullNamePlaceholder: "E.g. Mohamed Amine",
      email: "Email",
      emailPlaceholder: "contact@example.com",
      phone: "Phone",
      phonePlaceholder: "555 00 00 00",
      subject: "Subject",
      subjectPlaceholder: "Select a subject",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      send: "Send message",
      subjects: [
        "Passenger support",
        "Driver support",
        "Partnership",
        "Other request",
      ],
    },
    info: {
      title: "Contact information",
      address: "Business centre, Bab Ezzouar, Algiers, Algeria",
      addressLabel: "Address",
      phoneLabel: "Phone",
      phoneValue: "+213 (0) 23 00 00 00",
      emailLabel: "Email",
      emailValue: "contact@gova-app.dz",
      hoursLabel: "Opening hours",
      hoursValue: "Sun – Thu: 08:00 – 17:00\n24/7 emergency support",
      followUs: "Follow us",
    },
  },

  footer: {
    mission:
      "The local ride-hailing alternative in Algeria. Proudly designed for our market with transparency and safety.",
    columns: {
      passengers: {
        title: "Passengers",
        links: [
          { label: "Download the app", href: "#download" },
          { label: "How it works", href: "#how-it-works" },
          { label: "Pricing", href: "#" },
          { label: "Support", href: "/contact" },
        ],
      },
      drivers: {
        title: "Drivers",
        links: [
          { label: "Become a driver", href: "/chauffeur" },
          { label: "Required documents", href: "/chauffeur" },
          { label: "Driver FAQ", href: "#faq" },
        ],
      },
      legal: {
        title: "Legal",
        links: [
          { label: "Terms of service", href: "/cgu" },
          { label: "Privacy policy", href: "/confidentialite" },
          { label: "Legal notices", href: "/cgu#mentions" },
          { label: "Cookies", href: "/confidentialite" },
        ],
      },
    },
    copyright:
      "© 2026 GOVA. All rights reserved. · A platform developed by SADEEM Informatique.",
    skipToContent: "Skip to main content",
  },

  chauffeur: {
    meta: {
      title: "Become a Partner Driver",
      description:
        "Join GOVA as a partner driver. Work at your own pace, earn transparently.",
    },
    hero: {
      title: "Become a",
      titleHighlight: "GOVA driver",
      subtitle:
        "Turn your free time into income. Join the local VTC platform that respects its partner drivers.",
      cta: "Start registration",
    },
    requirements: {
      title: "Required documents",
      subtitle: "Prepare these documents to validate your account quickly.",
      items: [
        "Valid driver's licence",
        "Vehicle registration",
        "Valid insurance",
        "Up-to-date technical inspection",
        "Clean criminal record",
        "Smartphone (Android or iOS) with 4G connection",
      ],
    },
    steps: {
      title: "Steps to join us",
      items: [
        {
          step: "1",
          title: "Online registration",
          desc: "Create your account in a few clicks and submit your documents via our secure portal.",
        },
        {
          step: "2",
          title: "Verification",
          desc: "Our local team verifies your documents within 48h. A phone interview may be scheduled.",
        },
        {
          step: "3",
          title: "Activation",
          desc: "Your account is activated. Download the Driver app, log in and start receiving rides.",
        },
      ],
    },
  },

  contactPage: {
    meta: {
      title: "Contact",
      description: "Contact the GOVA team. Passenger support, driver support, partnerships.",
    },
    heading: "Support & Contact",
  },

  cgu: {
    meta: {
      title: "Terms of Service",
      description: "Terms of Service for the GOVA VTC Algeria application.",
    },
    label: "Legal documents",
    title: "Terms of Service",
    updated: "Last updated: May 2026",
  },

  privacy: {
    meta: {
      title: "Privacy Policy",
      description:
        "GOVA Algeria privacy policy. Learn how we protect your personal data.",
    },
    label: "Legal documents",
    title: "Privacy Policy",
    updated: "Last updated: May 2026",
  },

  cookieBanner: {
    message:
      "We use cookies to improve your experience and analyze our traffic. You can accept or decline their use.",
    accept: "Accept",
    decline: "Decline",
    learnMore: "Learn more",
  },
};

export default en;
