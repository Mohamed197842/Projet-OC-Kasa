import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.scss";

export default function ErrorContent() {
  return (
    <div className="error-content">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas</p>
      <Link to="/" className="link-home">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
}
