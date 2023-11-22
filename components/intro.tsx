"use client";

import Image from 'next/image';
import React from 'react'

import { motion } from "framer-motion"
import Link from 'next/link';

import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
          >
            <Image 
              src="/conorbowles.jpg" 
              alt="Conor Bowles"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span 
            className="absolute bottom-0 right-0 text-4xl"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.8
            }}
          >
            👋
          </motion.span>
        </div>
      </div>   

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
      >
        <span className="font-bold">
          Hi, I'm Conor.
        </span>
        {" "}I'm a{" "}
        <span className="font-bold">
          software developer
        </span>
        {" "}with over 5 years of hobbyist experience. I enjoy building{" "}
        <span className="italic">
          websites and apps
        </span>
        {" "}and I'm looking to turn my passion into a full-time career. My focus is{" "}
        <span className="font-bold">
          React (Next.js)
        </span>
      </motion.h1> 

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 0.1
        }}
      >
        <Link 
          href="#contact" 
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="opacity-70 group group-hover:translate-x-1 transition" />
        </Link>

        <a 
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-gray-950 cursor-pointer"
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
        </a>

        <a 
          href="https://linkedin.com/"
          target='_blank'
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-gray-950 cursor-pointer"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/conorbowles51/"
          target="_blank" 
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-gray-950 cursor-pointer"
        >
          <BsGithub/>
        </a>
      </motion.div>
    </section>
  )
}

export default Intro;