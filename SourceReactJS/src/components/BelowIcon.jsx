import icoFreeToEarn from "../assets/images/ico-free_to_earn.png";
import icoRanking from "../assets/images/ico-ranking.png";
import icoVideoNFT from "../assets/images/ico-video-NFT.png";
import icoHowToBuy from "../assets/images/ico-how_to_buy.png";
import icoNewNFTs from "../assets/images/ico-new_NFTS.png";
import icoRoadmaps from "../assets/images/ico-roadmaps.png";

function IconItem({ src, title }) {
  return (
    <div className="icon-item">
      <div className="icon-item__img">
        <img src={src} alt={title} loading="lazy" />
      </div>
      <div className="icon-item__title">{title}</div>
    </div>
  );
}

function BelowIcon() {
  const icons = [
    { src: icoFreeToEarn, title: "free to earn" },
    { src: icoRanking, title: "ranking" },
    { src: icoVideoNFT, title: "video-NFT" },
    { src: icoHowToBuy, title: "how to buy" },
    { src: icoNewNFTs, title: "new NFTS" },
    { src: icoRoadmaps, title: "roadmaps" },
  ];
  return (
    <>
      <div className="icon-list">
        {icons.map((icon, index) => (
          <IconItem key={index} src={icon.src} title={icon.title} />
        ))}
      </div>
    </>
  );
}

export default BelowIcon;
