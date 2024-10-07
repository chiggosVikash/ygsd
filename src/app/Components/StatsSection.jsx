import React from 'react';

const StatItem = ({ icon, number, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative mb-2 group">
      {/* Rounded square shadow */}
      <div className="absolute inset-0 bg-darkcolor rounded-lg transform -translate-x-1 -translate-y-1"></div>
      {/* Icon container with hover effect */}
      <div className="relative z-10 bg-tertiary p-3 rounded-lg shadow-md overflow-hidden">
        <div className="transition-transform duration-300 transform group-hover:[transform:rotateY(180deg)]">
          {icon}
        </div>
      </div>
    </div>
    <p className="text-3xl font-bold text-white mb-1">{number}</p>
    <p className="text-sm text-white">{label}</p>
  </div>
);

const StatsSection = () => {
  return (
    <div className="bg-primary py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-white transform -skew-y-6"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-white transform skew-y-6"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem 
            icon={<svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>}
            number="986+"
            label="Finished Project"
          />
          <StatItem 
            icon={<svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>}
            number="896+"
            label="Happy Clients"
          />
          <StatItem 
            icon={<svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/></svg>}
            number="396+"
            label="Skilled Experts"
          />
          <StatItem 
            icon={<svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>}
            number="496+"
            label="Honorable Awards"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection