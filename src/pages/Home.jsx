import React, { useRef } from 'react';
import NavBar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import WeeklyRuns from '../Components/WeeklyRuns';
import UsSection from '../Components/UsSection';
import ContactSection from '../Components/ContactSection';

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <NavBar onAboutClick={scrollToContact} />
      <HeroSection />
      <WeeklyRuns />
      <UsSection />
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  );
}