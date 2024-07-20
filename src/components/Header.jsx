import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import KasaLogo from "../images/KasaLogo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="Logo">
        <img src={KasaLogo} alt="Kasa Logo" />
      </div>
      <nav className="navbar">
        <Link to="/" className="navbar__link">
          Acceuil
        </Link>
        <Link to="/about" className="navbar__link">
          A propos
        </Link>
      </nav>
    </header>
  );
}
