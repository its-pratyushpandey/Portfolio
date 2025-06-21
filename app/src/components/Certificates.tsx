import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface Certificate {
  title: string;
  image: string;
  year: string;
  link: string;
  type: 'Cloud' | 'API' | 'Programming' | 'Version Control' | 'Other';
  issuer: string;
}

const certificates: Certificate[] = [
  {
    title: 'Accenture Developer Virtual Experience',
    image: '/accenture.png', // Updated to match public folder
    year: '2024',
    link: '/Accenture.pdf',
    type: 'Other',
    issuer: 'Accenture',
  },
  {
    title: 'Aviatrix Certified Engineer (ACE) Multicloud Network Associate',
    image: '/Aviatrix.png', // Updated to match public folder (case-sensitive)
    year: '2024',
    link: '/Aviatrix.pdf',
    type: 'Cloud',
    issuer: 'Aviatrix',
  },
  {
    title: 'Salesforce Developer Virtual Internship',
    image: '/salesforce.png', // Updated to match public folder
    year: '2024',
    link: '/Salesforce.pdf',
    type: 'Cloud',
    issuer: 'Salesforce',
  },
];

const typeOptions = [
  { label: 'All', value: 'All' },
  { label: 'Programming', value: 'Programming' },
  { label: 'API', value: 'API' },
  { label: 'Version Control', value: 'Version Control' },
  { label: 'Cloud', value: 'Cloud' },
  { label: 'Other', value: 'Other' },
];

const getTypeIcon = (type: Certificate['type']) => {
  switch (type) {
    case 'Programming':
      return <span title="Programming" className="text-[#3949ab]">💻</span>;
    case 'API':
      return <span title="API" className="text-[#ff7043]">🔗</span>;
    case 'Version Control':
      return <span title="Version Control" className="text-[#24292f]">🔀</span>;
    case 'Cloud':
      return <span title="Cloud" className="text-[#039be5]">☁️</span>;
    default:
      return <span title="Other" className="text-[#607d8b]">📄</span>;
  }
};

