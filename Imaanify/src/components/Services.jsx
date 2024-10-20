// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <div className="w-screen h-screen text-center p-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center my-8 text-black">Our Services</h2>
      <p className="text-lg text-black mb-4">
        At Imaanify, we offer a range of services designed to connect and support our community.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2 text-black">Community Networking: Connect with fellow Muslims.</li>
        <li className="mb-2 text-black">Events and Workshops: Participate in community events.</li>
        <li className="mb-2 text-black">Resource Sharing: Access educational materials and resources.</li>
      </ul>
    </div>
  );
};

export default Services;