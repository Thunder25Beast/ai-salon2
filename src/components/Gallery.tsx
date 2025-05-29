
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const results = [
    {
      before: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Acne Reduction Journey",
      summary: "87% reduction in active breakouts",
      satisfaction: "4.9/5",
      treatments: 6,
      revenue: "$1,247"
    },
    {
      before: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Anti-Aging Transformation",
      summary: "73% improvement in fine lines",
      satisfaction: "4.8/5",
      treatments: 8,
      revenue: "$2,156"
    },
    {
      before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Hyperpigmentation Correction",
      summary: "91% reduction in dark spots",
      satisfaction: "4.9/5", 
      treatments: 7,
      revenue: "$1,834"
    },
    {
      before: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Pore Refinement Program",
      summary: "68% pore size reduction",
      satisfaction: "4.7/5",
      treatments: 5,
      revenue: "$987"
    }
  ];

  return (
    <section id="results" className="section-padding bg-navy-950">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy-50">
            Proven Results That
            <span className="gradient-text"> Drive Revenue</span>
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Every transformation represents multiple treatment bookings and increased client lifetime value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {results.map((result, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover-lift cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={result.before}
                      alt="Before treatment"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-navy-900/80 text-navy-100 px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={result.after}
                      alt="After treatment"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-navy-50">
                  {result.title}
                </h3>
                <p className="text-coral-400 font-semibold mb-4">
                  {result.summary}
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Award className="h-4 w-4 text-coral-400 mr-1" />
                      <span className="text-navy-100 font-semibold">{result.satisfaction}</span>
                    </div>
                    <div className="text-navy-400 text-xs">Satisfaction</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <BarChart3 className="h-4 w-4 text-coral-400 mr-1" />
                      <span className="text-navy-100 font-semibold">{result.treatments}</span>
                    </div>
                    <div className="text-navy-400 text-xs">Treatments</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-coral-400 mr-1" />
                      <span className="text-navy-100 font-semibold">{result.revenue}</span>
                    </div>
                    <div className="text-navy-400 text-xs">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-coral-500/10 to-navy-800/50 rounded-2xl p-8">
          <h3 className="text-2xl font-serif font-semibold mb-4 text-navy-50">
            Aggregate Performance Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">84%</div>
              <div className="text-navy-300">Average Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">4.8/5</div>
              <div className="text-navy-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">6.2</div>
              <div className="text-navy-300">Avg Treatments per Client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">$1,556</div>
              <div className="text-navy-300">Avg Revenue per Journey</div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-navy-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2">
              <img 
                src={results[selectedImage].before}
                alt="Before treatment"
                className="w-full h-96 object-cover"
              />
              <img 
                src={results[selectedImage].after}
                alt="After treatment"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-navy-50 mb-2">
                {results[selectedImage].title}
              </h3>
              <p className="text-coral-400 text-lg">
                {results[selectedImage].summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
