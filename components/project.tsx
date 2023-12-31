"use client";

import { useRef } from 'react'
import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl
}: ProjectProps ) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref} 
      style={{
        scale: scaleProgress,
        opacity: scaleProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section 
        className="bg-gray-100 rounded-lg group-even:pl-8 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition"
      >
        <div className="h-full pt-4 pb-7 px-5 sm:pl-10 sm: pr-2 sm:pt-10 max-w-[50%] flex flex-col group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {
              tags.map((tag, index) => (
                <li 
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                >
                  {tag}
                </li>
              ))
            }
          </ul>
        </div>

        <Image 
          src={imageUrl}
          alt="Project"
          quality={95}
          className="absolute top-8 group-odd:-right-40 w-[24rem] sm:w-[28.25rem] rounded-lg shadow-2xl group-even:-left-40
          
            group-hover:scale-110

            group-hover:translate-x-3
            group-hover:-translate-y-2
            group-hover:rotate-2

            group-odd:group-hover:-translate-x-3
            group-odd:group-hover:translate-y-2
            group-odd:group-hover:-rotate-2

            transition
          "
        />
      </section>
    </motion.div>
  )
}

export default Project