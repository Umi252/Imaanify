import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Add the future flags inside the Router component */}
      <Router
        future={{
          v7_startTransition: true,  // Opt-in for React.startTransition
          v7_relativeSplatPath: true // Opt-in for relative splat paths
        }}
      >
        {/* You can optionally include your Navbar here if you have one */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;