import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Users, Award } from 'lucide-react';
import AryamanImg from '@/assets/images/aryaman.jpg';
import SakshamImg from '@/assets/images/Saksham.jpeg';
import AshwinImg from '@/assets/images/ashwin.jpg';
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
    <section className="section-padding bg-navy-800 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container-width max-w-7xl mx-auto">
        {/* <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-navy-50 leading-tight">
            Early Partners,
            <span className="gradient-text"> Real Feedback</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-300 max-w-3xl mx-auto px-4">
            Hear from salons already using our AI technology to transform their client relationships
          </p>
        </div> */}

        {/* <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-3xl p-4 sm:p-6 md:p-8 animate-scale-in">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
              <div className="lg:w-1/2 w-full">
                <div className="flex items-center mb-3 sm:mb-4 justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-coral-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg sm:text-xl md:text-2xl leading-relaxed text-navy-100 mb-4 sm:mb-6 font-light italic text-center lg:text-left">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="flex items-center mb-4 sm:mb-6 justify-center lg:justify-start">
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div className="text-center lg:text-left">
                    <div className="font-semibold text-navy-50 text-base sm:text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-coral-400 font-medium text-sm sm:text-base">
                      {currentTestimonial.role}
                    </div>
                    <div className="text-navy-400 text-xs sm:text-sm">
                      {currentTestimonial.type}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="relative">
                  <img 
                    src={currentTestimonial.beforeAfter}
                    alt="AI skin analysis example"
                    className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-coral-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    AI Analysis
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 sm:mt-6 space-x-3 sm:space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 glass-effect rounded-full hover:bg-coral-500/20 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-navy-200" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-coral-500' : 'bg-navy-600'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 glass-effect rounded-full hover:bg-coral-500/20 transition-colors"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-navy-200" />
            </button>
          </div>
        </div> */}

        {/* Credibility Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-serif font-bold mb-6 sm:mb-8 text-navy-50 leading-tight">
            Our Credibility     
        </h2>
        <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 glass-effect rounded-2xl">
              {/* Accuracy: use Star icon */}
              <Star className="h-10 w-10 sm:h-12 sm:w-12 text-coral-400 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 sm:mb-2 text-navy-50">85%+ Accuracy</h3>
              <p className="text-navy-300 text-sm sm:text-base">AI-powered skin analysis with more than 85% precision curated and verified by skin beauty specialists</p>
            </div>
            
            
            <div className="text-center p-4 sm:p-6 glass-effect rounded-2xl">
              {/* Data Safety: use Shield icon */}
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-coral-400 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 sm:mb-2 text-navy-50">Data Safety</h3>
              <p className="text-navy-300 text-sm sm:text-base">Enterprise-grade security for all client information</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 glass-effect rounded-2xl">
              {/* IIT Bombay Team: use Users icon */}
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-coral-400 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 sm:mb-2 text-navy-50">IIT Bombay Team</h3>
                <p className="text-navy-300 text-sm sm:text-base">
                Built by top engineering talent from India's premier institute IIT Bombay, with expertise in Artificial Intelligence.
                </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Team Section */}
      <div className="container-width mt-12 sm:mt-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-serif font-bold mb-4 sm:mb-6 text-navy-50 leading-tight">
          Meet Our Team
        </h2>
        <p className="text-lg sm:text-xl text-navy-300 max-w-3xl mx-auto text-center mb-8 sm:mb-10 px-4">
          The visionaries behind EagleVerse AI, blending deep tech, and a passion for beauty innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto justify-items-center px-4">
          {/* Founder 1 */}
            <div className="bg-navy-900/80 glass-effect rounded-2xl p-4 sm:p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform w-full max-w-sm">
            <img src={SakshamImg} alt="Saksham" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-coral-400 shadow"  />
            <div className="font-bold text-base sm:text-lg text-navy-50 mb-1 text-center">Saksham Kumar</div>
            <div className="text-coral-400 font-medium mb-2 text-sm sm:text-base text-center">CEO</div>
            <div className="text-navy-300 text-center text-xs sm:text-sm leading-relaxed"> An IIT-B EE student having experience in ML in healthcare, B2B business strategy, Team Leadership and Research Experience in B2B buyer-seller interaction in Metaverse, having passion and drive to innovate in the field of Virtual Reality and Metaverse.</div>
            </div>
          {/* Founder 2 */}
          <div className="bg-navy-900/80 glass-effect rounded-2xl p-4 sm:p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform w-full max-w-sm">
            <img src={AshwinImg} alt="Ashwin" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-coral-400 shadow"  />
            <div className="font-bold text-base sm:text-lg text-navy-50 mb-1 text-center">Ashwin Nagarwal</div>
            <div className="text-coral-400 font-medium mb-2 text-sm sm:text-base text-center">CTO</div>
            <div className="text-navy-300 text-center text-xs sm:text-sm leading-relaxed">An IIT-B EE student having experience in ML projects taken under guidance of renowned Professors at IITB in the field of Med-tech and LLM used for making chatbots.</div>
          </div>
          {/* Founder 3 */}
          <div className="bg-navy-900/80 glass-effect rounded-2xl p-4 sm:p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform w-full max-w-sm">
            <img src={AryamanImg} alt="Aryaman"  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 sm:mb-4 border-4 border-coral-400 shadow" />
            <div className="font-bold text-base sm:text-lg text-navy-50 mb-1 text-center">Aryaman Panwar </div>
            <div className="text-coral-400 font-medium mb-2 text-sm sm:text-base text-center">CFO</div>
            <div className="text-navy-300 text-center text-xs sm:text-sm leading-relaxed">An IIT-B EE student having a touch of experience in ML, and have done Research Projects in the field of Optimization of Price and demand, and Driven to create effective market strategies through data-driven modeling.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;