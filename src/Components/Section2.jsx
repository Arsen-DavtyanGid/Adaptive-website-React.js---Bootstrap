import S2Section from "./S2Section";

function Section2(props) {
  return (
    <section className="Section2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section2-first-text">Pay with Klarna.</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <S2Section
              s2img={props.s2img1}
              s2icon={props.s2icon}
              text1="Flex your payments"
              text2="Enjoy the flexibility to shop what you love and split your purchase into 4 interest-free payments. No credit impact to apply."
              text3="Learn more"
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <S2Section
              s2img={props.s2img2}
              s2icon={props.s2icon}
              text1="Never miss a payment"
              text2="Get more time to pay when you need it. Extend your due date easily in the app. Report returns in the app and we'll pause your payments."
              text3="Learn more"
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <S2Section
              s2img={props.s2img3}
              s2icon={props.s2icon}
              text1="Pay wherever, whenever"
              text2="Pay however you like, wherever you want to shop—and do it directly from your desktop, phone or in-store."
              text3="Learn more"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section2;
