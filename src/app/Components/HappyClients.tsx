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
    name: "Dhirendra Kumar",
    position: "CEO",
    company: "DP Bazaar",
    image: "/path/to/sarah-image.jpg",
    rating: 5,
    comment: "DP Bazaar's growth skyrocketed thanks to this amazing service. Our e-commerce platform now runs smoother than ever, delighting customers and boosting sales."
  },
  {
    id: 2,
    name: "Sudha Ranjan",
    position: "Founder",
    company: "DRS Solar",
    image: "/path/to/michael-image.jpg",
    rating: 5,
    comment: "Incredible support for our solar energy business. They streamlined our processes, making it easier to manage projects and satisfy clients. Highly recommended!"
  },
  {
    id: 3,
    name: "Founder",
    position: "CEO",
    company: "Veliciae",
    image: "/path/to/emily-image.jpg",
    rating: 5,
    comment: "Our jewellery e-commerce site shines brighter now. They enhanced our online presence, resulting in increased customer engagement and higher sales. Simply brilliant!"
  },
  
];

const HappyClients: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className='max-w-7xl  py-8 sm:py-12 lg:py-16  xl:max-w-full xl:px-0'>
      <div className='relative py-8 sm:py-12 lg:py-24 xl:max-w-7xl xl:mx-auto'>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">What Happy Clients Says</h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary">About Us?</h3>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
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
          className="mySwiper mx-4 sm:mx-8 lg:mx-12"
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
          height={400}
          width={1920}
          className='absolute top-0 left-0 right-0 -z-10 w-full h-[60%] object-cover xl:max-w-7xl xl:mx-auto'
          sizes="100vw"
        />
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 bg-gray-200 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <div className="absolute bottom-[4px] -right-1 bg-primary text-white text-xs font-bold rounded-full w-1 h-1 flex items-center justify-center animate-ripple">
          </div>
          <div className="absolute bottom-[1px] -right-2 bg-primary text-white text-xs font-bold rounded-full w-3 h-3  flex items-center justify-center">
          </div>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold">{testimonial.name}</h4>
          <p className="text-xs sm:text-sm text-gray-600">{testimonial.position} at {testimonial.company}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-700">{testimonial.comment}</p>
    </div>
  );
};

export default HappyClients;
