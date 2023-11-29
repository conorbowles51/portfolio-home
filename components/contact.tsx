"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { sendEmail } from "@/actions/sendEmail"

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:conorbowles2000@gmail.com">conorbowles2000@gmail.com</a>
        {" "}or through this form
      </p>

      <form 
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input 
          placeholder='Your email' 
          name='email'
          required 
          maxLength={500}
          className="p-4 h-14 rounded-lg border border-black/10" 
          type="email" 
        />
        <textarea 
          placeholder='Your message' 
          name='message'
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
        />
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-gray-950 active:scale-105" type="submit">
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  )
}

export default Contact