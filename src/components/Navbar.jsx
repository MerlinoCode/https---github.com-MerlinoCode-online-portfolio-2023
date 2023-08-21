import React from 'react'
import { useState } from 'react'
import Menu from './icons/Menu'
import XCross from './icons/XCross'
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [changeIconMenu, setChangeIconMenu] = useState(true)

  const handleShowNavbar = () => { setShowNavbar(!showNavbar) }
  const handleChangeIconMenu = () => { setChangeIconMenu(!changeIconMenu) }
  const { language, setLanguage, translations } = useLanguage();

  const toggleLanguage = () => { setLanguage(language === 'es' ? 'en' : 'es'); };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={() => { handleShowNavbar(); handleChangeIconMenu();}}>
          {
            changeIconMenu? <Menu w={90} h={90}/> : <XCross/>
          }
        </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li><a onClick={handleShowNavbar} href='#about-me'>{translations.navbar.first_option}</a></li>
          <li><a onClick={handleShowNavbar} href='#skills'>{translations.navbar.second_option}</a></li>
          <li><a onClick={handleShowNavbar} href='#experience'>{translations.navbar.third_option}</a></li>
          <li><a onClick={handleShowNavbar} href='#projects'>{translations.navbar.fourth_option}</a></li>
          <li><a onClick={toggleLanguage}>{translations.navbar.fifth_option}</a></li>
        </ul>
      </div>
      </div>
    </nav> 
  )
}

export default Navbar