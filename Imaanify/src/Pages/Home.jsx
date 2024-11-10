import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ChatBot from 'react-simple-chatbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons'; // Import the chat icon
import videoSrc from '../assets/vi.mp4';
import videoSrc2 from '../assets/ContactBg.mp4';
import favivon from '../assets/Imaanify.png';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  const [isChatBotOpen, setIsChatBotOpen] = useState(false); // Chatbot state
  const [userResponse, setUserResponse] = useState(""); // Store user input for dynamic responses

  const steps = [
    {
      id: '1',
      message: 'Welcome to Imaanify! How can I help you today?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'about', label: 'Tell me about Imaanify', trigger: 'aboutResponse' },
        { value: 'services', label: 'What services do you offer?', trigger: 'servicesResponse' },
        { value: 'contact', label: 'How can I contact you?', trigger: 'contactResponse' },
        { value: 'close', label: 'Close Chatbot', trigger: 'closeChat' },
      ],
    },
    {
      id: 'aboutResponse',
      message: 'Imaanify is a platform connecting Muslims globally to share and learn together.',
      end: true,
    },
    {
      id: 'servicesResponse',
      message: 'We offer community networking, events, and resources to support your faith journey.',
      end: true,
    },
    {
      id: 'contactResponse',
      message: 'You can reach us via the Contact Us section below.',
      end: true,
    },
    {
      id: 'closeChat',
      message: 'Goodbye! Feel free to open the chat anytime.',
      end: true,
    },
    {
      id: 'userInput',
      message: `You said: ${userResponse}. How else can I help you?`,
      trigger: 'options',
    },
  ];

  const handleChatBotEnd = () => {
    setIsChatBotOpen(false); // Close the chatbot when the conversation ends
  };

  const handleUserInput = (input) => {
    setUserResponse(input); // Store user input for dynamic response
    if (input.toLowerCase() === 'close') {
      setIsChatBotOpen(false); // Close the chatbot if 'close' is typed
    }
  };

  return (
    <div className="relative min-h-screen font-sans scroll-smooth">
      {/* Transparent Header positioned absolutely on top of the video */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-10">
        <div className="tracking-wide">
          <img src={favivon} alt="Logo" className="h-20 w-auto mr-2" />
        </div>
        {/* Navigation links to each section */}
        <nav className="space-x-4">
          <a href="#about" className="hover:underline font-semibold">About Us</a>
          <a href="#services" className="hover:underline font-semibold">Our Services</a>
          <a href="#contact" className="hover:underline font-semibold">Contact Us</a>
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
          <h2 className="text-4xl font-bold mb-4 mt-20 tracking-wider">Welcome to Imaanify</h2>
          <p className="text-xl mb-6 font-light">Join our community and connect with Muslims globally.</p>
          <button
            onClick={() => document.getElementById("waitingListForm").scrollIntoView({ behavior: "smooth" })}
            className="mt-20 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        ref={aboutRef}
        className={`bg-custom-background p-8 text-white ${aboutInView ? 'animate-fade-in-up' : ''}`}
      >
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
      </div>

      {/* Services Section */}
      <div
        id="services"
        ref={servicesRef}
        className={`bg-custom-background text-center p-8 text-white ${servicesInView ? 'animate-fade-in-up' : ''}`}
      >
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
          <p className="text-lg mb-4 font-light leading-relaxed">Have questions or suggestions? We'd love to hear from you!</p>
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
              <textarea className="border p-2 w-full text-black" id="message" rows="4" required></textarea>
            </div>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Chatbot Component */}
      <div className="fixed bottom-5 right-5 z-50">
        {isChatBotOpen ? (
          <ChatBot
            steps={steps}
            handleEnd={handleChatBotEnd}
            userInputHandler={handleUserInput} // Handle user input dynamically
          />
        ) : (
          <FontAwesomeIcon
            icon={faComments}
            onClick={() => setIsChatBotOpen(true)}
            className="text-white text-3xl bg-purple-600 p-3 rounded-full cursor-pointer hover:bg-blue-600 transition"
          />
        )}
      </div>
    </div>
  );
};

export default Home;