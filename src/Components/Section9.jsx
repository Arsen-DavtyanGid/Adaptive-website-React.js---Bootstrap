function Section9(props) {
  return (
    <section className="Section9">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section9-text1">Discover Klarna features.</div>
            <div className="section9-text2">
              Download the app to enjoy all of Klarna's features. Start saving
              time and money now in just a few taps.
            </div>
            <div className="section9-links">
              <div>
                <a href="#">Rewards</a>
              </div>
              <div>
                <a href="#">Loyalty cards</a>
              </div>
              <div>
                <a href="#">Referrals</a>
              </div>
              <div>
                <a href="#">Price drops</a>
              </div>
              <div>
                <a href="#">Returns</a>
              </div>
              <div>
                <a href="#">Delivery tracking</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row x">
          <div className="col-lg-6">
            <div className="section9-image">
              <img src={props.s9img} alt="nkar" width="100%" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section9-content-flex">
              <div className="section9-content">
                <div className="section9-content-text1">Rewards.</div>
                <div className="section9-content-text2">
                  Join our Rewards club and earn points when shopping. Turn your
                  points into rewards from world-class brands.
                </div>
                <div className="section9-content-link">
                  <a href="#">Learn more</a>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7888 17.3079L10.2118 16.0779L14.9648 9.98594H-0.000198364V7.98594H14.9388L10.2118 1.91794L11.7888 0.689941L17.7888 8.38894C18.0708 8.74994 18.0708 9.25694 17.7888 9.61894L11.7888 17.3079Z"
                      fill="#17120F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section9;
