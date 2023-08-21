import React from 'react'
import JobExperience from './JobExperience'
import BancoGaliciaLogo from './icons/BancoGaliciaLogo'
import NepsLogo from './icons/NepsLogo'
import DevSpirit from './icons/DevSpirit'
import { useLanguage } from '../context/LanguageContext';

const JobSection = () => {
  const {translations} = useLanguage();
  return (
    <div className='job-section'>
        <JobExperience 
          jobTitle={translations.experience_section[0].title}
          jobCompany={translations.experience_section[0].company_name}
          jobDescription={translations.experience_section[0].job_description}
          jobDate={translations.experience_section[0].date}
          jobIcon = {<BancoGaliciaLogo/>}
          />
        <JobExperience 
          jobTitle={translations.experience_section[1].title}
          jobCompany={translations.experience_section[1].company_name}
          jobDescription={translations.experience_section[1].job_description}
          jobDate={translations.experience_section[1].date}
          jobIcon = {<DevSpirit/>}
          />
          <JobExperience 
          jobTitle={translations.experience_section[2].title}
          jobCompany={translations.experience_section[2].company_name}
          jobDescription={translations.experience_section[2].job_description}
          jobDate={translations.experience_section[2].date}
          jobIcon = {<NepsLogo/>}
          />
          <div className='column-icons'>
          </div>
    </div>
  )
}

export default JobSection