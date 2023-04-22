function S3Section(props) {
  return (
    <div className="section3-content">
      <img src={props.s3img} alt="nkar" width="90%" />
      <div className="section3-content-text-flex">
        <div className="section3-content-text">{props.text}</div>
        <div className="section3-content-icon">
          <img src={props.s2icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}
export default S3Section;
