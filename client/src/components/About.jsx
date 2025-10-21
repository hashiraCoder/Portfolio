import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSyncAlt } from 'react-icons/fa';

const About = () => {
  const [showProfessional, setShowProfessional] = useState(true);

  // New variants for a smooth 3D flip animation
  const imageVariants = {
    enter: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      rotateY: -90,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  return (
    <section className="py-20 px-4 md:px-16 lg:px-32">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About <span className="text-neon-blue">Me</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-64 h-64 mx-auto group"
              // Adding perspective creates the 3D space for the flip
              style={{ perspective: '1000px' }}
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-xl"></div>
                
                {/* Using mode="wait" ensures one animation finishes before the next begins */}
                <AnimatePresence mode="wait">
                  <motion.img
                    // The key now dynamically changes based on the state
                    key={showProfessional ? "professional" : "casual"}
                    src={showProfessional ? "/images/shivam-professional.png" : "/images/shivam.jpg"}
                    alt={showProfessional ? "Shivam - Professional" : "Shivam - Casual"}
                    className="relative w-full h-full object-cover rounded-full border-4 border-dark-bg"
                    initial={{ rotateY: 90, opacity: 0 }} // Start rotated 90 degrees (edge-on)
                    animate="enter"
                    exit="exit"
                    variants={imageVariants}
                  />
                </AnimatePresence>

                {/* Toggle Button */}
                <button
                  onClick={() => setShowProfessional(!showProfessional)}
                  className="absolute bottom-2 right-2 z-10 p-2 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
                  aria-label="Toggle Image"
                >
                  <FaSyncAlt />
                </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 text-center md:text-left"
            >
                <p>
                    I am a passionate <span className="text-neon-purple font-bold">MERN stack developer</span> and <span className="text-neon-blue font-bold">cybersecurity enthusiast</span>. With a knack for building robust and secure web applications, I transform complex problems into elegant, user-friendly solutions. My goal is to innovate and create technology that makes a difference.
                </p>
            </motion.div>
        </div>
    </section>
  );
};

export default About;