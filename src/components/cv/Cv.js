import React from 'react'
import './Cv.css'
import CV from '../KurtzweilCV2021.pdf';
const Cv = () => {
    return (
        <div className='cv'>
            <h1>CV</h1>
            <div className="cv-container">
                    <embed src= {CV}   />
            </div>
        </div>
    )
}

export default Cv
