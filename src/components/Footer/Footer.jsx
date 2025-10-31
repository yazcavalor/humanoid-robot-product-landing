
import "./Footer.css";
import React, { useState } from 'react';
import { Linkedin, Youtube, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Logo from "../../assets/images/logofoot.svg";


  // the Footer component code
  const Footer = () => {
    const [isRobotVisible, setIsRobotVisible] = useState(false);
  
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section company-info">
              <div className="footer-logo">
                 <img src={Logo} alt="Logo" className='footer__logo-image'/>
              </div>
              <p>Creating the future of personal robotics, one companion at a time.</p>
              <div className="social-links">
                <a href="#" className="social-link"><Linkedin size={20} /></a>
                <a href="#" className="social-link"><Youtube size={20} /></a>
                <a href="#" className="social-link"><Twitter size={20} /></a>
                <a href="#" className="social-link"><Instagram size={20} /></a>
              </div>
            </div>
  
            <div className="footer-section quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
  
            <div className="footer-section contact-info">
              <h4>Contact</h4>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-ROBOT</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@robotcompanion.com</span>
              </div>
            </div>
          </div>
  
          <div className="footer-bottom">
            <div className="copyright">
              © 2025 RoboCompanion. All rights reserved.
            </div>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
  
          {/* Peek Robot Animation */}
          <div className="peek-robot visible">
            <div className="peek-robot-head">
              <div className="peek-robot-eyes">
                <div className="eye left"></div>
                <div className="eye right"></div>
              </div>
              <div className="peek-robot-mouth"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;