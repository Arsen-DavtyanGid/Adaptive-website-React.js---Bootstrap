import S8Section from "./S8Section";

function Section8(props) {
  return (
    <section className="Section8">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section7-text">Shop by category.</div>
          </div>
        </div>
        <div className="row">
          <div className="section8-divs">
            <S8Section
              s8icon={props.s8icon1}
              color="#E7D6FD"
              text="Health & Beauty"
            />
            <S8Section
              s8icon={props.s8icon2}
              color="#FFDAED"
              text="Clothing & Accessories"
            />
            <S8Section
              s8icon={props.s8icon3}
              color="#C9FAF9"
              text="Toys & Hobbies"
            />
            <S8Section
              s8icon={props.s8icon4}
              color="#DDDEFF"
              text="Home & Appliances"
            />
            <S8Section
              s8icon={props.s8icon5}
              color="#E7D6FD"
              text="TV & Audio"
            />
            <S8Section
              s8icon={props.s8icon6}
              color="#CDFAE4"
              text="Sports & Outdoor"
            />
            <S8Section
              s8icon={props.s8icon7}
              color="#FDF6BC"
              text="Computers & Tablets"
            />
            <S8Section
              s8icon={props.s8icon8}
              color="#F9D4FF"
              text="Home Improvement"
            />
            <S8Section
              s8icon={props.s8icon9}
              color="#FFDEDE"
              text="Photography"
            />
            <S8Section
              s8icon={props.s8icon10}
              color="#FFE2B2"
              text="Video Games"
            />
            <S8Section
              s8icon={props.s8icon11}
              color="#FFE09D"
              text="Phones & Smartwatches"
            />
            <S8Section
              s8icon={props.s8icon12}
              color="#BEEBFC"
              text="Kids & Family"
            />
            <S8Section
              s8icon={props.s8icon13}
              color="#E4F9B2"
              text="Automotive"
            />
            <S8Section
              s8icon={props.s8icon14}
              color="#DDDEFF"
              text="Garden & Patio"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="s8-view">
              <a href="#">View all categories</a>
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3 0.0600586L15.714 1.47406L10.128 7.06006C8.95799 8.23006 7.05599 8.23006 5.88599 7.06006L0.299988 1.47406L1.71399 0.0600586L7.29999 5.64606C7.69099 6.03706 8.32299 6.03706 8.71399 5.64606L14.3 0.0600586Z"
                  fill="#17120F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section8;
