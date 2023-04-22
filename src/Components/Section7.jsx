import S7Section from "./S7Section";

function Section7(props) {
  return (
    <section className="Section7">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section7-text">Discover deals</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <S7Section
              s7img={props.s7img1}
              text1="25%"
              text2="Promo code"
              text3="Oneida"
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <S7Section
              s7img={props.s7img2}
              text1="30%"
              text2="Promo code"
              text3="Burt's Bees Baby"
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <S7Section
              s7img={props.s7img3}
              text1="15%"
              text2="Promo code"
              text3="Senreve"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section7-text-view">
              <a href="#">View all deals</a>
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
            <div className="section7-text-get">
              Klarna may get a commission.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section7;
