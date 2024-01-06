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
          <article>
            <h2>Queres conocernos mas?</h2>
            <p>
              ¡Saludos desde el taller de "Kimey Macrame"! Aquí, cada hilo
              cuenta una historia y cada nudo es una expresión de creatividad.
              Sumérgete en nuestro universo de macramé, donde las fibras se
              convierten en obras de arte y la tradición se encuentra con la
              innovación.
            </p>
            <p>
              En este espacio vibrante, te invitamos a descubrir lo que nos
              impulsa. Explora las inspiraciones detrás de nuestras creaciones,
              desde la majestuosidad de la naturaleza hasta los rincones del
              mundo que nos cautivan. Atrévete a sumergirte en los detalles,
              desde la elección meticulosa de materiales hasta la creación de
              patrones que dan vida a nuestras piezas.
            </p>
            <p>
              Detrás de cada tejido hay un equipo apasionado de artesanos
              dedicados a mantener viva la esencia del macramé. Sin nombres,
              solo el arte entrelazado que creamos con amor y dedicación. En
              este espacio, la fusión de lo tradicional con lo contemporáneo da
              como resultado piezas únicas que capturan la esencia del arte
              textil.
            </p>
            <p>
              Bienvenido a "Kimey Macrame", donde cada obra cuenta una historia
              y cada hilo es un lienzo para la creatividad. Únete a nosotros en
              este viaje donde los hilos se convierten en magia y la simplicidad
              del entrelazado se transforma en arte. ¡Explora con nosotros y
              descubre el encanto de los nudos!
            </p>
          </article>
          <div className="container-contact-about-page">
            <p>Recuerda que puedes contactarnos</p>
            <svg
              className="svg-about-page"
              xmlns="http://www.w3.org/2000/svg"
              width="146"
              height="182"
              viewBox="0 0 146 182"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.0858 142.858C62.212 131.053 53.0371 111.462 64.4992 81.9221C63.7412 80.3229 63.0639 78.5807 62.4617 76.7156C58.9501 65.8377 58.0196 50.7243 58.6889 35.763L58.7912 33.4831L62.0799 32.2594L61.9778 34.5388C61.3379 48.8403 62.1829 63.3152 65.5397 73.7138C65.8799 74.7711 66.2528 75.7962 66.6576 76.7869C69.2011 71.1864 75.2059 60.2837 82.3513 55.9493C94.0851 48.8318 100.71 58.6941 99.2431 70.3043C97.5446 83.7495 87.3177 91.7018 82.6532 92.677C75.4991 94.1728 70.1985 91.2321 66.4176 85.3933C57.3707 111.024 65.9348 127.944 78.2254 138.468L81.8954 130.937L84.6174 146.063L72.2848 150.657L76.0858 142.858ZM68.3764 80.3605C71.7144 86.2561 76.5198 89.411 83.2432 88.0055C86.8133 87.2587 94.7016 81.2723 96.0012 70.9822C97.1379 61.9849 91.8066 54.7162 82.7138 60.2318C76.4654 64.0219 71.3128 73.7708 69.1706 78.5402C68.8995 79.1434 68.6347 79.7503 68.3764 80.3605Z"
                fill="#A65C41"
              />
            </svg>

            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Whatsapp</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
