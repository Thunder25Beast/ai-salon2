
import React from 'react';
import { TrendingUp, Users, Target, ArrowRight } from 'lucide-react';

interface HeroProps {
  onShowDemo: () => void;
}

const Hero = ({ onShowDemo }: HeroProps) => {
  const scrollToPartner = () => {
    document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Never Let Another
            <span className="gradient-text block">Client Walk Away</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 max-w-4xl mx-auto leading-relaxed font-light">
            Transform every haircut into a comprehensive skincare journey. Our AI reveals hidden skin issues 
            your clients didn't even know they had, creating perfect upselling opportunities that increase 
            revenue by <span className="text-coral-400 font-semibold">247% on average</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button 
            onClick={scrollToPartner}
            className="btn-primary group flex items-center space-x-3"
          >
            <span>Start Converting More Clients</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={onShowDemo}
            className="btn-secondary group flex items-center space-x-3"
          >
            <span>See AI Analysis Demo</span>
            <Target className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-navy-50">
              247% Revenue Boost
            </h3>
            <p className="text-navy-300 leading-relaxed">
              "Every client now books additional treatments. The AI shows them problems they never noticed before."
            </p>
            <div className="text-coral-400 font-semibold mt-4">
              - Elite Beauty Lounge
            </div>
          </div>

          <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-navy-50">
              89% Return Rate
            </h3>
            <p className="text-navy-300 leading-relaxed">
              "Clients come back religiously for progress tracking. They're addicted to seeing their improvements."
            </p>
            <div className="text-coral-400 font-semibold mt-4">
              - Glamour Studio Pro
            </div>
          </div>

          <div className="text-center p-8 glass-effect rounded-2xl hover-lift">
            <div className="bg-coral-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-navy-50">
              Zero Chairs Empty
            </h3>
            <p className="text-navy-300 leading-relaxed">
              "AI creates perfect treatment schedules. Every client needs follow-ups, keeping our calendar full."
            </p>
            <div className="text-coral-400 font-semibold mt-4">
              - Radiance Salon Chain
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-navy-400 text-lg">
            Trusted by <span className="text-coral-400 font-semibold">2,847+ premium salons</span> worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
