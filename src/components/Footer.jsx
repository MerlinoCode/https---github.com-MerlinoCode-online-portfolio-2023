import React from 'react'
import Firework from './icons/Firework'
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const {translations} = useLanguage();
  return (
    <footer>
      <Firework/>
      <p className='footer-text'>{translations.footer.first_line}</p>
      <p className='footer-text'>{translations.footer.second_line}</p>
      <p className='footer-text'>{translations.footer.third_line}</p>
    </footer>
  )
}

export default Footer