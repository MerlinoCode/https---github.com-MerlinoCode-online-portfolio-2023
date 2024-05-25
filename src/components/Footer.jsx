import React from 'react'
import Firework from './icons/Firework'
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const {translations} = useLanguage();
  function getYear() { return new Date().getFullYear(); }
  
  return (
    <footer>
      <Firework/>
      <p className='footer-text'>
        {translations.footer.first_line[0]}
        <span> 
          {getYear()} 
        </span>
        {translations.footer.first_line[1]}
      </p>
      <p className='footer-text'>
        {translations.footer.second_line[0]}
        {translations.footer.second_line[1]}
        <a href='https://www.figma.com/' target='_blank' rel="noreferrer noopener">Figma</a>
        {translations.footer.second_line[1]} 
        <a href='https://react.dev/' target='_blank' rel="noreferrer noopener">React</a> &
        <a href='https://vitejs.dev/' target='_blank' rel="noreferrer noopener"> Vite</a>
        </p>
      <p className='footer-text'>{translations.footer.third_line}</p>
    </footer>
  )
}

export default Footer