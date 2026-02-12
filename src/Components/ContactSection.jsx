import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function ContactSection() {
  return (
    <footer className="py-20 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-medium mb-4">two mile run club</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              TMR is a community-driven club focused on consistency, inclusivity, 
              and accessibility. We offer approachable two-mile runs for all paces 
              and experience levels.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Announcements are on <a href="https://instagram.com/twomilerunclub" className="text-white underline cursor-pointer" target="_blank" rel="noopener noreferrer">Instagram</a>, 
              club communication is on <span className="text-white underline cursor-pointer">Discord</span>, 
              and run event details are tracked on <a href="https://strava.com/club/twomilerunclub" className="text-white underline cursor-pointer" target="_blank" rel="noopener noreferrer">Strava</a>.
            </p>

            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9 1C5.9 1 1 5.9 1 11.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9S17.9 1 11.9 1zm3.5 15.9c-.1.2-.3.3-.6.3-.1 0-.3 0-.4-.1l-3.8-2.1-2.8 2.1c-.1.1-.3.1-.4.1-.2 0-.4-.1-.5-.2-.2-.2-.3-.5-.2-.8l.9-3.5-2.9-2.3c-.3-.2-.4-.6-.2-.9.1-.3.4-.5.7-.5h3.6l1.2-3.4c.1-.3.4-.5.7-.5s.6.2.7.5l1.2 3.4h3.6c.3 0 .6.2.7.5.1.3 0 .7-.2.9l-2.9 2.3.9 3.5c.1.3 0 .6-.2.8z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Runs */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-gray-500 text-sm mb-4 tracking-widest uppercase">Runs</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Routes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Suggestions</a></li>
            </ul>
          </motion.div>

          {/* Learn More */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-gray-500 text-sm mb-4 tracking-widest uppercase">Learn more</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Mission</a></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-gray-500 text-sm mb-4 tracking-widest uppercase">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Build TMR</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-xs">© 2026 Two Mile Run Club. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}