'use client'
import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { Cinzel, League_Spartan,Plus_Jakarta_Sans } from 'next/font/google';
import Image3 from '../assets/image3.webp';

const cinzel = Cinzel({
    subsets: ['latin'],
});
const league_spartan = League_Spartan({
    subsets: ['latin'],
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
});


const WhoWeAre = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side with image */}
          <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={Image3.src}
                alt="Team working together"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-primary opacity-20"></div>
            </div>
            <div className="absolute -bottom-5 sm:-bottom-10 -right-5 sm:-right-10 w-16 sm:w-24 h-16 sm:h-24 bg-surface rounded-full"></div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 w-16 sm:w-24 h-16 sm:h-24 bg-surface rounded-full"></div>
          </div>

          {/* Right side with text content */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                    <div className="flex items-center mb-4">
                       <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-ripple"></div>
                       <span className={`${cinzel.className} font-semibold text-lg text-primary`}>About YGSD It Solution</span>
                    </div>
            {/* This is a placeholder comment. The actual animation code should be added to the tailwind.config.ts file */}
            {/* The ripple effect animation has been defined. You can now use the 'animate-ripple' class in your components */}
                  
            <h3 className={`${league_spartan.className} mt-2 w-[80%] text-2xl leading-8 sm:text-3xl lg:text-4xl  font-semibold tracking-tight text-onSurface`}>
              We Are Increasing Business Success With Technology
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
                YGSD (Youth Group of Software Development) is a team of passionate developers, designers, and strategists. We’re dedicated to providing innovative software solutions that help businesses grow and succeed. Our goal is to bring fresh ideas and top-quality service to every project, ensuring our clients achieve their business goals.            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <button className="w-full sm:w-auto mb-4 sm:mb-0 inline-flex items-center uppercase font-semibold justify-center px-6 py-3 border border-transparent text-base  rounded-md shadow-sm text-white bg-primary hover:bg-secondary transition duration-300">
                About Company <IoIosArrowForward className="ml-2" />
              </button>
              {/* <button className="w-full sm:w-auto sm:ml-4 inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-tertiary transition duration-300">
                Technology Index <IoIosArrowForward className="ml-2" />
              </button> */}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        {/* <div className="mt-12 sm:mt-16 bg-tertiary rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <Image
              src="/path-to-award-image.jpg"
              alt="Award"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div> */}
          {/* <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold text-darkcolor">An Award-Winning Company</h4>
            <p className="mt-1 text-sm sm:text-base text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default WhoWeAre;
