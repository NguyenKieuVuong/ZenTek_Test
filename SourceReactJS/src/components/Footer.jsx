import btnInstall from "../assets/images/btn-install.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-item__title">about us</div>
              <div className="footer-item__row">Careers</div>
              <div className="footer-item__row">Company Details</div>
              <div className="footer-item__row">Terms & Conditions</div>
              <div className="footer-item__row">Help center</div>
              <div className="footer-item__row">Privacy Policy</div>
              <div className="footer-item__row">Affiliate</div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-item__title">products</div>
              <div className="footer-item__row">NFT Marketplace</div>
              <div className="footer-item__row">Slingshot</div>
              <div className="footer-item__row">Swaps</div>
              <div className="footer-item__row">NFT Launchpad</div>
              <div className="footer-item__row">Runes Platform</div>
              <div className="footer-item__row">Creator Dashboard</div>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-item__title">Resources</div>
              <div className="footer-item__row">Support</div>
              <div className="footer-item__row">API</div>
              <div className="footer-item__row">Feature Requests</div>
              <div className="footer-item__row">Trust & Safety</div>
              <div className="footer-item__row">Sitemap</div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-item__title">Contact Us</div>
              <div className="footer-item__row">support@tech.email</div>
              <div className="footer-item__row">affiliate@tech.com</div>
              <div className="footer-item__row --btn">
                <a
                  className="btn btn-footer"
                  href="#"
                  target="_blank "
                  rel="noopener noreferrer "
                >
                  <img src={btnInstall} alt="install" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
