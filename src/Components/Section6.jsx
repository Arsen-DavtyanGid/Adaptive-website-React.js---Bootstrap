import S6Section from "./S6Section";

function Section6(props) {
  return (
    <section className="Section6">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img1} text="Roses are red" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img2} text="Shop Activewear" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img3} text="Affordable tech" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img4} text="Lift and tone" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img5} text="Go the distance" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img6} text="Shop Jewelry" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img7} text="Shop Dresses" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img8} text="Shop Outerwear" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <S6Section s6img={props.s6img9} text="Furry friend faves" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section6;
