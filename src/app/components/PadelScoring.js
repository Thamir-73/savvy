import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const PadelScoring = () => {
  const scorePoints = ['0', '15', '30', '40', 'AD'];
  const controls = useAnimation();
  const fieldRef = useRef(null);
  const isInView = useInView(fieldRef, { once: true, amount: 0.8 });
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const animateBall = async () => {
      if (isInView && !animationStarted) {
        setAnimationStarted(true);
        await controls.start({
          x: [200, 0],
          y: [-50, 0, -30, 0, -15, 0],
          transition: { 
            duration: 2,
            times: [0, 0.4, 0.5, 0.7, 0.8, 1],
            ease: "easeOut"
          }
        });
      }
    };

    animateBall();
  }, [controls, isInView, animationStarted]);

  return (
    <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-sm">
      <div ref={fieldRef} className="relative w-full aspect-[2/1] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden shadow-inner">
        {/* Court elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-0.5 h-full bg-white opacity-50"></div>
        </div>
        <div className="absolute inset-x-0 top-1/4 h-0.5 bg-white opacity-50"></div>
        <div className="absolute inset-x-0 bottom-1/4 h-0.5 bg-white opacity-50"></div>
        
        {/* Scores */}
        <ScoreDisplay points={scorePoints} player={1} position="top-2 left-2" />
        <ScoreDisplay points={scorePoints} player={2} position="bottom-2 right-2" />

        {/* Tennis Ball */}
        <motion.div
          animate={controls}
          initial={{ x: 200, y: -50 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image src="/tennis-ball.png" alt="Tennis Ball" width={30} height={30} />
        </motion.div>
      </div>
    </div>
  );
};

const ScoreDisplay = ({ points, player, position }) => {
  return (
    <div className={`absolute ${position} flex ${player === 1 ? 'flex-row' : 'flex-row-reverse'} space-x-0.5 md:space-x-1`}>
      {points.map((point, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 bg-white bg-opacity-80 rounded-full text-blue-800 text-xs md:text-sm font-semibold shadow-md transition-transform hover:scale-110"
        >
          {point}
        </div>
      ))}
    </div>
  );
};

export default PadelScoring;