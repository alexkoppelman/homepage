import React from "react";

export default function Projects() {


  const imageClick = event => {
    console.log(event.target.src);
  };


// handle data coming in
const restEndpoint = "https://alexkoppelman.es:1880/proj";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    const arrayOfLists = jsonResponse.map(
      record => 
      <div className="Card" key={record.idnew_table}>
        <p>
           {record.ProjectURL? <span className="projectLink"><a href={record.ProjectURL}> {record.ProjectName}</a></span> :<span>{record.ProjectName}</span> }
          </p>

            <span className="projectCat">{record.ProjectCategory}</span>
            <p className="projectDescr">{record.ProjectDescription}</p>
            <div className="projectFotos" align="center">
              {record.ProjectImage1 == null ? '' : <span ><img src= {'/images/' + record.ProjectImage1} className="foto1" alt={record.ProjectName} id={record.idnew_table} onClick={imageClick}  /></span> }
              {record.ProjectImage2 == null ? '' : <span ><img src= {'/images/' + record.ProjectImage2} className="foto2" alt={record.ProjectName} id={record.idnew_table} onClick={imageClick} /></span> }       
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
        <div>
          {apiResponse}
          
        </div>
      );
  };

  const [open, setOpen] = React.useState(true);
 
const toggle = () => {
    setOpen(!open);
  };

  
    return (
       
       <div className="contentblock">
        
        <div className="ReferralsHeader"><button type="button" className="collapsible" onClick={toggle}><span className="headertitle">Projects</span></button></div>
        {open && (
        <div className="projectstext" id="projectImageLarge">
            <RenderResult />
        </div>
        )}
           
        </div>
    
       
   )

   

   }

   