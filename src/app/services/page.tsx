import Image from 'next/image';
import ServiceBg from '../assets/service_bg.jpg';
import ServiceCards from '../Components/ServiceCards';
export default function Services() {
  return (
    <div>
    <div className="relative h-[30vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={ServiceBg}
        alt="Services Background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Services</h1>
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <span>Home</span>
          <span className="text-xl">&raquo;</span>
          <span>Services</span>
        </div>
      </div>
    </div>
    <ServiceCards/>
    </div>
  );
}
