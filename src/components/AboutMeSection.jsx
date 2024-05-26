import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import Button from './Button';

const AboutMeSection = () => {
    const {translations} = useLanguage();
    return (
        <div className='about-me-wrapper'>
            <div className='photography'></div>

            <div className='about-me-text'>
                <p>{translations.about_me_section.presentation[0]}</p>
                <p>{translations.about_me_section.presentation[1]}</p>
                <p>{translations.about_me_section.presentation[2]}</p>
            </div>
            
            <div className='contact'>
                <h2>{translations.about_me_section.contact[0]}</h2>
                <hr/>
                <p>{translations.about_me_section.contact[1]}</p>
                {translations.about_me_section.contact[2]}
                <p>{translations.about_me_section.contact[3]}</p><br/>
                <Button text={translations.about_me_section.contact.button_text}/>
            </div>
        </div>
    )
}

export default AboutMeSection