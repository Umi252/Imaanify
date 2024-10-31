import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Router>
        
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
       </Router>
     </div>
  );
}

export default App;