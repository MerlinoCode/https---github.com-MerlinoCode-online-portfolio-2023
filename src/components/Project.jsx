import React from 'react'
import GithubGray from './icons/GithubGray'
import ExternalLink from './icons/ExternalLink'

const Project = () => {
  return (
    <div className='project-container'>
        <div className='project-title'><h2>Proximamente...</h2></div>
        <div className='project-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis temporibus illo fuga alias itaque impedit, illum odio quas dolorem obcaecati assumenda hic ratione minus voluptatibus nobis magnam nulla ducimus.</p>
        </div>
        <div className='project-links'>
            <a href='#' aria-label="Github Link" rel="noopener noreferrer">
                <GithubGray/>
            </a>
            <a href='#' aria-label='External Link' rel="noopener noreferrer">
                <ExternalLink/>
            </a>
        </div>
        <div className='project-preview'>
        </div>
    </div>
  )
}

export default Project