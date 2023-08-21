import React from 'react'
import GithubGray from './icons/GithubGray'
import ExternalLink from './icons/ExternalLink'
import ProjectPreview from '../styles/images/project-preview.jpg'
import { useLanguage } from '../context/LanguageContext';

const Project = () => {
    const {translations} = useLanguage();
    return (
        <div className='project-container'>
            <div className='left-part'>
                <div className='project-title'><h2>{translations.projects[0].title}</h2></div>
                <div className='project-description'>
                    <p>{translations.projects[0].description}</p>
                </div>
                <div className='project-links'>
                    <a href='#' aria-label="Github Link" rel="noopener noreferrer">
                        <GithubGray/>
                    </a>
                    <a href='#' aria-label='External Link' rel="noopener noreferrer">
                        <ExternalLink/>
                    </a>
                </div>
            </div>
            <div className='right-part'>
                <img src={ProjectPreview} alt="Project Preview" id='project-preview' />
            </div>
        </div>
    )
}

export default Project