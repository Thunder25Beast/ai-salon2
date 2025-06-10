import React from 'react';

const Results = () => (
  <section className="container-width mx-auto py-16">
    <h1 className="text-4xl font-bold mb-6 text-navy-50">Results Gallery</h1>
    <p className="text-navy-200 mb-8 max-w-2xl">
      Explore real client transformations and AI-powered skin analysis results. This page can showcase before/after images, testimonials, and analytics.
    </p>
    {/* Add your results/gallery content here */}
    <div className="bg-navy-800 rounded-xl p-8 text-center text-navy-200">
      <span className="text-coral-400 font-semibold">No results to display yet.</span>
    </div>
  </section>
);

export default Results;
