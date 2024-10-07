import React from 'react';
import Image from 'next/image';

const workSteps = [
  { number: '01', icon: '📝', title: 'Select a project', description: 'Continua scale empowered metrics with cost effective innovation.' },
  { number: '02', icon: '💻', title: 'Project analysis', description: 'Continua scale empowered metrics with cost effective innovation.' },
  { number: '03', icon: '🔍', title: 'Plan Execute', description: 'Continua scale empowered metrics with cost effective innovation.' },
  { number: '04', icon: '📊', title: 'Deliver result', description: 'Continua scale empowered metrics with cost effective innovation.' },
];

const partners = [
  { name: 'SUNTECH', logo: 'path/to/suntech-logo.svg' },
  { name: 'hi-TECH', logo: 'path/to/hitech-logo.svg' },
  { name: 'GOTECH', logo: 'path/to/gotech-logo.svg' },
  { name: 'TechCube', logo: 'path/to/techcube-logo.svg' },
  { name: 'DIGITECH', logo: 'path/to/digitech-logo.svg' },
];

const WorkProcess: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-surface to-white py-16 px-4 sm:px-6 lg:px-8 xl:flex xl:justify-center">
      <div className="max-w-7xl mx-8 ">
        <div className="text-center mb-12">
          <span className="bg-tertiary text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Work Process</span>
          <h2 className="mt-3 text-3xl font-bold text-darkcolor sm:text-4xl">How We Make It Happen</h2>
          <p className="mt-3 text-lg text-onSurface max-w-2xl mx-auto">Our streamlined process ensures efficient project delivery.</p>
        </div>

        <div className="relative mt-20">
          {/* SVG for curved lines */}
          <svg className=" absolute top-0 left-32 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{zIndex: 0}}>
            <path
              d="M0 100 C 100 50, 200 150, 300 100 S 500 50, 600 100 S 800 150, 900 100"
              fill="none"
              stroke="#684DF4"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Work steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-16 gap-16 mb-16 relative z-10">
            {workSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-tertiary rounded-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="text-primary text-3xl mb-3 mt-10">
                  {step.icon === '📝' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  ) : step.icon === '💻' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  ) : step.icon === '🔍' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-darkcolor">{step.title}</h3>
                <p className="text-sm text-onSurface">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-darkcolor rounded-xl py-6 px-4">
            <h3 className="text-xl font-bold text-white text-center mb-6">Our Trusted Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="w-24 h-12 relative grayscale hover:grayscale-0 transition duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;