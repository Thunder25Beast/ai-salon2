
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Owner, Elite Beauty Lounge",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "This AI system completely transformed our business. Clients are shocked when they see skin issues they never noticed. We went from $3K to $12K monthly revenue in just 4 months. Every single client now books multiple treatments.",
      beforeAfter: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      metrics: {
        revenue: "+300%",
        retention: "89%",
        upsells: "247%"
      }
    },
    {
      name: "Jessica Chen",
      role: "Director, Glamour Studio Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "The progress tracking feature is genius. Clients become obsessed with improving their skin scores. They book appointments weeks in advance just to see their improvements. Our retention rate hit 94% - unheard of in this industry.",
      beforeAfter: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      metrics: {
        revenue: "+450%",
        retention: "94%",
        upsells: "312%"
      }
    },
    {
      name: "Amanda Rodriguez",
      role: "Founder, Radiance Salon Chain",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "We've eliminated empty chairs completely. The AI creates perfect treatment schedules that keep clients coming back religiously. Every consultation turns into a comprehensive skincare journey. It's like having a crystal ball for our business.",
      beforeAfter: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      metrics: {
        revenue: "+380%",
        retention: "91%",
        upsells: "289%"
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-navy-800">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy-50">
            Real Salons,
            <span className="gradient-text"> Real Results</span>
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            See how our AI system transformed struggling salons into thriving businesses
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 animate-scale-in">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-coral-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl leading-relaxed text-navy-100 mb-8 font-light italic">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="flex items-center mb-8">
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-navy-50 text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-coral-400 font-medium">
                      {currentTestimonial.role}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coral-400 mb-1">
                      {currentTestimonial.metrics.revenue}
                    </div>
                    <div className="text-navy-300 text-sm">Revenue Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coral-400 mb-1">
                      {currentTestimonial.metrics.retention}
                    </div>
                    <div className="text-navy-300 text-sm">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coral-400 mb-1">
                      {currentTestimonial.metrics.upsells}
                    </div>
                    <div className="text-navy-300 text-sm">More Upsells</div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src={currentTestimonial.beforeAfter}
                    alt="Client transformation"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute top-4 left-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Client Results
                  </div>
                  <div className="absolute bottom-4 right-4 bg-navy-900/80 backdrop-blur-sm text-navy-50 px-3 py-2 rounded-lg flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-coral-400" />
                    <span className="text-sm font-medium">Visible Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 glass-effect rounded-full hover:bg-coral-500/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-navy-200" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-coral-500' : 'bg-navy-600'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 glass-effect rounded-full hover:bg-coral-500/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-navy-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
