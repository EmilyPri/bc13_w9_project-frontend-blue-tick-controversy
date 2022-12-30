import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function AnimatedMulti(props) {
  return (
    <Select
      onChange={props.handleChange}
      closeMenuOnSelect={false}
      components={animatedComponents}
      //defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti={true}
      options={props.options}
      //value={subjectOptions.value}
    />
  );
}
