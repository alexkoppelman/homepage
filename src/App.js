
import './newApp.css';
import'./w3.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Aboutme from './components/aboutme.js';
import Links from './components/links.js';
import Skills from './components/skills.js';
import Projects from './components/projects';
import React from "react";


function App() {
  const [skillsArray, setSkillsArray] = React.useState();
  const getApiData = async () => {
  const response = await fetch(
    "https://alexkoppelman.es:1880/skills"
  ).then((response) => response.json());
   setSkillsArray(response);
};

React.useEffect(() => {
  getApiData()
  }, []);

  const skilllist = skillsArray && 
    skillsArray.map((item => {
      //console.log(item);
      return(      
      
      <Skills 
          key={item.idskills}
          name={item.SkillName}
          rating={item.SkillRating}
      />
      )}))
 
  
  return (
<div className="App">
  <div className="header"><Header /></div>
  <div className="footer"><Footer /></div>
  <div className="left">
    <div className="about"><Aboutme /></div>
    <div className="skills">
      {skilllist}
    </div>
  </div>
  <div className="projects"><Projects /></div>
  <div className="right">
    <div className="links"><Links /></div>
    <div className='topright'></div>
  </div>
</div> 


  );
}

export default App;
