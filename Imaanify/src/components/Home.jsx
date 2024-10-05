// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className=" w-screen h-screen text-center my-8 text-black">
      <h2 className="text-4xl font-bold mb-4 text-black">Welcome to Imaanify</h2>
      <p className="text-xl text-black-700">
        Join our community and connect with Muslims globally.
      </p>
      <button className="mt-6 bg-purple-600 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
};

export default Home;