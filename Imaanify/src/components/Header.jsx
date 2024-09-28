// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white text-center">
      <h1 className="text-3xl font-bold">Imaanify</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About Us</Link>
        <Link to="/services" className="mr-4">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;