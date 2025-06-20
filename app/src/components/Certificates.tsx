import React from 'react';
import { motion } from 'framer-motion';

interface Certificate {
  title: string;
  image: string;
  year: string;
  link: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

const certificates: Certificate[] = [
  {
    title: 'Oracle Certified Professional : Java SE 11 Developer',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/oracle-certified-professional--java-se-11-developer.png',
    year: '2024',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/postman-api-fundamentals-student-expert.png',
    year: '2024',
    link: 'https://badgr.com/public/assertions/A3hUtfzgReGKmgt12TX-ew',
  },
  {
    title: 'GitHub Foundations',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/github-foundations.png',
    year: '2024',
    link: 'https://www.credly.com/badges/a8d9b534-63c4-48d2-a8f7-5c5c280b83d5/public_url',
  },
];

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img src={certificate.image} alt={certificate.title} className="w-full h-48 object-contain bg-gray-100" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#201d66] mb-2">{certificate.title}</h3>
      <p className="text-[#3949ab] mb-4">{certificate.year}</p>
      <a 
        href={certificate.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-[#201d66] text-white px-4 py-2 rounded-full text-sm hover:bg-[#3949ab]"
      >
        Verify Credentials
      </a>
    </div>
  </motion.div>
);

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-[#201d66] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://manishraj.netlify.app/certificatesList" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#201d66] text-white px-6 py-3 rounded-full text-lg hover:bg-[#3949ab]"
          >
            View All Certificates
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
