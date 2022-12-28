import React from 'react';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const subjectOptions = [
  { value: '1', label: 'API' },
  { value: '2', label: 'CSS' },
  { value: '3', label: 'JavaScript' },
  { value: '4', label: 'React' },
  { value: '5', label: 'HTML' },
  { value: '6', label: 'General Dev' },
  { value: '7', label: 'SQL' },
  { value: '8', label: 'Git Hub' }
]

const animatedComponents = makeAnimated();

export default function AnimatedMulti(props) {
  return (
    <Select 
    onChange={props.handleChange} 
    closeMenuOnSelect={false}
    components={animatedComponents}
      //defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti={true}
    options={subjectOptions}
    //value={subjectOptions.value}
    />
  );
}
