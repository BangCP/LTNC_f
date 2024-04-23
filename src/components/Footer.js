import React, { useState } from 'react';
import './Footer.css';
import ContactInfomation from './ContactInfomation';


const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = (event) => {
    event.preventDefault(); // Prevent the default action
    setShowContact(prevShowContact => !prevShowContact); // Toggle the state
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Vehicle and Driver Management System</h3>
        <p>Providing efficient management solutions for your vehicles and drivers.</p>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="/">Log out</a></li>
          <li><a href="/contact" onClick={handleContactClick}>Contact Us</a></li>
        </ul>
      </div>
      {showContact && (
        <div className={`contact-info ${showContact ? 'show' : ''}`}>
            <ContactInfomation /> {/* ContactInfo component */}
        </div>
        )}
      <div className="footer-social">
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p className='CopyRight'>© 2027 Vehicle and Driver Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;