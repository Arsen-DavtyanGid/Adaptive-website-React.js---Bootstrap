import S1Sections from "./S1Sections";

function Section1(props) {
  return (
    <section className="Section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <S1Sections
              s1icon={props.s1icon1}
              text1="Shop what you love"
              text2="Find new products and brands. Get the best deal and earn rewards—just for shopping."
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <S1Sections
              s1icon={props.s1icon2}
              text1="Pay how you like"
              text2="Choose how you pay at partner stores, via our app, Klarna Card or browser extension."
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <S1Sections
              s1icon={props.s1icon3}
              text1="Manage your budget"
              text2="Split your payments and manage purchases, with a smart spending overview and more."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section1;
