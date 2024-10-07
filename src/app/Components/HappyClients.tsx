"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import TestiBg from '../assets/testi_bg.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jackline Techie",
    position: "CEO",
    company: "Kormola",
    image: "/path/to/jackline-image.jpg",
    rating: 5,
    comment: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge."
  },
  {
    id: 2,
    name: "Abraham Khalil",
    position: "CEO",
    company: "Anatore",
    image: "/path/to/abraham-image.jpg",
    rating: 5,
    comment: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge."
  },
  {
    id: 3,
    name: "Md Sumon Mia",
    position: "CEO",
    company: "Rimasu",
    image: "/path/to/sumon-image.jpg",
    rating: 5,
    comment: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge."
  },
  {
    id: 4,
    name: "Md Sumon Mia",
    position: "CEO",
    company: "Rimasu",
    image: "/path/to/sumon-image.jpg",
    rating: 5,
    comment: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge."
  },
];

const HappyClients: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 xl:max-w-full xl:px-0'>
      <div className='relative py-16 lg:py-24 xl:max-w-7xl xl:mx-auto'>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">What Happy Clients Says</h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">About Us?</h3>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.id}-${index}`}>
              <div 
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          src={TestiBg.src}
          alt=""
          className='absolute top-0 left-0 right-0 -z-10 w-full xl:max-w-7xl xl:mx-auto'
          style={{ height: '40%' }}
          sizes="100vw"
          fill
        />
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 mr-4 ">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
          <div className="absolute -bottom-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            66
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.position} at {testimonial.company}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-700">{testimonial.comment}</p>
    </div>
  );
};

export default HappyClients;
