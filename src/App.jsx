import Footer from './components/Footer'
import JobSection from './components/JobSection'
import Navbar from './components/Navbar'
import Particle from './components/Particle'
import PresentationCard from './components/PresentationCard'
import Project from './components/Project'
import Separator from './components/Separator'
import SkillSection from './components/SkillSection'

const App = () => {

  return (
    <>
      <Navbar/>
      <PresentationCard/>
      <Separator id="about-me" title="Sobre mí"/>
      <Separator id="skills" title="Habilidades"/>
      <SkillSection title="FRONT END"/>
      <SkillSection title="DISEÑO"/>
      <SkillSection title="OTROS"/>
      <Separator id="experience" title="Experiencia"/>
      <JobSection/>
      <Separator id="projects" title="Proyectos"/>
      <Project/>
      <Footer/>
      <Particle/>
    </>
  )
}

export default App
