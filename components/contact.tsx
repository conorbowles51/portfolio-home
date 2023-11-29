"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { sendEmail } from "@/actions/sendEmail"
import { useFormStatus } from 'react-dom';
import SubmitButton from './submit-button';
import toast from 'react-hot-toast';

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
          const { data, error } = await sendEmail(formData);

          if(error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent!");
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
        <SubmitButton />
      </form>
    </motion.section>
  )
}

export default Contact