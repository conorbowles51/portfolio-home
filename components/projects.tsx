import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'


const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

export default Projects