// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-4xl font-bold text-center my-8 text-black">Contact Us</h2>
      <p className="text-lg text-black-700 mb-4 text-black">
        Have questions or suggestions? We'd love to hear from you!
      </p>
      <form className="bg-black p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name:</label>
          <input className="border p-2 w-full" type="text" id="name" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email:</label>
          <input className="border p-2 w-full" type="email" id="email" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Message:</label>
          <textarea className="border p-2 w-full" id="message" rows="4" required></textarea>
        </div>
        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;