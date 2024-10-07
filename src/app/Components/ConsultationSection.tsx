import React from 'react';
import Image from 'next/image';
import { League_Spartan } from 'next/font/google';
import CustomerSupport from '../assets/customer_support.jpg';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const ConsultationSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface rounded-lg shadow-lg  flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={CustomerSupport.src}
              alt="Customer service representatives"
              width={500}
              height={300}
              className="rounded-lg "
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 relative">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white p-2 rounded-md mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7a1 1 0 10-2 0v3a1 1 0 102 0V9z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-primary font-semibold">LET'S CONSULTATION</span>
            </div>
            <h2 className={`${leagueSpartan.className} text-4xl font-bold text-darkcolor mb-4`}>
              Let's Talk About Business Solutions <span className="text-primary">With Us</span>
            </h2>
            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold flex items-center transition-colors duration-300 hover:bg-secondary">
              CONTACT US
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="absolute right-8 hidden lg:block opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
