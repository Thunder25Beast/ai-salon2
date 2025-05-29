
import React from 'react';
import { Sparkles, Users, BarChart3 } from 'lucide-react';

interface NavigationProps {
  onShowDemo: () => void;
  onShowPortal: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ onShowDemo, onShowPortal, activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'results', label: 'Results' },
    { id: 'partner', label: 'Partner' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-navy-800/50">
      <div className="container-width py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-coral-500 p-2 rounded-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-serif font-bold text-navy-50">
              EagleVerse AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'text-coral-400' 
                    : 'text-navy-200 hover:text-coral-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onTabChange('demo')}
              className={`font-medium flex items-center space-x-2 transition-colors ${
                activeTab === 'demo' 
                  ? 'text-coral-400' 
                  : 'text-navy-200 hover:text-coral-400'
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Try Demo</span>
            </button>
            <button
              onClick={onShowPortal}
              className="btn-secondary flex items-center space-x-2"
            >
              <Users className="h-4 w-4" />
              <span>Client Portal</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
