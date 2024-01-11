import { Link } from "react-router-dom";
import "./ProductPage.css";
import data from "../../../../data/Data.json";
import { useState } from "react";

export const ProductPage = () => {
  const [isButtonFilterClicked, setIsButtonFilterClicked] = useState({
    filter: false,
    order: false,
  });

  const [isButtonFilterCategoryClicked, setIsButtonFilterCategoryClicked] =
    useState({
      category: false,
      color: false,
      dimensions: false,
    });

  const [isCheckboxClicked, setIsCheckboxClicked] = useState({
    telares: false,
    pulseras: false,
    categoria3: false,
    categoria4: false,
    categoria5: false,
    categoria6: false,
    blanco: false,
    marron: false,
    gris: false,
    negro: false,
    azul: false,
  });

  const [isButtonFilterDimensionClicked, setIsButtonFilterDimensionClicked] =
    useState({
      dimension: false,
    });

  const [isCheckboxDimensionClicked, setIsCheckboxDimensionClicked] = useState({
    dimension1: false,
    dimension2: false,
    dimension3: false,
    // Agrega más dimensiones según sea necesario
  });

  const [isClickOrder, setIsClickOrder] = useState({
    maxPrice: false,
    minPrice: false,
    zA: false,
    aZ: false,
  });
  console.log(isClickOrder);
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
                  setIsButtonFilterClicked((prevStates) => ({
                    ...prevStates,
                    filter: !prevStates.filter,
                  }));
                }}
              >
                Filtrar
              </button>
            </div>
            <button
              onClick={() => {
                setIsButtonFilterClicked((prevStates) => ({
                  ...prevStates,
                  order: !prevStates.order,
                }));
              }}
            >
              Ordenar por
            </button>
            <div
              className={`filter-category-ul ${
                !isButtonFilterClicked.filter ? "filter-category-ul-hidden" : ""
              }`}
            >
              <div className="category-section">
                <div
                  onClick={() => {
                    setIsButtonFilterCategoryClicked((prevStates) => ({
                      ...prevStates,
                      category: !prevStates.category,
                    }));
                  }}
                  className="p-and-svg-category"
                >
                  <p className="p-name-category">Categoria</p>
                  <svg
                    className={`svg-arrow-category ${
                      isButtonFilterCategoryClicked.category
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
                    !isButtonFilterCategoryClicked.category
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
                <div
                  onClick={() =>
                    setIsButtonFilterCategoryClicked((prevStates) => ({
                      ...prevStates,
                      color: !prevStates.color,
                    }))
                  }
                  className="p-and-svg-category"
                >
                  <p>Color</p>
                  <svg
                    className={`svg-arrow-category ${
                      isButtonFilterCategoryClicked.color
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
                    !isButtonFilterCategoryClicked.color
                      ? "checkbox-container-category-hidden"
                      : ""
                  }`}
                >
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        blanco: !prevStates.blanco,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.blanco
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Blanco</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        marron: !prevStates.marron,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.marron
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Marrón</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        gris: !prevStates.gris,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.gris
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Gris</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        negro: !prevStates.negro,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.negro
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Negro</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxClicked((prevStates) => ({
                        ...prevStates,
                        azul: !prevStates.azul,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxClicked.azul
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Azul</p>
                  </li>
                </ul>
              </div>
              <div className="dimensions-section">
                <div
                  onClick={() => {
                    setIsButtonFilterDimensionClicked((prevStates) => ({
                      ...prevStates,
                      dimension: !prevStates.dimension,
                    }));
                  }}
                  className="p-and-svg-category"
                >
                  <p>Dimensiones</p>
                  <svg
                    className={`svg-arrow-category ${
                      isButtonFilterDimensionClicked.dimension
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
                    !isButtonFilterDimensionClicked.dimension
                      ? "checkbox-container-category-hidden"
                      : ""
                  }`}
                >
                  <li
                    onClick={() => {
                      setIsCheckboxDimensionClicked((prevStates) => ({
                        ...prevStates,
                        dimension1: !prevStates.dimension1,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxDimensionClicked.dimension1
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Dimension 1</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxDimensionClicked((prevStates) => ({
                        ...prevStates,
                        dimension2: !prevStates.dimension2,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxDimensionClicked.dimension2
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Dimension 2</p>
                  </li>
                  <li
                    onClick={() => {
                      setIsCheckboxDimensionClicked((prevStates) => ({
                        ...prevStates,
                        dimension3: !prevStates.dimension3,
                      }));
                    }}
                  >
                    <div
                      className={`checkbox-category ${
                        isCheckboxDimensionClicked.dimension3
                          ? "checkbox-category-clicked"
                          : ""
                      }`}
                    ></div>
                    <p>Dimension 3</p>
                  </li>
                </ul>
              </div>
            </div>

            <ul
              className={`filter-order-ul ${
                isButtonFilterClicked.order ? "filter-order-ul-hidden" : ""
              }`}
            >
              <li
                onClick={() => {
                  setIsClickOrder((prevStates) => ({
                    ...prevStates,
                    maxPrice: !prevStates.maxPrice,
                  }));
                }}
              >
                Ordenar por mayor precio
              </li>
              <li
                onClick={() => {
                  setIsClickOrder((prevStates) => ({
                    ...prevStates,
                    minPrice: !prevStates.minPrice,
                  }));
                }}
              >
                Ordenar por menor precio
              </li>
              <li
                onClick={() => {
                  setIsClickOrder((prevStates) => ({
                    ...prevStates,
                    aZ: !prevStates.aZ,
                  }));
                }}
              >
                Ordenar por orden alfabetico a-z
              </li>
              <li
                onClick={() => {
                  setIsClickOrder((prevStates) => ({
                    ...prevStates,
                    zA: !prevStates.zA,
                  }));
                }}
              >
                Ordenar por orden alfabetico z-a
              </li>
            </ul>
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
