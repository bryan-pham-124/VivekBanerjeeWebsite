import React from 'react'
import './Education.css'
import { Entries } from './EducationData';
import EducationEntry from './EducationEntry';

const Education = () => {
    return (
        <div className ='education'>
            <div className="education-header">Education</div>
            <div className="education-entry-list">
                {
                     Entries.map((e)=>(
                        <EducationEntry
                               key = {e.id} 
                               date = {e.educationDate} degree = {e.educationDegree}
                               instit = {e.educationInstitution} highlight = {e.educationHighlight}
                                
                        
                        />
                   ))  
                }
            </div>
           
        </div>
    )
}

export default Education
