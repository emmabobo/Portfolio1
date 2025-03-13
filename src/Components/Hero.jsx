import React from 'react'
import { Link } from 'react-router-dom';
import  '../assets/hero.png'




function Hero() {
  return (
    <div className='bg-black text-white '>
      <div className='bg-hero bg-cover mx-auto flex max-w-7xl h-screen items-center justify-between p-4 md:px-8  lg:p-32' >
        <div className=''>
          <h1 className='text-4xl '>Emmanuel</h1>
          <h1 className='text-4xl '>Alawode</h1>
          <p className='text-lg'>Code. Create. Connect.</p>
          <p className='text-lg'>I am a full stack developer</p>
        
          <Link to='/contact' className='bg-white text-black p-2 rounded-md'>Try For Free</Link>
        </div>

        <div>

        </div>

        <div className='bg-yellow-400 '>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
