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
          <b><a href={record.URL} alt={record.name} target="_blank" rel="noreferrer">{record.name}</a></b><br/>
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


  
    return (
       
       <div className="links">
       <p>
        <b className="sectionTitle">Links</b>
       </p>       
       <span className="linkstext">
        <RenderResult />
       </span>
       </div>
       
   )
   }