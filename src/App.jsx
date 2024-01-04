import "./App.css";
import { AboutSection } from "./components/about-section/AboutSection";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero-section/HeroSection";
import { PersonalizationSection } from "./components/personalization-section/PersonalizationSection";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <PersonalizationSection></PersonalizationSection>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
