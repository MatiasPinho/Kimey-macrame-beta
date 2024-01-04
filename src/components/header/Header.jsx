import "./Header.css";
import kimeyLogo from "/logo2.png";
import { NavMobileLogo } from "../icons/NavMobileLogo";
import { useState } from "react";
export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
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
          <li>Inicio</li>
          <li>Productos</li>
          <li>Nosotros</li>

          <li>Contactanos</li>
        </ul>
      </nav>
      <nav className="nav-destokp-container">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Nosotros</li>
          <li>Contactanos</li>
        </ul>
      </nav>
    </header>
  );
};
