'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Zoom } from 'swiper/modules';
import { FaUser } from 'react-icons/fa'; // Import the person icon

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/zoom';
import Chitranjan from '../assets/chitranjan.png';
interface TeamMember {
  name: string;
  role: string;
  image: string | null;
}

const teamMembers: TeamMember[] = [
  { name: 'Vikash Kumar', role: 'CEO', image: null },
  { name: 'Vinita Bharti', role: 'CTO', image: null},
  { name: 'Amish Verma', role: 'CFO,CMO', image: null },
  { name: 'Chitranjan Kushwaha', role: 'Social Media Specialist,CRM ', image: `${Chitranjan.src}` },
  { name: 'Keshav Agarwal', role: 'CMO,CHRO', image: null },
  { name: 'Shaurav Kumar', role: 'Video Editor', image: null },
  
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
              <SwiperSlide key={index} className="!w-[300px] !h-auto ">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden relative mx-4">
                  <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                    {member.image !== null ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={256}
                        height={256}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <FaUser className="text-6xl text-gray-400" />
                    )}
                  </div>
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
