import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-purple-500 via-pink-700 to-red-700 to-yellow-100 p-4 text-white text-center">
      <p className="text-sm sm:text-base mb-2">&copy; 2024 Imaanify. All rights reserved.</p>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-2">
        <p className="font-medium text-xl text-center sm:text-left sm:mr-4 mb-2 sm:mb-0 animate-marquee">Stay Connected with Imaanify!</p>
        <div className="flex justify-center sm:justify-start space-x-4 mt-2 sm:mt-0">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/imaanify1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </a>
          {/* Facebook */}
          <a
            href="https://m.facebook.com/61565642527637/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/27751814881"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="4x" />
          </a>
          {/* Email */}
          <a
            href="mailto:imaanify1@gmail.com"
            aria-label="Email"
            className="hover:text-red-500 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </a>
          {/* Phone */}
          <a
            href="tel:+27751814881"
            aria-label="Phone"
            className="hover:text-yellow-500 transition-colors flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faPhone} size="4x" />
            <span className="text-lg font-medium text-white"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

