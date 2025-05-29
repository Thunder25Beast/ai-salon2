
import React, { useState } from 'react';
import { X, User, Lock, Calendar, FileText, TrendingUp, Download } from 'lucide-react';

interface CustomerPortalProps {
  onClose: () => void;
}

const CustomerPortal = ({ onClose }: CustomerPortalProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const mockClients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastAnalysis: '2024-01-15',
      improvementScore: 73,
      nextAppointment: '2024-02-01',
      treatments: 6,
      totalRevenue: '$1,247'
    },
    {
      id: 2,
      name: 'Emily Chen', 
      lastAnalysis: '2024-01-10',
      improvementScore: 89,
      nextAppointment: '2024-01-28',
      treatments: 8,
      totalRevenue: '$2,156'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-navy-900 rounded-2xl max-w-md w-full">
          <div className="p-6 border-b border-navy-800 flex justify-between items-center">
            <h2 className="text-2xl font-serif font-bold text-navy-50">
              Client Portal Login
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-navy-800 rounded-xl transition-colors"
            >
              <X className="h-6 w-6 text-navy-400" />
            </button>
          </div>

          <div className="p-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-navy-200 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-navy-200 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Lock className="h-5 w-5" />
                <span>Access Portal</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-navy-400 text-sm">
                Demo credentials: any email/password combination
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-navy-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-navy-800 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold text-navy-50">
            Client Management Dashboard
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-navy-800 rounded-xl transition-colors"
          >
            <X className="h-6 w-6 text-navy-400" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="glass-effect rounded-xl p-6 text-center">
              <User className="h-12 w-12 text-coral-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-navy-50 mb-2">247</div>
              <div className="text-navy-400">Active Clients</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <TrendingUp className="h-12 w-12 text-coral-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-navy-50 mb-2">89%</div>
              <div className="text-navy-400">Retention Rate</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <Calendar className="h-12 w-12 text-coral-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-navy-50 mb-2">156</div>
              <div className="text-navy-400">This Month's Bookings</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-navy-50">Recent Client Reports</h3>
            
            {mockClients.map((client) => (
              <div key={client.id} className="glass-effect rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-50 mb-1">
                      {client.name}
                    </h4>
                    <p className="text-navy-400">
                      Last analysis: {client.lastAnalysis}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-coral-400 font-bold text-xl">
                      {client.improvementScore}%
                    </div>
                    <div className="text-navy-400 text-sm">Improvement</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-navy-400 text-sm">Next Appointment</div>
                    <div className="text-navy-200 font-medium">{client.nextAppointment}</div>
                  </div>
                  <div>
                    <div className="text-navy-400 text-sm">Total Treatments</div>
                    <div className="text-navy-200 font-medium">{client.treatments}</div>
                  </div>
                  <div>
                    <div className="text-navy-400 text-sm">Total Revenue</div>
                    <div className="text-navy-200 font-medium">{client.totalRevenue}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-coral-500/20 hover:bg-coral-500/30 text-coral-400 font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>View Report</span>
                    </button>
                    <button className="bg-navy-700 hover:bg-navy-600 text-navy-200 font-medium py-2 px-3 rounded-lg transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="w-full bg-navy-800 rounded-full h-2">
                  <div 
                    className="bg-coral-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${client.improvementScore}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="btn-primary">
              Generate Monthly Analytics Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPortal;
