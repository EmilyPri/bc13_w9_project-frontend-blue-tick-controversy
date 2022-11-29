import React from "react";

function RadioButtons(props) {
  return [
    <input aria-label="week-select" id="week" type="radio" value="week" name="dropdown" onChange={props.handleChange}/>,
    <p>⬅️ SELECT ➡️</p>,
    <input aria-label="subject-select" id="subject" type="radio" value="subject" name="dropdown" onChange={props.handleChange}/>,
  ];
}

export default RadioButtons;
