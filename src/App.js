
import './Appcopy.css';
import'./w3.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Aboutme from './components/aboutme.js';
import Links from './components/links.js';
import Skills from './components/newSkills.js';
import Projects from './components/projects';
import Referrals from './components/referrals';
import React from "react";


function App() {

return (
<div className="App">
  
  <div className="header"><Header /></div>
  <div className="left">
    <div className="about"><Aboutme /></div>
    <div className='skills'><Skills/></div>
    </div>
  
    <div className="projects"><Projects /></div>
  
  <div className="rightColumn">
    <div className="links"><Links/></div>
    <div className='Referrals'><Referrals /></div>
  </div>

  <div className="footer"><Footer /></div>
  
</div> 


  );
}

export default App;
