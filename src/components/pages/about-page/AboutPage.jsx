import { Link } from "react-router-dom";
import "./AboutPage.css";
export const AboutPage = () => {
  return (
    <main className="main-container-about-page">
      <section className="about-page-container">
        <span>
          <Link to={"/"}>Inicio</Link>
          <hr className="line-separator" />
          <Link to={"/About"}>Nosotros</Link>
        </span>
        <div className="container-text-about-page">
          <h2>Queres conocernos mas?</h2>

          <p>
            ¡Saludos desde el taller de "Kimey Macrame"! Aquí, cada hilo cuenta
            una historia y cada nudo es una expresión de creatividad. Sumérgete
            en nuestro universo de macramé, donde las fibras se convierten en
            obras de arte y la tradición se encuentra con la innovación.
          </p>
          <p>
            En este espacio vibrante, te invitamos a descubrir lo que nos
            impulsa. Explora las inspiraciones detrás de nuestras creaciones,
            desde la majestuosidad de la naturaleza hasta los rincones del mundo
            que nos cautivan. Atrévete a sumergirte en los detalles, desde la
            elección meticulosa de materiales hasta la creación de patrones que
            dan vida a nuestras piezas.
          </p>
          <p>
            Detrás de cada tejido hay un equipo apasionado de artesanos
            dedicados a mantener viva la esencia del macramé. Sin nombres, solo
            el arte entrelazado que creamos con amor y dedicación. En este
            espacio, la fusión de lo tradicional con lo contemporáneo da como
            resultado piezas únicas que capturan la esencia del arte textil.
          </p>
          <p>
            Bienvenido a "Kimey Macrame", donde cada obra cuenta una historia y
            cada hilo es un lienzo para la creatividad. Únete a nosotros en este
            viaje donde los hilos se convierten en magia y la simplicidad del
            entrelazado se transforma en arte. ¡Explora con nosotros y descubre
            el encanto de los nudos!
          </p>
          {/* <div className="container-contact-about-page">
            <p>Recuerda que puedes contactarnos</p>
          </div> */}
        </div>
      </section>
    </main>
  );
};
