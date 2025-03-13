import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';






function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
      </Routes>
    
    </Router>
  )
}

export default App
