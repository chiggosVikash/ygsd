'use client'
import React, { useState } from 'react';
import bgImage from '../assets/contact_bg.png';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div 
      className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    > 
      <div className="absolute inset-0 "></div>
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3  p-8 rounded-lg lg:rounded-r-none ">
          <div className="mb-8">
            <span className="bg-tertiary text-primary px-4 py-2 rounded-full text-sm font-bold">CONTACT WITH US!</span>
            <h1 className="text-4xl font-bold mt-4 mb-2 text-darkcolor">Have Any Questions?</h1>
            <p className="text-onSurface max-w-2xl">
              Enthusiastically disintermediate one-to-one leadership via business e-commerce. Dramatically
              reintermediate compelling process improvements rather than empowered relationships.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Your Message"
              className="w-full p-3 border border-gray-300 rounded-md h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-md font-bold hover:bg-secondary transition duration-300"
            >
              MAKE AN APPOINTMENT
            </button>
          </form>
        </div>
        <div className="hidden lg:block w-1/3 rounded-r-lg"></div>
      </div>
    </div>
  );
};

export default ContactForm;
