import React from "react";
export default function Skills(props) {

let image = props.rating & ".png" ;

  return (
    <div className="skills" key={props.idskills} >
    <h3>{props.name}</h3>
    <h3><img src={`/images/${props.rating}.png`} /></h3>
    </div>
   )
   } 