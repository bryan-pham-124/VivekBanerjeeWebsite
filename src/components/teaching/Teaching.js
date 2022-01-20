import React from 'react'
import './Teaching.css'
import TeachingEntry from './TeachingEntry'
import { Entries } from './teachingData'
const Teaching = ({Link}) => {

   
    return (
        <div className='teaching'>
            <h1 className ='experience-header'>Teaching Experience</h1>
            <div className="teaching-entry-list">
                {
                    Entries.map((e)=>(
                         <TeachingEntry 
                                key = {e.id} 
                                date = {e.teachingDate} title = {e.teachingTitle}
                                instit = {e.teachingInstitution} course = {e.teachingCourse}
                                state = {e.teachingState}
                         
                         />
                    ))  
                }
            </div>

            <Link  to = "/#Cv"   className="cv-button">
                See More on CV
            </Link>
            
        </div>
    )
}

export default Teaching
