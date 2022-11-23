import React from "react";

function Dropdown(props) {
  return [
    // <input
    //   className={props.className}
    //   onChange={props.handleChange}
    //   list={props.list}
    //   name={props.name}
    //   placeholder={props.placeholder}
    // />,

    <select id={props.dataId} className={props.className} onChange={props.handleChange} placeholder={props.placeholder}>
      <option value={props.value1}>{props.text1}</option>
      <option value={props.value2}>{props.text2}</option>
      <option value={props.value3}>{props.text3}</option>
      <option value={props.value4}>{props.text4}</option>
      <option value={props.value5}>{props.text5}</option>
      <option value={props.value6}>{props.text6}</option>
      <option value={props.value7}>{props.text7}</option>
      <option value={props.value8}>{props.text8}</option>
    </select>,
  ];
}

export default Dropdown;
