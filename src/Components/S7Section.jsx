function S7Section(props) {
  return (
    <div className="section7-content">
      <div
        className="section7-content-img"
        style={{
          backgroundImage: `url(${props.s7img})`,
          backgroundPosition: "centre",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p>{props.text1}</p>
      </div>
      <div className="section7-content-text">
        <div className="section7-content-text2">{props.text2}</div>
        <div className="section7-content-text3">{props.text3}</div>
      </div>
    </div>
  );
}
export default S7Section;
