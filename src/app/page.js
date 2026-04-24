'use client'
import PageLoading from "@/components/common/PageLoading";
import AboutSection from "@/components/sections/AboutSection";
import ContactPage from "@/components/sections/ContactPage";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/Portfoliosection";
import ServicesPage from "@/components/sections/Servicespage";
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
      <PortfolioSection/>
      <WorkSection />
      <ContactPage />
      <Footer />
    </>
  );
}
