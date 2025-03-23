import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';

import Hero from "./Components/Hero" ;
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact"

import Footer from './Components/Footer';





function App() {
  return (
    <div className=' font-inter bg-black text-white'>
      <Router>
        <Header />
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
        <Routes>
          <Route path='/' element={<Hero />}/>
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
