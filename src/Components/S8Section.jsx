function S8Section(props) {
  return (
    <div className="section8-content">
      <div className="section8-content-flex">
        <div
          className="section8-div"
          style={{ backgroundColor: `${props.color}` }}
        >
          <img src={props.s8icon} alt="icon" />
        </div>
      </div>

      <div className="section8-content-text">{props.text}</div>
    </div>
  );
}
export default S8Section;
