'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function AnimatedTitle() {
  return (
    <motion.div 
      className="relative h-16 sm:h-12 flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Gradient background for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-pink-500/10 blur-xl" />
      
      {/* Animated cursor */}
      <motion.div
        className="absolute right-0 w-0.5 h-8 bg-blue-500"
        animate={{
          opacity: [1, 0],
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />

      <TypeAnimation
        sequence={[
          'Full Stack Developer',
          2000,
          'UI/UX Designer',
          2000,
          'AI Integration Expert',
          2000,
          'Creative Problem Solver',
          2000,
        ]}
        wrapper="span"
        speed={40}
        className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text relative z-10"
        repeat={Infinity}
        cursor={false}
      />
    </motion.div>
  );
} 