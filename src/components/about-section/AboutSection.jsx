import "./AboutSection.css";
import workImage from "/card2.webp";
import image_about_1 from "/image_about_1.png";
import image_about_2 from "/image_about_2.png";
import image_about_3 from "/image_about_3.png";
import image_about_4 from "/image_about_4.png";
import triangulo from "/Frame 8.png";

export const AboutSection = () => {
  return (
    <section className="about-section-container">
      <article className="about-section-right">
        <div className="test">
          <h2 className="h2-about-section">Somos Kimey Macramé</h2>
          <p className="paragraph-about-section">
            Nuestro equipo, formado por <strong>apasionados</strong> artesanos,
            trabaja meticulosamente para asegurar la calidad en cada pieza que
            creamos.
          </p>
          <p className="paragraph-about-section">
            Desde pulseras hasta decoración para el hogar, cada artículo refleja
            nuestra dedicación a la autenticidad y la estética sencilla.
          </p>
          <button className="button-about-section">Mas sobre nosotros</button>
        </div>
      </article>
      <section className="about-section-left">
        <img className="image-work" src={triangulo} alt="workImage" />
        <article className="image-container-about">
          <img
            className="image-about"
            src={image_about_1}
            alt="image_about_1"
          />
          <img
            className="image-about"
            src={image_about_2}
            alt="image_about_2"
          />
          <img
            className="image-about"
            src={image_about_3}
            alt="image_about_3"
          />
          <img
            className="image-about"
            src={image_about_4}
            alt="image_about_4"
          />
        </article>
      </section>
    </section>
  );
};
