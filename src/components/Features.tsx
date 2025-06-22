import React from 'react';
import { Eye, TrendingUp, BarChart3, Zap, Crown, Repeat } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Advanced AI Detection",
      subtitle: "Show What's Barely Visible",
      description: "Our cutting-edge AI reveals aesthetic scores, early aging signs, and less-visible skin changes that creates instant trust and necessity for your services.",
      stats: "Detects issues barely visible to naked eye"
    },
    {
      icon: TrendingUp,
      title: "Customer Retention Loop", 
      subtitle: "Create Lifelong Clients",
      description: "Hook one time visitors to make them forever customers  who book regular appointments based on AI recommendations through which they can see their skin improvement journey.",
      stats: "Clients book upto 3x more follow-up sessions"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking System",
      subtitle: "Visual Proof of Results",
      description: "Clients become emotionally invested when they see measurable improvements in factors like skin scores. Hooks clients with visible results, compelling them to book session after session.",
      stats: "30 - 40 % expected client returns"
    },
    {
      icon: Zap,
      title: "Instant Analysis",
      subtitle: "Real-Time Skin Scoring",
      description: "Receive detailed skin analysis insights in seconds. Our AI's beautician verified accuracy transforms every consultation into an engaging, trust-building experience.",
      stats: "Complete analysis in under 5-10 seconds"
    },
    // {
    //   icon: Crown,
    //   title: "Professional Credibility",
    //   subtitle: "Technology-Powered Expertise", 
    //   description: "Position yourself as the leader of salon in the AI industry . AI technology elevates your professional image and justifies premium pricing.",
    //   stats: "Boost your service value perception"
    
    // },
    {
      
      icon: Crown,
      title: "Revenue Accelerator",
      subtitle: "Data-Driven Upselling",
      description: "Leverage our AI insights to recommend premium services, turning every consultation into a profitable opportunity and increasing your revenue by up to 150%.",
      stats: "Drive up to 150% more revenue for your salon."


    },
    {
      icon: Repeat,
      title: "Automated Follow-ups",
      subtitle: "Make your Client come back again",
      description: "AI predicts optimal treatment schedules for your clients like when it's the time for their next session based on skin improvement patterns using predictive machine learning.",
      stats: "Keep 80% of clients coming back."
    }
  ];

  return (
    <section id="features" className="section-padding bg-navy-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy-50">
            What We Do:
            <span className="gradient-text block">Advanced Skin AI for Salon Success</span>
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Our AI makes every client see what they never knew existed, creating unbreakable trust on your salon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 glass-effect rounded-2xl hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-coral-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold mb-2 text-navy-50">
                {feature.title}
              </h3>
              
              <div className="text-coral-400 font-medium mb-4 text-sm uppercase tracking-wide">
                {feature.subtitle}
              </div>
              
              <p className="text-navy-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="text-coral-400 font-semibold text-sm bg-coral-500/10 rounded-lg p-3">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
  <div className="bg-gradient-to-br from-coral-500/20 via-navy-900/90 to-coral-400/10 border border-coral-400/30 shadow-xl rounded-3xl p-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
    <h3 className="text-3xl font-serif text-center font-bold mb-6 text-coral-400 drop-shadow-lg">
      <span className="inline-block bg-navy-950/80 px-4 py-2 rounded-xl shadow text-coral-400">Why should you choose us?</span>
    </h3>
    <ul className="text-navy-100 text-lg md:text-xl leading-relaxed list-none w-full space-y-5">
      <li className="flex items-start gap-3">
        <span className="mt-1 text-coral-400">★</span>
        <span>We're one of the first to bring <span className="text-coral-400 font-semibold">advanced AI skin analysis</span> exclusively to salons, no one else offers this level of insight.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 text-coral-400">★</span>
        <span>Make your clients aware of issues they often miss, creating <span className="text-coral-400 font-semibold">instant trust</span> through cutting-edge technology.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 text-coral-400">★</span>
        <span>Build <span className="text-coral-400 font-semibold">customer lifetime value</span> by turning every appointment into an engaging, results-driven experience.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 text-coral-400">★</span>
        <span>Elevate your professional credibility with <span className="text-coral-400 font-semibold">AI-powered expertise</span> that sets you apart from competitors.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 text-coral-400">★</span>
        <span>Transform your business revenue, each client spends <span className="text-coral-400 font-semibold">150% more</span> and books up to <span className="text-coral-400 font-semibold">3× more follow-up sessions</span> when they see real improvement over time.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 text-coral-400">★</span>
        <span>Hook customers for a lifetime by offering <span className="text-coral-400 font-semibold">personalized treatment plans</span> backed by predictive AI insights.</span>
      </li>
    </ul>
  </div>
</div>

      </div>
    </section>
  );
};

export default Features;