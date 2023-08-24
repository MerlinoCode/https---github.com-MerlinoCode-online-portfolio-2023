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
import { useLanguage } from '../context/LanguageContext';
import TypeScript from './icons/TypeScript'
import NodeJs from './icons/NodeJs'

const SkillSection = (props) => {
  const {translations} = useLanguage();
  return (
    <>
        <div className='sub-title'>
        {(() => {
        switch (props.title) {
          case 'frontend':
            return <>{translations.skill_section.frontend}</>
          case 'design':
            return <>{translations.skill_section.design}</>
          case 'others':
            return <>{translations.skill_section.others}</>
          default:
            return null
        }
        })()}
        </div>
        <br/>
        {(() => {
        switch (props.title) {
          case 'frontend':
            return <div className='icon-skills'>
                    <Html5/>
                    <Css3/>
                    <JavascriptIcon/>
                    <TypeScript/>
                    <ReactIcon/>
                    <Sass/>
                    <Bootstrap/>
                  </div>
          case 'design':
            return <div className='icon-skills'>
                    <Figma/>
                    <Photoshop/>
                    <AfterEffects/>
                  </div>
          case 'others':
            return <div className='icon-skills'>
                      <Git/>
                      <MicrosoftSqlServer/>
                      <NodeJs/>
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
