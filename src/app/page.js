'use client'
import PageLoading from "@/components/common/PageLoading";
import AboutSection from "@/components/sections/AboutSection";
import BrandingSection from "@/components/sections/BrandingSection";
import ContactPage from "@/components/sections/ContactPage";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OrbitalSection from "@/components/sections/OrbitalSection";
import PortfolioSection from "@/components/sections/Portfoliosection";
import ServicesPage from "@/components/sections/Servicespage";
import TestimonialsSection from "@/components/sections/Testimonialssection";
import WorkSection from "@/components/sections/WorkSection";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <PageLoading />
      <HeroSection />
      <AboutSection />
      <ServicesPage />
      <OrbitalSection/>
      <PortfolioSection/>
      <WorkSection />
      <TestimonialsSection/>
      <ContactPage />
      <Footer />
    </>
  );
}
