import React from 'react';
import { Eye, TrendingUp, BarChart3, Zap, Crown, Repeat } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Advanced AI Detection",
      subtitle: "Show What's Barely Visible",
      description: "Our cutting-edge AI reveals microscopic skin issues, early aging signs, and hidden damage that creates instant trust and necessity for your services.",
      stats: "Detects issues invisible to naked eye"
    },
    {
      icon: TrendingUp,
      title: "Customer Retention Loop", 
      subtitle: "Create Lifelong Clients",
      description: "Transform one-time visitors into loyal customers who book regular appointments because they can see their skin improvement journey.",
      stats: "Clients book upto 3x more follow-up sessions"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking System",
      subtitle: "Visual Proof of Results",
      description: "Clients become emotionally invested when they see measurable improvements. Creates addiction to progress and regular bookings.",
      stats: "Upto 94% clients return within 30 days"
    },
    {
      icon: Zap,
      title: "Instant Analysis",
      subtitle: "Real-Time Skin Scoring",
      description: "Get comprehensive skin health scores in seconds. Turn consultations into compelling experiences that clients can't ignore.",
      stats: "Complete analysis in under 30 seconds"
    },
    {
      icon: Crown,
      title: "Professional Credibility",
      subtitle: "Technology-Powered Expertise", 
      description: "Position yourself as the most advanced salon in your area. AI technology elevates your professional image and justifies premium pricing.",
      stats: "Increase service value perception by upto 60%"
    }
    // },
    // {
    //   icon: Repeat,
    //   title: "Automated Follow-ups",
    //   subtitle: "Never Lose a Client",
    //   description: "AI predicts optimal treatment schedules and reminds clients when it's time for their next session based on skin improvement patterns.",
    //   stats: "Reduce client churn by 80%"
    // }
  ];

  return (
    <section id="features" className="section-padding bg-navy-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy-50">
            What We Do:
            <span className="gradient-text block">Advanced AI for Salon Success</span>
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

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4 text-navy-50">
              Why Salons Choose Our AI Technology
            </h3>
            <p className="text-navy-300 text-lg leading-relaxed">
              We're one of the first to bring advanced AI skin analysis to salons. Show your clients what they can't see, 
              create trust through technology, and build customer lifetime value that transforms your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;