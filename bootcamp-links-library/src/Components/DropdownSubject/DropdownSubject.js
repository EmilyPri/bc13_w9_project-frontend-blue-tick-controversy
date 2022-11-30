import React from "react";

function Dropdown(props) {
  return [
     <select id={props.dataId} className={props.className} onChange={props.handleChange} placeholder={props.placeholder} list={props.list}>
      <option value="">{props.placeholder}</option>
      <option value="API">API</option>
      <option value="CSS">CSS</option>
      <option value="JavaScript">JavaScript</option>
      <option value="React">React</option>
      <option value="HTML">HTML</option>
      <option value="General Dev">General Dev</option>
      <option value="SQL">SQL</option>
      <option value="Git">Git</option>
    </select>,
  ];
}

export default Dropdown;
