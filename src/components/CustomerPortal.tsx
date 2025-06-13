import React, { useState } from 'react';
import { User, Users, Plus, Search, LogOut, Calendar, FileText, TrendingUp, Download, ScanLine } from 'lucide-react';

const mockClients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    phone: '555-1234',
    lastAnalysis: '2025-01-15',
    improvementScore: 73,
    nextAppointment: '2025-02-01',
    treatments: 6,
    totalRevenue: '$1,247'
  },
  {
    id: 2,
    name: 'Emily Chen',
    phone: '555-5678',
    lastAnalysis: '2025-01-10',
    improvementScore: 89,
    nextAppointment: '2025-01-28',
    treatments: 8,
    totalRevenue: '$2,156'
  }
];

const CustomerPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [clients, setClients] = useState(mockClients);
  const [scanModal, setScanModal] = useState(false);
  const [scanData, setScanData] = useState({ name: '', phone: '', image: null });
  const [addModal, setAddModal] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', phone: '' });

  // Add a new client
  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    setClients([
      ...clients,
      {
        id: clients.length + 1,
        name: newClient.name,
        phone: newClient.phone,
        lastAnalysis: '-',
        improvementScore: 0,
        nextAppointment: '-',
        treatments: 0,
        totalRevenue: '$0'
      }
    ]);
    setAddModal(false);
    setNewClient({ name: '', phone: '' });
  };

  // Scan a client (simulate photo upload)
  const handleScanClient = (e: React.FormEvent) => {
    e.preventDefault();
    setClients([
      ...clients,
      {
        id: clients.length + 1,
        name: scanData.name,
        phone: scanData.phone,
        lastAnalysis: new Date().toISOString().slice(0, 10),
        improvementScore: Math.floor(Math.random() * 40) + 60,
        nextAppointment: '-',
        treatments: 1,
        totalRevenue: '$0'
      }
    ]);
    setScanModal(false);
    setScanData({ name: '', phone: '', image: null });
  };

  // Salon owner navbar
  const OwnerNav = (
    <nav className="w-full flex items-center justify-between bg-navy-950 border-b border-navy-800 px-8 py-4">
      <div className="flex items-center space-x-6">
        <span className="text-2xl font-serif font-bold text-coral-400 flex items-center space-x-2">
          <Users className="h-7 w-7 mr-2" />
          Salon Portal
        </span>
        <button onClick={() => setActiveTab('dashboard')} className={`font-medium px-4 py-2 rounded-xl transition-colors ${activeTab === 'dashboard' ? 'bg-coral-500 text-white' : 'text-navy-200 hover:bg-navy-800'}`}>Dashboard</button>
        <button onClick={() => setActiveTab('clients')} className={`font-medium px-4 py-2 rounded-xl transition-colors ${activeTab === 'clients' ? 'bg-coral-500 text-white' : 'text-navy-200 hover:bg-navy-800'}`}>Clients</button>
        <button onClick={() => setActiveTab('scan')} className={`font-medium px-4 py-2 rounded-xl transition-colors ${activeTab === 'scan' ? 'bg-coral-500 text-white' : 'text-navy-200 hover:bg-navy-800'}`}>Scan Client</button>
        <button onClick={() => setActiveTab('analytics')} className={`font-medium px-4 py-2 rounded-xl transition-colors ${activeTab === 'analytics' ? 'bg-coral-500 text-white' : 'text-navy-200 hover:bg-navy-800'}`}>Analytics</button>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => setAddModal(true)} className="btn-secondary flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Add Client</span>
        </button>
        <button className="bg-navy-800 hover:bg-navy-700 text-navy-200 font-medium py-2 px-4 rounded-xl flex items-center space-x-2">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );

  // Dashboard tab
  const Dashboard = (
    <div className="p-8">
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <div className="glass-effect rounded-xl p-6 text-center">
          <Users className="h-12 w-12 text-coral-400 mx-auto mb-4" />
          <div className="text-2xl font-bold text-navy-50 mb-2">{clients.length}</div>
          <div className="text-navy-400">Total Clients</div>
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
        <div className="glass-effect rounded-xl p-6 text-center">
          <ScanLine className="h-12 w-12 text-coral-400 mx-auto mb-4" />
          <div className="text-2xl font-bold text-navy-50 mb-2">Scan Client</div>
          <button onClick={() => setScanModal(true)} className="btn-primary mt-2 w-full">Start Scan</button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="btn-primary">Generate Monthly Analytics Report</button>
      </div>
    </div>
  );

  // Clients tab
  const Clients = (
    <div className="p-8">
      <h3 className="text-2xl font-bold text-navy-50 mb-6">Client List</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-navy-900 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-navy-800 text-navy-200">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Last Analysis</th>
              <th className="py-3 px-4 text-left">Improvement</th>
              <th className="py-3 px-4 text-left">Next Appointment</th>
              <th className="py-3 px-4 text-left">Treatments</th>
              <th className="py-3 px-4 text-left">Revenue</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b border-navy-800 hover:bg-navy-800/40 transition-colors">
                <td className="py-3 px-4 text-navy-50 font-medium">{client.name}</td>
                <td className="py-3 px-4">{client.phone}</td>
                <td className="py-3 px-4">{client.lastAnalysis}</td>
                <td className="py-3 px-4">{client.improvementScore}%</td>
                <td className="py-3 px-4">{client.nextAppointment}</td>
                <td className="py-3 px-4">{client.treatments}</td>
                <td className="py-3 px-4">{client.totalRevenue}</td>
                <td className="py-3 px-4">
                  <button className="bg-coral-500/20 hover:bg-coral-500/30 text-coral-400 font-medium py-1 px-3 rounded-lg transition-colors flex items-center space-x-1">
                    <FileText className="h-4 w-4" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Scan tab
  const Scan = (
    <div className="p-8 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-navy-50 mb-6 flex items-center"><ScanLine className="h-7 w-7 mr-2 text-coral-400" />Scan New Client</h3>
      <form onSubmit={handleScanClient} className="space-y-6">
        <div>
          <label className="block text-navy-200 font-medium mb-2">Client Name</label>
          <input
            type="text"
            required
            value={scanData.name}
            onChange={e => setScanData({ ...scanData, name: e.target.value })}
            className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
            placeholder="Enter client name"
          />
        </div>
        <div>
          <label className="block text-navy-200 font-medium mb-2">Phone Number</label>
          <input
            type="text"
            required
            value={scanData.phone}
            onChange={e => setScanData({ ...scanData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label className="block text-navy-200 font-medium mb-2">Upload/Scan Photo</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={e => setScanData({ ...scanData, image: e.target.files?.[0] || null })}
            className="w-full px-4 py-2 bg-navy-800 border border-navy-700 rounded-xl text-navy-50"
          />
        </div>
        <button type="submit" className="btn-primary w-full">Save & Scan</button>
      </form>
    </div>
  );

  // Analytics tab
  const Analytics = (
    <div className="p-8">
      <h3 className="text-2xl font-bold text-navy-50 mb-6">Salon Analytics</h3>
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <div className="glass-effect rounded-xl p-6 text-center">
          <Users className="h-12 w-12 text-coral-400 mx-auto mb-4" />
          <div className="text-2xl font-bold text-navy-50 mb-2">{clients.length}</div>
          <div className="text-navy-400">Total Clients</div>
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
        <div className="glass-effect rounded-xl p-6 text-center">
          <ScanLine className="h-12 w-12 text-coral-400 mx-auto mb-4" />
          <div className="text-2xl font-bold text-navy-50 mb-2">Scan Client</div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="btn-primary">Download Full Analytics</button>
      </div>
    </div>
  );

  // Add Client Modal
  const AddClientModal = addModal && (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-navy-900 rounded-2xl max-w-md w-full p-8">
        <h3 className="text-xl font-bold text-navy-50 mb-6 flex items-center"><Plus className="h-6 w-6 mr-2 text-coral-400" />Add New Client</h3>
        <form onSubmit={handleAddClient} className="space-y-6">
          <div>
            <label className="block text-navy-200 font-medium mb-2">Client Name</label>
            <input
              type="text"
              required
              value={newClient.name}
              onChange={e => setNewClient({ ...newClient, name: e.target.value })}
              className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
              placeholder="Enter client name"
            />
          </div>
          <div>
            <label className="block text-navy-200 font-medium mb-2">Phone Number</label>
            <input
              type="text"
              required
              value={newClient.phone}
              onChange={e => setNewClient({ ...newClient, phone: e.target.value })}
              className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
              placeholder="Enter phone number"
            />
          </div>
          <button type="submit" className="btn-primary w-full">Add Client</button>
        </form>
        <button onClick={() => setAddModal(false)} className="mt-6 w-full text-navy-400 hover:text-coral-400">Cancel</button>
      </div>
    </div>
  );

  // Scan Modal (shortcut)
  const ScanModal = scanModal && (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-navy-900 rounded-2xl max-w-md w-full p-8">
        <h3 className="text-xl font-bold text-navy-50 mb-6 flex items-center"><ScanLine className="h-6 w-6 mr-2 text-coral-400" />Scan New Client</h3>
        <form onSubmit={handleScanClient} className="space-y-6">
          <div>
            <label className="block text-navy-200 font-medium mb-2">Client Name</label>
            <input
              type="text"
              required
              value={scanData.name}
              onChange={e => setScanData({ ...scanData, name: e.target.value })}
              className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
              placeholder="Enter client name"
            />
          </div>
          <div>
            <label className="block text-navy-200 font-medium mb-2">Phone Number</label>
            <input
              type="text"
              required
              value={scanData.phone}
              onChange={e => setScanData({ ...scanData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label className="block text-navy-200 font-medium mb-2">Upload/Scan Photo</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={e => setScanData({ ...scanData, image: e.target.files?.[0] || null })}
              className="w-full px-4 py-2 bg-navy-800 border border-navy-700 rounded-xl text-navy-50"
            />
          </div>
          <button type="submit" className="btn-primary w-full">Save & Scan</button>
        </form>
        <button onClick={() => setScanModal(false)} className="mt-6 w-full text-navy-400 hover:text-coral-400">Cancel</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-navy-900 w-full flex flex-col">
      {OwnerNav}
      {AddClientModal}
      {ScanModal}
      <div className="flex-1 flex flex-col">
        {activeTab === 'dashboard' && Dashboard}
        {activeTab === 'clients' && Clients}
        {activeTab === 'scan' && Scan}
        {activeTab === 'analytics' && Analytics}
      </div>
    </div>
  );
};

export default CustomerPortal;
