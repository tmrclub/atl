import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ onAboutClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6988b4f4f9ab1b86d2de8ee6/8e8340e94_just_tmr_club_logo_v2.png"
            alt="TMR Club"
            className="h-6 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={onAboutClick}
            className="text-sm tracking-widest text-gray-300 hover:text-white transition-colors uppercase"
          >
            About Us
          </button>
          <a
            href="https://lu.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase"
          >
            Register
          </a>
        </div>
      </div>
    </motion.nav>
  );
}