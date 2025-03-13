import React from 'react'
import { Link } from 'react-router-dom';



function Hero() {
  return (
    <div className='bg-gray-800 text-white '>
      <div className=' bg-gray-600 mx-auto flex max-w-7xl h-screen items-center justify-between p-4 md:px-8  lg:p-32' >
        <div className='bg-red-400 '>
          <h1 className='text-4xl '>Welcome to La_Drogo</h1>
          <p className='text-lg'>Code. Create. Connect.</p>
          <Link to='/contact' className='bg-white text-black p-2 rounded-md'>Try For Free</Link>
        </div>

        <div>

        </div>

        <div className='bg-yellow-400 absolute'>
          //imge here
        </div>
      </div>
    </div>
  )
}

export default Hero
