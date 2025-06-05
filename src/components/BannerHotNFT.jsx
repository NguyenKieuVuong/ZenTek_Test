import img_hot_NFT from "../assets/images/banner-hot_NFT.png";
function BannerHotNFT() {
  return (
    <>
      <div className="box-banner">
        <div className="block-title">
          <h4 className="slide-title">hot NFT</h4>
        </div>
        <div className="box-banner__img">
          <img src={img_hot_NFT} alt="hot NFT" />
        </div>
      </div>
    </>
  );
}

export default BannerHotNFT;
