import React from "react";
import PageHeader from "../Components/PageHeader";
import Image from "next/image";

import Project1 from "../assets/project_1.jpg"
import Project2 from "../assets/project_2.jpg"
import Project3 from "../assets/project_3.jpg"

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  altText: string;
}

function ProjectCard({ title, category, imageSrc, altText }: ProjectCardProps) {
  return (
    <div className="group">
     <div className="relative h-80 rounded-xl">
       <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" className="rounded-xl group-hover:scale-105 transition-all duration-300" />
        
     </div>
     <div className="relative bottom-10 w-[90%] left-[5%] bg-white rounded-2xl p-4 text-center duration-300 transition-all group-hover:bg-primary group-hover:text-white">
        <h1 className="text-xl font-bold mb-1">{title}</h1>
       <p className="text-primary text-sm group-hover:text-white">{category}</p>
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
          <ProjectCard
            title="IT Consultancy"
            category="Technology"
            imageSrc={Project1.src}
            altText="IT Consultancy team meeting"
          />
          <ProjectCard
            title="Web Development"
            category="Programming"
            imageSrc={Project2.src}
            altText="Web developer working on code"
          />
          <ProjectCard
            title="Web Design"
            category="Design"
            imageSrc={Project3.src}
            altText="Web designer working on laptop"
          />
        </div>
      </div>
    </div>
  );
}
