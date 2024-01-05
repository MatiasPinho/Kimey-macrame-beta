import { AboutSection } from "../../about-section/AboutSection";
import { HeroSection } from "../../hero-section/HeroSection";
import { PersonalizationSection } from "../../personalization-section/PersonalizationSection";
import { Footer } from "../../Footer/Footer";
import { Routes, BrowserRouter } from "react-router-dom";
export const MainHtml = () => {
  return (
    <main>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <PersonalizationSection></PersonalizationSection>
      <Footer></Footer>
    </main>
  );
};
