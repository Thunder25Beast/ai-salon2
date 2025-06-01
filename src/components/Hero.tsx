import React from 'react';
import { TrendingUp, Users, Target, ArrowRight, Eye } from 'lucide-react';
import aisalon from '@/assets/aisalon.jpg';

interface HeroProps {
  onShowDemo: () => void;
}

const Hero = ({ onShowDemo }: HeroProps) => {
  const scrollToPartner = () => {
    document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Faded background image over theme */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <img 
          src={aisalon} 
          alt="AI Salon Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 opacity-70" />
      </div>
      {/* Faded background elements */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none select-none z-0">
        <div className="absolute top-20 left-10 text-8xl font-serif font-bold text-white transform -rotate-12">AI</div>
        <div className="absolute top-40 right-20 text-6xl font-serif font-bold text-white transform rotate-12">SALON</div>
        <div className="absolute bottom-20 left-1/4 text-7xl font-serif font-bold text-white transform -rotate-6">ADVANCED</div>
        <div className="absolute bottom-40 right-10 text-5xl font-serif font-bold text-white transform rotate-45">SMART</div>
      </div> */}
      <div className="container-width relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Know Their Skin
            <span className="gradient-text block pb-2">Better Than They Do</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 max-w-4xl mx-auto leading-relaxed font-light">
            Show them what no one else can see and they will never leave your chair. <br/>
            With <span className="text-coral-400 font-semibold"> with zero hardware installation </span>, our AI skin analysis turns every appointment into a show-stopping consultation that <span className="text-coral-400 font-semibold">hooks customers for a lifetime </span>
           
            and can increase your revenue <span className="text-coral-400 font-semibold">by 150% </span> 
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button 
            onClick={scrollToPartner}
            className="btn-primary group flex items-center space-x-3"
          >
            <span>Start Your AI Journey</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={onShowDemo}
            className="btn-secondary group flex items-center space-x-3"
          >
            <span>See AI Analysis Demo</span>
            <Eye className="h-5 w-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-navy-50">
              Show What's Hidden
            </h3>
            <p className="text-navy-300 leading-relaxed">
              Our AI reveals skin issues you never noticed so customers will understand why they need regular treatments.
            </p>
            {/* <div className="text-coral-400 font-semibold mt-4">
              - Actual Client Feedback
            </div> */}
          </div>
          <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-navy-50">
              Customer Lifetime Value
            </h3>
            <p className="text-navy-300 leading-relaxed">
              Clients are expected to book upto 3x more sessions when they see their skin treatment analysis and get reminders for next on an AI App. They become invested in their journey.
            </p>
            {/* <div className="text-coral-400 font-semibold mt-4">
              - Early Partner Salon
            </div> */}
          </div>
          <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-navy-50">
              Trust Through Technology
            </h3>
            <p className="text-navy-300 leading-relaxed">
              The AI makes you look like an expert. Clients trust your skincare treatment recommendations completely now.
            </p>
            {/* <div className="text-coral-400 font-semibold mt-4">
              - Beta Testing Salon
            </div> */}
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-navy-400 text-lg">
            Pioneering the future of <span className="text-coral-400 font-semibold">salon technology</span>
          </p>
          <div className="mt-4 flex flex-col items-center justify-center">
            <span className="inline-block bg-coral-500/90 text-white text-base font-semibold rounded-full px-5 py-2 shadow-md animate-pulse">
              Pilot Witness: Only 10 slots left!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
