import React, { useState } from 'react';
import { Sparkles, Users, BarChart3, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/results', label: 'Results' },
  { to: '/partner', label: 'Partner' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-navy-800/50 bg-navy-950 lg:bg-navy-950/80 lg:backdrop-blur-md lg:glass-effect">
      <div className="w-full py-4 px-4 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-coral-500 p-2 rounded-xl">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-serif font-bold text-navy-50">
            EagleVerse
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-medium transition-colors ${
                currentPath === item.to
                  ? 'text-coral-400'
                  : 'text-navy-200 hover:text-coral-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/demo"
            className={`font-medium flex items-center space-x-2 transition-colors ${
              currentPath === '/demo'
                ? 'text-coral-400'
                : 'text-navy-200 hover:text-coral-400'
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Try Demo</span>
          </Link>
           <a
                href="https://salon-portal-eagleverse.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-2"
                onClick={() => setMobileOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>Client Portal</span>
              </a>
        </div>
        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden">
          <button
            className="text-navy-200 hover:text-coral-400 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 animate-fade-in"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-navy-900 shadow-xl p-6 flex flex-col animate-slide-in">
            <button
              className="absolute top-6 right-6 p-2 text-coral-400"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="flex flex-col space-y-4 w-full items-start mt-8">
              <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-navy-800 w-full">
                <div className="bg-coral-500 p-2 rounded-xl">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-serif font-bold text-navy-50">
                  EagleVerse
                </span>
              </div>
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-left py-3 px-4 rounded-lg font-medium transition-colors text-xl w-full ${
                    currentPath === item.to
                      ? 'text-coral-400 bg-coral-500/10'
                      : 'text-navy-200 hover:text-coral-400 hover:bg-navy-800'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/demo"
                className={`text-left py-3 px-4 rounded-lg font-medium flex items-center space-x-3 transition-colors text-xl w-full ${
                  currentPath === '/demo'
                    ? 'text-coral-400 bg-coral-500/10'
                    : 'text-navy-200 hover:text-coral-400 hover:bg-navy-800'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <BarChart3 className="h-5 w-5" />
                <span>Try Demo</span>
              </Link>
              <a
                href="https://salon-portal-eagleverse.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-3 px-4 bg-coral-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-coral-600 transition-colors text-xl"
                onClick={() => setMobileOpen(false)}
              >
                <Users className="h-5 w-5" />
                <span>Client Portal</span>
              </a>
            </div>
          </div>
          <style>
            {`
              @keyframes slideIn {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .animate-slide-in {
                animation: slideIn 0.3s ease-out;
              }
              .animate-fade-in {
                animation: fadeIn 0.3s ease-out;
              }
            `}
          </style>
        </div>
      )}
        </nav>
  );
};

export default Navigation;