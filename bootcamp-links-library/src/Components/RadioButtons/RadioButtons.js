import React from "react";

function RadioButtons(props) {
  return [
    <input id="week" type="radio" value="week" name="dropdown" onChange={props.handleChange}/>,
    <input id="subject" type="radio" value="subject" name="dropdown" onChange={props.handleChange}/>,
  ];
}

export default RadioButtons;
