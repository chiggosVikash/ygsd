import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";

const FloatButton = () => {
  const phoneNumber = '+919060924752'
  const message = 'Hello, I am interested in your services. Please provide me with more information.'
  return (
    <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target='_blank'>
      <div className='fixed z-50 bottom-10 bg-teal-700 right-10 h-4 w-4 rounded-lg animate-ripple'></div>
      <button className='fixed z-50 bottom-5 right-5 h-14 w-14 bg-teal-700 rounded-lg shadow-lg hover:text-teal-500 hover:scale-90 hover:bg-white  transition-all duration-300'>
      <FaSquareWhatsapp className='text-4xl h-full w-full text-gray-200 hover:text-teal-600  '/>
    </button>
    </a>
  )
}

export default FloatButton
