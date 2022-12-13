import React from "react";
import projjson from '../proj.json' 


export default function Projects() {

  const imageClick = event => {
    console.log(event.target.src);
};


// handle project data coming in
const restEndpoint = "https://alekbcn.duckdns.org:1880/proj";


const callRestApi = async () => {
    
    //enable when back home
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    
    //console.log(jsonResponse);
    
    const arrayOfLists = jsonResponse.map(
           
      record => 
      
      <div className="Card" key={record.idnew_table}>
        <div className="skillsList">
          <ul>
            {record.ProjectSkill1 ? <li className={record.ProjectSkill1} ><i className = {record.ProjectSkill1Icon} />{record.ProjectSkill1}</li> : null}
            {record.ProjectSkill2 ? <li className={record.ProjectSkill2} ><i className = {record.ProjectSkill2Icon} />{record.ProjectSkill2}</li> : null}
            {record.ProjectSkill3 ? <li className={record.ProjectSkill3} ><i className = {record.ProjectSkill3Icon} />{record.ProjectSkill3}</li> : null}
            {record.ProjectSkill4 ? <li className={record.ProjectSkill4} ><i className = {record.ProjectSkill4Icon} />{record.ProjectSkill4}</li> : null}
            {record.ProjectSkill5 ? <li className={record.ProjectSkill5} ><i className = {record.ProjectSkill5Icon} />{record.ProjectSkill5}</li> : null}
            {record.ProjectSkill6 ? <li className={record.ProjectSkill6} ><i className = {record.ProjectSkill6Icon} />{record.ProjectSkill6}</li> : null}
          </ul>
        </div>
        <p>
           {record.ProjectURL? <span className="projectLink"><a href={record.ProjectURL}> {record.ProjectName}</a></span> :<span>{record.ProjectName}</span> }
          </p>

            <span className="projectCat">{record.ProjectCategory}</span>
            <p className="projectDescr">{record.ProjectDescription}</p>
            <div className="projectFotos" align="center">
              {record.ProjectImage1 == null ? '' : <span ><img src= {'/images/' + record.ProjectImage1} className="foto1" alt={record.ProjectName} id={record.idnew_table} onClick={imageClick}  /></span> }
              {/* {record.ProjectImage2 == null ? '' : <span ><img src= {'/images/' + record.ProjectImage2} className="foto2" alt={record.ProjectName} id={record.idnew_table} onClick={imageClick} /></span> }        */}
            </div>
              {record.ProjectStatus === "Completed" ? '' : <p className="projectStatus">{record.ProjectStatus}</p>}
              
      </div>
    )
    return arrayOfLists;
  };


function RenderResult() {
    const [apiResponse, setApiResponse] = React.useState(["loading"]);
    //console.log(apiResponse);
    React.useEffect(() => {
        callRestApi().then(
            result => setApiResponse(result));
    },[]);
  
    return(
          {apiResponse}
      );
  };

  const [open, setOpen] = React.useState(true);
 
  const toggle = () => {
    setOpen(!open);
  };

  
    return (
    <div>
      <RenderResult />
    </div>            
    )

   }

   