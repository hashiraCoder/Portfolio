import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data';

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="
        fixed left-0 z-20
        
        // Mobile styles (bottom bar)
        bottom-0 w-full p-2 bg-white/5 backdrop-blur-md
        
        // Desktop styles (left sidebar)
        md:top-1/2 md:left-4 md:-translate-y-1/2 md:w-auto md:bg-transparent md:backdrop-blur-none
      "
    >
      <div className="
        flex flex-row justify-around items-center gap-6
        md:flex-col
      ">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue hover:scale-125 transition-all duration-300 text-2xl"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;