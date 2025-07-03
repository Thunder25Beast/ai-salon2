import React, { useState } from 'react';
import { BarChart3, TrendingUp, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const results = [
    {
      before: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Dark Circles Detection",
      summary: "AI detected under-eye darkness: 82% confidence",
      satisfaction: "-",
      treatments: "-",
      revenue: "-"
    },
    {
      before: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Wrinkle Analysis",
      summary: "AI detected wrinkle depth: 76% confidence",
      satisfaction: "-",
      treatments: "-",
      revenue: "-"
    },
    {
      before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Fine Lines Detection",
      summary: "AI detected fine lines: 79% confidence",
      satisfaction: "-",
      treatments: "-",
      revenue: "-"
    },
    {
      before: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Dark Spots Detection",
      summary: "AI detected pigmentation: 88% confidence",
      satisfaction: "-",
      treatments: "-",
      revenue: "-"
    },
    {
      before: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Oiliness Assessment",
      summary: "AI detected excess oil: 69% confidence",
      satisfaction: "-",
      treatments: "-",
      revenue: "-"
    },
    {
      before: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Glow Index",
      summary: "AI glow score: 7.2/10",
      satisfaction: "-",
      treatments: "-",
      revenue: "-"
    }
  ];

  return (
    <section id="results" className="mt-10 section-padding bg-navy-950">
      <div className="container-width">
        <div className="text-center mb-10">
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
          <div className="grid md:grid-cols-4 gap-6 md:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">55%</div>
              <div className="text-navy-300">Customer Retention Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">By 150%</div>
              <div className="text-navy-300">Average Upselling</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">+25%</div>
              <div className="text-navy-300">Growth in High-Value Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-400 mb-2">₹1,000</div>
              <div className="text-navy-300">Avg Increment in Revenue per Client</div>
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
