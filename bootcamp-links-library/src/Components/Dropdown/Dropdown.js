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
      <option value={props.value1} />
      <option value={props.value2} />
    </datalist>,
  ];
}

export default Dropdown;
