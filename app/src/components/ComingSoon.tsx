import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] relative overflow-hidden px-4">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60 animate-gradient-move" style={{ backgroundAttachment: 'fixed' }} />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto py-24 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <img
            src="/profile.jpg"
            alt="Coming Soon"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#201d66] shadow-lg object-cover mb-6 animate-bounce"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#201d66] text-center drop-shadow-md mb-4">Coming Soon</h1>
          <p className="text-lg md:text-2xl text-[#3949ab] text-center font-medium max-w-xl mb-6">
            The full certificates list will be available here soon.<br />Stay tuned for updates!
          </p>
          <a
            href="/"
            className="inline-block mt-4 bg-[#201d66] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3949ab] transition shadow-lg"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ComingSoon;
