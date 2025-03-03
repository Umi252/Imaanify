import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import videoSrc from '../assets/vi.mp4';
import videoSrc2 from '../assets/ContactBg.mp4';
import favicon from '../assets/Imaanify.png';
import ChatBotComponent from "../components/ChatBotComponent";
import { faList, faClipboardList } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [whyImaanifyRef, whyImaanifyInView] = useInView({ triggerOnce: true });
  const [whatMakesImaanifyRef, whatMakesImaanifyInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });
  const [faqRef, faqInView] = useInView({ triggerOnce: true });

  return (
    <div className="relative min-h-screen font-sans scroll-smooth">
      {/* Transparent Header positioned absolutely on top of the video */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-10">
        <div className="tracking-wide">
          <img src={favicon} alt="Logo" className="h-20 w-auto mr-2" />
        </div>
        {/* Navigation links to each section */}
        <nav className="space-x-4">
          <a href="#about" className="hover:underline font-semibold"></a>
          <a href="#why-imaanify" className="hover:underline font-semibold"></a>
          <a href="#what-makes-imaanify-special" className="hover:underline font-semibold"></a>
          <a href="#contact" className="hover:underline font-semibold"></a>
          <a href="#faq" className="hover:underline font-semibold"></a>
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
          <h2 className="font-poppins text-4xl font-bold tracking-wide mb-5">
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

      {/* Why Imaanify Section */}
      <div
        id="why-imaanify"
        ref={whyImaanifyRef}
        className={`relative h-screen items-center text-center text-white p-8 overflow-hidden ${whyImaanifyInView ? 'animate-fade-in-up' : ''}`}
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
          <h2 className="text-4xl font-bold mb-20 tracking-wide">Why Imaanify? Your Faith. Your Community. One Platform.</h2>
          <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-9 text-lg font-light">
            <li className="flex items-center mb-4">
              <FontAwesomeIcon icon={faComments} className="mr-4 text-5xl" />
              <span>Faith-Based AI Chatbot: Ask questions about Islam and get reliable, insightful answers.</span>
            </li>
            <li className="flex items-center mb-4">
              <FontAwesomeIcon icon={faComments} className="mr-4 text-5xl" />
              <span>Global Muslim Community: Chat and connect with Muslims from all over the world.</span>
            </li>
            <li className="flex items-center mb-4">
              <FontAwesomeIcon icon={faComments} className="mr-4 text-5xl" />
              <span>  Privacy & Comfort: Dedicated sections for men and women.</span>
            </li>
            <li className="flex items-center mb-4">
              <FontAwesomeIcon icon={faComments} className="mr-4 text-5xl" />
              <span>Diverse Topics: Engage in discussions on business, arts, cooking, sports, and more—all aligned with Islamic values.</span>
            </li>
            <li className="flex items-center mb-4">
              <FontAwesomeIcon icon={faComments} className="mr-4 text-5xl" />
              <span>Accessible to All: Designed for lifelong Muslims and new reverts alike.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* What Makes Imaanify Special Section */}
      <div
        id="what-makes-imaanify-special"
        ref={whatMakesImaanifyRef}
        className={`relative h-screen items-center text-center text-white p-8 overflow-hidden ${whatMakesImaanifyInView ? 'animate-fade-in-up' : ''}`}
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
          <h2 className="text-4xl font-bold mb-20 tracking-wide">What Makes Imaanify Special?</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-10"> Grow in Faith</h3>
              <p className="text-lg font-light">Strengthen your Imaan with access to accurate Islamic knowledge and supportive community connections.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-10"> Connect Globally</h3>
              <p className="text-lg font-light">Engage with Muslims worldwide, share your experiences, and learn from diverse perspectives.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-10"> Experience Innovation</h3>
              <p className="text-lg font-light">Discover an app tailored to your lifestyle, blending cutting-edge technology with core Islamic values.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div
        id="about-us"
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
          <h2 className="text-4xl font-bold mb-20 tracking-wide">About Us</h2>
          <p className="text-lg mb-6 font-light leading-relaxed">
            Imaanify is a platform designed to bring Muslims closer to their faith and to each other. Our vision is to create a space where the global Muslim community can thrive—sharing experiences, learning together, and building bonds that transcend borders.
          </p>
          <p className="text-lg mb-6 font-light leading-relaxed">
            We are passionate about empowering Muslims worldwide by providing tools to engage with Islamic knowledge, explore meaningful discussions, and connect with like-minded individuals. From reverts discovering the faith to lifelong Muslims seeking community, Imaanify offers something for everyone.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
      <div
        id="faq"
        ref={faqRef}
        className={`relative h-screen items-center text-center text-white p-8 overflow-hidden ${faqInView ? 'animate-fade-in-up' : ''}`}
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
          <h2 className="text-4xl font-bold mb-20 tracking-wide">Got Questions? We’ve Got Answers!</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-10"> What is Imaanify?</h3>
              <p className="text-lg">Imaanify is a global platform designed to connect Muslims worldwide through faith-based discussions, a private chat community, and innovative AI features.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-100"> Is Imaanify free?</h3>
              <p className="text-lg">Yes, Imaanify offers free basic features with premium upgrades for additional functionality.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-10"> When will Imaanify launch?</h3>
              <p className="text-lg">We’re working hard to deliver the best experience. Sign up now to get early access when we launch.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-10"> Who is Imaanify for?</h3>
              <p className="text-lg">Imaanify is for all Muslims—whether you’re a new revert or a lifelong believer—seeking community, knowledge, and connection.</p>
            </div>
          </div>
        </div>
      </div>

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

    {/* Newsletter Subscription Form */}
    <div className="bg-black p-8 rounded-lg shadow-lg max-w-md mx-auto mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold mb-4">Stay Updated with Our Newsletter</h3>
      <p className="text-lg mb-4 font-light">
        Subscribe to our newsletter for the latest updates, news, and announcements.
      </p>
      <form
        action="https://forms.gle/Eyk21KgPRHcyzY586"
        method="get"
        target="_blank"
        className="flex flex-col space-y-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="border-2 border-gray-300 p-3 w-full text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-200 ease-in-out font-semibold"
        >
          Subscribe
        </button>
      </form>
    </div>

    {/* Additional Links with Icons */}
    <div className="text-lg font-light space-y-4">
      <p className="flex items-center space-x-3">
        <FontAwesomeIcon icon={faList} className="text-7xl text-blue-300" />
        <a
          href="https://forms.gle/Eyk21KgPRHcyzY586"
          target="_blank"
          className="underline text-blue-300 hover:text-blue-500"
        >
          Join Our Waiting List
        </a>
      </p>
      <p className="flex items-center space-x-3">
        <FontAwesomeIcon icon={faClipboardList} className="text-7xl text-blue-300" />
        <a
          href="https://forms.gle/eHYaczwbZ1oJyyG27"
          target="_blank"
          className="underline text-blue-300 hover:text-blue-500"
        >
          Take Our Survey
        </a>
      </p>
    </div>
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