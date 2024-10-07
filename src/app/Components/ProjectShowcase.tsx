'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import ShowCase1 from '../assets/image1.webp';
import ShowCase2 from '../assets/image2.jpg';
import ShowCase3 from '../assets/image3.webp';

const projects = [
  {
    title: 'Web Development',
    description: 'Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.',
    image: `${ShowCase1.src}`
  },
  {
    title: 'SEO Optimization',
    description: 'Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.',
    image: `${ShowCase2.src}`
  },
  {
    title: 'Website Design',
    description: 'Distinctively enable premium expertise for multifunctional action items. Energistically benchmark worldwide communities.',
    image: `${ShowCase3.src}`
  },
  // Add more projects as needed
];

export default function ProjectShowcase() {
  return (
    <section className="bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-tertiary rounded-lg p-2 mb-4">
            <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-primary font-semibold">PROJECTS</span>
          </div>
          <h2 className="text-4xl font-bold text-darkcolor mb-4">
            Our Recent Latest <span className="text-primary">Projects</span>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper !pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-[300px] !h-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-darkcolor mb-2">{project.title}</h3>
                    <p className="text-sm text-onSurface">{project.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}