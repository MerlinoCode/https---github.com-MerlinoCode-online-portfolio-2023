import React from 'react'
import GithubCard from './icons/GithubCard'
import LinkedinCard from './icons/LinkedinCard'
import { useLanguage } from '../context/LanguageContext';

const PresentationCard = () => {
  const {translations} = useLanguage();
  return (
    <article className='card'>
        <h2>{translations.presentation_card.salutation}</h2>
        <h3>Jonathan Leonel Merlino</h3>
        <h4>{translations.presentation_card.profession}</h4>
        <h5>{translations.presentation_card.short_description}</h5>
        <div className='icon-links'>
          <a href='https://github.com/MerlinoCode' target='_blank' rel="noreferrer noopener">
            <GithubCard/>
            <p>Github</p>
          </a>
          <a href='https://www.linkedin.com/in/jonathan-merlino/' target='_blank' rel="noreferrer noopener">
            <LinkedinCard/>
            <p>Linkedin</p>
          </a>
        </div>
    </article>
  )
}

export default PresentationCard