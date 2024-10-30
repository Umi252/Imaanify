import React from 'react';
import videoSrc from '../assets/vi.mp4';

const Home = () => {
  return (
    <div className=" relative min-h-screen bg-gray-100">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden"> {/* Full viewport height section */}
        
        {/* Video Background */}
        <video
        className='mt-0'
        src={videoSrc} // Known working URL for testing
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-white text-center py-24 px-4">
          <h2 className="text-4xl font-bold mb-4 mt-20">Welcome to Imaanify</h2>
          <p className="text-xl mb-6">
            Join our community and connect with Muslims globally.
          </p>
          <button className="mt-20 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* About Us Section - Below the Video Background */}
      <div className="p-8 bg-white text-black">
        <h2 className=" text-center text-4xl font-bold mb-4">About Us</h2>
        <p className=" text-center text-xl mb-6">
          At Imaanify, our mission is to connect Muslims around the world. We believe in fostering community, sharing knowledge, and supporting each other in our faith journeys. Our platform is designed to be a welcoming space for all, offering tools and resources that empower individuals to engage with their community.
        </p>
        <h3 className="text-2xl font-semibold my-4 text-center">Our Values</h3>
        <ul className="list-disc list-inside mb-4 text-center mx-auto max-w-xl">
          <li className="mb-2">Community: Building a strong support network for Muslims everywhere.</li>
          <li className="mb-2">Inclusivity: Welcoming individuals from all backgrounds and experiences.</li>
          <li className="mb-2">Empowerment: Providing resources and tools for personal growth and connection.</li>
        </ul>

        <div className=" text-center p-8 bg-white text-black">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg mb-6">
          At Imaanify, we offer a range of services designed to connect and support our community.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Community Networking: Connect with fellow Muslims.</li>
          <li className="mb-2">Events and Workshops: Participate in community events.</li>
          <li className="mb-2">Resource Sharing: Access educational materials and resources.</li>
        </ul>
      </div>
      </div>

      {/* Additional Sections */}
      

      <div className=" items-center text-center p-8 bg-gray-100 text-black">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <form className="bg-black p-4 rounded shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-white" htmlFor="name">Name:</label>
            <input className="border p-2 w-full" type="text" id="name" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white" htmlFor="email">Email:</label>
            <input className="border p-2 w-full" type="email" id="email" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white" htmlFor="message">Message:</label>
            <textarea className="border p-2 w-full" id="message" rows="4" required></textarea>
          </div>
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
