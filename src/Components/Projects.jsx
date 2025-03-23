import React from 'react'
import ProjectCard from './ProjectCard'
import projectsData from './ProjectData'


function Projects() {
  return (
    <div className="mx-auto max-w-7xl bg-black min-h-screen flex justify-center ">

        
      <div className=" px-4 py-8 md:py-24 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold  mt-16 mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center md:mt-8">
          
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 

          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>

      </div>
    </div>

  )
}

export default Projects
