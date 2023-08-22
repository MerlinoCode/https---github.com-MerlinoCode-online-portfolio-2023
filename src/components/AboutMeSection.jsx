import React from 'react'
import { useLanguage } from '../context/LanguageContext';

const AboutMeSection = () => {
    const {translations} = useLanguage();
    return (
        <div className='about-me-wrapper'>
            <p>{translations.about_me_section.presentation[0]}</p>
            <p>{translations.about_me_section.presentation[1]}</p>
            <p>{translations.about_me_section.presentation[2]}</p>
            <div className='photography'></div>
        </div>
    )
}

export default AboutMeSection