import "../styles/Home.scss";
import { Routes, Route } from "react-router-dom";
import Logements from "../components/Logements";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Logements />
      <Footer />
    </div>
  );
}

export default Home;
