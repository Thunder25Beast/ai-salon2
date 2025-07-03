
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
    <footer className="bg-navy-950 border-t border-navy-800 section-padding">
      <div className="container-width">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-coral-500 p-2 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold text-navy-50">
                EagleVerse AI
              </span>
            </div>
            
            <p className="text-navy-300 leading-relaxed mb-6 max-w-md">
              Revolutionizing salon revenue through AI-powered skin analysis. 
              Turn every client into a loyal customer with personalized treatment plans.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="p-3 glass-effect rounded-xl hover:bg-coral-500/20 transition-colors group">
                <Facebook className="h-5 w-5 text-navy-400 group-hover:text-coral-400" />
              </a>
              <a href="#" className="p-3 glass-effect rounded-xl hover:bg-coral-500/20 transition-colors group">
                <Instagram className="h-5 w-5 text-navy-400 group-hover:text-coral-400" />
              </a>
              <a href="#" className="p-3 glass-effect rounded-xl hover:bg-coral-500/20 transition-colors group">
                <Twitter className="h-5 w-5 text-navy-400 group-hover:text-coral-400" />
              </a>
              <a href="https://www.linkedin.com/company/eagleverse/posts/?feedView=all" className="p-3 glass-effect rounded-xl hover:bg-coral-500/20 transition-colors group">
                <Linkedin className="h-5 w-5 text-navy-400 group-hover:text-coral-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-navy-50 mb-6">Resources</h4>
            <div className="space-y-3">
              {/* <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Success Stories</span>
              </a> */}
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Implementation Guide</span>
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Training & Support</span>
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Contact Support</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-navy-50 mb-6">Legal</h4>
            <div className="space-y-3">
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors">
                GDPR Compliance
              </a>
              <a href="#" className="block text-navy-300 hover:text-coral-400 transition-colors">
                Data Security
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-navy-400 text-sm">
              © 2025 EagleVerse AI. All rights reserved. Transforming salons worldwide.
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex space-x-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Get AI insights newsletter"
                className="px-4 py-2 bg-navy-800 border border-navy-700 rounded-lg text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-lg transition-colors font-medium"
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
