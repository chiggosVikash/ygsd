import React from 'react'
import { FaPhone } from "react-icons/fa6";

const FloatingCallButton = () => {
  return (
    <a href= 'tel:+919060924752' target='_blank'>
      <button className='p-4 fixed z-40 bottom-24 right-5 h-14 w-14 hover:bg-secondary  bg-primary rounded-lg shadow-lg hover:text-teal-500 hover:scale-110 transition-transform duration-300'>
      <FaPhone className='text-2xl h-full w-full text-gray-200'/>
    </button>
    </a>
  )
}

export default FloatingCallButton
