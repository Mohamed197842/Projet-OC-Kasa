import React from "react";
import "../styles/logements-card.scss";

export default function LogementsCard({ title /*, //cover*/ }) {
  return (
    <div className="logements-cards">
      <div className="card-cover">
        <div className="card-content">{title}</div>
      </div>
    </div>
  );
}
