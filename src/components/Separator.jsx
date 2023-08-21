import React from 'react'
import { useLanguage } from '../context/LanguageContext';

const Separator = (props) => {
  const id = props.id
  const {translations} = useLanguage();
  return (
    <>
      <div id={props.id} className='separator-title'>
      {(() => {
        switch (id) {
          case 'about_me':
            return <div>{translations.navbar.first_option}</div>;
          case 'skills':
            return <div>{translations.navbar.second_option}</div>;
          case 'experience':
            return <div>{translations.navbar.third_option}</div>;
          case 'projects':
            return <div>{translations.navbar.fourth_option}</div>;
          default:
            return null;
        }
      })()}
      </div>
      <hr/>
    </>
  )
}

export default Separator