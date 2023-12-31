import "./Header.css";
import kimeyLogo from "/logo2.png";
import { NavMobileLogo } from "../icons/NavMobileLogo";
import { useState } from "react";
export const Header = () => {
  const  [isNavActive,setIsNavActive] = useState(false)
  const toggleNav = () =>{
    setIsNavActive(!isNavActive)
    console.log("se clickeo");
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
    </header>
  );
};
