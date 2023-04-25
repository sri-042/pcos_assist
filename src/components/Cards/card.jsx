import "./Card.css";
const Card = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    props.onClick(props.code);
  };
  return (
    <div className="card card-style">
      <center>
        <img src={props.src} className="card-img-top img-style" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.txt}</p>
        </div>
        <button onClick={onClickHandler} className="button-style" type="Submit">
          View
        </button>
      </center>
    </div>
  );
};
export default Card;
