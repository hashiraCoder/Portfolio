
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';


const skills = [
  { icon: <FaReact size={60} />, name: 'React' },
  { icon: <FaNodeJs size={60} />, name: 'Node.js' },
  { icon: <SiMongodb size={60} />, name: 'MongoDB' },
  { icon: <SiExpress size={60} />, name: 'Express' },
  { icon: <SiJavascript size={60} />, name: 'JavaScript' },
  { icon: <SiTailwindcss size={60} />, name: 'Tailwind CSS' },
  { icon: <FaHtml5 size={60} />, name: 'HTML5' },
  { icon: <FaCss3Alt size={60} />, name: 'CSS3' },
  { icon: <FaGitAlt size={60} />, name: 'Git' },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
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
            My Tech <span className="text-neon-purple">Stack</span>
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
            {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm group hover:border-neon-blue transition-all duration-300"
                >
                    <div className="text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <p className="mt-4 font-semibold">{skill.name}</p>
                </motion.div>
            ))}
        </motion.div>
    </section>
  );
};

export default Skills;