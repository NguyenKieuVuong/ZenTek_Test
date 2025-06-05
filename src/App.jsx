import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
import Aoe from "aoejs";

const aoe = new Aoe();
aoe.init();
function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section className="block-slide" data-aoe="popIn">
        <SlideMain />
      </section>
      <section className="block-icon" data-aoe="popIn">
        <div className="container">
          <BelowIcon />
        </div>
      </section>

      <section className="block-slide-collection" data-aoe="popIn">
        <div className="container">
          <SlideCollections />
        </div>
      </section>

      <section className="block-slide-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aoe="fadeInLeft">
              <SlideCalendar />
            </div>
            <div className="col-6 col-md-3" data-aoe="fadeInRight">
              <BannerHotNFT />
            </div>
            <div
              className="col-6 col-md-3"
              data-aoe="fadeInRight"
              data-aoe-delay="100"
            >
              <BannerPromotion />
            </div>
          </div>
        </div>
      </section>
     
        <Footer  />
      
    </>
  );
}

export default App;
