import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Header.css';
import Logo from "../../assets/images/logo2.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#story', label: 'Tech' },
    { href: '#videos', label: 'Videos' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <img src={Logo} alt="Logo" className='header__logo-image'/>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#preorder"
          className="btn btn-primary header__cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          Pre-order
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="header__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className="header__mobile-menu"
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="header__mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header__mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#preorder" className="btn btn-primary">
              Pre-order
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;