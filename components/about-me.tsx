"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <motion.section 
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{
        opacity: 0,
        y: 100
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 0.2
      }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I graduated from BIMM Dublin with a degree in{" "}
        <span className="font-medium italic">
          Commercial Modern Music
        </span>
        {" "}in 2023. After graduating, I decided to pursue my passion for programming and web development.
        I have been actively creating software and writing my own apps for nearly a decade using various programming languages
        and technologies such as{" "}
        <span className="font-bold">
          HTML, CSS, javascript, React, C#
        </span>
        , and more. I enrolled in the{" "}
        <span className="font-medium italic">
          Meta Professional Front-end Developer
        </span>
        {" "}course, a 6 month certificate programme, to ensure my knowledge of web
        development was up to scratch with industry standards. My favourite part of programming is
        <span className="font-medium italic">
          {" "}solving problems in creative and elegant ways, and constantly learning about new technologies.
        </span>
        {" "}I am currently looking to turn my passion into a{" "}
        <span className="font-bold">
          full-time position
        </span>
        {" "}as a software developer.<br></br><br></br>
        When I'm not programming, I love practicing the guitar. I was in a band for seven years, 
        and while I no longer wish to pursue a career in music, I will always love learning new scales and chords,
        and improving myself as a musician.
      </p>
    </motion.section>
  )
}

export default AboutMe