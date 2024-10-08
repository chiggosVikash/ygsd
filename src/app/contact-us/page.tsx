import React from 'react'
import { League_Spartan } from 'next/font/google'
import PageHeader from '../Components/PageHeader'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import ContactForm from '../Components/ContactForm'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

const ContactInfo = ({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) => (
  <div className={`flex items-center bg-white rounded-lg shadow-md py-4 px-6 transition-all duration-300 hover:shadow-lg `}>
    <div className="bg-primary text-white p-4 rounded-lg mr-6">
      <Icon className="text-5xl" />
    </div>
    <div>
      <h3 className={`${leagueSpartan.className} text-xl font-bold text-darkcolor `}>{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="text-gray-500 text-sm">{line}</p>
      ))}
    </div>
  </div>
)

const ContactUs = () => {
  return (
    <div className="bg-surface min-h-screen">
      <PageHeader title="Home" subtitle="Contact Us" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactInfo 
            icon={MdLocationOn}
            title="Our Office Address"
            lines={["Burnsville, MN 55337 Street,", "United States"]}
          />
          <ContactInfo 
            icon={MdPhone}
            title="Call Us Anytime"
            lines={["(+65) - 48596 - 5789", "+190-8800-0393"]}
          />
          <ContactInfo 
            icon={MdEmail}
            title="Send An Email"
            lines={["info.example@traga.com", "info@traga.com"]}
          />
        </div>
      </div>
      <ContactForm />

      {/* New responsive map section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="aspect-w-16 aspect-video">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.3105632613723!2d-93.27741812346979!3d44.77200087107275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f631f9f7f7c4b7%3A0x5c1b3d7f3e2a9c9f!2sBurnsville%2C%20MN%2055337!5e0!3m2!1sen!2sus!4v1682523143316!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  )
}

export default ContactUs
