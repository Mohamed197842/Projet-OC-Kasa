import React from "react";
import KasaLogo2 from "../images/KasaLogo2.png";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={KasaLogo2} alt="Kasa logo" />
      </div>
      <div className="content">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
