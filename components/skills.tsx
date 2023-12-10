"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { delay, motion } from 'framer-motion'

const fadeInAnimVariants = {
  initial: {
    opacity: 0,
    y: 100
  },

  animate: {
    opacity: 1,
    y: 0
  }
}

const Skills = () => {
  return (
    <section 
      id="skills"
      className="mb-24 max-w-[45rem] scroll-mt-28"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {
          skillsData.map((skill, index) => (
            <motion.li 
              key={index}
              className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
              variants={fadeInAnimVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}

              transition={{
                delay: 0.05 * index
              }}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills