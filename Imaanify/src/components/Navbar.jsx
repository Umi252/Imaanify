// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="  pt-10 text-black text-center"> {/* Corrected 'text-Black' to 'text-black' */}
      <h1 className="text-3xl font-bold">Imaanify</h1>
      <p className="text-lg mt-8">Connecting Muslims Worldwide</p>
      <nav className="mt-4">
      </nav>
   </header>  
  );
};

export default Navbar;