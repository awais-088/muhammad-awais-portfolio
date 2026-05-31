'use client';

import { motion } from 'framer-motion';

export default function FloatingBlobs() {

  return (
    <>

      {/* Blue */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
       className="fixed z-0 top-20 left-10 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"/>

      {/* Purple */}

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
       className="fixed z-0 top-[40%] right-0 w-[350px] h-[350px] bg-purple-500/20 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Cyan */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
       className="fixed z-0 bottom-0 left-[30%] w-[280px] h-[280px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"
      />

    </>
  );
}