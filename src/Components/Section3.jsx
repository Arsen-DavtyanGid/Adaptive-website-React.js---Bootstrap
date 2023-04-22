import S3Section from "./S3Section";

function Section3(props) {
  return (
    <section className="Section3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section3-text">Partner stores</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <S3Section s2icon={props.s2icon} text="Etsy" s3img={props.s3img1} />
          </div>
          <div className="col-lg-6 col-md-6">
            <S3Section
              s2icon={props.s2icon}
              text="Bed Bath & Beyond"
              s3img={props.s3img2}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section3-undertext1">
              <a href="#">View all stores</a>
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
            <div className="section3-undertext2">
              Klarna may get a commission.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
