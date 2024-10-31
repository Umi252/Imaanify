import React from 'react';
import videoSrc from '../assets/vi.mp4';
import videoSrc2 from '../assets/ContactBg.mp4'
import favivon from '../assets/Imaanify.png'

const Home = () => {
  return (
    <div className="relative min-h-screen font-sans"> {/* Consistent font family */}
      {/* Hero Section with Video Background */}

      <div className="flex justify-between items-center p-4 bg-blue-300 text-black text-center">
        {/* Logo Placeholder */}
        <div className=" tracking-wide">
          <img src={favivon} alt="Logo" className="h-20 w-auto mr-2" />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <a href="#about" className="hover:underline font-semibold">About Us</a>
          <a href="#services" className="hover:underline font-semibold">Our Services</a>
          <a href="#contact" className="hover:underline font-semibold">Contact Us</a>
        </nav>
      </div>
      
      <div className="relative h-screen overflow-hidden"> {/* Full viewport height section */}
        
        {/* Video Background */}
        <video
          src={videoSrc}
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
          <h2 className="text-4xl font-bold mb-4 mt-20 tracking-wider">Welcome to Imaanify</h2>
          <p className="text-xl mb-6 font-light">
            Join our community and connect with Muslims globally.
          </p>
          <button className="mt-20 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-semibold">
            Get Started
          </button>
        </div>
      </div>

      {/* About Us Section - Below the Video Background */}
      <div id='about' className="bg-custom-background p-8 text-white">
        <h2 className="text-center text-4xl font-bold mb-4 tracking-wide">About Us</h2>
        <p className="text-center text-xl mb-6 font-light leading-relaxed">
          At Imaanify, our mission is to connect Muslims around the world. We believe in fostering community, sharing knowledge, and supporting each other in our faith journeys. Our platform is designed to be a welcoming space for all, offering tools and resources that empower individuals to engage with their community.
        </p>
        <h3 className="text-2xl font-semibold my-4 text-center tracking-wide">Our Values</h3>
        <ul className="list-disc list-inside mb-4 text-center mx-auto max-w-xl font-light text-lg">
          <li className="mb-2">Community: Building a strong support network for Muslims everywhere.</li>
          <li className="mb-2">Inclusivity: Welcoming individuals from all backgrounds and experiences.</li>
          <li className="mb-2">Empowerment: Providing resources and tools for personal growth and connection.</li>
        </ul>

        <div id='services' className="text-center p-8">
          <h2 className="text-4xl font-bold mb-4 tracking-wide">Our Services</h2>
          <p className="text-lg mb-6 font-light leading-relaxed">
            At Imaanify, we offer a range of services designed to connect and support our community.
          </p>
          <ul className="list-disc list-inside mb-4 font-light text-lg">
            <li className="mb-2">Community Networking: Connect with fellow Muslims.</li>
            <li className="mb-2">Events and Workshops: Participate in community events.</li>
            <li className="mb-2">Resource Sharing: Access educational materials and resources.</li>
          </ul>
        </div>
      </div>

      {/* Contact Us Section with Video Background */}
      <div id="contact" className="relative h-screen items-center text-center text-white p-8 overflow-hidden">
        {/* Video Background */}
        <video
          src={videoSrc2} // Contact Us background video
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

        {/* Contact Us Content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 tracking-wide">Contact Us</h2>
          <p className="text-lg mb-4 font-light leading-relaxed">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <form className="bg-black p-4 rounded shadow-md max-w-md mx-auto">
            <div className="mb-4">
              <label className="block mb-2 text-white font-semibold" htmlFor="name">Name:</label>
              <input className="border p-2 w-full text-black" type="text" id="name" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white font-semibold" htmlFor="email">Email:</label>
              <input className="border p-2 w-full text-black" type="email" id="email" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white font-semibold" htmlFor="message">Message:</label>
              <textarea className="border p-2 w-full text-black" id="message" rows="4" required></textarea>
            </div>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
