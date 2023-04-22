function S6Section(props) {
  return (
    <div className="section6-content">
      <div className="section6-content-img">
        <img src={props.s6img} alt="nkar" width="85%"/>
      </div>
      <div className="section6-content-text">{props.text}</div>
    </div>
  );
}
export default S6Section;
