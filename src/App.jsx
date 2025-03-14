import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer';






function App() {
  return (
    <div className='bg-black text-white'>

      <Router >
        
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
