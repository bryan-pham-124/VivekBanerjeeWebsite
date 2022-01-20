import React from 'react'
import './Gallery.css'

import galleryImg1 from '../../img/GOPR0509.JPG';
import galleryImg2 from '../../img/IMG_0012.JPG';
import galleryImg3 from '../../img/IMG_0302.JPG';
import galleryImg4 from '../../img/GeorgeOlive2020.jpg';
 
const Gallery = () => {
    return (
        <div className = 'gallery'>
            <h1> Outside of Classroom Interests</h1>
            <div className="gallery-container">
                <div className="gallery-text">
                    <div className="gallery-list-header">
                        Outside the office, George likes:
                    </div>
                    <ul>
                        <li>Scuba Diving</li>
                        <li>Ocean Conservation</li>
                        <li>Traveling </li>
                    </ul>
                </div>
                <div className="gallery-img">
                    <div className="gallery-img-container">
                        <img src= {galleryImg1} alt="img_not_found"  />
                        <img src= {galleryImg2} alt="img_not_found"  />
                        <img src= {galleryImg3} alt="img_not_found"  />
                        <img src= {galleryImg4} alt="img_not_found"  />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Gallery
