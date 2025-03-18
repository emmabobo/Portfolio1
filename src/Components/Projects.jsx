import React from 'react'
import ProjectCard from './ProjectCard'
import projectsData from './ProjectData'


function Projects() {
  return (
    <div className="min-h-screen flex justify-center md:pt-10 lg:pt-20">

        <div>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold  mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              
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

    </div>
  )
}

export default Projects
