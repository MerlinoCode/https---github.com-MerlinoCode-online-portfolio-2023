import React from 'react'
import GithubCard from './icons/GithubCard'
import LinkedinCard from './icons/LinkedinCard'
import CodepenCard from './icons/CodepenCard'
import { useLanguage } from '../context/LanguageContext';

const PresentationCard = () => {
  const {translations} = useLanguage();
  return (
    <article className='card'>
        <h5>{translations.presentation_card.salutation}</h5>
        <h1>Jonathan Leonel Merlino</h1>
        <h3>{translations.presentation_card.profession}</h3>
        <h4>{translations.presentation_card.short_description}</h4>
        <div className='icon-links'>
          <a href='https://github.com/MerlinoCode' target='_blank' rel="noreferrer noopener">
            <GithubCard/>
          </a>
          <a href='https://www.linkedin.com/in/jonathan-merlino/' target='_blank' rel="noreferrer noopener">
            <LinkedinCard/>
          </a>
          <a href='https://codepen.io/MerlinoCode' target='_blank' rel="noreferrer noopener">
            <CodepenCard/>
          </a>
        </div>
    </article>
  )
}

export default PresentationCard