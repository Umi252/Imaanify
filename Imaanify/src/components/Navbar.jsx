// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4 text-white">
      <div className="flex justify-around">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/about" className="hover:text-blue-200">About Us</Link>
        <Link to="/services" className="hover:text-blue-200">Services</Link>
        <Link to="/contact" className="hover:text-blue-200">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;