import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='bg-all mx-auto max-w-7xl  min-h-screen flex items-center justify-center md:justify-start  p-4 md:px-24  '>
      <div className="md:w-[50%] lg:w-[40%] md:pt-10 ">
        
        <div className="">
          <h1 className="
           text-3xl md:text-4xl font-bold mb-6  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            {" "}
            <span className='text-gray-400 md:text-4xl md:pb-4 '>Hi, </span> I'm Emmanuel
          </h1>

          <p className="text-justify text-gray-400 text-lg mb-8  ">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="grid grid-rows-2 md:grid-cols-2 gap-6   ">
            
            <button className=' border text-white rounded-2xl  transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]'>
              <Link to="/Projects" className="px-2">
                View Projects
              </Link>

            </button>

            <button className='bg-blue-500  rounded-2xl p-2 transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-600'>
              <Link to="/Contact" className="px-2"
              >
                Contact Me
              </Link>

            </button>
          </div>

        </div>

      </div>

        
    </div>
  )
} 

export default Hero
