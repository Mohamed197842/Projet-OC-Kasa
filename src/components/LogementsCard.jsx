import React from "react";
import "../styles/logements-card.scss";
import { useNavigate } from "react-router-dom";

export default function LogementsCard({ id, title, cover }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="logements-cards" onClick={handleClick}>
      <div className="card-cover">
        <img src={cover} alt={title} className="card-cover__img" />
        <div className="card-content">{title}</div>
      </div>
    </div>
  );
}
