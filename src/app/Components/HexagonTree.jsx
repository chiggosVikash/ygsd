import React from 'react'

const HexagonTree = () => {
  return (
    <div className="absolute opacity-10 inset-0 flex flex-col md:flex-row">
                {/* Left side - Hexagon Tree */}
                <div className="w-full md:w-1/2 h-screen md:h-1/2 flex ">
                    <svg viewBox="0 0 100 100" className="w-full h-3/4 md:w-full md:h-full" preserveAspectRatio="xMidYMid meet">
                        {/* First row - 3 hexagons */}
                        <path d="M20,10 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M40,10 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M60,10 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />

                        {/* Second row - 4 hexagons */}
                        <path d="M10,25 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M30,25 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M50,25 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M70,25 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />

                        {/* Third row - 5 hexagons */}
                        <path d="M0,40 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M20,40 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M40,40 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M60,40 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M80,40 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />

                        {/* Fourth row - 4 hexagons */}
                        <path d="M10,55 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M30,55 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M50,55 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M70,55 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />

                        {/* Fifth row - 3 hexagons */}
                        <path d="M20,70 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />
                        <path d="M40,70 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-none stroke-current" strokeWidth="0.5" />
                        <path d="M60,70 l4.33,2.5 l0,5 l-4.33,2.5 l-4.33,-2.5 l0,-5 Z" className="text-secondary fill-current stroke-current" strokeWidth="0.5" />
                    </svg>
                </div>
            </div>

  )
}

export default HexagonTree
