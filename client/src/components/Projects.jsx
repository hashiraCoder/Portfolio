import React from 'react';
import { motion } from 'framer-motion';
import { projectData } from '../data';

const Projects = () => {
  return (
    <section className="py-20 px-4 md:px-16 lg:px-32">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured <span className="text-neon-blue">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white/5 p-6 rounded-lg border border-white/10 group overflow-hidden relative transition-all duration-300 hover:border-neon-blue hover:shadow-glow-blue"
                >
                    <img src={project.img} alt={project.title} className="rounded-md mb-4 group-hover:scale-105 transition-transform duration-300"/>
                    <h3 className="text-2xl font-bold text-neon-purple mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.desc}</p>
                    <div className="flex gap-2 mb-4">
                        {project.stack.map(tech => <span key={tech} className="bg-neon-blue/20 text-neon-blue text-xs font-bold px-2 py-1 rounded-full">{tech}</span>)}
                    </div>
                    <div className="flex gap-4">
                        <a href={project.live} target="_blank" className="text-white font-semibold hover:text-neon-blue transition-colors">Live Demo</a>
                        <a href={project.github} target="_blank" className="text-white font-semibold hover:text-neon-blue transition-colors">GitHub</a>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
};

export default Projects;