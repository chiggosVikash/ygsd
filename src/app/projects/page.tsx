import React from "react";
import PageHeader from "../Components/PageHeader";
import Image from "next/image";


import DpBazaar from '../assets/dp_bazaar_logo.png';
import Velicia from '../assets/velciae_logo.jpeg';
import DRSSOLAR from '../assets/drs-solar.png';
import ShowCase1 from '../assets/image1.webp';
import ShowCase3 from '../assets/image3.webp';

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  altText: string;
}

const projectsData: ProjectCardProps[] = [
  {
    title: 'Dp Bazaar Mobile App',
    category: 'Mobile Development',
    imageSrc: DpBazaar.src,
    altText: 'DP Bazaar Mobile App logo',
  },
  {
    title: 'Billing Software',
    category: 'Business Software',
    imageSrc: ShowCase3.src,
    altText: 'Billing Software interface',
  },
  {
    title: 'DRS Solar - Web App',
    category: 'Web Development',
    imageSrc: `${DRSSOLAR.src}`,
    altText: 'DRS Solar Web App logo',
  },
  {
    title: 'Dp Bazaar - Web App',
    category: 'E-commerce',
    imageSrc: DpBazaar.src,
    altText: 'DP Bazaar Web App logo',
  },
  {
    title: 'Veliciae - E-Commerce Web App',
    category: 'E-commerce',
    imageSrc: `${Velicia.src}`,
    altText: 'Veliciae E-Commerce Web App logo',
  },
  {
    title: 'Business Management System',
    category: 'Business Software',
    imageSrc: ShowCase1.src,
    altText: 'Business Management System interface',
  },
  {
    title: 'School ERP',
    category: 'Education Software',
    imageSrc: ShowCase1.src,
    altText: 'School ERP System interface',
  },
];

function ProjectCard({project}: {project: ProjectCardProps}) {
  return (
    <div className="group">
     <div className="relative bg-gray-200 h-80 rounded-xl">
       <Image src={project.imageSrc} alt={project.altText} layout="fill" objectFit="cover" className="rounded-xl group-hover:scale-105 transition-all duration-300" />
        
     </div>
     <div className="relative bottom-10 w-[90%] left-[5%] bg-white rounded-2xl p-4 text-center duration-300 transition-all group-hover:bg-primary group-hover:text-white">
        <h1 className="text-xl font-bold mb-1">{project.title}</h1>
       <p className="text-primary text-sm group-hover:text-white">{project.category}</p>
     </div>
     
   </div>
  );
}

export default function Projects() {
  return (
    <div>
      <PageHeader title="Projects" subtitle="Our Projects" />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
