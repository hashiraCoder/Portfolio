import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import SocialLinks from './components/SocialLinks';
import Achievements from './components/Achievements';
import WebTerminal from './components/WebTerminal';
import GitHub from './components/GitHub';
import AIMatch from './components/AIMatch';
import { Toaster } from 'react-hot-toast';

function App() {

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Keyboard shortcut listener (Ctrl + `)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open with Ctrl + `
      if (e.ctrlKey && e.key === '`') {
        setIsTerminalOpen(prev => !prev);
      }
      // Close with Escape key
      if (e.key === 'Escape') {
        setIsTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    // This div now correctly controls the global background and text color
    <div className="text-gray-200 min-h-screen overflow-x-hidden relative">
      <Toaster position="top-center" reverseOrder={false} />
      <AnimatedBackground />
      <SocialLinks/>
      <CustomCursor />

 {/* 1. This button is now hidden on mobile (md:block) */}
 <button 
        onClick={() => setIsTerminalOpen(true)}
        className="hidden md:block fixed top-4 right-4 z-50 p-2 text-xl text-gray-400 hover:text-neon-blue transition-colors"
        aria-label="Open Terminal"
      >
        <FaTerminal />
      </button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed inset-0 z-50 w-full h-full p-4 md:p-0"
          >
            <WebTerminal closeTerminal={() => setIsTerminalOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar setIsTerminalOpen={setIsTerminalOpen} />
      <main className={isTerminalOpen ? 'blur-sm' : ''}>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="achievements"><Achievements /></div>
        <div id="projects"><Projects /></div>
        <div id="github"><GitHub /></div>
       {/* <div id="aimatch"><AIMatch /></div>
        <div id="contact"><Contact /></div> */}
      </main>
    </div>
  );
}

export default App;