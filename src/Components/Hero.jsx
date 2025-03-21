import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='mx-auto flex max-w-7xl  min-h-screen items-center justify-betwee p-4 md:px-8  lg:p-6'>
      <div className=" border-2  flex items-center justify-center">
        <div className=" border-2 text-center">
          <h1 className=" text-5xl md:text-7xl font-bold mb-6  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            <span>Hi, Na Emma</span>
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/Projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition  overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              <span>View Projects</span>
            </Link>

            <Link
              to="/Contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

        
    </div>
  )
} 

export default Hero
