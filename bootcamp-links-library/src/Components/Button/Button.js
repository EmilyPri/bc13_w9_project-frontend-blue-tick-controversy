import React from "react";

function Button(props) {
  return (
    <button className={props.className} onClick={props.buttonClick}>
      {props.buttonText}
    </button>
  );
}

export default Button;
