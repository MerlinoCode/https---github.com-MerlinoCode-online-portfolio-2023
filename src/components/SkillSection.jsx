import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import * as icon from '../components/icons'

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
                    <icon.html5/>
                    <icon.css3/>
                    <icon.javascript/>
                    <icon.typeScript/>
                    <icon.reactIcon/>
                    <icon.redux/>
                    <icon.sass/>
                    <icon.bootstrap/>
                  </div>
          case 'design':
            return <div className='icon-skills'>
                    <icon.figma/>
                    <icon.photoshop/>
                  </div>
          case 'others':
            return <div className='icon-skills'>
                      <icon.git/>
                      <icon.sql/>
                      <icon.nodeJs/>
                      <icon.studioCode/>
                      <icon.confluence/>
                      <icon.jmeter/>
                      <icon.postman/>
                      <icon.scrum/>
                      <icon.greatBritain/>
                    </div>
          default:
            return null
        }
        })()}

    </>
  )
}

export default SkillSection
