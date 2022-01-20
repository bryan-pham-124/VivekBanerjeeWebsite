import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className ='contact'>
            <div className="contact-container">
                <h1>Contact</h1>
                <div className="office">
                    <span>Office:</span>
                    3121 Jull Hall University of Maryland College Park, MD 20742
                </div>
                <div className="email">
                    <span>Email: </span>
                    gkurt@umd.edu
                </div>

                <div className="phone">
                    <span>Phone: </span>
                    414.915.8439
                </div>
            </div>
        </div>
    )
}

export default Contact
