import AboutSection from "@/components/sections/AboutSection";
import BrandingSection from "@/components/sections/BrandingSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPage from "@/components/sections/Servicespage";
import WorkSection from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPage />
      <WorkSection/>
      <BrandingSection />
    </>
  );
}
