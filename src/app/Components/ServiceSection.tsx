'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Image1 from '../assets/image1.webp';
import Image2 from '../assets/image2.jpg';
import SEOIMG from '../assets/seo-image.jpeg';
import GRAPHICSIMG from '../assets/graphics-design.jpg';
import BRANDPROMOTIONIMG from '../assets/brand-prmotion.jpg';
import VIDEOEDITINGIMG from '../assets/video-editing.webp';
import SOCIALMEDIAIMG from '../assets/socialads.webp';
import CMS from '../assets/cms.webp';
import { FaPalette } from 'react-icons/fa';
import { League_Spartan } from 'next/font/google';

const league_spartan = League_Spartan({
  subsets: ['latin'],
});


const serviceItems = [
  { title: 'Mobile App Development', description: 'Create cutting-edge Android and iOS apps tailored to your business needs. Our expert developers ensure seamless functionality and engaging user experiences.', image: `${Image1.src}` },
  { title: 'Web App Development', description: 'Build powerful, responsive web applications that drive your business forward. We deliver custom solutions optimized for performance, scalability, and user satisfaction.', image: `${Image2.src}` },
  { title: 'SEO', description: 'Boost your online visibility and climb search engine rankings. Our SEO strategies drive organic traffic, increase conversions, and enhance your digital presence.', image: `${SEOIMG.src}` },
  { title: 'Graphics Design', description: 'Transform your ideas into visually stunning designs. Our creative team crafts eye-catching graphics that elevate your brand and captivate your audience.', image: `${GRAPHICSIMG.src}` },
  { title: 'Brand Promotion', description: 'Elevate your brand presence with strategic promotion. We create compelling campaigns that resonate with your target audience and drive brand loyalty.', image: `${BRANDPROMOTIONIMG.src}` },
  { title: 'Social Media Content Management', description: 'Engage your audience with dynamic social media content. Our CMS experts curate and manage your online presence, fostering community and driving growth.', image: `${CMS.src}` },
  { title: 'Video Editing', description: 'Transform raw footage into polished, professional videos. Our editing team creates compelling visual stories that captivate viewers and convey your message effectively.', image: `${VIDEOEDITINGIMG.src}` },
  { title: 'Social Media Ads', description: 'Maximize your reach with targeted social media advertising. We create and manage campaigns that drive engagement, conversions, and ROI across platforms.', image: `${SOCIALMEDIAIMG.src}` },
]

const ServicesSection = () => {
  return (
    <div className="py-8 sm:py-12  px-6 sm:px-8 lg:px-16 bg-surface">
      <div className={`${league_spartan.className} max-w-7xl mx-auto`}>
        <div className="text-center mb-12">
          <h2 className="lg:text-6xl text-4xl font-bold ">Our <span className='text-primary'>Services</span></h2>
          <p className="text-xl text-gray-500">Empowering Digital Artists Worldwide</p>
        </div>
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