import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/LogoB.png';


function Header() {
  return (
    <nav className='container bg-gray-800 text-white' >
      <div className=' mx-auto flex justify-between items-center py-4'>
        <div>
          <img className='' src={Logo} alt='Logo'/>
        </div>
        
        <div>
          <button className='hidden md:block'>Download</button>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div>
          <button>Download</button>
        </div>
        
      </div>
    </nav>
  )
}

export default Header;
