import React from 'react'
import { useState } from 'react'
import Menu from './icons/Menu'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Menu w={80} h={80}/>
        </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li><a onClick={handleShowNavbar} href='#about-me'>Sobre mí</a></li>
          <li><a onClick={handleShowNavbar} href='#skills'>Habilidades</a></li>
          <li><a onClick={handleShowNavbar} href='#experience'>Experiencia</a></li>
          <li><a onClick={handleShowNavbar} href='#projects'>Proyectos</a></li>
        </ul>
      </div>
      </div>
    </nav> 
  )
}

export default Navbar