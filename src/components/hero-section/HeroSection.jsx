import "./HeroSection.css";
import imageHeroSection from "/image_hero_section.png";
export const HeroSection = () => {
  return (
    <section className="hero-section-container">
      <div className="hero-left">
        <aside className="p-hero-container">
          <p className="p-hero-section">Elegancia,</p>
          <p className="p-hero-section">
            pasion y calidad completamente asegurada
          </p>
        </aside>
        <h1 className="h1-hero-section">
          MACRAME MODERNO PARA DECORAR EL HOGAR
        </h1>
        <button className="button-hero-section">Compra ahora</button>
      </div>
     
    </section>
  );
};
