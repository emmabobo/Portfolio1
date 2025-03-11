import React from 'react';
import ReactDom ,{Links} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router';
import logo from '../assets/logoW.png';




function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}

        <Router className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <span className="font-semibold text-xl">Dragon</span>
        </Router>

        

        {/* Download Button */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
