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
      <section className="about-section-right">
        <article className="image-text-about">
          <img src={image_about_3} alt="" />
          <p className="p-text-image-about">Telares</p>
        </article>
        <div className="p-h4-button-about">
          <h4>Somos Kimey Macrame</h4>
          <p>
            Nuestro equipo, formado por apasionados artesanos, trabaja
            meticulosamente para asegurar la calidad en cada pieza que creamos.
            Desde pulseras hasta decoración para el hogar, cada artículo refleja
            nuestra dedicación a la autenticidad y la estética sencilla.
          </p>
          <button>Mas sobre nosotros</button>
        </div>
      </section>
      <section className="about-section-left">
        <article className="image-text-about">
          <img src={image_about_1} alt="" />
          <p className="p-text-image-about">Colgantes</p>
        </article>
        <article className="image-text-about">
          <img src={image_about_2} alt="" />
          <p className="p-text-image-about">Pulseras</p>
        </article>
      </section>
    </section>
  );
};
