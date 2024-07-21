import React from "react";
import data from "../data/logements.json";
import LogementsCard from "./LogementsCard";
import "../styles/LogementsMenu.scss";

export default function LogementsMenu() {
  return (
    <div className="logement-menu">
      <div className="grid-cards">
        {data.map((logement) => (
          <LogementsCard
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}
