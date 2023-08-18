import React from 'react'
import Html5 from './icons/Html5'
import Css3 from './icons/Css3'
import JavascriptIcon from './icons/JavascriptIcon'
import ReactIcon from './icons/ReactIcon'
import Sass from './icons/Sass'
import Bootstrap from './icons/Bootstrap'
import Figma from './icons/Figma'
import Photoshop from './icons/Photoshop'
import AfterEffects from './icons/AfterEffects'
import Git from './icons/Git'
import MicrosoftSqlServer from './icons/MicrosoftSqlServer'
import Scrum from './icons/Scrum'
import VisualStudioCode from './icons/VisualStudioCode'
import GreatBritain from './icons/GreatBritain'


const SkillSection = (props) => {
  return (
    <>
        <div className='sub-title'>{props.title}</div>
        <br/>
        {(() => {
        switch (props.title) {
          case 'FRONT END':
            return <div className='icon-skills'>
                    <Html5/>
                    <Css3/>
                    <JavascriptIcon/>
                    <ReactIcon/>
                    <Sass/>
                    <Bootstrap/>
                  </div>
          case 'DISEÑO':
            return <div className='icon-skills'>
                    <Figma/>
                    <Photoshop/>
                    <AfterEffects/>
                  </div>
          case 'OTROS':
            return <div className='icon-skills'>
                      <Git/>
                      <MicrosoftSqlServer/>
                      <Scrum/>
                      <VisualStudioCode/>
                      <GreatBritain/>
                    </div>
          default:
            return null
        }
        })()}

    </>
  )
}

export default SkillSection
