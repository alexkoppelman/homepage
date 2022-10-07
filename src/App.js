
import './App.css';
import Footer from './components/footer.js'
import Header from './components/header.js'
import Aboutme from './components/aboutme.js'
import Links from './components/links.js';

function App() {
  return (
    
    <div className="App">
      <Header />
      {/* the about me section should be hidden and shown only when hoovered? */}
      <Aboutme />
      {/* the Links area*/}
      <Links />
      {/* */}
      <Footer />
    </div>
  );
}

export default App;
