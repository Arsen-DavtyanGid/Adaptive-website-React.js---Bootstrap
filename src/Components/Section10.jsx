function Section10(props) {
  return (
    <section className="Section10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section10-content-flex">
              <div className="section10-content">
                <div className="section10-content-text1">
                  Save time and money with Klarna.
                </div>
                <div className="section10-content-text2">
                  Shop and split your payments with Klarna. Sign up now to pay
                  via our app, browser extension or in-store with the Klarna
                  Card.
                </div>
                <div className="section10-content-btn">
                  <button className="get-chrome">Get Klarna for Chrome</button>
                  <button className="get-app">Get the app</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section10-image">
              <img src={props.s10img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section10;
