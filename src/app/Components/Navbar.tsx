'use client'
import React, { useState, useEffect } from 'react';
import Logo from '../assets/ygsd_transparent.png';
import MenuBar from './MenuBar';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 56; // 56px is the height of the top bar
      const currentScrollY = window.scrollY;

      if (!isScrolled && currentScrollY > scrollThreshold) {
        setIsScrolled(true);
      } else if (isScrolled && currentScrollY <= scrollThreshold) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <header className=" border-box overflow-x-hidden">
      {/* Top bar */}
      <div className={`bg-primary   text-white text-sm h-14 px-12 transition-all duration-300 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
          <div className="max-w-7xl flex justify-between items-center h-full">
            <div className="hidden lg:flex space-x-6">
              <span className="flex items-center space-x-1">
                <FaMapMarkerAlt className="text-tertiary" />
                <span>54 NJ-12, Flemington, United States</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaPhoneAlt className="text-tertiary" />
                <span>+153-987-3657</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaEnvelope className="text-tertiary" />
                <span>info@webteck.com</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden lg:inline">Follow Us On:</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaFacebookF /></a>
                <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaTwitter /></a>
                <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaLinkedinIn /></a>
                <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaInstagram /></a>
                <a href="#" className="hover:text-tertiary transition-colors duration-300"><FaYoutube /></a>
              </div>
            </div>
          </div>
      </div>
      {/* Bottom Navbar */}
      <nav className={`w-full bg-darkcolor text-white h-[120px] transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="flex justify-between items-center h-full">
            <div className='relative -left-8 bg-primary w-[27%] h-full transform skew-x-[30deg]'>
                <div className='bg-white w-[96%] h-full transform -skew-x-[12deg]'>
                </div>
            </div>
            <div className="absolute text-2xl mx-8 font-bold flex items-center space-x-2">
                <img src={Logo.src} alt="Logo Image" className='w-full h-[120px]' />
            </div>
            <MenuBar/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
