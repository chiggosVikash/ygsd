import React from "react";
import PageHeader from "../Components/PageHeader";
import Team1 from '../assets/team1.jpg'
import Team2 from '../assets/team2.jpg'
import Team3 from '../assets/team3.jpg'

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Rayan Athels",
    role: "Founder & CEO",
    imageSrc: `${Team1.src}`,
  },
  {
    name: "Alex Furnandes",
    role: "Project Manager",
    imageSrc: `${Team2.src}`,
  },
  {
    name: "Mary Crispy",
    role: "Chief Expert",
    imageSrc: `${Team3.src}`,
  },
  {
    name: "Henry Joshep",
    role: "Product Manager",
    imageSrc: `${Team1.src}`,
  },
];

const TeamMember = ({ name, role, imageSrc }: { name: string; role: string; imageSrc: string }) => (
   <div className="group">
     <div className="relative h-80 rounded-xl">
       <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" className="rounded-xl group-hover:scale-105 transition-all duration-300" />
       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-50 rounded-t-full w-48 h-0 group-hover:h-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="flex space-x-4 mt-1 ">
          <FaFacebookF className="text-lg hover:text-primary cursor-pointer" />
          <FaTwitter className="text-lg hover:text-primary cursor-pointer" />
          <FaInstagram className=" text-lg hover:text-primary cursor-pointer" />
          <FaLinkedinIn className=" text-lg hover:text-primary cursor-pointer" />
        </div>
      </div>
    
     </div>
     <div className="relative bottom-10 w-[90%] left-[5%] bg-white rounded-2xl p-4 text-center duration-300 transition-all group-hover:bg-primary group-hover:text-white">
        <h1 className="text-xl font-bold mb-1">{name}</h1>
       <p className="text-primary text-sm group-hover:text-white">{role}</p>
     </div>
     
   </div>
);

const Teams = () => {
  return (
    <div>
      <PageHeader title="Home" subtitle="Our Teams" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
