function S1Sections(props) {
  return (
    <div className="Section1-content">
      <div className="section1-content-icon">
        <img src={props.s1icon} alt="icon" />
      </div>
      <div className="section1-content-text1">{props.text1}</div>
      <div className="section1-content-text2-flex">
        <div className="section1-content-text2">{props.text2}</div>
      </div>
    </div>
  );
}
export default S1Sections;
