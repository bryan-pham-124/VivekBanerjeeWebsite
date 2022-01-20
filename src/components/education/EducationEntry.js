import React from 'react'

const EducationEntry = ({date, instit, degree, highlight}) => {


    const getFormattedText = (text) => {
        let splitText = text.split(' ')
        let boldText  = splitText.slice(0,1) +  " " + splitText.slice(1,2) + " "
        let otherText = splitText.slice(2).join(' ')
        return [boldText, otherText]
    }

    return (
        
        <div className="education-entry">
            <div className="education-date">{date}</div>
            <div className="education-institution">{instit}</div>
            <div className="education-degree">{degree}</div>
            <div className="education-highlight">
                <span> {getFormattedText(highlight)[0]  } </span>
                {getFormattedText(highlight)[1]}
            </div>
        </div>  
       
    )
}

export default EducationEntry
