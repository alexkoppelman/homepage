
import './App.css';
import Footer from './components/footer.js'
import Header from './components/header.js'
import Aboutme from './components/aboutme.js'
import Links from './components/links.js';
import Skills from './components/skills.js';

function App() {
  return (
    
    <div className="App">
      {/* The Headooooor */}
      <Header />
      {/* The about me section should be hidden and shown only when hoovered? */}
      <Aboutme />
      {/* The Skills area*/}
      <Skills />
      { /* The Links area*/}
      <Links />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
