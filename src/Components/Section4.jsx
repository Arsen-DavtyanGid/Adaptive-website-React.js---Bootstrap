function Section4(props) {
  return (
    <section className="Section4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section4-left-part">
              <div className="section4-left-part-text1">Klarna Card</div>
              <div className="section4-left-part-text2">
                Pay anywhere that accepts Visa.
              </div>
              <div className="section4-left-part-text3">
                More time to pay is what we do. Charging interest? Not our
                thing. The Klarna Card has a 0% APR. Your credit score won’t be
                affected when you apply for or use the Klarna Card.
              </div>
              <div className="section4-left-part-btn">
                <button>Learn more</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section4-right-part">
              <img src={props.s4img} alt="nkar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section4;
