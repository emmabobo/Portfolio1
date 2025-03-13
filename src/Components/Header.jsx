import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoW.png'
import logoText from '../assets/logoWhite.png'


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenu = () => {
    // Get the element by its ID (replace 'yourElementId' with the actual ID)
    const elementId = document.getElementById('navLink');
    if (mobileMenuOpen){
      elementId.classList.add('hidden');
    }
    else{
      elementId.classList.remove('hidden');
    }

    setMobileMenuOpen(!mobileMenuOpen);
  };



  return (
    <div className='absolute top-0 right-0 left-0 bg-gray-800 text-white '>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8  lg:p-6'>
        
        {/* Logo section */}
        <div onClick={handleMobileMenu} className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">La_Drogo</span>
            <img className="h-8 w-auto lg:hidden " src={logo} alt="" />
            <img className='h-5 w-auto hidden lg:block' src={logoText} alt='' />
          </Link>
        </div>

        {/* Hamburger-menu */}
        <div className=" flex md:hidden" >
          <button type="button" onClick={handleMobileMenu} class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Menu Items*/}
        <div id='navLink' onClick={handleMobileMenu} className=' absolute top-15 left-0 right-0 h-fit items-center rounded-md  p-8 text-5xl flex flex-col gap-8 bg-gray-700 md:top-0 md:flex md:relative md:flex-row md:text-2xl  md:p-2 md:pl-6 md:rounded-tl-full'>
          <Link to='/' onClick={handleMobileMenu} className='active:bg-black hover:text-red-500' >Home</Link>
          <Link to='/about' onClick={handleMobileMenu} className='active:bg-black hover:text-red-500'>About</Link>
          <Link to='/services' onClick={handleMobileMenu} className='active:bg-black hover:text-red-500'>Services</Link>
          <Link to='/contact' onClick={handleMobileMenu} className='active:bg-black hover:text-red-500'>Contact</Link>
        </div>


      </nav>
    </div>
  )
}

export default Header


