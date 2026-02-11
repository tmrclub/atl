import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const routes = [
  {
    name: 'krog st',
    distance: '2.76 miles',
    elevation: '115 ft',
    difficulty: 'easy',
    location: 'rec_center @ gsu'
  },
  {
    name: 'hurt→ centennial',
    distance: '2.13 miles',
    elevation: '183 ft',
    difficulty: 'easy',
    location: 'hurt_park @ gsu'
  },
  {
    name: 'mercedes benz',
    distance: '2.98 miles',
    elevation: '298 ft',
    difficulty: 'medium',
    location: 'rec_center @ gsu'
  },
  {
    name: 'piedmont park',
    distance: '2.45 miles',
    elevation: '156 ft',
    difficulty: 'easy',
    location: 'park_entrance'
  }
];

export default function WeeklyRuns() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-medium mb-2">weekly runs</h2>
            <p className="text-gray-400 text-sm mb-6">every thursday @ 4:30 - 5:30</p>
            
            <div className="space-y-4 text-sm">
              <p className="text-white font-medium">twomilerunclub</p>
              <p className="text-gray-400">accessible. consistent. inclusive.</p>
              
              <div className="flex items-center gap-4 text-gray-400">
                <span className="text-white">every Thurs</span>
                <span>-</span>
                <span>all lvls</span>
                <span>-</span>
                <span>run/walk/talk</span>
              </div>
              
              <p className="text-white italic mt-6">consistency {'>'} perfection</p>
              
              <p className="text-gray-500 text-xs mt-8">*details on discord & instagram.</p>
            </div>
          </motion.div>

          {/* Route Cards */}
          <div className="lg:col-span-3 relative">
            {/* Scroll Buttons */}
            <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
              <button 
                onClick={() => scroll('left')}
                className="p-2 bg-black/80 border border-gray-800 hover:border-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <button 
                onClick={() => scroll('right')}
                className="p-2 bg-black/80 border border-gray-800 hover:border-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Container */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {routes.map((route, index) => (
                <motion.div
                  key={route.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="min-w-[280px] snap-start"
                >
                  <div className="border border-gray-800 p-6 hover:border-gray-600 transition-colors h-full">
                    <h3 className="text-xl font-medium mb-6">{route.name}</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">distance:</span>
                        <span className="text-white">{route.distance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">elevation:</span>
                        <span className="text-white">{route.elevation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">difficulty:</span>
                        <span className="text-white">{route.difficulty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">location:</span>
                        <span className="text-white underline">{route.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}