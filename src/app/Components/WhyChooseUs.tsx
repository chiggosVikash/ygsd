'use client'
import Image from 'next/image';
import Image1 from '../assets/image1.webp';
import { useRouter } from 'next/navigation';

export default function WhyChooseUs() {
  const router = useRouter();
  
  return (
    <section className="py-8 sm:py-12 md:py-16 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center mr-2 transition-transform duration-300 hover:scale-110">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-primary text-sm sm:text-lg font-semibold">WHY CHOOSE US</h2>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-darkcolor">
              More Than 5+ Years Experience<br />
              We Provide <span className="text-primary">IT Services</span>
            </h1>
            <p className="text-onSurface mb-6 text-sm sm:text-base">
              Collaboratively envisioneer user friendly supply chains and cross unit imperative.
              Authoritatively fabricate competitive resource and holistic. Holistically restore real time
              resources whereas standardized networks.
            </p>
            <div className="flex flex-col sm:flex-row mb-6">
              <div className="flex items-center mb-4 sm:mb-0 sm:mr-8">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 hover:scale-105 mr-4">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#684DF4" strokeWidth="3" strokeDasharray="90, 100" />
                    <text x="18" y="20" textAnchor="middle" fill="#684DF4" fontSize="10" fontWeight="bold">90%</text>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-darkcolor">Business Grow</h3>
                  <p className="text-xs sm:text-sm text-onSurface">Efficiently transition top-line ideas before market.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 hover:scale-105 mr-4">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#684DF4" strokeWidth="3" strokeDasharray="95, 100" />
                    <text x="18" y="20" textAnchor="middle" fill="#684DF4" fontSize="10" fontWeight="bold">95%</text>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quality Products</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Efficiently transition top-line ideas before market.</p>
                </div>
              </div>
            </div>
            <button 
            onClick={() => router.push('/about-us')}
              className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-secondary transition duration-300 text-sm sm:text-base font-semibold hover:shadow-lg">
              LEARN MORE →
            </button>
          </div>
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={Image1}
                alt="IT professionals working together"
                width={500}
                height={500}
                
                className="object-cover w-full h-full"
              />
            </div>
            {/* <div className="absolute top-0 right-0 bg-primary text-white rounded-full w-[85px] h-[85px] sm:w-24 sm:h-24 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110">
              <p className="text-lg sm:text-3xl font-bold leading-none">10k+</p>
              <p className="text-xs sm:text-xs">Active Clients</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}