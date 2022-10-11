
import './App.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Aboutme from './components/aboutme.js';
import Links from './components/links.js';
import Skills from './components/skills.js';
import Projects from './components/projects';

import { useState, useEffect } from 'React'

function MyComponent() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://192.168.1.100:1880/skills')
      .then((res) => res.json())
      .then((resJson) => {
        const data = JSON.parse(resJson)
    })
  }, [])
}

function App() {

  const [skillsArray, setSkillsArray] = React.useState(data)

  const skills = skillsArray.map(item => {
    return (
        <Skills 
            id={item.id}
            name={item.skillName}
            rating={item.skillRating}
        />
    )
  })        


   return (
    
    <div className="App">

      {/* The Headooooor */}
      <Header />
      {/* The about me section should be hidden and shown only when hoovered? */}
      <div className="mainpage">
      <Aboutme />
      {/* The Skills area*/}
      <Skills />
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
