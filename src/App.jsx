import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LogementPage from "./pages/LogementPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/logement/:id" element={<LogementPage />} />
      </Routes>
    </div>
  );
}

export default App;
