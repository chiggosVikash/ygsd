import React from 'react'
import HeroSection from './Components/HeroSection'
import WhoWeAre from './Components/WhoWeAre'
import ServiceSection from './Components/ServiceSection'
import WhyChooseUs from './Components/WhyChooseUs'
import ProjectShowcase from './Components/ProjectShowcase'
import WorkProcess from './Components/WorkProcess'
import StatsSection from './Components/StatsSection'
import TeamSection from './Components/TeamSection'
import ConsultationSection from './Components/ConsultationSection'
import HappyClients from './Components/HappyClients'
import ContactForm from './Components/ContactForm'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <WhoWeAre/>
      <ServiceSection/>
      <WhyChooseUs/>
      <ProjectShowcase/>
      <StatsSection/>
      <WorkProcess/>
      <TeamSection/>
      <HappyClients/>
      <ConsultationSection/>
      <ContactForm/>
      
    </div>
  )
}

export default page
