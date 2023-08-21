import React from 'react'
import { useLanguage } from '../../context/LanguageContext';

const ExternalLink = () => {
  const {translations} = useLanguage();
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>{translations.miscellaneous.external_link_title}</title>
      <rect id="Linking" width="50" height="50" fill="url(#pattern21)"/>
      <defs>
      <pattern id="pattern21" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_143_34" transform="scale(0.02)"/>
      </pattern>
      <image id="image0_143_34" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACF0lEQVR4nO2Zv24TQRDGjwBBgvfgT4qIB8gDIN4AKle8AIUJKeIiTvwCSFDR0drYUFH4Ba50gV3e9+05dehwoo1GdrHy/1vbu3vWftI0Z9/u/HZ2b0czSRIVFRW1d8rz/IhkA0AHwB9H1pE5Ze6NAbTWBySvANyS1D4M47kvxRdrEIHwBcBZq1tBSEjNSAD4C6AK4IMjqwLom5HJ8/yVTTQaJoRS6mniWMPh8JkJI1us8CAkfxkg1cSTAJwafnQKD0Cya6xExcYJki9Ifpxsk5VG8kwp9U5r/cAYo2L40XUOorV+BODa5mBnWfY+GJDBYPAEwI3lF+o8GBCRUuoEwBeS3+YZgO8k/8+5O2pBgSxTmqaPATQXXIK1UoD0er1DAK05N7guDciCSPwG8KM0IIsgJh8GOS/hgyyDkN9LAZKugCgFSLoGRPAg6ZoQQYOkBSCCBenNvyda8nzJfF+N/37yDmIDYaQz/yaJ5nOvILYQ5vta64dTfrgFKXomCvhRcQayKwinILuEcAYitaZpiCJnIhgQAG93CeEMhORrAHcTiOa2IZyeEQDHWZa92aikudyPivdcaxtiBNm3iGDcn5hJ4lwLwGfDj58btRSkiC0F5cR/Ebu+jbZCXyLjsK1wSnJgzD9SSr20WhEp40+lHt4MwEWyYeut7rn1NhKIrdxT0imS6ABoO2yGtmURrbdTVFRUVBKy7gGn8Q/EtZULjwAAAABJRU5ErkJggg=="/>
      </defs>
    </svg>
  )
}

export default ExternalLink