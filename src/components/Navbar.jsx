import React from 'react'
import { useState } from 'react'
import Menu from './icons/Menu'
import XCross from './icons/XCross'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [changeIconMenu, setChangeIconMenu] = useState(true)

  const handleShowNavbar = () => { setShowNavbar(!showNavbar) }
  const handleChangeIconMenu = () => { setChangeIconMenu(!changeIconMenu) }
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