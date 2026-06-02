import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import RideTypes from "@/components/sections/RideTypes";
import WhyGova from "@/components/sections/WhyGova";
import DriverCTA from "@/components/sections/DriverCTA";
import Coverage from "@/components/sections/Coverage";
import FAQ from "@/components/sections/FAQ";
import DownloadBanner from "@/components/sections/DownloadBanner";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <RideTypes />
      <WhyGova />
      <DriverCTA />
      <Coverage />
      <FAQ />
      <DownloadBanner />
      <ContactSection />
    </>
  );
}
