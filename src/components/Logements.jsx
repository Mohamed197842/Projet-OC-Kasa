import React from "react";
import data from "../data/logements.json";
import LogementsCard from "./LogementsCard";
import Tag from "./Tag";

export default function Logements() {
  return (
    <div className="logment-menu">
      <div className="grid-cards">
        {data.map((logement) => (
          <LogementsCard
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}
