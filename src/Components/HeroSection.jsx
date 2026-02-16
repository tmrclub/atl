import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const nextRun = {
    name: 'Krog Street Route',
    location: 'Green Space, Atlanta, GA',
    date: 'Feb 12, 2026',
    time: '4:30PM - 5:30PM'
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-12">
      {/* Background Content */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fallback Background Image */}
      <img
        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6988b5abd659a532750c59c5/4dcb9c1ad_IMG_8957.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />                                        
      
      {/* Background YouTube Video */}
      <iframe
          src="https://www.youtube.com/embed/J0WjBu22bbw?autoplay=1&mute=1&loop=1&playlist=J0WjBu22bbw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="TMR Club Background"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] min-w-full min-h-full object-cover pointer-events-none"
          style={{ border: 'none' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 1, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light italic text-white tracking-tight">
            TwoMileRunClub
          </h1>
          <p className="text-gray-400 text-sm tracking-widest mt-2 font-mono">
            2026's Best Upcoming Run Club
          </p>
        </motion.div>

        {/* Next Run Info Bar */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Next Run:</p>
                <p className="text-white text-sm font-medium">{nextRun.name}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Location:</p>
                <p className="text-white text-sm font-medium">{nextRun.location}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Date</p>
                <p className="text-white text-sm font-medium">{nextRun.date}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Time</p>
                <p className="text-white text-sm font-medium">{nextRun.time}</p>
              </div>
            </div>
            
            <a
              href="https://lu.ma/twomilerunclub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black text-sm tracking-widest hover:bg-gray-200 transition-all duration-300 text-center uppercase font-medium"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
