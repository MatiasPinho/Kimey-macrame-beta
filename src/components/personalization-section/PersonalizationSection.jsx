import "./Personalization.css";

export const PersonalizationSection = () => {
  return (
    <section className="personalization-container">
      <article className="personalization-left">
        <p className="phrase-personalization">Buscamos la maxima calidad</p>
        <div className="title-p-personalization">
          <h3 className="h3-personalization">Productos personalizados</h3>
          <p className="p-personalization">
            Tejido a mano con materiales de la más alta calidad. Nuestros
            productos son hermosos y ecológicos. Confeccionado con 100% algodón.
          </p>
        </div>
      </article>
      <article className="personalization-right">
        <img
          className="personalization-img"
          src="./macrame-getty.jpg"
          alt="personalization"
        />
        <button className="button-personalization">Descubrelo aqui</button>
      </article>
    </section>
  );
};
