import React from 'react';

const CertificatesList: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] px-4 py-20">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-[#201d66] mb-8 drop-shadow-lg">All Certificates</h1>
        <div className="w-24 h-2 rounded-full bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] animate-pulse mb-8"></div>
        <div className="flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-2xl p-10 md:p-16 border border-[#201d66]/15">
          <span className="text-4xl md:text-6xl text-[#3949ab] mb-4 animate-bounce">🚧</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#201d66] mb-2">Coming Soon</h2>
          <p className="text-lg md:text-2xl text-[#3949ab] mb-4 max-w-xl font-medium">
            The full list of certificates will be available here soon. Stay tuned for updates!
          </p>
          <a href="/" className="inline-block mt-6 bg-[#201d66] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3949ab] transition shadow-lg">Back to Home</a>
        </div>
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

export default CertificatesList;
