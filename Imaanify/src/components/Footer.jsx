import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-900 p-4 text-white text-center">
      <p>&copy; 2024 Imaanify. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/imaanify1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        {/* Facebook */}
        <a
          href="https://m.facebook.com/61565642527637/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-500 transition-colors"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/27751814881"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-500 transition-colors"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        {/* Phone */}
        <a
          href="tel:+27751814881"
          aria-label="Phone"
          className="hover:text-yellow-500 transition-colors"
        >
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </a>
        {/* Email */}
        <a
          href="mailto:imaanify1@gmail.com"
          aria-label="Email"
          className="hover:text-red-500 transition-colors"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;