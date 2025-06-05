import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// ✅ Import ảnh
import btnPrev from "../assets/images/btn-slide-prev.png";
import btnNext from "../assets/images/btn-slide-next.png";

import img1 from "../assets/images/img-collections-1.png";
import img2 from "../assets/images/img-collections-2.png";
import img3 from "../assets/images/img-collections-3.png";
import img4 from "../assets/images/img-collections-4.png";
import img5 from "../assets/images/img-collections-5.png";
import img6 from "../assets/images/img-collections-6.png";
function SlideCollections() {
  const carouselRef = useRef();

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };
  const options = {
    loop: true,
    items: 1,
    nav: false,
    autoplay: true,
    margin: 8,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    autoWidth: true,
    responsive: {
      0: {
        margin: 8,
        items: 3,
      },
      768: {
        margin: 8,
        items: 4,
      },
      992: {
        margin: 16,
        items: 5,
      },
      1200: {
        margin: 16,
        items: 6,
      },
    },
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img1,
    img2,
    img3, // 9 ảnh như bạn mô tả
  ];
  return (
    <>
      <div className="block-title">
        <h4 className="slide-title">New NFT Collections</h4>
        <div className="nav-collection">
          <div id="nav-collection-prev" className="btn-nav btn-prev" onClick={handlePrev}>
            <img src={btnPrev} alt="" />
          </div>
          <div id="nav-collection-next" className="btn-nav btn-next" onClick={handleNext}>
            <img src={btnNext} alt="" />
          </div>
        </div>
      </div>
       <OwlCarousel
       id="slide-collection"
        className="owl-theme"
        {...options}
        ref={carouselRef}
      >
        {images.map((src, idx) => (
          <div className="item" key={idx}>
            <img src={src} alt={`slide NFT ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </OwlCarousel>
      {/* <div id="slide-collection" className="owl-carousel owl-theme">
        <div className="item">
          <img src="images/img-collections-1.png" alt="slide NFT" />
        </div>
        <div className="item">
          <img src="images/img-collections-2.png" alt="slide NFT" />
        </div>
        <div className="item">
          <img src="images/img-collections-3.png" alt="slide NFT" />
        </div>
        <div className="item">
          <img src="images/img-collections-4.png" alt="slide NFT" />
        </div>
        <div className="item">
          <img src="images/img-collections-5.png" alt="slide NFT" />
        </div>
        <div className="item">
          <img src="images/img-collections-6.png" alt="slide NFT" />
        </div>
        <div className="item">
          <img src="images/img-collections-1.png" alt="slide NFT" />
        </div>
        <div className="item">
          <img src="images/img-collections-2.png" alt="slide NFT" />
        </div>
        <div className="item">
          <img src="images/img-collections-3.png" alt="slide NFT" />
        </div>
      </div> */}
    </>
  );
}

export default SlideCollections;
