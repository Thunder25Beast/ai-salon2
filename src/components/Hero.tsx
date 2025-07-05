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
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Faded background image over theme */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <img 
          src={aisalon} 
          alt="AI Salon Background" 
          className="w-full h-full object-cover opacity-20 sm:opacity-30 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 opacity-70" />
      </div>
      
      <div className="container-width max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight px-2">
            Know Their Skin
            <span className="gradient-text block pb-2">Better Than They Do</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-navy-200 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Show them what no one else can see and they will never leave your chair. <br className="hidden sm:block"/>
            With <span className="text-coral-400 font-semibold">zero hardware installation</span>, our AI skin analysis turns every appointment into a show-stopping smart skin consultation proven to <span className="text-coral-400 font-semibold">increase customer retention</span> and drive revenue growth <span className="text-coral-400 font-semibold">of upto 150%</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4">
          <a 
            href="/partner"
            className="w-full sm:w-auto btn-primary group flex items-center justify-center space-x-3 py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-medium"
          >
            <span>Start Your AI Journey</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="/demo"
            className="w-full sm:w-auto btn-secondary group flex items-center justify-center space-x-3 py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-medium"
          >
            <span>See AI Analysis Demo</span>
            <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-slide-up px-2">
          <div className="text-center p-6 sm:p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold mb-3 sm:mb-4 text-navy-50">
              Discover the Unnoticed
            </h3>
            <p className="text-sm sm:text-base text-navy-300 leading-relaxed">
              Our AI reveals skin issues you never noticed so customers will understand why they need regular treatments.
            </p>
          </div>
          
          <div className="text-center p-6 sm:p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold mb-3 sm:mb-4 text-navy-50">
              Customer Lifetime Value
            </h3>
            <p className="text-sm sm:text-base text-navy-300 leading-relaxed">
              Clients are expected to book upto 3x more sessions when they see their skin treatment analysis and get reminders for next on an AI App. They become invested in their journey.
            </p>
          </div>
          
          <div className="text-center p-6 sm:p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold mb-3 sm:mb-4 text-navy-50">
              Trust Through Technology
            </h3>
            <p className="text-sm sm:text-base text-navy-300 leading-relaxed">
              The AI makes you look like an expert. Clients trust your skincare treatment recommendations completely now.
            </p>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 text-center px-4">
          <p className="text-base sm:text-lg text-navy-400">
            Pioneering the future of <span className="text-coral-400 font-semibold">salon technology</span>
          </p>
          <div className="mt-3 sm:mt-4 flex flex-col items-center justify-center">
            <span className="inline-block bg-coral-500/90 text-white text-sm sm:text-base font-semibold rounded-full px-4 sm:px-5 py-2 shadow-md animate-pulse">
              Pilot Witness: Only 10 slots left!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
