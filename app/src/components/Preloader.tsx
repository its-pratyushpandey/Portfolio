import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] z-50">
      <img
        src="/design.gif"
        alt="Loading animation"
        className="w-64 h-64 object-contain" // Further increased size
      />
    </div>
  );
};

export default Preloader;