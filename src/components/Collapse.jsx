import React, { useState } from "react";
import "../styles/Collapse.scss";
export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <div className="collapse__header__title">{title}</div>
      </div>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}
