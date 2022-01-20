import React from 'react'

const TeachingEntry = ({date, title, instit, course, state}) => {

    
    return (
        
        <div className="teaching-entry">
                <div className="teaching-date">{date}</div>
                <div className="teaching-title">{title}</div>
                <div className="teaching-institution">{instit}</div>
                <div className="teaching-course">{course}</div>
                <div className="teaching-state">{state}</div>
        </div>
       
    )
}

export default TeachingEntry
