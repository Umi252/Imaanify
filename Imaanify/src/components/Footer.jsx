import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-900 p-4 text-white text-center">
      <p>&copy; 2024 Imaanify. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://www.instagram.com/imaanify1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors" // Instagram brand color
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://m.facebook.com/61565642527637/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-500 transition-colors" // Facebook brand color
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://wa.me/27628093490"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-500 transition-colors" // WhatsApp brand color
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
