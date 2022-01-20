import React from 'react'
import './Navbar.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
 
    return (

        <div className="navbar">
            <ul>
                <li>  <Link to = "/#About" className = 'link' >About</Link>  </li>
                <li>  <Link to = "/#Skills" className = 'link' >Skills</Link>  </li>
                <li>  <Link to = "/#Experience" className = 'link' >Experience</Link>  </li>
                <li>  <Link to = "/#Contact" className = 'link' >Contact</Link>  </li>
            </ul>
        </div>
       
    )
}

export default Navbar;