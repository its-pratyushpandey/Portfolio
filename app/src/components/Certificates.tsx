import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';

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
    title: 'Oracle Certified Professional : Java SE 11 Developer',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/oracle-certified-professional--java-se-11-developer.png',
    year: '2024',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge',
    type: 'Programming',
    issuer: 'Oracle',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/postman-api-fundamentals-student-expert.png',
    year: '2024',
    link: 'https://badgr.com/public/assertions/A3hUtfzgReGKmgt12TX-ew',
    type: 'API',
    issuer: 'Postman',
  },
  {
    title: 'GitHub Foundations',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/github-foundations.png',
    year: '2024',
    link: 'https://www.credly.com/badges/a8d9b534-63c4-48d2-a8f7-5c5c280b83d5/public_url',
    type: 'Version Control',
    issuer: 'GitHub',
  },
  // Add more certificates as needed
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
    <section className="relative py-20 bg-[#f5f5f5]">
      <FloatingDecorations />
      <div className="relative z-10 container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-10 mt-16">
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
        {/* Card Grid for Certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-[#b0bec5] text-lg py-12">No certificates found.</div>
          )}
          {filtered.map((certificate, idx) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Card className="h-full flex flex-col shadow-xl border border-[#e3f2fd] bg-white/90 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
                onClick={() => setModalCert(certificate)}
                tabIndex={0}
                aria-label={`View details for ${certificate.title}`}
                onMouseMove={e => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                {/* Glare effect for 3D tilt */}
                <div id={`cert-glare-${idx}`} className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-0" style={{ borderRadius: 'inherit' }} />
                <CardHeader className="flex flex-col items-center p-6 pb-2">
                  <img
                    id={`cert-img-${idx}`}
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-28 h-28 object-contain rounded-xl border border-[#e3f2fd] bg-[#f5f5f5] mb-4 shadow transition-transform duration-300 group-hover:scale-105"
                  />
                  <CardTitle className="text-lg font-bold text-[#201d66] text-center mb-1 flex items-center gap-2">
                    {getTypeIcon(certificate.type)}
                    {certificate.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 justify-center mb-2">
                    <span className="inline-flex items-center gap-1 bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-xs font-medium shadow">
                      {getTypeIcon(certificate.type)}{certificate.type}
                    </span>
                    <span className="bg-[#201d66] text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow flex items-center gap-1">
                      <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      {certificate.year}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <span className="text-[#3949ab] text-sm font-medium mb-2 flex items-center gap-1">
                    <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 01-8 0"/><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2"/></svg>
                    {certificate.issuer}
                  </span>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2 mt-auto">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#201d66] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#3949ab] transition shadow focus:outline-none focus:ring-2 focus:ring-[#201d66]"
                    onClick={e => e.stopPropagation()}
                    aria-label={`Verify credentials for ${certificate.title}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    Verify Credentials
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
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
                <button
                  className="absolute top-4 right-4 text-[#201d66] bg-[#e3f2fd] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#b0bec5] focus:outline-none focus:ring-2 focus:ring-[#201d66]"
                  onClick={() => setModalCert(null)}
                  aria-label="Close details"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="#201d66" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
                <img
                  src={modalCert.image}
                  alt={modalCert.title}
                  className="w-40 h-40 object-contain mb-4 rounded-xl border border-[#e3f2fd] bg-[#f5f5f5]"
                />
                <h3 className="text-2xl font-bold text-[#201d66] mb-2 text-center">{modalCert.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#e3f2fd] text-2xl border border-[#b0bec5]">{getTypeIcon(modalCert.type)}</span>
                  <span className="bg-[#201d66] text-white text-xs px-3 py-1 rounded-full font-semibold shadow">{modalCert.year}</span>
                  <span className="text-[#3949ab] text-sm font-medium ml-2">{modalCert.issuer}</span>
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
        `}</style>
      </div>
    </section>
  );
};

export default Certificates;
