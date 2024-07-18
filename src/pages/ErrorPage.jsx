import "../styles/ErrorPage.scss";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../components/Error";

function ErrorPage() {
  return (
    <div className="Errror">
      <Header />
      <Error />
      <Footer />
    </div>
  );
}

export default ErrorPage;
