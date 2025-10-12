import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward } from 'react-icons/fa'; // Example Icon

// --- IMPORTANT: Customize this data with your achievements ---
const achievementsData = [
  {
    title: 'Certified Cybersecurity Expert',
    issuer: 'CompTIA',
    date: 'Oct 2025',
    icon: <FaAward />,
    image: '/images/certificates/cybersecurity-cert.png' // Path to your image in the /public folder
  },
  {
    title: 'Smart India Hackathon 2025 Winner',
    issuer: 'SIH',
    date: 'Sep 2025',
    icon: <FaAward />,
    image: '/images/certificates/sih-winner.png'
  },
  {
    title: 'MERN Stack Development Bootcamp',
    issuer: 'Online University',
    date: 'June 2025',
    icon: <FaAward />,
    image: '/images/certificates/mern-bootcamp.png'
  },
];

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-20 px-4 md:px-16 lg:px-32">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Achievements & <span className="text-neon-purple">Certificates</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setSelectedCert(item.image)}
            className="bg-white/5 p-6 rounded-lg border border-white/10 cursor-pointer transition-all duration-300 hover:border-neon-purple hover:shadow-glow-purple"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl text-neon-purple">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400">{item.issuer} - {item.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying the certificate image */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              src={selectedCert}
              alt="Certificate"
              className="max-w-full max-h-full rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;