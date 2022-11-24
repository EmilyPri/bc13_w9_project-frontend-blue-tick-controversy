import React from "react";

function Input(props) {
  return <input className={props.className} onChange={props.handleChange} type="text" placeholder={props.placeholder} />;
}

export default Input;
