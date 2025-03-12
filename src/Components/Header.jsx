import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoW.png'
import logoText from '../assets/logoWhite.png'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-gray-800 text-white '>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8  lg:p-6'>
        
        {/* Logo section */}
        <div class="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">La_Drogo</span>
            <img className="h-8 w-auto lg:hidden " src={logo} alt="" />
            <img className='h-5 w-auto hidden lg:block' src={logoText} alt='' />
          </Link>
        </div>

        {/* Hamburger-menu */}
        <div class="flex md:hidden" onClick={() => console.log('clicked')}>
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Menu Items*/}
        <div className='hidden md:flex  md:gap-x-12'>
          <Link to='/' className='active:bg-black hover:text-red-500' >Home</Link>
          <Link to='/about' className='active:bg-black hover:text-red-500'>About</Link>
          <Link to='/services' className='active:bg-black hover:text-red-500'>Services</Link>
          <Link to='/contact' className='active:bg-black hover:text-red-500'>Contact</Link>
        </div>


      </nav>
    </div>
  )
}

export default Header


