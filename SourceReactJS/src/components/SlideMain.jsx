import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img_SlideMain from "../assets/images/img-slide.png";

function SlideMain() {
  const options = {
    loop: true,
    items: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  };
  return (
    <>
      <OwlCarousel id="slide-main" className="owl-theme" {...options}>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
        <div className="item">
          <img src={img_SlideMain} alt="NFT Drops Calendar" />
        </div>
      </OwlCarousel>
    </>
  );
}

export default SlideMain;
