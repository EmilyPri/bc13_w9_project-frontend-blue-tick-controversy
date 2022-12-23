import React from "react";

function InputField(props) {
  return (
    <input
      className={props.className}
      onChange={props.handleChange}
      type="text"
      placeholder={props.placeholder}
      onKeyDown={(e) => {
                if (e.key === "Enter") {
                    props.onEnter();
        }
      }}
    />
  );
}

export default InputField;
