// Analytics helper for Google Analytics 4 custom events
// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Pre-defined GOVA conversion events
export const trackDownloadIOS = () => {
  event({ action: "download_ios", category: "conversion", label: "App Store" });
};

export const trackDownloadAndroid = () => {
  event({ action: "download_android", category: "conversion", label: "Google Play" });
};

export const trackContactFormSubmit = () => {
  event({ action: "contact_form_submit", category: "engagement", label: "Contact Form" });
};

export const trackDriverCTAClick = () => {
  event({ action: "driver_cta_click", category: "conversion", label: "Devenir Chauffeur" });
};

export const trackNotifyMeSubmit = (city: string) => {
  event({ action: "notify_me_submit", category: "engagement", label: city });
};
