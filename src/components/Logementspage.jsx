import React from "react";
import { useParams } from "react-router-dom";
import SlidesShow from "./SlidesShow";
import data from "../data/logements.json";

export default function Logementspage() {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <SlidesShow pictures={logement.pictures} />
      <p>Ceci va etre l'emplacement des details du logement</p>
    </div>
  );
}
