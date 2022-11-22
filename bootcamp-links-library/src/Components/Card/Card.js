import React from "react";
import "./Card.css";
function Card(props) {
  return [
    <div className="card-container">
      <div className="card-top">
        <div><img src={props.subjectIcon} /></div>
        <h1>{props.title}</h1>
      </div>
      <div className="card-middle">
        <p>{props.link}</p>
      </div>
      <div className="card-bottom">
        <p>{props.description}</p>
      </div>
    </div>,
  ];
}

export default Card;
