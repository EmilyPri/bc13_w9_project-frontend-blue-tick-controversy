import React from "react";

function Dropdown(props) {
  return [
    <input
      onChange={props.handleChange}
      list={props.list}
      name={props.name}
      placeholder={props.placeholder}
    />,

    <datalist id={props.dataId}>
      <option key={props.key1} value={props.value1}/>
    </datalist>,
  ];
}

export default Dropdown;
