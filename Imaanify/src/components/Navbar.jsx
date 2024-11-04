// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className= " position:fixed top-0 bg-blue-900 p-4 text-black text-center">
      <h1 className="text-3xl font-bold">Imaanify</h1>
      <nav className="mt-4">
      </nav>
   </header>  
  );
};

export default Navbar;