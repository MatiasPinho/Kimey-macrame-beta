import { Link } from "react-router-dom";
import "./ProductPage.css";
import data from "../../../../data/Data.json";
export const ProductPage = () => {
  return (
    <main className="main-product-page-container">
      <section className="section-page-container">
        <span>
          <Link to={"/"}>Inicio</Link>
          <hr className="line-separator" />
          <Link to={"/About"}>Nosotros</Link>
        </span>
        <article className="paragraph-search-filter-container">
          <p className="product-section-filter">Todos nuestros productos</p>
          <form className="form-search-bar" action="">
            <input
              aria-label="search"
              type="text"
              id="searchInput"
              placeholder="Buscar"
            />
          </form>
          <aside className="buttons-filter">
            <button>Filtrar</button>
            <button>Ordenar por</button>
          </aside>
        </article>
        <article className="product-page-container">
          {data.map((pr) => {
            return (
              <div className="product-card" key={pr.id}>
                <h4>{pr.titulo}</h4>
                <img src={pr.imagen} alt={pr.titulo} />
                <button>Consultar aqui</button>
              </div>
            );
          })}
        </article>
        <aside className="buttons-page-container">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </aside>
      </section>
    </main>
  );
};
