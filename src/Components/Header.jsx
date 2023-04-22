import Navbar from "./Navbar";

function Header(props) {
  function hidden() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.remove("add");
  }
  return (
    <header>
      <div className="manu-bar-mobile">
        <div className="manu-bar-x">
          <a href="#" onClick={hidden}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
              />
            </svg>
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Shopping categories</a>
          </li>
          <li>
            <a href="#">Deals and rewards</a>
          </li>
          <li>
            <a href="#">How Klarna works</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-content-flex">
              <div className="header-content">
                <div className="header-text1">Find it. Compare it.</div>
                <div className="header-text2">And pay how you like.</div>
                <div className="header-input">
                  <input type="text" id="text" />
                  <div className="header-input-right">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.000244141 4.98599H8.94424L6.32824 1.63099L7.90624 0.399994L11.7892 5.38199C12.0712 5.74299 12.0702 6.24999 11.7892 6.61099L7.90524 11.588L6.32924 10.357L8.96024 6.98599H0.000244141V4.98599Z"
                        fill="#0E0E0F"
                      />
                    </svg>
                  </div>
                  <div className="header-input-search">
                    <svg
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.00243 7.35906C2.00243 4.65323 4.24374 2.45973 7.00852 2.45973C9.77331 2.45973 12.0146 4.65323 12.0146 7.35906C12.0146 10.0649 9.77331 12.2584 7.00852 12.2584C4.24374 12.2584 2.00243 10.0649 2.00243 7.35906ZM7.00852 0.5C3.13782 0.5 0 3.5709 0 7.35906C0 11.1472 3.13782 14.2181 7.00852 14.2181C8.23309 14.2181 9.3843 13.9108 10.386 13.3706L14.412 18.5L16 17.3062L11.9841 12.1896C13.2408 10.95 14.017 9.24324 14.017 7.35906C14.017 3.5709 10.8792 0.5 7.00852 0.5Z"
                        fill="#0E0E0F"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-img">
              <div className="head-image">
                <img src={props.foto} alt="foto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
