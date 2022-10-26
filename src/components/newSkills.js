import React from "react";
export default function Skills(props) {
  
const restEndpoint = "https://alexkoppelman.es:1880/skills";

const callRestApi = async () => {
  const response = await fetch(restEndpoint);
      
  const jsonResponse = await response.json();
  
  const arrayOfLists = jsonResponse.map(
  
  record => 
    <div className="skills" key={record.idskills} >
    <div className="w3-container w3-dark-grey w3-round" style={{width:
   record.SkillRating === 1 ? "25%" 
   : record.SkillRating === 2  ? "50%" 
   : record.SkillRating === 3  ? "75%" 
   : "100%"
    }}>
    <span className="skilltext">{record.SkillName}</span>
    </div>
    </div>

  )

return arrayOfLists;
      
};

  
  function RenderResult() {
    const [apiResponse, setApiResponse] = React.useState(["loading"]);
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

  const [open, setOpen] = React.useState(false);
 
const toggle = () => {
    setOpen(!open);
  };
  
  return (
    <main>
    <div className="contentblock">
    <div className="SkillsHeader"><button type="button" className="collapsible" onClick={toggle}>Skills</button></div>
           
    {open && (
    <div className="skills">
      <RenderResult />
    </div>
    )
    }
     </div>
    </main>
    )
   } 