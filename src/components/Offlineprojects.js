import React from "react";

export default function Projects(props) {

    return (
   
      <div className="Card" key={props.idnew_table}>
        <div className="card--contents">
        <div className="skillsList">
          <ul>
            {props.ProjectSkill1 ? <li className={props.ProjectSkill1} ><i className = {props.ProjectSkill1Icon} />{props.ProjectSkill1}</li> : null}
            {props.ProjectSkill2 ? <li className={props.ProjectSkill2} ><i className = {props.ProjectSkill2Icon} />{props.ProjectSkill2}</li> : null}
            {props.ProjectSkill3 ? <li className={props.ProjectSkill3} ><i className = {props.ProjectSkill3Icon} />{props.ProjectSkill3}</li> : null}
            {props.ProjectSkill4 ? <li className={props.ProjectSkill4} ><i className = {props.ProjectSkill4Icon} />{props.ProjectSkill4}</li> : null}
            {props.ProjectSkill5 ? <li className={props.ProjectSkill5} ><i className = {props.ProjectSkill5Icon} />{props.ProjectSkill5}</li> : null}
            {props.ProjectSkill6 ? <li className={props.ProjectSkill6} ><i className = {props.ProjectSkill6Icon} />{props.ProjectSkill6}</li> : null}
          </ul>
        </div>
        <div className="project--titleDescription">
            <p>
            {props.ProjectURL? <span className="projectLink"><a href={props.ProjectURL}> <span className="project--title">{props.ProjectName}</span></a></span> :<span className="project--title">{props.ProjectName}</span> }
            </p>
            <span className="projectCat">{props.ProjectCategory}</span>
            <p className="projectDescr">{props.ProjectDescription}</p>
          </div>
            <div className="projectFotos" align="center">
              {props.ProjectImage1 == null ? '' : <span ><img src= {'/images/' + props.ProjectImage1} className="foto1" alt={props.ProjectName} id={props.idnew_table}   /></span> }
              {props.ProjectImage2 == null ? '' : <span ><img src= {'/images/' + props.ProjectImage2} className="foto1" alt={props.ProjectName} id={props.idnew_table}  /></span> }
            
              {props.ProjectStatus === "Completed" ? '' : <div className="projectStatus">{props.ProjectStatus}</div>}
            </div>
      </div>
      </div>

    )

   }

   