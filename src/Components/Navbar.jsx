function Navbar() {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.add("add");
  }
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="nav-left-part">
              <div className="manu-bar">
                <a href="#" onClick={hiddenManu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                  >
                    <path
                      fill="white"
                      d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
                    />
                  </svg>
                </a>
              </div>
              <div className="header-links">
                <a href="#">Shopping categories</a>
                <a href="#">Deals and rewards</a>
                <a href="#">How Klarna works</a>
                <a href="#">Help</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="nav-right-part">
              <a href="#" className="login">
                Log in
              </a>
              <a href="#" className="signup">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
