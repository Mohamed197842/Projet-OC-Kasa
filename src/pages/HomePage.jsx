import LogementsMenu from "../components/LogementsMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Banner } from "../components/Banner";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <LogementsMenu />
      <Footer />
    </div>
  );
}

export default Home;
