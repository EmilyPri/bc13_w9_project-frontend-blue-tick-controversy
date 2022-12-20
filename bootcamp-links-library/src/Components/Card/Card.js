import React from "react";
import "./Card.css";
function Card(props) {
//likesHandler enables the user to add likes to a card and stores the data in the DB.
//setTimeout is used because the number of likes needs to re-render in the DOM to display the correct number.
  async function likesHandler(data, id) {
    const response = await fetch(`http://localhost:3003/api/links/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    // setTimeout(props.findBySectionButton, 1000);
    props.findBySectionButton();
  }

  return [
    <div className="card-container">
      <div className="card-top">
        <div>
          <img src={props.subjectIcon} alt="icon"/>
        </div>
        <h1>{props.title}</h1>
      </div>

      <div className="card-middle">
        <button className="card-button" onClick={props.buttonCopy}>
          Copy to clipboard
        </button>
        <button className="card-button" onClick={props.buttonLink}>
          Take me there
        </button>
      </div>
      <div className="card-bottom">
        <div className="p-description-container">
          <p>{props.description}</p>
        </div>
        <div className="like-container">
          <button id={props.buttonID} onClick={()=> likesHandler({ likes: props.numLikes + 1 }, props.buttonID)}>❤️ {props.numLikes}</button>
        </div>
      </div>
    </div>,
  ];
}

export default Card;
