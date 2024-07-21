import React from "react";
import { useParams } from "react-router-dom";
import SlidesShow from "./SlidesShow";
import data from "../data/logements.json";
import LogementDetails from "./LogementDetails";
import "../styles/Logementspage.scss";

export default function Logementspage() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logementspage">
      <SlidesShow pictures={logement.pictures} />
      <LogementDetails logement={logement} />
    </div>
  );
}
