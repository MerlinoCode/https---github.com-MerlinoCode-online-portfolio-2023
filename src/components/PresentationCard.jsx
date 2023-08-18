import React from 'react'
import GithubCard from './icons/GithubCard'
import LinkedinCard from './icons/LinkedinCard'
import CodepenCard from './icons/CodepenCard'

const PresentationCard = () => {
  return (
    <article className='card'>
        <h5>👋 ¡Hola! Mi nombre es</h5>
        <h1>Jonathan Leonel Merlino</h1>
        <h3>Desarrollador Frontend</h3>
        <h4>Entusiasta por la innovación y el diseño</h4>
        <div className='icon-links' alt="Icons by Icons8">
          <a href='https://github.com/MerlinoCode'>
            <GithubCard/>
          </a>
          <a href='https://www.linkedin.com/in/jonathan-merlino/'>
            <LinkedinCard/>
          </a>
          <a href='https://codepen.io/MerlinoCode'>
            <CodepenCard/>
          </a>
        </div>
    </article>
  )
}

export default PresentationCard