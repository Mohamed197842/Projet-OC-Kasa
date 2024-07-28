import React from "react";
import "../styles/Banner.scss";
import BannerImgage1 from "../images/banner1-small.png";
import BannerImage2 from "../images/banner2-small.png";

export function Banner() {
  return (
    <div className="banner">
      <img src={BannerImgage1} alt="first banner" className="banner__image" />
      <div className="banner__text">
        Chez vous,
        <br /> partout et ailleurs
      </div>
    </div>
  );
}

export function Banner2() {
  return (
    <div className="banner">
      <img src={BannerImage2} alt="second banner" className="banner__image" />
    </div>
  );
}
