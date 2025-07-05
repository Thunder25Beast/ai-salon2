
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is the AI skin analysis?",
      answer: "Our AI has been trained on over 100,000 skin images and achieves more than 85% accuracy in detecting skin issues. It can identify problems that are often missed by the human eye, including early signs of aging."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most salons see immediate results in client engagement and booking additional services. On average, salons report a 247% increase in revenue within the first 3 months of implementation."
    },
    {
      question: "Is client data secure and private?",
      answer: "Absolutely. We use enterprise-grade encryption and comply with GDPR standards. Client photos are anonymized and stored securely, with explicit consent required for analysis. Data is automatically purged after 1 year unless clients opt for longer retention."
    },
    {
      question: "What kind of training do you provide?",
      answer: "We provide comprehensive training including live demos, best practice guides, and ongoing support. Your team will learn how to use the AI analysis to create compelling treatment recommendations and boost client retention."
    },
    {
      question: "Can the system integrate with our existing booking software?",
      answer: "Yes, our API can integrate with most popular salon management systems. We also provide standalone solutions that work seamlessly with your current workflow."
    },
    {
      question: "What's the cost and what's included?",
      answer: "Pricing varies based on salon size and features. Our packages include the AI analysis system, training, ongoing support, and regular software updates. Contact us for a customized quote based on your needs."
    },
    {
      question: "How do clients react to AI analysis?",
      answer: "Clients trust the technology! The visual analysis creates 'Aha moments' where they see issues they never noticed along with a detailed report and some good recommendations. This builds trust and excitement about their treatment journey, leading to higher satisfaction and retention rates."
    },
    {
      question: "What if we're not satisfied with the results?",
      answer: "We offer a 30-day satisfaction guarantee. If you don't see improved client engagement and bookings within the first month, we'll work with you to optimize the system or provide a full refund."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-10 section-padding bg-navy-900 px-4 sm:px-6 lg:px-8">
      <div className="container-width max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-navy-50 leading-tight">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-300 max-w-3xl mx-auto px-4">
            Everything you need to know about transforming your salon with AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 sm:p-6 text-left flex justify-between items-start hover:bg-navy-800/30 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-navy-50 pr-3 sm:pr-4 leading-tight">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-coral-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-coral-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-navy-300 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-navy-300 mb-4 sm:mb-6 text-sm sm:text-base px-4">
            Still have questions? Reach out to us directly.
          </p>
          <a href="/contact" className="btn-primary text-sm sm:text-base">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
