
import React from 'react';
import { Eye, TrendingUp, BarChart3, Zap, Crown, Repeat } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "AI Microscopic Detection",
      subtitle: "Catch What Human Eyes Miss",
      description: "Our AI spots dark spots, early aging signs, and skin damage that even experienced aestheticians overlook. Show clients problems they didn't know existed.",
      stats: "Detects 340% more issues than manual inspection"
    },
    {
      icon: TrendingUp,
      title: "Instant Upselling Engine", 
      subtitle: "Turn Every Visit Into Revenue",
      description: "Generate personalized treatment plans instantly. AI creates perfect upselling opportunities based on actual skin analysis, not guesswork.",
      stats: "Average 3.2 additional services per client"
    },
    {
      icon: BarChart3,
      title: "Progress Addiction System",
      subtitle: "Make Clients Crave Results",
      description: "Visual progress tracking creates emotional investment. Clients become addicted to seeing improvements, ensuring they never skip appointments.",
      stats: "94% clients book next appointment before leaving"
    },
    {
      icon: Zap,
      title: "Real-Time Scoring",
      subtitle: "Gamify Skin Health",
      description: "Rate skin issues from 1-100. Clients love improving their scores. Creates competitive mindset that drives consistent bookings.",
      stats: "Clients improve scores 67% faster with regular visits"
    },
    {
      icon: Crown,
      title: "Premium Positioning",
      subtitle: "Justify Higher Prices", 
      description: "AI technology positions your salon as cutting-edge. Clients happily pay premium prices for advanced technology and personalized care.",
      stats: "Average 45% price increase with AI positioning"
    },
    {
      icon: Repeat,
      title: "Retention Automation",
      subtitle: "Never Lose a Client Again",
      description: "Automated follow-up schedules based on skin improvement timelines. AI predicts optimal treatment intervals for maximum results.",
      stats: "Client lifetime value increased by 312%"
    }
  ];

  return (
    <section id="features" className="section-padding bg-navy-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy-50">
            The Complete Client
            <span className="gradient-text"> Retention System</span>
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Transform your salon into a revenue-generating machine that clients can't resist
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Features;
