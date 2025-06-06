import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import "./assets/js/jquery-3.5.1.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerHotNFT from "./components/BannerHotNFT";
import BannerPromotion from "./components/BannerPromotion";
import BelowIcon from "./components/BelowIcon";
import SlideMain from "./components/SlideMain";
import SlideCalendar from "./components/SlideCalendar";
import SlideCollections from "./components/SlideCollections";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <section className="block-slide" data-aos="zoom-in">
        <SlideMain />
      </section>
      <section className="block-icon" data-aos="zoom-in">
        <div className="container">
          <BelowIcon />
        </div>
      </section>

      <section className="block-slide-collection" data-aos="zoom-in">
        <div className="container">
          <SlideCollections />
        </div>
      </section>

      <section className="block-slide-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <SlideCalendar />
            </div>
            <div className="col-6 col-md-3" data-aos="fade-left">
              <BannerHotNFT />
            </div>
            <div
              className="col-6 col-md-3"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <BannerPromotion />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
