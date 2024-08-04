import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Banner } from "../components/Banner";
import About from "../components/About";
import BannerImage2 from "../images/banner2-small.png";

function AboutPage() {
  return (
    <div className="About">
      <Header />
      <Banner img={BannerImage2} content={""} />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
