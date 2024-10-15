"use client";
import React from "react";
import bgImage from "../assets/contact_bg.png";
import { useForm, FieldValues } from "react-hook-form";
import {useContactUsStore} from "../stores/contact-us-store";
import { IContactUs } from "../models/ContactUs";
// import {IContactUs} from "../"
import LoadingDialog from "./dialog/LoadingDialog";
import SuccessDialog from "./dialog/SuccessDialog";

const ContactForm: React.FC = () => {
  const {saveContactUs,isSaving,isSaved,reset} = useContactUsStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset:resetForm
  } = useForm();

  
  
  const onSubmit = async (data:FieldValues) =>{
    saveContactUs(data as IContactUs);
  }
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LoadingDialog isOpen={isSaving} />
      <SuccessDialog open={isSaved} onClose={()=>{
        resetForm();
        reset();
      }} title="Success" message="Your message has been sent successfully" />
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3  p-8 rounded-lg lg:rounded-r-none ">
          <div className="mb-8">
            <span className="bg-tertiary text-primary px-4 py-2 rounded-full text-sm font-bold">
              CONTACT WITH US!
            </span>
            <h1 className="text-4xl font-bold mt-4 mb-2 text-darkcolor">
              Have Any Questions?
            </h1>
            <p className="text-onSurface max-w-2xl">
              Enthusiastically disintermediate one-to-one leadership via
              business e-commerce. Dramatically reintermediate compelling
              process improvements rather than empowered relationships.
            </p>
          </div>
          <form
            onSubmit={handleSubmit((data)=>{
              onSubmit(data)
            })}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              {errors.name && (
                <p className="text-red-500">
                  {errors.name.message?.toString()}
                </p>
              )}
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              {errors.email && (
                <p className="text-red-500">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                {...register("subject", {
                  required: "Subject is required",
                })}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
              {errors.subject && (
                <p className="text-red-500">
                  {errors.subject.message?.toString()}
                </p>
              )}
              <input
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">
                  {errors.phoneNumber.message?.toString()}
                </p>
              )}
            </div>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              placeholder="Write Your Message"
              className="w-full p-3 border border-gray-300 rounded-md h-32"
            ></textarea>
            {errors.message && (
              <p className="text-red-500">
                {errors.message.message?.toString()}
              </p>
            )}
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
