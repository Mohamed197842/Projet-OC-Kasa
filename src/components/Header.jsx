import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import KasaLogo from "../images/KasaLogo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="Logo">
        <img src={KasaLogo} alt="Kasa Logo" />
      </div>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar__link active" : "navbar__link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navbar__link active" : "navbar__link"
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
