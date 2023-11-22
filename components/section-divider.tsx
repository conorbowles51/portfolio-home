"use client";

import React from 'react'
import { motion } from 'framer-motion'

const SectionDivider = () => {
  return (
    <motion.div
      className="my-12 md:my-24 h-1 w-[75%] rounded-full block"
      initial={{
        scale: 0,
        background: "rgb(156 163 175 / var(--tw-bg-opacity))"
      }}
      animate={{
        scale: 1,
        background: "rgb(229 231 235 / var(--tw-bg-opacity))"
      }}
      transition={{
        duration: 3,
        delay: 1
      }}
    ></motion.div>
  )
}

export default SectionDivider