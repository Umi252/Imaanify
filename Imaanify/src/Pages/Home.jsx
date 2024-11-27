import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import videoSrc from '../assets/vi.mp4';
import videoSrc2 from '../assets/ContactBg.mp4';
import favivon from '../assets/Imaanify.png';
import ChatBotComponent from "../components/ChatBotComponent";

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  return (
    <div className="relative min-h-screen font-sans scroll-smooth">
      {/* Transparent Header positioned absolutely on top of the video */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-10">
        <div className="tracking-wide">
          <img src={favivon} alt="Logo" className="h-20 w-auto mr-2" />
        </div>
        {/* Navigation links to each section */}
        <nav className="space-x-4">
          <a href="#about" className="hover:underline font-semibold"></a>
          <a href="#services" className="hover:underline font-semibold"></a>
          <a href="#contact" className="hover:underline font-semibold"></a>
        </nav>
      </div>

      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
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
        <div
          ref={heroRef}
          className={`relative z-10 flex flex-col items-center text-white text-center py-24 px-4 ${heroInView ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="font-poppins text-4xl font-bold tracking-wide">
            Welcome to Imaanify
          </h2>
          <p className="font-roboto text-xl font-light">
            Join our community, a global platform for Muslims to connect, learn, and grow in faith.
          </p>
          <button
            onClick={() => document.getElementById("waitingListForm").scrollIntoView({ behavior: "smooth" })}
            className="mt-20 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* About Section with Video Background */}
      <div
        id="about"
        ref={aboutRef}
        className={`relative h-screen items-center text-center text-white p-8 overflow-hidden ${aboutInView ? 'animate-fade-in-up' : ''}`}
      >
        <video
          src={videoSrc2}
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
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 tracking-wide">About Us</h2>
          <p className="text-center text-xl mb-6 font-light leading-relaxed">
            Imaanify is a platform designed to bring Muslims closer to their faith and to each other. Our vision is to create a space where the global Muslim community can thrive—sharing experiences, learning together, and building bonds that transcend borders.
            <br /><br />
            We are passionate about empowering Muslims worldwide by providing tools to engage with Islamic knowledge, explore meaningful discussions, and connect with like-minded individuals. From reverts discovering the beauty of Islam to lifelong believers seeking deeper connections, Imaanify is for everyone.
            <br /><br />
            Discover. Connect. Thrive—with Imaanify.
          </p>
          <h3 className="text-2xl font-semibold my-4 text-center tracking-wide">Our Values</h3>
          <p className="text-center text-xl mb-6 font-light leading-relaxed">
            <strong className="font-bold">What Makes Imaanify Special?</strong>
          </p>
          <ul className="list-decimal list-inside mb-6 text-center text-lg font-light">
            <li className="mb-4">
              <strong className="font-bold">Grow in Faith</strong>
              <p>“Strengthen your Imaan with access to accurate Islamic knowledge and supportive community connections.”</p>
            </li>
            <li className="mb-4">
              <strong className="font-bold">Connect Globally</strong>
              <p>“Engage with Muslims worldwide, share your experiences, and learn from diverse perspectives.”</p>
            </li>
            <li className="mb-4">
              <strong className="font-bold">Experience Innovation</strong>
              <p>“Discover an app tailored to your lifestyle, blending cutting-edge technology with core Islamic values.”</p>
            </li>
          </ul>
          <ul className="list-disc list-inside mb-4 text-center mx-auto max-w-xl font-light text-lg">
            <li className="mb-2">Community: Building a strong support network for Muslims everywhere.</li>
            <li className="mb-2">Inclusivity: Welcoming individuals from all backgrounds and experiences.</li>
            <li className="mb-2">Empowerment: Providing resources and tools for personal growth and connection.</li>
          </ul>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        ref={servicesRef}
        className={`relative h-screen items-center text-center text-white p-8 overflow-hidden ${servicesInView ? 'animate-fade-in-up' : ''}`}
      >
        <video
          src={videoSrc2}
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
        <div className="relative z-10">
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

      {/* Contact Section */}
      <div
        id="contact"
        ref={contactRef}
        className={`relative h-screen items-center text-center text-white p-8 overflow-hidden ${contactInView ? 'animate-fade-in-up' : ''}`}
      >
        <video
          src={videoSrc2}
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
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 tracking-wide">Contact Us</h2>
          <form id="waitingListForm" className="bg-black p-4 rounded shadow-md max-w-md mx-auto">
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
              <textarea className="border p-2 w-full text-black" id="message" required></textarea>
            </div>
            <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-semibold">Submit</button>
          </form>
        </div>
      </div>

      {/* ChatBot Section */}
      <div className="fixed bottom-10 right-10 z-50">
        <ChatBotComponent />
      </div>
    </div>
  );
};

export default Home;