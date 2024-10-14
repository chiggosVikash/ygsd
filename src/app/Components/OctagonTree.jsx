import React from 'react'

const OctagonTree = () => {
  return (
    <div className="absolute opacity-10  -right-28 inset-0 flex flex-col md:flex-row">
                {/* Right side - Octagon Tree */}
                <div className="w-full h-1/2 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-3/4 md:w-full md:h-full" preserveAspectRatio="xMidYMid meet">
                        {/* First row - 3 octagons */}
                        <path d="M20,10 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M40,10 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M60,10 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />

                        {/* Second row - 4 octagons */}
                        <path d="M10,30 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M30,30 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M50,30 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M70,30 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />

                        {/* Third row - 5 octagons */}
                        <path d="M0,50 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M20,50 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M40,50 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M60,50 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M80,50 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />

                        {/* Fourth row - 4 octagons */}
                        <path d="M10,70 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M30,70 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M50,70 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M70,70 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />

                        {/* Fifth row - 3 octagons */}
                        <path d="M20,90 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M40,90 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M60,90 l5,0 l3.5,3.5 l0,5 l-3.5,3.5 l-5,0 l-3.5,-3.5 l0,-5 Z" className="text-primary fill-current stroke-current" strokeWidth="0.5" />
                    </svg>
                </div>
            </div>
              )
}

export default OctagonTree
