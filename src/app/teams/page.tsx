import React from "react";
import PageHeader from "../Components/PageHeader";
import Image from 'next/image';
import Chitranjan from '../assets/chitranjan.png';
import Saurav from '../assets/saurav.jpg';
import Amish from '../assets/amish.jpeg'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";


interface TeamMember {
  name: string;
  role: string;
  image: string | null;
}

const teamMembers: TeamMember[] = [
  { name: 'Vikash Kumar', role: 'CEO', image: null },
  { name: 'Vinita Bharti', role: 'CTO', image: null},
  { name: 'Amish Verma', role: 'CFO,CMO', image: `${Amish.src}` },
  { name: 'Chitranjan Kushwaha', role: 'Social Media Specialist,CRM ', image: `${Chitranjan.src}` },
  { name: 'Keshav Agarwal', role: 'CMO,CHRO', image: null },
  { name: 'Shaurav Kumar', role: 'Video Editor', image: `${Saurav.src}` },
  
  // Add more team members as needed
];

const TeamMemberCard = ({ teamMember }:{ teamMember: TeamMember }) => (
   <div className="group">
     <div className="relative h-80 rounded-xl">
        {teamMember.image !== null?(<Image src={teamMember.image} alt={teamMember.name} layout="fill" objectFit="cover" className="rounded-xl group-hover:scale-105 transition-all duration-300" />)
        :(
          <div className="flex items-center bg-tertiary justify-center h-full">
            <FaUser className=" text-center text-6xl text-gray-400" />
          </div>
        )  }
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
        <h1 className="text-xl font-bold mb-1">{teamMember.name}</h1>
       <p className="text-primary text-sm group-hover:text-white">{teamMember.role}</p>
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
            <TeamMemberCard
              key={index}
              teamMember={member}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
