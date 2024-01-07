import { Link } from "react-router-dom";
import "./ProductPage.css";
import data from "../../../../data/Data.json";
import { useState } from "react";

export const ProductPage = () => {
  const [isButtonFilterClicked, setIsButtonFilterClicked] = useState(false);
  const [isButtonFilterCategoryClicked, setIsButtonFilterCategoryClicked] =
    useState(false);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState({
    telares: false,
    pulseras: false,
    categoria3: false,
    categoria4: false,
    categoria5: false,
    categoria6: false,
  });

  console.log(isCheckboxClicked);

  return (
    <main className="main-product-page-container">
      <section className="section-page-container">
        <span>
          <Link to={"/"}>Inicio</Link>
          <hr className="line-separator" />
          <Link to={"/About"}>Nosotros</Link>
        </span>
        <article className="paragraph-search-filter-container">
          <aside className="text-search-bar">
            <p className="product-section-filter">Todos nuestros productos</p>
            <form className="form-search-bar" action="">
              <input
                aria-label="search"
                type="text"
                id="searchInput"
                placeholder="Buscar"
              />
            </form>
          </aside>
          <aside className="buttons-filter">
            <div>
              <button
                onClick={() => {
                  setIsButtonFilterClicked(!isButtonFilterClicked);
                }}
              >
                Filtrar
              </button>
            </div>
            <button>Ordenar por</button>
            <div
              className={`filter-category-ul ${
                !isButtonFilterClicked ? "filter-category-ul-hidden" : ""
              }`}
            >
              <div className="category-section">
                <div
                  onClick={() =>
                    setIsButtonFilterCategoryClicked(
                      !isButtonFilterCategoryClicked
                    )
                  }
                  className="p-and-svg-category"
                >
                  <p className="p-name-category">Categoria</p>
                  <svg
                    className={`svg-arrow-category ${
                      isButtonFilterCategoryClicked
                        ? "svg-arrow-category-rotate"
                        : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <path d="m17.635,14.428l-5.281-5.281c-.189-.189-.518-.189-.707,0l-5.281,5.281-.707-.707,5.281-5.281c.566-.566,1.555-.566,2.121,0l5.281,5.281-.707.707Z" />
                  </svg>
                </div>
                <ul
                  className={`checkbox-container-category ${
                    !isButtonFilterCategoryClicked
                      ? "checkbox-container-category-hidden"
                      : ""
                  }`}
                >
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        telares: !prevStates.telares,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.telares
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Telares</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        pulseras: !prevStates.pulseras,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.pulseras
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Pulseras</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        categoria3: !prevStates.categoria3,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.categoria3
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Categoria 3</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        categoria4: !prevStates.categoria4,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.categoria4
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Categoria 4</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        categoria5: !prevStates.categoria5,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.categoria5
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Categoria 5</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        categoria6: !prevStates.categoria6,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.categoria6
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Categoria 6</p>
                  </li>
                </ul>
              </div>
              <div className="color-section">
                <p>Color</p>
              </div>
              <div className="dimensions-section">
                <p>Dimensiones</p>
              </div>
            </div>
          </aside>
        </article>
        <article className="product-page-container">
          {data.map((pr) => {
            return (
              <div className="product-card" key={pr.id}>
                <h4>{pr.titulo}</h4>
                <img src={pr.imagen} alt={pr.titulo} />
                <button>Consultar aquí</button>
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
