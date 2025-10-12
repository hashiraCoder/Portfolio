// import React from 'react';
// import { motion } from 'framer-motion';
// import { TypeAnimation } from 'react-type-animation';

// const getGreeting = () => {
//   const hour = new Date().getHours();
//   if (hour < 12) return "Good Morning, I'm";
//   if (hour < 18) return "Good Afternoon, I'm";
//   return "Good Evening, I'm";
// };

// const Hero = () => {
//   return (
//     <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
//       {/* Animated Gradient Blobs */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="z-10 px-4">
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-lg md:text-xl text-gray-400"
//         >
//           {getGreeting()}
//         </motion.p>
//         <motion.h1
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="text-6xl md:text-8xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple"
//         >
//           Shivam
//         </motion.h1>
//         <div className="text-xl md:text-3xl text-gray-300 h-10">
//           <TypeAnimation
//             sequence={[
//               'Full Stack Web Developer', 2000,
//               'MERN Stack Specialist', 2000,
//               'Node.js Expert', 2000,
//               'Cyber Enthusiast', 2000,
//             ]}
//             wrapper="span"
//             speed={50}
//             repeat={Infinity}
//           />
//         </div>
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           className="mt-8 flex gap-4 justify-center"
//         >
//           <a href="#" download className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple transition-transform duration-300 hover:scale-105 hover:shadow-glow-blue">
//             Download Resume
//           </a>
//           <a href="#projects" className="px-6 py-3 rounded-full font-semibold text-white border-2 border-neon-blue transition-all duration-300 hover:bg-neon-blue/20 hover:shadow-glow-blue">
//             View Projects
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning, I'm";
  if (hour < 18) return "Good Afternoon, I'm";
  return "Good Evening, I'm";
};

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Dark Overlay for better text readability */}
      <div className="absolute inset-0 w-full h-full bg-black/60 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400"
        >
          {getGreeting()}
        </motion.p>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple"
        >
          Shivam
        </motion.h1>
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