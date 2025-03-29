import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      <h2 className="text-3xl font-bold">Portfolio-Builder</h2>
      <ul className="flex gap-6 mx-5 items-center">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
