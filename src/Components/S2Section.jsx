function S2Section(props) {
  return (
    <div className="Section2-content">
      <div className="section2-content-img">
        <img src={props.s2img} alt="nkar" width="100%" />
      </div>
      <div className="section2-content-text1">{props.text1}</div>
      <div className="section2-content-text2-flex">
        <div className="section2-content-text2">{props.text2}</div>
      </div>
      <div className="section2-content-learn">
        <div className="section2-content-a">
          <a href="#">{props.text3}</a>
        </div>
        <div className="section2-content-learn-icon">
          <img src={props.s2icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}
export default S2Section;
