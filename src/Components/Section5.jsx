function Section5(props) {
  return (
    <section className="Section5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section5-left-part">
              <img src={props.s5img} alt="nkar" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section5-right-part">
              <div className="section5-right-part-text1">Get inspired.</div>
              <div className="section5-right-part-text2">
                Explore our curated lists of products and stores for more inspo.
                Find something to love in electronics, fashion, beauty and more.
              </div>
              <div className="section5-right-part-btn">
                <button>Discover trends</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section5;
