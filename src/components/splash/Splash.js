import React from 'react'
import './splash.css'
import splashImg from '../../img/george-kurtzweil.jpg';



const Splash = ({Link}) => {

    
    return (
        <div className="splash">
             <div className= 'splash-text'>
                <div className="splash-title">
                    <h1>George Kurtzweil</h1>
                    <p>Passionate Teacher</p>
                    <Link to = "/#Cv"  className="cv-button-splash">
                         Download CV
                     </Link>
                </div>
                
            </div>
            
            <div className="splash-img">
                 <img src= {splashImg} alt="george-kurtzweil" />  
            </div>
            
        </div>
       
    )
}

export default Splash;
