import React from 'react';
import { motion } from 'framer-motion';

const DentalAnimation = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square p-4 md:p-6 rounded-xl shadow-lg">
      <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-gray-100 dark:from-blue-900 dark:to-green-900">
        {/* Tooth image */}
        <img
          src="/qualitygoo.png"
          alt="Shiny tooth"
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
        />
        
        {/* Animated sparkles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4"
            style={{
              top: `${15 + i * 15}%`,
              left: `${15 + i * 15}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 24 24">
              <path
                d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                fill="white"
                stroke="#00A651"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DentalAnimation;