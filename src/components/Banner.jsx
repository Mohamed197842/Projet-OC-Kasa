import React from "react";
import "../styles/Banner.scss";

export function Banner({ img, content }) {
  return (
    <div className="banner">
      {img && <img src={img} alt="Banner" className="banner__image" />}
      {content && <div className="banner__text">{content}</div>}
    </div>
  );
}
