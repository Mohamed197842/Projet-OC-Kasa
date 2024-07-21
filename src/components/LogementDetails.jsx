import React from "react";
import "../styles/LogementDetails.scss";
import Tag from "./Tag";
import Collapse from "./Collapse";
import Rating from "./Rating";

export default function LogementDetails({ logement }) {
  const { title, description, host, rating, location, equipments, tags } =
    logement;
  return (
    <div className="Container">
      <div className="LogementDetails">
        <div className="LogementInfos">
          <h2 className="LogementInfos__title">{title}</h2>
          <p className="LogementInfos__loc">{location}</p>
          <Tag tags={tags} />
        </div>
        <div className="LogementHost-rating">
          <div className="LogementHost-rating__host">
            <p className="host-name">
              {host.name.split(" ")[0]}
              <br />
              {host.name.split(" ")[1]}
            </p>
            <img src={host.picture} alt="" className="profile-picture" />
          </div>
          <Rating rating={rating} />
        </div>
      </div>
      <div className="logementCollapse">
        <Collapse title="Déscription" content={description} />
        <Collapse
          title="Équipement"
          content={
            <ul>
              {equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
