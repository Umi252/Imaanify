// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-300 p-4 text-white text-center">
      <p>&copy; 2024 Imaanify. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-gray-200 transition-colors" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-gray-200 transition-colors" />
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" className="hover:text-gray-200 transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
