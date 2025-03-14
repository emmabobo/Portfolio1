import React, { useState, useEffect, use } from 'react'
import { Link } from 'react-router-dom';


function Hero() {

  return (
    <div className='bg-black text-white '>
      <div id='herobg' className='bg-mob border-2 bg-cover  mx-auto  max-w-7xl h-screen flex items-center justify-center p-4 md:justify-start ' >
        <div className='border-2 p-4 '>
          <h2 className=' md:block md: '>Hi all, I am </h2>
          <h1 className='text-3xl py-4 md:text-8xl'><span className='text-blue-900'>Emmanuel</span> Alawode</h1>
          <p className='text-lg'>I am a full stack developer</p>
          <p className='text-lg py-4'>Code. Create. Connect.</p>
          
        
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
