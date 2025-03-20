import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';

import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

import Footer from './Components/Footer';
import Home from './Components/Home';


function App() {
  return (
    <div className='bg-black font-inter text-white'>
      <Router >
        
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
