import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';
import { socialLinks } from '../data';

const navLinks = ['Home', 'About', 'Skills', 'Achievements', 'Projects', 'GitHub', 'AIMatch', 'Contact'];

const Navbar = ({ setIsTerminalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  // Reusable component for the list of navigation links
  const NavLinks = ({ isMobile = false }) => (
    <>
      {navLinks.map((link) => (
        <li key={link}>
          <a
            href={`#${link.toLowerCase()}`}
            onClick={() => {
              setActive(link);
              if (isMobile) setIsOpen(false);
            }}
            className={`
              transition-colors duration-300
              ${isMobile 
                ? `block py-3 text-2xl ${active === link ? 'text-neon-blue font-semibold' : 'text-gray-300'}`
                : `relative ${active === link ? 'text-white' : 'text-gray-400 hover:text-white'}`
              }
            `}
          >
            {link}
            {!isMobile && active === link && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-neon-blue"
              />
            )}
          </a>
        </li>
      ))}
    </>
  );

  // Reusable component for the social media icons
  const SocialIcons = ({ size = 'text-xl' }) => (
    <>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 ${size}`}
        >
          {link.icon}
        </a>
      ))}
    </>
  );

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 items-center w-max px-6 py-2 z-50 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
      >
        <ul className="flex items-center gap-6">
          <NavLinks />
        </ul>
        <div className="w-px h-5 bg-gray-500 mx-4"></div>
        <div className="flex items-center gap-4">
          <SocialIcons />
        </div>
      </motion.nav>

      {/* --- MOBILE NAVBAR & MENU --- */}
      <div className="md:hidden fixed top-0 left-0 w-full z-40">
        {/* Top Bar (Transparent with only the hamburger icon) */}
        <div className="flex justify-end items-center p-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white z-50">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              />
              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-dark-bg/95 p-8 flex flex-col overflow-y-auto"
              >
                {/* --- ALL MOBILE FEATURES ARE HERE --- */}
                
                {/* 1. Navigation Links */}
                <ul className="flex flex-col items-start gap-6 mt-16">
                  <NavLinks isMobile={true} />
                  {/* 2. Terminal Button */}
                  <li>
                    <button 
                      onClick={() => {
                        setIsTerminalOpen(true);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-2 py-3 text-2xl text-gray-300"
                    >
                      <FaTerminal /> Terminal
                    </button>
                  </li>
                </ul>
                
                {/* 3. Social Contact Icons */}
                <div className="mt-auto pt-8">
                  <hr className="border-gray-700 mb-6" />
                  <div className="flex items-center justify-center gap-6">
                    <SocialIcons size="text-3xl" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;