const FloatingDecorations: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <motion.svg
      className="absolute top-10 left-10 w-32 h-32 opacity-30"
      initial={{ y: 0 }}
      animate={{ y: [0, 30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="40" fill="#b2ebf2" />
    </motion.svg>
    <motion.svg
      className="absolute bottom-20 right-20 w-24 h-24 opacity-20"
      initial={{ x: 0 }}
      animate={{ x: [0, -40, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <rect x="20" y="20" width="60" height="60" rx="18" fill="#c5cae9" />
    </motion.svg>
    <motion.svg
      className="absolute top-1/2 left-1/3 w-20 h-20 opacity-25"
      initial={{ y: 0, rotate: 0 }}
      animate={{ y: [-10, 20, -10], rotate: [0, 15, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <polygon points="50,10 90,90 10,90" fill="#ffd6e0" />
    </motion.svg>
  </div>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.8,
      when: 'beforeChildren',
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certificates: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [modalCert, setModalCert] = useState<Certificate | null>(null);
  const years = Array.from(new Set(certificates.map(c => c.year))).sort((a, b) => b.localeCompare(a));
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const filtered = certificates.filter(c => {
    const matchesType = selectedType === 'All' || c.type === selectedType;
    const matchesYear = selectedYear === 'All' || c.year === selectedYear;
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.issuer.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesYear && matchesSearch;
  });
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = !!shouldReduceMotionRaw;
  const microInteraction = shouldReduceMotion
    ? {}
    : { whileHover: { scale: 1.08 }, whileTap: { scale: 0.96 }, whileFocus: { scale: 1.04 } };
  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };
  // Parallax/3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    const img = document.getElementById(`cert-img-${idx}`) as HTMLImageElement | null;
    const glare = document.getElementById(`cert-glare-${idx}`) as HTMLDivElement | null;
    if (img) {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      const rotateY = -x * 22;
      const rotateX = y * 22;
      const shadowX = -x * 50;
      const shadowY = y * 50;
      const brightness = 1.08 + y * 0.04;
      img.style.transform = `perspective(1200px) scale(1.07) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      img.style.boxShadow = `${shadowX}px ${shadowY}px 60px 0px rgba(32,29,102,0.22), 0 12px 48px 0 rgba(32,29,102,0.13)`;
      img.style.filter = `brightness(${brightness})`;
      img.style.transition = 'transform 0.18s cubic-bezier(.25,.8,.25,1), box-shadow 0.18s cubic-bezier(.25,.8,.25,1), filter 0.18s cubic-bezier(.25,.8,.25,1)';
      if (glare) {
        const glareX = (x + 1) * 50;
        const glareY = (y + 1) * 50;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.32), rgba(255,255,255,0.0) 70%)`;
        glare.style.opacity = '1';
      }
    }
  };
  const handleMouseLeave = (idx: number) => {
    const img = document.getElementById(`cert-img-${idx}`) as HTMLImageElement | null;
    const glare = document.getElementById(`cert-glare-${idx}`) as HTMLDivElement | null;
    if (img) {
      img.style.transform = '';
      img.style.boxShadow = '';
      img.style.filter = '';
      img.style.transition = 'transform 0.5s cubic-bezier(.25,.8,.25,1), box-shadow 0.5s cubic-bezier(.25,.8,.25,1), filter 0.5s cubic-bezier(.25,.8,.25,1)';
    }
    if (glare) {
      glare.style.opacity = '0';
    }
  };
  // Progress bar
  const [scrollIdx, setScrollIdx] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const offsets = sectionRefs.current.map(ref => ref?.getBoundingClientRect().top || 0);
      const idx = offsets.findIndex(offset => offset > window.innerHeight * 0.2);
      setScrollIdx(idx === -1 ? filtered.length - 1 : Math.max(0, idx - 1));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [filtered.length]);
  // Swipe handlers for mobile carousel
  // ...existing code for swipeable if you want to add...
  const [gridView, setGridView] = useState(true); // Option to toggle grid/list if needed
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] overflow-x-hidden"
      id="certificates"
    >
      {/* Parallax/Gradient Background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60 animate-gradient-move"
        style={{ backgroundAttachment: 'fixed' }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#201d66] mb-16 text-center pt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certificates
        </motion.h2>
        <div className="flex flex-wrap gap-4 justify-center mb-10 mt-4">
          <select
            className="px-4 py-2 rounded-full border border-[#b0bec5] bg-white text-[#201d66] focus:outline-none focus:ring-2 focus:ring-[#201d66]"
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            aria-label="Filter by type"
          >
            {typeOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 rounded-full border border-[#b0bec5] bg-white text-[#201d66] focus:outline-none focus:ring-2 focus:ring-[#201d66]"
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            aria-label="Filter by year"
          >
            <option value="All">All Years</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <input
            type="text"
            className="px-4 py-2 rounded-full border border-[#b0bec5] bg-white text-[#201d66] focus:outline-none focus:ring-2 focus:ring-[#201d66]"
            placeholder="Search certificates..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search certificates"
            style={{ minWidth: 220 }}
          />
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filtered.map((certificate, idx) => (
            <motion.div
              key={certificate.title}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              tabIndex={0}
              aria-label={certificate.title}
              className="focus:ring-2 focus:ring-[#201d66] focus:outline-none"
              onClick={() => setModalCert(certificate)}
              style={{ cursor: 'pointer' }}
            >
              <Card className="bg-white/90 shadow-xl hover:shadow-2xl transition rounded-2xl border border-[#e3f2fd] h-full flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center gap-2 p-6 pb-2">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-24 h-24 object-contain rounded-xl border border-[#e3f2fd] bg-[#f5f5f5] mb-2"
                  />
                  <CardTitle className="text-lg font-semibold text-[#201d66] text-center">
                    {certificate.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-[#3949ab] mt-1">
                    {getTypeIcon(certificate.type)}
                    <span>{certificate.type}</span>
                    <span className="mx-1">•</span>
                    <span>{certificate.year}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center p-4">
                  <div className="text-center text-[#3949ab] text-sm line-clamp-3 mb-2">
                    {certificate.issuer}
                  </div>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-[#201d66] text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#3949ab] transition"
                    onClick={e => e.stopPropagation()}
                  >
                    Verify
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* Modal for certificate details (unchanged) */}
        <AnimatePresence>
          {modalCert && (
            <motion.div
              className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalCert(null)}
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative flex flex-col items-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={modalCert.image}
                  alt={modalCert.title}
                  className="w-40 h-40 object-contain mb-4 rounded-xl border border-[#e3f2fd] bg-[#f5f5f5]"
                />
                <div className="flex items-center gap-2 mb-2">
                  {getTypeIcon(modalCert.type)}
                  <span className="text-[#3949ab] font-medium">{modalCert.type}</span>
                  <span className="mx-1">•</span>
                  <span className="text-[#201d66]">{modalCert.year}</span>
                </div>
                <div className="text-center text-[#3949ab] text-base font-semibold mb-2">
                  {modalCert.issuer}
                </div>
                <a
                  href={modalCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#201d66] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#3949ab] transition"
                >
                  Verify Credentials
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* View All Certificates Button - Only in Certificates Section */}
        <div className="flex justify-center w-full mt-12">
          <a
            href="https://manishraj.netlify.app/certificatesList"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full text-lg font-semibold border-2 border-[#80deea] text-[#201d66] bg-white shadow-lg hover:bg-[#e3f2fd] hover:text-[#3949ab] transition-all focus:outline-none focus:ring-2 focus:ring-[#201d66]"
            style={{ minWidth: 220 }}
            aria-label="View all certificates"
          >
            View All Certificates
          </a>
        </div>
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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
      </div>
    </section>
  );
};

export default Certificates;
