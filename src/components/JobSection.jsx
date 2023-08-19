import React from 'react'
import JobExperience from './JobExperience'
import BancoGaliciaLogo from './icons/BancoGaliciaLogo'
import NepsLogo from './icons/NepsLogo'
import DevSpirit from './icons/DevSpirit'

const JobSection = () => {
  return (
    <div className='job-section'>
        <JobExperience 
          jobTitle="Desarrollador Front End React"
          jobCompany="Banco Galicia"
          jobDescription="Estuve a cargo del mantenimiento de las secciones Home Banking y Refinanciaciones, utilizando Bricks, framework de uso exclusivo basado en React para el diseño y estructura de todas las aplicaciones web del Banco."
          jobDate="Octubre/2022 - Marzo/2023 ( 6 meses )"
          jobIcon = {<BancoGaliciaLogo/>}
          />
        <JobExperience 
          jobTitle="Desarrollador .NET Full Stack"
          jobCompany="DevSpirit"
          jobDescription="Como Freelance, he desarrollado y mantenido código para una aplicación web destinada a la gestión de datos de los alumnos y profesores de un instituto privado de educación secundaria a distancia.
          Colaboré cercanamente con otros desarrolladores para cumplir con los requisitos del cliente, y llevamos a cabo las reuniones con el mismo, recopilando detalladamente sus necesidades a fin de poder entregar un producto óptimo y eficiente."
          jobDate="Diciembre/2021 - Septiembre/2022 ( 10 meses )"
          jobIcon = {<DevSpirit/>}
          />
          <JobExperience 
          jobTitle="Desarrollador .NET Full Stack"
          jobCompany="Neps - Soluciones Informáticas"
          jobDescription="En mi primer experiencia laboral como Freelance, participé en varios proyectos, utilizando principalmente ASP.NET 5.0.
          Mi mayor logro fue haber cambiado el código de barras de todas las facturas electrónicas a código QR generado automáticamente, teniendo en cuenta los requisitos impuestos por la AFIP, como también cambio de diseño en base a un nuevo logo de la empresa."
          jobDate="Enero/2021 - Agosto/2021 ( 8 meses )"
          jobIcon = {<NepsLogo/>}
          />
          <div className='column-icons'>
          </div>
    </div>
  )
}

export default JobSection