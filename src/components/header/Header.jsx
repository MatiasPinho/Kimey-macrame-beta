import "./Header.css";
import kimeyLogo from "/logo2.png";
import { NavMobileLogo } from "../icons/NavMobileLogo";
import { useState } from "react";
export const Header = () => {
  const  [isNavActive,setIsNavActive] = useState(false)
  const toggleNav = () =>{
    setIsNavActive(!isNavActive)
   
  }
  return (
    <header>
      <nav className="nav-mobile-container">
        <img src={kimeyLogo} alt="logo" className="kimey-logo" />
        <NavMobileLogo onclick={toggleNav} isNavActive = {isNavActive}></NavMobileLogo>
      
        <ul className={`${isNavActive ? "nav-mobile-deploy" : "nav-mobile-deploy-hidden"}`} >
        <li>Inicio</li>
          <li>Productos</li>
          <li>Nosotros</li>

          <li>Contactanos</li>

        </ul>
        
      </nav>
      <nav className="nav-destokp-container">
      <img src={kimeyLogo} alt="logo" className="kimey-logo" />
      <ul>
        <li>INICIO</li>
        <li>PRODUCTOS</li>
        <li>NOSOTROS</li>
        <li>CONTACTANOS</li>
      </ul>
      </nav>
    </header>
  );
};
