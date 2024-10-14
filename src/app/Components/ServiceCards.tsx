'use client'

import React from 'react';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Create cutting-edge Android and iOS apps tailored to your business needs. Our expert developers ensure seamless functionality and engaging user experiences.',
  },
  {
    id: '02',
    title: 'Web App Development',
    icon: '💻',
    description: 'Build powerful, responsive web applications that drive your business forward. We deliver custom solutions optimized for performance, scalability, and user satisfaction.',
  },
  {
    id: '03',
    title: 'SEO',
    icon: '🔍',
    description: 'Boost your online visibility and climb search engine rankings. Our SEO strategies drive organic traffic, increase conversions, and enhance your digital presence.',
  },
  {
    id: '04',
    title: 'Graphics Design',
    icon: '🎨',
    description: 'Transform your ideas into visually stunning designs. Our creative team crafts eye-catching graphics that elevate your brand and captivate your audience.',
  },
  {
    id: '05',
    title: 'Brand Promotion',
    icon: '📢',
    description: 'Elevate your brand presence with strategic promotion. We create compelling campaigns that resonate with your target audience and drive brand loyalty.',
  },
  {
    id: '06',
    title: 'Social Media Content Management',
    icon: '📱',
    description: 'Engage your audience with dynamic social media content. Our CMS experts curate and manage your online presence, fostering community and driving growth.',
  },
  {
    id: '07',
    title: 'Video Editing',
    icon: '🎬',
    description: 'Transform raw footage into polished, professional videos. Our editing team creates compelling visual stories that captivate viewers and convey your message effectively.',
  },
  {
    id: '08',
    title: 'Social Media Ads',
    icon: '📣',
    description: 'Maximize your reach with targeted social media advertising. We create and manage campaigns that drive engagement, conversions, and ROI across platforms.',
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="relative overflow-hidden rounded-3xl p-6 bg-gray-50 text-onSurface group">
    <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
      <div className="mb-4">
        <span className="text-4xl text-primary group-hover:text-white">{service.icon}</span>
      </div>
      <h3 className={`${leagueSpartan.className} text-2xl  font-bold mb-2`}>{service.title}</h3>
      <p className="mb-4">{service.description}</p>
      <button className="px-4 py-2 rounded-full bg-tertiary text-primary font-semibold transition-colors duration-300 group-hover:bg-white group-hover:text-primary">
        READ MORE →
      </button>
    </div>
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-tertiary rounded-tl-full transition-all duration-300 group-hover:w-[200%] group-hover:h-[200%] group-hover:bg-primary"></div>
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary opacity-50 rounded-tl-full transition-all duration-300 group-hover:w-[180%] group-hover:h-[180%] group-hover:bg-secondary"></div>
    <div className="absolute top-5 right-10 md:text-9xl text-7xl font-bold text-primary opacity-5 transition-opacity duration-300 group-hover:opacity-20 -mt-6 -mr-6">
      {service.id}
    </div>
  </div>
);

const ServiceCards: React.FC = () => {
  return (
    <div className="container bg-surface mx-auto px-4 :px-8 lg:px-12 py-16 max-w-7xl ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;