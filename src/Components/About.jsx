import React, { useState, useEffect, use } from 'react'
import { Link } from 'react-router-dom';
import HeroImg from '../assets/Heroimg.jpg'


function About() {

  return (
    
    <div className=' mx-auto max-w-7xl p-4 min-h-screen bg-black text-white lg:pt-0  '>
      
      <div className=''>
        
        <div  className=' rounded-xl border-white/10 border  flex flex-col-reverse items-center justify-center p-2  md:flex-row md:gap-6 md:p-8  md:col-span-2 lg:justify-between lg:p-2'>
          
          <div className='text-center md:text-left lg:pl-10 lg:pt-15'>
            <h1 className='text-4xl font-bold text md:text-6xl'>Emmanuel<span className=' text-blue-800'>  A. </span></h1>
            <h2 className='text-gray-300 text-2xl '>Full Stack Developer</h2>
            <p className='text-sm pt-4 text-gray-400 text-justify md:w-150 md:text-lg'>I am a passionate Full stack developer with a knack for crafting scalable web application, with 5 years of hands-on experience, i have honed my skill in Front-end technologies like React and Next.Js, as well as Back-end technologies like Node.js and Data base tools. My Goal is to Leverage my skills to create inovative Solutions that drive Business growth, and deliver best User Experience</p>
            <p className=' pt-4 '>Code. <span className='text-blue-800 font-bold'>Create.</span>  Connect.</p>
        
            <div className='flex justify-center gap-4 pt-4 md:justify-start' >
              <button className='hover:-translate-y-1 transition-all'>
                < Link to='/about' className='border-2 text-white p-1.5 rounded-md mt-4 hover:bg-gradient-to-r from-blue-500 to-cyan-400 '>Download CV</Link>
              </button>

              <button className='hover:-translate-y-1 transition-all'>
                <Link to='/about' className='bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-2 rounded-md mt-4 hover:bg-blue-600'>Contact</Link>
              </button>
            </div>

          </div>
            
          <div className='lg:pr-40'>
            <img className='w-60 lg:w-80' src={HeroImg} alt="" />
          </div>

        </div>

          {/* Technologies section */}
        <div className='rounded-xl border-white/10 border mt-8'>
          <h1 className=' text-center text-1xl font-bold  text-neutral-400 ' >Technologies</h1>
          <div className='flex items-center justify-center gap-4 pt-4 pb-4 md:flex-row md:gap-6 '>
            <div className='flex flex-col items-center gap-4'>
              <img className='hover: h-10 hover:-translate-y-1 transition-all' src='https://img.icons8.com/color/48/000000/html-5--v1.png' alt='' />
              <p className='hidden'>HTML</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img className='h-10 hover:-translate-y-1 transition-all' src='https://img.icons8.com/color/48/000000/css3.png' alt='' />
              <p className='hidden'>CSS</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img className='h-10 hover:-translate-y-1 transition-all' src='https://img.icons8.com/color/48/000000/react-native.png' alt='' />
              <p className='hidden'>React</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img className='h-10 hover:-translate-y-1 transition-all' src='https://img.icons8.com/color/48/000000/nodejs.png' alt='' />
              <p className='hidden'>Node.js</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img className='h-10 hover:-translate-y-1 transition-all' src='https://img.icons8.com/color/48/000000/javascript.png' alt='' />
              <p className='hidden'>JavaScript</p>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img className='h-10 hover:-translate-y-1 transition-all' src='https://img.icons8.com/color/48/000000/mongodb.png' alt='' />
              <p className='hidden'>MongoDB</p>
            </div>
          </div>
        </div>

        <div className='' >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-1xl text-center font-bold mb-4"> 🏫 Education </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                      <strong> B.S. in Computer Science </strong> - XYZ University
                      (2016-2020)
                      </li>
                      <li className="text-sm">
                      Relevant Coursework: Data Structures, Web Development, Cloud
                      Computing...
                      </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-1xl text-center font-bold mb-4 font-"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      {" "}
                      Software Engineer at ABC Corp (2020 - Present){" "}
                    </h4>
                    <p className="text-sm">
                      Developed and maintained microservices for cloud-based
                      applications.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {" "}
                      Intern at DEF Startups (2019){" "}
                    </h4>
                    <p className="text-sm">
                      Assisted in building front-end components and integration
                      REST APIs
                    </p>
                  </div>
                </div>
              </div>

          </div>
        </div>
      
      </div>
    </div>
    
  )
}

export default About
