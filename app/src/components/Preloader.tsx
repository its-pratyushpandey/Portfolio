import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] z-50">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#201d66] border-opacity-50"></div>
        <p className="text-lg font-semibold text-[#3949ab]">Loading...</p>
        <motion.div
          className="text-sm text-gray-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Please wait while we prepare everything for you.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Preloader;