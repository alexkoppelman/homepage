import React from "react";
export default function Skills(props) {
  
  let percentage = "";
  
  if(props.rating === 1) {
    percentage = "25%";
  } else if (props.rating === 2) {
    percentage = "50%";
  } else if (props.rating === 3) {
    percentage = "75%";
  } else {
    percentage = "100%";
  }

  /* const style = {
    width: `${percentage}`
  }
   */
  const style = {
    width: percentage
  }

  return (
    <div className="skills" key={props.idskills} >
    {/* <img src={require(`../images/${props.rating.toString()}.png`)} alt="rating" width="70px" /> */}
    {/*<div className="w3-light-grey w3-round">*/}
      <div className="w3-container w3-dark-grey w3-round" style={style} >
      <span className="skilltext">{props.name}</span>
      </div>
    </div>
    
   )
   } 