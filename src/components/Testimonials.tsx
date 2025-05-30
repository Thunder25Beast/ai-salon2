
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Users, Award } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Owner, Elite Beauty Lounge",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "The AI shows clients skin issues they never knew existed. They immediately understand why they need our treatments. It's like having a crystal ball for their skin health.",
      beforeAfter: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Early Partner"
    },
    {
      name: "Jessica Chen",
      role: "Director, Glamour Studio Pro", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "Clients are amazed when the AI reveals hidden skin damage. They book follow-up appointments immediately because they can see exactly what needs treatment.",
      beforeAfter: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Beta Tester"
    },
    {
      name: "Amanda Rodriguez",
      role: "Founder, Radiance Salon",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      quote: "The technology makes me look like an expert. When clients see their skin analysis, they trust every recommendation I make. It's transformed how I do consultations.",
      beforeAfter: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Pioneer User"
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
    <section className="section-padding bg-navy-800 py-8 md:py-12">
      <div className="container-width">
        {/* <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-navy-50">
            Early Partners,
            <span className="gradient-text"> Real Feedback</span>
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Hear from salons already using our AI technology to transform their client relationships
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-3xl p-6 md:p-8 animate-scale-in">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-coral-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl leading-relaxed text-navy-100 mb-6 font-light italic">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="flex items-center mb-6">
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
                    <div className="text-navy-400 text-sm">
                      {currentTestimonial.type}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src={currentTestimonial.beforeAfter}
                    alt="AI skin analysis example"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute top-4 left-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AI Analysis
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 glass-effect rounded-full hover:bg-coral-500/20 transition-colors"
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
              className="p-2 glass-effect rounded-full hover:bg-coral-500/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-navy-200" />
            </button>
          </div>
        </div> */}

        {/* Credibility Section */}
        <h2 className="text-4xl text-center md:text-5xl font-serif font-bold mb-4 text-navy-50">
            Our Credibility:     
     </h2>
        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 glass-effect rounded-2xl">
              <Shield className="h-12 w-12 text-coral-400 mx-auto mb-3" />
              <h3 className="text-xl font-serif font-semibold mb-1 text-navy-50">94% Accuracy</h3>
              <p className="text-navy-300">AI-powered skin analysis with clinical-grade precision</p>
            </div>
            
            <div className="text-center p-4 glass-effect rounded-2xl">
              <Users className="h-12 w-12 text-coral-400 mx-auto mb-3" />
              <h3 className="text-xl font-serif font-semibold mb-1 text-navy-50">Data Safety</h3>
              <p className="text-navy-300">Enterprise-grade security for all client information</p>
            </div>
            
            <div className="text-center p-4 glass-effect rounded-2xl">
              <Award className="h-12 w-12 text-coral-400 mx-auto mb-3" />
              <h3 className="text-xl font-serif font-semibold mb-1 text-navy-50">IIT Bombay Team</h3>
              <p className="text-navy-300">Built by top engineering talent from India's premier institute</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;