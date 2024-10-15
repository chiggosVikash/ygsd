"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/ygsd_transparent.png'
import { useSubscriptionStore } from '../stores/subscription-store';
import { useForm } from 'react-hook-form';
import { ISubscription } from '../models/Subscription';

const Footer: React.FC = () => {
  const {register,handleSubmit}=useForm();

  const {saveSubscription,isSaving,isSaved}=useSubscriptionStore();

  const onSubmit= async (data:ISubscription)=>{
    await saveSubscription(data);
  }
  return (
    <footer className="bg-darkcolor text-white pt-12">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="flex items-center mb-8 lg:mb-0">
            <Image src={Logo.src} alt="Ygsd" width={150} height={40} />
            {/* <span className="text-2xl font-bold ml-2">Ygsd</span> */}
          </div>
          
          {/* News Subscription */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="text-center lg:text-left mr-8">
              <h3 className="text-xl font-semibold mb-2">News Subscription</h3>
              <p className="text-sm text-gray-400">Subscribe Now</p>
            </div>
            <form onSubmit={handleSubmit((data)=>onSubmit(data as ISubscription))}>
            <div className="flex mt-4 lg:mt-0">
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-opacity-90 text-white px-6 py-2 rounded-r-md transition duration-300">
                {isSaving?"Saving...":isSaved?"Saved":"SUBSCRIBE"}
              </button>
            </div>

            </form>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ABOUT COMPANY</h4>
            <p className="text-sm text-gray-400 mb-4">
              We are a team of experienced professionals who are dedicated to helping businesses succeed.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <Link key={social} href={`#${social}`} className="text-gray-400 hover:text-primary transition duration-300">
                  <i className={`fab fa-${social}${social === 'linkedin' ? '-in' : '-f'}`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['About Us', 'Teams', 'Projects', 'Contact us'].map((item) => (
                <li key={item} className="flex items-center">
                  <svg className="w-3 h-3 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IT SERVICES</h4>
            <ul className="space-y-2">
              {['Web Development', 'Business Development', 'Product Management', 'UI/UX Design', 'Cloud services'].map((item) => (
                <li key={item} className="flex items-center">
                  <svg className="w-3 h-3 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-400 hover:text-primary transition duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">RECENT POSTS</h4>
            <div className="space-y-4">
              {[
                { title: 'The Future of AI in Business', date: 'May 15 2024', slug: 'future-of-ai-in-business' },
                { title: "YGSD's Approach to Sustainable Tech", date: 'May 10 2024', slug: 'ygsd-sustainable-tech-approach' },
              ].map((post, index) => (
                <div key={index} className="flex items-start">
                  {/* <div className="w-16 h-16 bg-gray-700 rounded-md mr-4"></div> */}
                  <div>
                    <span className="text-sm hover:text-primary transition duration-300">
                      {post.title}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 bg-primary py-4">
          <div className="container mx-auto px-4">
            <p className="text-sm text-center">
              Copyright © 2024 YGSD. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
