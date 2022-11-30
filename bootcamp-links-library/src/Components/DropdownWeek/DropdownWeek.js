import React from "react";

function DropdownWeek(props) {
  return [
    <select id={props.dataId} className={props.className} onChange={props.handleChange} placeholder={props.placeholder} list={props.list}>
      <option value="">{props.placeholder}</option>
      <option value="1">Week 1</option>
      <option value="2">Week 2</option>
      <option value="3">Week 3</option>
      <option value="4">Week 4</option>
      <option value="5">Week 5</option>
      <option value="6">Week 6</option>
      <option value="7">Week 7</option>
      <option value="8">Week 8</option>
    </select>,
  ];
}

export default DropdownWeek;
