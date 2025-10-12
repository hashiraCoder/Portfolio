// /client/src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
              className="relative w-64 h-64 mx-auto"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-xl"></div>
                <img src="https://via.placeholder.com/256" alt="Shivam" className="relative w-full h-full object-cover rounded-full border-4 border-dark-bg"/>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 text-center md:text-left"
            >
                <p>
                    I am a passionate <span className="text-neon-purple font-bold">MERN stack developer</span> and certified <span className="text-neon-blue font-bold">cybersecurity expert</span>. With a knack for building robust and secure web applications, I transform complex problems into elegant, user-friendly solutions. My goal is to innovate and create technology that makes a difference.
                </p>
            </motion.div>
        </div>
    </section>
  );
};

export default About;