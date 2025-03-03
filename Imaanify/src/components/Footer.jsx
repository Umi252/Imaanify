import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Ensure this is in the same directory or adjust the path

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-blue-800 via-purple-800 via-pink-800 to-red-150 to-yellow-800 p-4 text-white text-center relative">
      {/* Rising stars background */}
      <div className="stars"></div>

      <p className="text-sm sm:text-base mb-2 relative z-10">
        &copy; 2025 Imaanify. All rights reserved.
      </p>

      {/* Floating crescent moon */}
      <div className="relative mx-auto mt-2 animate-float">
        <FontAwesomeIcon icon={faMoon} className="text-yellow-600" size="4x" />
      </div>

      {/* Glowing tagline */}
      <p className="text-xl font-medium mb-7 animate-glow relative z-10">
        Stay Connected with Imaanify!
      </p>

      {/* Social icons with subtle pulsing */}
      <div className="flex justify-center space-x-4 mt-4 relative z-10">
        <a
          href="https://www.instagram.com/imaanify1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors animate-pulse-slow"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a
          href="https://m.facebook.com/61565642527637/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-500 transition-colors animate-pulse-slow"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a
          href="https://wa.me/27751814881"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-500 transition-colors animate-pulse-slow"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="3x" />
        </a>
        <a
          href="mailto:imaanify1@gmail.com"
          aria-label="Email"
          className="hover:text-red-500 transition-colors animate-pulse-slow"
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
        <a
          href="tel:+27751814881"
          aria-label="Phone"
          className="hover:text-yellow-500 transition-colors animate-pulse-slow"
        >
          <FontAwesomeIcon icon={faPhone} size="3x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;