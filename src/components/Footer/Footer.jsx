import { DecorationIcon } from "../icons/DecorationIcon";
import { DecorationIcon2 } from "../icons/DecorationIcon2";
import "./Footer.css";
export const Footer = () => {
  return (
    <section className="footer-all-section-container">
      <DecorationIcon></DecorationIcon>
      <article className="contact-text">
        <h3>Contacta por email con nosotros</h3>
        <p>Obtiene un descuento de 5% contactando por este medio</p>
      </article>
      <form>
        <input
          type="text"
          aria-label="name"
          id="name"
          name="name"
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          aria-label="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <input type="submit" value="Enviar" />
      </form>
      <DecorationIcon2></DecorationIcon2>
    </section>
  );
};
