import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] z-50">
      <motion.div
        className="w-full h-full flex items-center justify-center p-4 sm:p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/design.gif"
          alt="Loading animation"
          className="w-full h-auto max-h-[40vh] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Preloader;