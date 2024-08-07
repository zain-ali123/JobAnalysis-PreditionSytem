import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'; // For additional styles if needed

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-900 to-white text-white p-3 shadow-lg">
      <div className="flex justify-between items-center w-full">
        <div className="navbar-brand text-2xl font-bold ml-2">
          Job Analysis
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="navbar-links flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/Work-analysis" className="hover:text-gray-300">Work Analysis</Link></li>
            <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
            <li><Link to="/prediction" className="hover:text-gray-300">Prediction</Link></li>
            <li><Link to="/dropdown" className="hover:text-gray-300">DropDown</Link></li>
          </ul>
        </div>
        <div className="w-48"></div> {/* Placeholder to balance the flex container */}
      </div>
    </nav>
  );
};

export default NavBar;
