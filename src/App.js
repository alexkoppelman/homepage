
import './css/gridcss.css';
import './w3.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Aboutme from './components/aboutme.js';
import Projects from './components/Offlineprojects.js';
import React from "react";

function App() {
 const [cardsArray, setCardsArray] = React.useState([]);
 const [loading, setLoading] = React.useState(true);

 React.useEffect(() => {
 fetch('https://alexkoppelman.es:1880/proj')
 .then(response => {
 if (!response.ok) {
 throw new Error("Network response was not ok");
 }
 return response.json();
 })
 .then(data => {
 setCardsArray(data);
 setLoading(false);
 })
 .catch(error => {
 console.error("Error fetching project data:", error);
 setLoading(false);
 });
 }, []);


const sortedCards = [...cardsArray].sort((a, b) => a.ProjectOrder - b.ProjectOrder);

const cards = sortedCards.map(item => (

 <Projects 
 key={item.idnew_table}
 id={item.idnew_table}
 ProjectName={item.ProjectName}
 ProjectCategory={item.ProjectCategory}
 ProjectURL={item.ProjectURL}
 ProjectImage1={item.ProjectImage1}
 ProjectImage2={item.ProjectImage2}
 ProjectDescription={item.ProjectDescription}
 ProjectStatus={item.ProjectStatus}
 ProjectOrder={item.ProjectOrder}
 ProjectSkill1={item.ProjectSkill1}
 ProjectSkill2={item.ProjectSkill2}
 ProjectSkill3={item.ProjectSkill3}
 ProjectSkill4={item.ProjectSkill4}
 ProjectSkill5={item.ProjectSkill5}
 ProjectSkill6={item.ProjectSkill6}
 ProjectSkill1Icon={item.ProjectSkill1Icon}
 ProjectSkill2Icon={item.ProjectSkill2Icon}
 ProjectSkill3Icon={item.ProjectSkill3Icon}
 ProjectSkill4Icon={item.ProjectSkill4Icon}
 ProjectSkill5Icon={item.ProjectSkill5Icon}
 ProjectSkill6Icon={item.ProjectSkill6Icon}
/>
 ));

 return (
 <div className="App">
 <div className="header">
 <Header />
 </div>

 <div className="row">
 <Aboutme /> 
 {loading ? (
 <div className="spinner">
 <p>Loading projects...</p>
 {/* You can replace this with a spinner icon or animation */}
 </div>
 ) : (
 cards
 )}
</div>

 <div className="footer">
 <Footer />
 </div>
 </div>
 );
}

export default App;
