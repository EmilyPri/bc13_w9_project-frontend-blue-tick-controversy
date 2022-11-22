import React from "react";

function Input(props) {
  return <input onChange={props.handleChange} type="text" placeholder={props.placeholder} />;
}

export default Input;
