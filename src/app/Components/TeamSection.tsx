'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Zoom } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/zoom';
import Team1 from '../assets/team1.jpg';
import Team2 from '../assets/team2.jpg';
import Team3 from '../assets/team3.jpg';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alex Furnandes', role: 'Project Manager', image: `${Team1.src}` },
  { name: 'Mary Crispy', role: 'Chief Expert', image: `${Team2.src}` },
  { name: 'Henry Joshep', role: 'Product Manager', image: `${Team3.src}` },
  { name: 'Alex Furnandes', role: 'Project Manager', image: `${Team1.src}` },
  { name: 'Mary Crispy', role: 'Chief Expert', image: `${Team2.src}` },
  { name: 'Henry Joshep', role: 'Product Manager', image: `${Team3.src}` },
  
  // Add more team members as needed
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-tertiary rounded-full px-3 py-1 mb-4">
            <span className="text-primary font-semibold">GREAT TEAM</span>
          </div>
          <h2 className="text-4xl font-bold text-darkcolor mb-4">
            See Our Skilled Expert <span className="text-primary">Team</span>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            effect={'zoom'}
            grabCursor={true}
            // centeredSlides={true}
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
            modules={[ Pagination, Navigation, Zoom]}
            className="mySwiper !pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="!w-[300px] !h-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-darkcolor">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                  <button className="absolute bottom-4 right-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold hover:bg-secondary transition-colors">
                    +
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
