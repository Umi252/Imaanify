import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Home from "./components/Home"; 

function App() {
  return (
    <Router>
      <div className="w-screen h-screen  bg-gray-100"> 
        <header className="bg-purple-500 p-4 text-black text-center"> {/* Corrected 'text-Black' to 'text-black' */}
          <h1 className="text-3xl font-bold">Imaanify</h1>
          <p className="text-lg">Connecting Muslims Worldwide</p>
          <nav className="mt-4">
            <Link className="mx-2 text-black hover:underline" to="/">Home</Link>
            <Link className="mx-2 text-black hover:underline" to="/about">About Us</Link>
            <Link className="mx-2 text-black hover:underline" to="/services">Services</Link>
            <Link className="mx-2 text-black hover:underline" to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-blue-500 p-4 text-black text-center">
          <p>&copy; 2024 Imaanify. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;