function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-usa">
              <img src={props.usa} alt="usa" />
              United States
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7888 17.3079L10.2118 16.0779L14.9648 9.98594H-0.000198364V7.98594H14.9388L10.2118 1.91794L11.7888 0.689941L17.7888 8.38894C18.0708 8.74994 18.0708 9.25694 17.7888 9.61894L11.7888 17.3079Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div className="footer-media">
              <div className="footer-mediaa">
                <img src={props.facebook} alt="face" />
              </div>
              <div className="footer-mediaa">
                <img src={props.linkin} alt="linkin" />
              </div>
              <div className="footer-mediaa">
                <img src={props.twitter} alt="twit" />
              </div>
              <div className="footer-mediaa">
                <img src={props.instagram} alt="insta" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-uls">
              <ul>
                <p>Klarna</p>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Extra O blog</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Auto-import / Magic import</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-uls">
              <ul>
                <p>Customer</p>
                <li>
                  <a href="#">Buy now pay later</a>
                </li>
                <li>
                  <a href="#">Contact us via app</a>
                </li>
                <li>
                  <a href="#">Customer service</a>
                </li>
                <li>
                  <a href="#">Partner stores</a>
                </li>
                <li>
                  <a href="#">Shopping app</a>
                </li>
                <li>
                  <a href="#">Rewards club</a>
                </li>
                <li>
                  <a href="#">Buyer Protection Policy</a>
                </li>
                <li>
                  <a href="#">Feedback and complaints</a>
                </li>
                <li>
                  <a href="#">Your California Privacy Choices</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-uls">
              <ul>
                <p>Business</p>
                <li>
                  <a href="#">Sell with Klarna</a>
                </li>
                <li>
                  <a href="#">Payment methods</a>
                </li>
                <li>
                  <a href="#">Platforms and partners</a>
                </li>
                <li>
                  <a href="#">Partner program</a>
                </li>
                <li>
                  <a href="#">Affiliate program</a>
                </li>
                <li>
                  <a href="#">Business login</a>
                </li>
                <li>
                  <a href="#">Business support</a>
                </li>
                <li>
                  <a href="#">Operational status</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-text">
              Monthly financing through Klarna is issued by WebBank, member
              FDIC. Copyright © 2005-2022 Klarna Inc. NMLS #1353190, 629 N. High
              Street, Third Floor, Columbus, OH 43215. Other CA resident loans
              made or arranged pursuant to a California Financing Law license.
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-links">
              <a href="#">Legal</a>
              <a href="#">Terms</a>
              <a href="#">Privacy policy</a>
              <a href="#">Cookies</a>
              <a href="#">Sitemap</a>
              <a href="#">Klarna.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
