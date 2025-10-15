import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning, I'm";
  if (hour < 18) return "Good Afternoon, I'm";
  return "Good Evening, I'm";
};

// --- ANIMATION LOGIC FOR THE NAME ---
const name = "Shivam";

// This is the container for the letters, which controls the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time between each letter's animation
      delayChildren: 0.5,     // Wait half a second before starting
    },
  },
};

// This is the animation for each individual letter
const letterVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};
// --- END OF ANIMATION LOGIC ---

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-[#000011]">
      <ParticleBackground />

      <div className="relative z-10 px-4">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400"
        >
          {getGreeting()}
        </motion.p>

        {/* --- THIS IS THE UPDATED H1 TAG --- */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-white overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block" // Necessary for transforms to work correctly
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        {/* --- END OF UPDATE --- */}
        
        <div className="text-xl md:text-3xl text-gray-300 h-10">
          <TypeAnimation
            sequence={[
              'Full Stack Web Developer', 2000,
              'MERN Stack Specialist', 2000,
              'Node.js Expert', 2000,
              'Cyber Enthusiast', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a href="#" download className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple transition-transform duration-300 hover:scale-105 hover:shadow-glow-blue">
            Download Resume
          </a>
          <a href="#projects" className="px-6 py-3 rounded-full font-semibold text-white border-2 border-neon-blue transition-all duration-300 hover:bg-neon-blue/20 hover:shadow-glow-blue">
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;