import AboutSection from "@/components/sections/AboutSection";
import ContactPage from "@/components/sections/ContactPage";
import Footer from "@/components/sections/Footer";
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
      <ContactPage/>
      <Footer/>
    </>
  );
}
