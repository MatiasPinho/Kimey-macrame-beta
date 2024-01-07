import "./Header.css";
import kimeyLogo from "/logo2.png";
import { NavMobileLogo } from "../icons/NavMobileLogo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainHtml } from "../pages/main-html/MainHtml";
export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  console.log(isNavActive);
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  return (
    <header>
      <nav className="nav-mobile-container">
        <NavMobileLogo
          onclick={toggleNav}
          isNavActive={isNavActive}
        ></NavMobileLogo>

        <ul
          className={`${
            isNavActive ? "nav-mobile-deploy" : "nav-mobile-deploy-hidden"
          }`}
        >
          <li onClick={toggleNav}>
            <Link to="/">Inicio</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/products">Productos</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/about">Nosotros</Link>
          </li>
          <li>Contactanos</li>
        </ul>
      </nav>
      <nav className="nav-destokp-container">
        <ul className="ul-destokp">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"products"}>Productos</Link>
          </li>
          <li>
            <Link to={"/about"}>Nosotros</Link>
          </li>
          <li>
            <Link to={"#"}>Contactanos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
