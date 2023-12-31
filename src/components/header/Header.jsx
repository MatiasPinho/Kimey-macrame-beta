import "./Header.css";
import kimeyLogo from "/logo2.png";
import { NavMobileLogo } from "../icons/NavMobileLogo";
export const Header = () => {
  return (
    <header>
      <nav className="nav-mobile-container">
        <img src={kimeyLogo} alt="logo" className="kimey-logo" />
        <NavMobileLogo></NavMobileLogo>
      </nav>
    </header>
  );
};
