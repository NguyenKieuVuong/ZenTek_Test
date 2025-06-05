import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import imgPrev from "../assets/images/btn-slide-prev.png";
import imgNext from "../assets/images/btn-slide-next.png";
import bannerImg from "../assets/images/banner-NFT_drops_calendar.png";
function SlideCalendar() {
  const owlCalendar = React.useRef();

  const goToNext = () => {
    owlCalendar.current?.next();
  };

  const goToPrev = () => {
    owlCalendar.current?.prev();
  };
  const options = {
    loop: true,
    items: 1,
    nav: false,
    autoplay: false,
  };

  const images = Array(6).fill(bannerImg);
  return (
    <>
      <div className="block-title">
        <h4 className="slide-title">NFT Drops Calendar</h4>
        <div className="nav-collection">
          <div
            id="nav-calendar-prev"
            className="btn-nav btn-prev"
            onClick={goToPrev}
          >
            <img src={imgPrev} alt="" />
          </div>
          <div
            id="nav-calendar-next"
            className="btn-nav btn-next"
            onClick={goToNext}
          >
            <img src={imgNext} alt="" />
          </div>
        </div>
      </div>
      <OwlCarousel
        id="slide-calendar"
        className="owl-theme"
        {...options}
        ref={owlCalendar}
      >
        {images.map((src, idx) => (
          <div className="item" key={idx}>
            <img src={src} alt="NFT Drops Calendar" loading="lazy" />
          </div>
        ))}
      </OwlCarousel>
      {/* <div id="slide-calendar" className="owl-carousel owl-theme">
        <div className="item">
          <img
            src="../assets/images/banner-NFT_drops_calendar.png"
            alt="NFT Drops Calendar"
          />
        </div>
        <div className="item">
          <img
            src="../assets/images/banner-NFT_drops_calendar.png"
            alt="NFT Drops Calendar"
          />
        </div>
        <div className="item">
          <img
            src="../assets/images/banner-NFT_drops_calendar.png"
            alt="NFT Drops Calendar"
          />
        </div>
        <div className="item">
          <img
            src="../assets/images/banner-NFT_drops_calendar.png"
            alt="NFT Drops Calendar"
          />
        </div>
        <div className="item">
          <img
            src="../assets/images/banner-NFT_drops_calendar.png"
            alt="NFT Drops Calendar"
          />
        </div>
        <div className="item">
          <img
            src="../assets/images/banner-NFT_drops_calendar.png"
            alt="NFT Drops Calendar"
          />
        </div>
      </div> */}
    </>
  );
}

export default SlideCalendar;
