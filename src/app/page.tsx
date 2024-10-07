import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import WhoWeAre from './Components/WhoWeAre'
import Services from './Components/Services'
import WhyChooseUs from './Components/WhyChooseUs'
import ProjectShowcase from './Components/ProjectShowcase'
import WorkProcess from './Components/WorkProcess'
import StatsSection from './Components/StatsSection'
import TeamSection from './Components/TeamSection'
import ConsultationSection from './Components/ConsultationSection'
import Footer from './Components/Footer'
import HappyClients from './Components/HappyClients'
import ContactForm from './Components/ContactForm'
const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <WhoWeAre/>
      <Services/>
      <WhyChooseUs/>
      <ProjectShowcase/>
      <StatsSection/>
      <WorkProcess/>
      <TeamSection/>
      <HappyClients/>
      <ConsultationSection/>
      <ContactForm/>
      <Footer/>
      {/* <div className="h-screen"> */}
        {/* Content for the full-height div can be added here */}
      {/* </div> */}
      {/* <div className='bg-black w-full h-32 text-primary font-bold'> This is Nav Bar</div> */}
      {/* <h1 className='text-primary'>Welcome to Our Website</h1> */}
      {/* <p className='text-secondary'>We're glad you're here. Explore and enjoy!</p> */}
      {/* <button className='bg-primary text-white'>Click me</button> */}
      {/* <div className='bg-white w-full h-32 text-primary font-bold'> This is Footer</div> */}
    </div>
  )
}

export default page
