import Footer from './components/Footer'
import JobSection from './components/JobSection'
import Navbar from './components/Navbar'
import Particle from './components/Particle'
import PresentationCard from './components/PresentationCard'
import Project from './components/Project'
import Separator from './components/Separator'
import SkillSection from './components/SkillSection'
import { LanguageProvider } from './context/LanguageContext'

const App = () => {

  return (
    <>
      <LanguageProvider>
        <Navbar/>
        <PresentationCard/>
        <Separator id="about_me"/>
        <Separator id="skills"/>
        <SkillSection title="frontend"/>
        <SkillSection title="design"/>
        <SkillSection title="others"/>
        <Separator id="experience"/>
        <JobSection/>
        <Separator id="projects"/>
        <Project/>
        <Footer/>
        <Particle/>
      </LanguageProvider>
    </>
  )
}

export default App
