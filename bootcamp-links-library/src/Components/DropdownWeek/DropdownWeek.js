import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./DropdownWeek.css";

function DropdownWeek(props) {
  return [
    <select
      id={props.dataId}
      className={props.className}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      list={props.list}
    >
      <option key={uuidv4()} value="">
        {props.placeholder}
      </option>
      <option key={uuidv4()} value="1">
        Week 1
      </option>
      <option key={uuidv4()} value="2">
        Week 2
      </option>
      <option key={uuidv4()} value="3">
        Week 3
      </option>
      <option key={uuidv4()} value="4">
        Week 4
      </option>
      <option key={uuidv4()} value="5">
        Week 5
      </option>
      <option key={uuidv4()} value="6">
        Week 6
      </option>
      <option key={uuidv4()} value="7">
        Week 7
      </option>
      <option key={uuidv4()} value="8">
        Week 8
      </option>
    </select>,
  ];
}

export default DropdownWeek;
