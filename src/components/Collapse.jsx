import React, { useState } from "react";
import "../styles/Collapse.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  // Détermine les classes à appliquer au conteneur principal
  const containerClassName = isOpen ? "collapse open" : "collapse";

  return (
    <div className={containerClassName}>
      <div className="collapse__header">
        <div className="collapse__header__title">{title}</div>
        <div
          className="collapse__header__arrow"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 14l5-5 5 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}
