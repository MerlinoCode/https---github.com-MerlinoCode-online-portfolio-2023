import React from 'react'

const JobExperience = (props) => {
  return (
    <div className='job-wrapper'>
      <div className='job-experience'>
        <div className='textbox'>
            <h1>{props.jobTitle}</h1>
            <h2>{props.jobCompany}</h2>
            <h4>{props.jobDescription}</h4>
            <p>{props.jobDate}</p>
        </div>
      </div>
      <div className='job-experience-arrow'></div>
      <div className='job-icon-section'>
      {props.jobIcon}
      </div>
    </div>
  )
}

export default JobExperience