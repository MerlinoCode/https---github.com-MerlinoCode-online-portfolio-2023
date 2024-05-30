import React from 'react'
import JobExperience from './JobExperience'
import { useLanguage } from '../context/LanguageContext';
import * as icon from './icons';

const JobSection = () => {
  const {translations} = useLanguage();
  return (
    <div className='job-section'>
        <JobExperience 
          jobTitle={translations.experience_section[3].title}
          jobCompany={translations.experience_section[3].company_name}
          jobDescription={translations.experience_section[3].job_description}
          jobDate={translations.experience_section[3].date}
          jobIcon = {<icon.valuelabs/>}
          />
        <JobExperience 
          jobTitle={translations.experience_section[2].title}
          jobCompany={translations.experience_section[2].company_name}
          jobDescription={translations.experience_section[2].job_description}
          jobDate={translations.experience_section[2].date}
          jobIcon = {<icon.bancoGalicia/>}
          />
          <JobExperience 
          jobTitle={translations.experience_section[1].title}
          jobCompany={translations.experience_section[1].company_name}
          jobDescription={translations.experience_section[1].job_description}
          jobDate={translations.experience_section[1].date}
          jobIcon = {<icon.devSpirit/>}
          />
          <JobExperience 
          jobTitle={translations.experience_section[0].title}
          jobCompany={translations.experience_section[0].company_name}
          jobDescription={translations.experience_section[0].job_description}
          jobDate={translations.experience_section[0].date}
          jobIcon = {<icon.nepsLogo/>}
          />
          <div className='column-icons'>
          </div>
    </div>
  )
}

export default JobSection