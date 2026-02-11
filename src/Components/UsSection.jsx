import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6988b5abd659a532750c59c5/4dcb9c1ad_IMG_8957.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6988b5abd659a532750c59c5/5ac62e6a5_IMG_9169.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6988b5abd659a532750c59c5/8c2274942_IMG_9204.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6988b5abd659a532750c59c5/82734265c_IMG_9173.png',
];

export default function UsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-medium mb-8"
        >
          us
        </motion.h2>

        {/* Photo Collage Grid */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative overflow-hidden ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'aspect-video md:aspect-square' : 'aspect-square'}`}>
                <img
                  src={photo}
                  alt={`TMR Club community ${index + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}