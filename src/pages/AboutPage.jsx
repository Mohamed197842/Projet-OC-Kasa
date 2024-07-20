import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Banner2 } from "../components/Banner";
import About from "../components/About";

function AboutPage() {
  return (
    <div className="About">
      <Header />
      <Banner2 />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
