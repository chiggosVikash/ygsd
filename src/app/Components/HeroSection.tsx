import React from 'react';
import Image1 from '../assets/image1.webp';
import Image2 from '../assets/image2.jpg';
import Image5 from '../assets/image5.webp';
import HexagonTree from './HexagonTree';
import OctagonTree from './OctagonTree';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

import {Cinzel,League_Spartan } from 'next/font/google';





const cinzel = Cinzel({
    subsets: ['latin'],
});

const league_spartan = League_Spartan({
    subsets: ['latin'],
});

const HeroSection = () => {
    return (
        <div className="relative pt-[100px] h-max bg-tertiary flex items-center justify-center overflow-hidden">
            <div className='grid  grid-cols-1 md:grid-cols-2'>
               <div className={`${league_spartan.className} relative z-10 w-full h-max flex flex-col justify-start items-start p-8 md:p-16`}>
                   <div className="flex items-center mb-4">
                       <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-ripple"></div>
                       <span className={`${cinzel.className} font-bold text-lg text-primary`}>Best IT Services</span>
                   </div>
                   <h1 className={` text-5xl md:text-6xl font-bold text-darkColor mb-6`}>
                   Transforming Ideas Into <span className='text-primary'>Reality</span>
                   </h1>
                   <p className={`text-lg md:text-onSurface text-secondary mb-8 max-w-2xl`}>
                   Transforming ideas into powerful software solutions. We bring your vision to life,
                   crafting cutting-edge digital experiences that drive business growth. From concept
                   to code, we&apos;re your partners in innovation, turning complex challenges into
                   seamless, user-friendly realities. Let&apos;s build the future of your business together.
                   </p>
                   <button className="bg-primary text-white px-6 py-3 rounded-lg group hover:bg-secondary font-semibold uppercase flex items-center transition duration-300  ">
                       Get Started
                       <IoIosArrowForward className="ml-2 text-lg items-center mb-1 group-hover:rotate-90 transition-transform duration-300" />
                   </button>
               </div>
               <div className=" md:flex hidden w-full  relative">
                   <OctagonTree/>
                   {/* Randomly Positioned Images */}
                        <div className="absolute top-5 left-1/4 md:left-0 animate-float-slow">
                            <div className="w-full h-max border-t-2 border-b-2 border-primary p-2 rounded-md flex items-center justify-center text-gray-500">
                                <Image
                                    src={Image1.src}
                                    alt="Image 1"
                                    width={300}
                                    height={300}
                                    className="rounded-md object-cover opacity-50"
                                />
                            </div>
                        </div>
                        <div className="absolute -top right-1/4 md:right-10 animate-float-slow-delay-1">
                            <div className="w-full  border-t-2 border-b-2 border-primary p-2 rounded-md shadow-md flex items-center justify-center text-gray-500">
                                <Image
                                    src={Image2.src}
                                    alt="Image 2"
                                    width={300}
                                    height={300}
                                    className="rounded-md object-cover opacity-50"
                                />
                            </div>
                        </div>
                        {/* <div className="absolute top-10  md:left-4 animate-float-slow-delay-2">
                            <div className="w-full h-[110px] md:h-[150px] bg-gray-300 rounded-3xl shadow-md flex items-center justify-center text-gray-500">
                                <img src={Image3.src} alt="Image 3" className="rounded-3xl w-full h-full object-cover opacity-70 " />
                            </div>
                        </div> */}
                        <div className="absolute bottom-10 right-1/4 md:right-1/3 animate-float-slow-delay-3">
                            <div className="w-full  border-t-2 border-b-2 border-primary p-2 rounded-md shadow-md flex items-center justify-center text-gray-500">
                                <Image
                                    src={Image5.src}
                                    alt="Image 4"
                                    width={300}
                                    height={300}
                                    className="rounded-md object-cover opacity-50"
                                />
                            </div>
                        </div>
                </div>
               </div>
              <HexagonTree/>  
            
                           
        </div>
    );
};

export default HeroSection;
// Add this to your tailwind.config.ts file in the theme.extend section:



// To add the animate-bounce-slow animation, you need to add the following to your tailwind.config.ts file:
// 
// module.exports = {
//   theme: {
//     extend: {
    //   keyframes: {
    //     'bounce-slow': {
    //       '0%, 100%': {
    //         transform: 'translateY(-5%)',
    //         animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
    //       },
    //       '50%': {
    //         transform: 'translateY(0)',
    //         animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    //       },
    //     },
    //   },
    //   animation: {
    //     'bounce-slow': 'bounce-slow 3s infinite',
    //   },
//     },
//   },
//   variants: {},
//   plugins: [],
// }
