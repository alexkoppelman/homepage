import React from "react";

export default function Links() {

const restEndpoint = "https://alexkoppelman.es:1880/links";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    const arrayOfLists = jsonResponse.map(
      record => 
      <li key={record.idlinks}>
        <p>
          <a href={record.URL} alt={record.name} target="_blank" rel="noreferrer">{record.name}</a><br/>
          {record.description}
        </p>
      </li>
    )
    //console.log(arrayOfLists);
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
           <ul>{apiResponse}</ul>
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
      <div className="LinksHeader"><button type="button" className="collapsible" onClick={toggle}><span className="headertitle">Links</span></button></div>
         
      {open && (
       <div className="links">
        <RenderResult />
       <br/>
       </div>
       
       )}
           
           </div>    
        
       </main>
   )
   }