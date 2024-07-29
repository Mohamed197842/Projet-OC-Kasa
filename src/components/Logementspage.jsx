import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SlidesShow from "./SlidesShow";
import data from "../data/logements.json";
import LogementDetails from "./LogementDetails";
import "../styles/Logementspage.scss";

export default function Logementspage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = data.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/*"); // Rediriger vers la page d'erreur
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // Retourner null pendant la redirection
  }

  return (
    <div className="logementspage">
      <SlidesShow pictures={logement.pictures} />
      <LogementDetails logement={logement} />
    </div>
  );
}
