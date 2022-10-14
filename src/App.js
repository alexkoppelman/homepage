
import './App.css';
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
      {/* The Headooooor */}
      <Header />
      {/* The about me section should be hidden and shown only when hoovered? */}
      <div className="mainpage">
      <Aboutme />
      {/* The Skills area*/}
      <section className='skillsSection'>
      <div className="aboutme">  <p>Skills:</p>
      {skilllist}
      </div>
      </section>
      { /* The Projects area*/}
      <Projects />
      { /* The Links area*/}
      <Links />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
