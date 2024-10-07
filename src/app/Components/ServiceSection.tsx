'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Image1 from '../assets/image1.webp';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.webp';
import Image5 from '../assets/image5.webp';
import { FaPalette } from 'react-icons/fa';
import { League_Spartan } from 'next/font/google';

const league_spartan = League_Spartan({
  subsets: ['latin'],
});


const serviceItems = [
  { title: 'Online Platform', description: 'Connect with virtual artists worldwide', image: `${Image1.src}` },
  { title: 'Portfolio Showcase', description: 'Display your best digital artworks', image: `${Image2.src}` },
  { title: 'Collaboration Tools', description: 'Work together on virtual projects', image: `${Image3.src}` },
  { title: 'Virtual Exhibitions', description: 'Host and attend online art shows', image: `${Image5.src}` },
]

const ServicesSection = () => {
  return (
    <div className="py-8 sm:py-12  px-6 sm:px-8 lg:px-16 bg-surface">
      <div className={`${league_spartan.className} max-w-7xl mx-auto`}>
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">Our Services</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/25 via-gray-300 to-primary/50 hidden md:block"></div>
          <div className="space-y-16">
            {serviceItems.map((item, index) => (
              <ServiceItem key={index} title={item.title} description={item.description} image={item.image} isEven={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceItem = ({ title, description, image, isEven }: { title: string; description: string; image: string; isEven: boolean }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
        <Image src={image} alt={title} width={400} height={400} className="object-cover rounded-lg w-full h-auto" />
      </div>
      <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary mx-auto md:mx-0 mb-6 md:mb-0">
        <FaPalette size={24} />
      </div>
      <div className="w-full md:w-1/2 px-4 text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

export default ServicesSection