import React from 'react'
import Firework from './icons/Firework'

const Footer = () => {
  return (
    <footer>
      <Firework/>
      <p className='footer-text'>&copy; Copyright 2023 ❤️ Jonathan Leonel Merlino</p>
      <p className='footer-text'>
          Diseñado con <a href='https://www.figma.com/'>Figma</a> y codeado en <a href='https://code.visualstudio.com/'>Visual Studio Code</a>. Construido con <a href='https://react.dev/'>React</a> y <a href='https://vitejs.dev/'>Vite</a>.
      </p>
      <p className='footer-text'>Texto usado fueron Poppins e Inter.</p>
    </footer>
  )
}

export default Footer