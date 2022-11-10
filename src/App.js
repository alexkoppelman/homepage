
import './css/structure.css';
import './css/general.css';
import './css/colors.css';

import'./w3.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Aboutme from './components/aboutme.js';
import Links from './components/links.js';
import Skills from './components/newSkills.js';
import Projects from './components/projects.js';
import Referrals from './components/referrals';
import React from "react";


function App() {

return (
<div className="App">
<div className="header">
<Header />
</div>

<div className="row">
  <div className="col-3 col-s-3 col-newcolabout menu left">
  <div className="about"><Aboutme /></div>
    <div className='skills'><Skills/></div>
    <div className="links"><Links/></div>
  </div>

  <div className="col-6 col-s-6 col-newcolprojects">
  <Projects />
  </div>

  <div className="col-3 col-s-3 rightColumn">
   
    
    <div className='Referrals'><Referrals /></div>
   
  </div>
</div>

<div className="footer">
<Footer />
</div>

</div>



/* <div className="App">
  

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
  
</div>  */


  );
}

export default App;
