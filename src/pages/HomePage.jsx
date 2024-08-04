import LogementsMenu from "../components/LogementsMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Banner } from "../components/Banner";
import BannerImgage1 from "../images/banner1-small.png";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner img={BannerImgage1} content={"chez vous, partout et ailleurs"} />
      <LogementsMenu />
      <Footer />
    </div>
  );
}

export default Home;
