import React from "react";
import "../styles/Tag.scss";

export default function Tag({ tags }) {
  return (
    <ul className="logement-tags-list">
      {tags.map((tag, id) => (
        <li key={id} className="logement-tags">
          {tag}
        </li>
      ))}
    </ul>
  );
}
