import React, { useState } from 'react';
import { Sparkles, Facebook, Instagram, Twitter, Linkedin, Mail, Shield, FileText, MessageCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    toast({
      title: "Subscribed!",
      description: "You'll receive the latest AI skincare insights and success stories.",
    });
    setEmail('');
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800 section-padding px-4 sm:px-6 lg:px-8">
      <div className="container-width max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="bg-coral-500 p-1.5 sm:p-2 rounded-xl">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-navy-50">
                EagleVerse AI
              </span>
            </div>
            
            <p className="text-navy-300 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Revolutionizing salon revenue through AI-powered skin analysis. 
              Turn every client into a loyal customer with personalized treatment plans.
            </p>

            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="p-2 sm:p-3 glass-effect rounded-xl hover:bg-coral-500/20 transition-colors group">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-navy-400 group-hover:text-coral-400" />
              </a>
              <a href="#" className="p-2 sm:p-3 glass-effect rounded-xl hover:bg-coral-500/20 transition-colors group">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-navy-400 group-hover:text-coral-400" />
              </a>
              <a href="#" className="p-2 sm:p-3 glass-effect rounded-xl hover:bg-coral-500/20 transition-colors group">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-navy-400 group-hover:text-coral-400" />
              </a>
              <a href="https://www.linkedin.com/company/eagleverse/posts/?feedView=all" className="p-2 sm:p-3 glass-effect rounded-xl hover:bg-coral-500/20 transition-colors group">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-navy-400 group-hover:text-coral-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-navy-50 mb-4 sm:mb-6">Resources</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors flex items-center space-x-2 text-sm sm:text-base">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Implementation Guide</span>
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors flex items-center space-x-2 text-sm sm:text-base">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Training & Support</span>
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors flex items-center space-x-2 text-sm sm:text-base">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Contact Support</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-navy-50 mb-4 sm:mb-6">Legal</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors text-sm sm:text-base">
                Terms of Service
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors text-sm sm:text-base">
                Privacy Policy
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors text-sm sm:text-base">
                GDPR Compliance
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors text-sm sm:text-base">
                Data Security
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
            <div className="text-navy-400 text-xs sm:text-sm text-center md:text-left">
              © 2025 EagleVerse AI. All rights reserved. Transforming salons worldwide.
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Get AI insights newsletter"
                className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-navy-800 border border-navy-700 rounded-lg text-navy-50 focus:outline-none focus:border-coral-500 transition-colors text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-coral-500 hover:bg-coral-600 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors font-medium text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
