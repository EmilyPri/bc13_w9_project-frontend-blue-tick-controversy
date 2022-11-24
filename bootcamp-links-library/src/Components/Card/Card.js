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
        <button className="card-button" onClick={props.buttonCopy}>Copy to clipboard</button>
        <button className="card-button" onClick={props.buttonLink}>Take me there</button>
      </div>
      <div className="card-bottom">
        <p>{props.description}</p>
        {/* <button onClick={props.handleLike}>Likes : {props.numLikes}</button> */}
      </div>
    </div>,
  ];
}

export default Card;
