import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';




function App() {
  return (
    <div className=' font-inter bg-green-700 text-white'>
      <Router>
        <Header />
      </Router>
      
    </div>
  )
}

export default App
