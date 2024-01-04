import "./Personalization.css";
import { PersonalizationContainerOne } from "../icons/PersonalizationIcon1";
import { PersonalizationContainerTwo } from "../icons/PersonalizationContainerTwo";
import { PersonalizationContainerThree } from "../icons/PersonalizationContainerThree";
export const PersonalizationSection = () => {
  return (
    <section className="personalization-container">
      <article className="container-decoration-one">
        <PersonalizationContainerOne></PersonalizationContainerOne>
        <h5>Hechos a mano</h5>
        <p>
          Descubre productos únicos de macramé, todos hechos a mano con
          dedicación y calidad asegurada, en una experiencia creativa.
        </p>
      </article>
      <article className="container-decoration-two">
        <PersonalizationContainerTwo></PersonalizationContainerTwo>
        <h5>Creatividad</h5>
        <p>
          Explora nuestro catálogo de macramé, donde la creatividad se entrelaza
          con productos hechos a mano, asegurando calidad en cada detalle.
        </p>
      </article>
      <article className="container-decoration-three">
        <PersonalizationContainerThree></PersonalizationContainerThree>
        <h5>Calidad asegurada</h5>
        <p>
          Sumérgete en nuestra selección de macramé: productos de calidad,
          hechos a mano con un toque de creatividad que destaca en cada diseño.
        </p>
      </article>
    </section>
  );
};
