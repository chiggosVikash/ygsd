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
    title: 'Web Development',
    icon: '🌐',
    description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
  },
  {
    id: '02',
    title: 'UI/UX Design',
    icon: '🎨',
    description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
  },
  {
    id: '03',
    title: 'Digital Marketing',
    icon: '📢',
    description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
  },
  {
    id: '04',
    title: 'SEO Optimization',
    icon: '🔍',
    description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
  },
  {
    id: '05',
    title: 'E-commerce Development',
    icon: '🛍️',
    description: 'Conveniently promote transparent materials and stand-alone strategic theme areas.',
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
    <div className="container bg-surface mx-auto px-4 md:px-8 lg:px-12 py-16 max-w-7xl ">
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