import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-950 overflow-x-hidden">
      <Navigation />
      <main className="relative">
        <Hero onShowDemo={() => {}} />
        <Features />
        <Testimonials />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
