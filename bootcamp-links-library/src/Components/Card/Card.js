import React from 'react'

function Card (props){

    return [
        <img src={props.subjectIcon} height="100px"/>,
        <h1>{props.title}</h1>,
        <p>{props.link}</p>,
        <p>{props.description}</p>
    ]
}

export default Card