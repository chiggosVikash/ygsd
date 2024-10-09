import React from 'react'
import PageHeader from '../Components/PageHeader'
import Image from 'next/image'
import { League_Spartan } from 'next/font/google'
import Image1 from '../assets/image1.webp';

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

const AboutUs = () => {
  return (
    <div className="bg-surface">
      <PageHeader title="Home" subtitle="About Us" />
      
      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className={`${leagueSpartan.className} text-4xl font-bold text-darkcolor`}>Who We Are</h2>
              <p className="text-lg font-semibold text-primary">Innovators in Software Development</p>
            </div>
            <p className="text-lg text-onSurface">
              YGSD is a dynamic team of innovators dedicated to transforming ideas into reality. We specialize in cutting-edge software development and design solutions that push the boundaries of what&apos;s possible.
            </p>
            <p className="text-lg text-onSurface">
              Our passion for technology and creativity drives us to deliver exceptional results for our clients, helping them stay ahead in today&apos;s fast-paced digital landscape.
            </p>
            <div className="flex space-x-3 pt-4">
              <span className="inline-block w-12 h-2 bg-primary rounded-full"></span>
              <span className="inline-block w-12 h-2 bg-secondary rounded-full"></span>
              <span className="inline-block w-12 h-2 bg-tertiary rounded-full"></span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className=" h-80 mx-auto rounded-xl overflow-hidden shadow-xl">
              <Image 
                src={Image1.src}
                alt="YGSD Team" 
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-darkcolor py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center space-y-2 mb-12">
            <h2 className={`${leagueSpartan.className} text-3xl font-bold text-white`}>Our Values</h2>
            <p className="text-lg font-semibold text-tertiary">Guiding Principles for Excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Innovation', 'Collaboration', 'Excellence'].map((value, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-primary to-secondary p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden relative group `}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <h3 className={`${leagueSpartan.className} text-xl font-semibold text-white mb-4 relative z-10`}>{value}</h3>
                <p className="text-white relative z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300 animate-ripple"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="text-center space-y-2 mb-12">
          <h2 className={`${leagueSpartan.className} text-4xl font-bold text-darkcolor`}>Why Choose Us</h2>
          <p className="text-lg font-semibold text-primary">Unparalleled Expertise & Dedication</p>
        </div>
        <p className="text-lg text-onSurface text-center max-w-3xl mx-auto mb-12">
          Thank you for considering us as your web developer. We believe that our experience, skills, and
          dedication set us apart and make us the ideal choice for your project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-8">
          {[
            {
              title: "Expertise",
              description: "We have extensive experience in designing and developing websites for clients across various industries.",
              icon: "👨‍💻"
            },
            {
              title: "Attention to Detail",
              description: "We take pride in our work, and we pay close attention to every detail to ensure that the end product is of the highest quality.",
              icon: "🔍"
            },
            {
              title: "Communication",
              description: "We believe that clear and constant communication is crucial for the success of any project.",
              icon: "💬"
            },
            {
              title: "Customer Service",
              description: "As a web developer team, we understand the importance of building long-term relationships with our clients.",
              icon: "🤝"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative pt-16">
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-md flex items-center justify-center text-2xl text-primary">
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${leagueSpartan.className} text-xl font-semibold text-darkcolor mb-2`}>{item.title}</h3>
                <p className="text-onSurface">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default AboutUs