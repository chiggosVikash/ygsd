'use client'
import React, { useState } from 'react'
import { menuItems } from '../menuitems'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';


const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

//   const renderMenuItem = (item: MenuItem) => (
//     <li key={item.id} className="relative group text-sm">
//       <a href={item.link} className="block py-2 px-4  text-white hover:text-primary transition-colors duration-300">
//         {item.name}
//       </a>
//       {item.children && (
//         <ul className="absolute left-0 mt-2 w-48 bg-darkcolor shadow-lg hidden group-hover:block">
//           {item.children.map(renderMenuItem)}
//         </ul>
//       )}
//     </li>
//   );

  return (
    <nav className=" bg-darkcolor">
      <ul className="hidden md:flex space-x-4 mr-8">
        {menuItems.map((item) => (
          <li key={item.id} className="text-sm font-semibold">
            <Link href={item.link} className="text-white hover:text-primary transition-colors duration-300 py-2 px-4 block">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div 
        onClick={toggleMenu}
        className='md:hidden flex relative z-[60] mx-8'>
         {isMenuOpen ? <FaTimes/> : <FaBars/>}
      </div>
      <div 
        className={`md:hidden fixed top-28 left-0 right-0 z-50 bg-darkcolor overflow-y-auto ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className='flex flex-col pt-20 pb-4'>
            {menuItems.map((item) => (
                <li key={item.id} className='text-sm font-semibold'>
                    <Link href={item.link} className='text-white hover:text-primary transition-colors duration-300 py-2 px-4 block'>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
      </div>
      
    </nav>
  )
}

export default MenuBar
