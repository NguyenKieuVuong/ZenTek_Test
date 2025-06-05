import img_Promotion from "../assets/images/banner-promotion.png";
function BannerPromotion() {
  return (
    <>
      <div className="box-banner">
        <div className="block-title">
          <h4 className="slide-title">promotion</h4>
        </div>
        <div className="box-banner__img">
          <img src={img_Promotion} alt="promotion" />
        </div>
      </div>
    </>
  );
}

export default BannerPromotion;
