import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 12 hours.');
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="mt-10 section-padding bg-navy-900 px-4 sm:px-6 lg:px-8">
      <div className="container-width max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-navy-50 leading-tight">
            Get in
            <span className="gradient-text"> Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-300 max-w-3xl mx-auto px-4">
            Ready to transform your salon? Have questions? We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="glass-effect rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-navy-50">
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="bg-coral-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-navy-200 font-medium text-sm sm:text-base">Email</div>
                    <div className="text-coral-400 text-sm sm:text-base break-all">team@eagleverse.tech</div>
                  </div>
                </div>

                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="bg-coral-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-navy-200 font-medium text-sm sm:text-base">Phone</div>
                    <div className="text-coral-400 text-sm sm:text-base">
                      <div>Saksham: +91 (987) 123-4567</div>
                      <div>Aryaman: +91 (987) 234-5678</div>
                      <div>Vivek: +91 (987) 345-6789</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="bg-coral-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-navy-200 font-medium text-sm sm:text-base">Business Hours</div>
                    <div className="text-coral-400 text-sm sm:text-base">
                      <div>Mon-Fri: 9AM - 6PM</div>
                      <div>Sat-Sun: 10AM - 4PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-navy-50">
                Quick Response Times
              </h3>
              <div className="space-y-2 sm:space-y-3 text-navy-300 text-sm sm:text-base">
                <div>• Sales Inquiries: Within 2 hours</div>
                <div>• Technical Support: Within 12 hours</div>
                <div>• Partnership Requests: Within 12 hours</div>
                <div>• General Questions: Within 12 hours</div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-navy-50">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors text-sm sm:text-base"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales & Pricing</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors text-sm sm:text-base"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 py-3 sm:py-4 text-sm sm:text-base font-medium"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
