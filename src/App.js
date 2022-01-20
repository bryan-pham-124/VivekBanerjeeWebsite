 
import './App.css';
import Navbar from './components/navbar/Navbar';
import Splash from './components/splash/Splash';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Teaching from './components/teaching/Teaching';
import Education from './components/education/Education';
import Accomplishments from './components/accomplishments/Accomplishments';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Cv from './components/cv/Cv';

import {BrowserRouter as Router} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

 
function App() {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

  return (
    <div className="App">
        


        <Router>
              <Navbar   Link = {Link} />

              <Splash   Link = {Link} Cv = {Cv} />

              <div id="About">
                  <About   />
              </div>

              <div id = 'Skills'>
                  <Skills  />
              </div>

              <div id="Experience">
                  <Teaching Link = {Link} />
              </div>

              <div id="Education">
                  <Education />
              </div>
             
              <Accomplishments />


              <div id="Cv">
                 <Cv />
              </div>
              

              <Gallery />

              <div id="Contact">
                  <Contact/>
              </div>

             
        </Router>
        

        
    </div>
  );
}

export default App;
