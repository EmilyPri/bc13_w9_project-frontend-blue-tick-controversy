import React from "react";

function DropdownSubject(props) {
  return [
     <select id={props.dataId} className={props.className} onChange={props.handleChange} placeholder={props.placeholder} list={props.list}>
      <option value="">{props.placeholder}</option>
      <option value="1">API</option>
      <option value="2">CSS</option>
      <option value="3">JavaScript</option>
      <option value="4">React</option>
      <option value="5">HTML</option>
      <option value="6">General Dev</option>
      <option value="7">SQL</option>
      <option value="8">Git</option>
    </select>,
  ];
}

export default DropdownSubject;
