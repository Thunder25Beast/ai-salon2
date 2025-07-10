import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { Send, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    // Salon Information
    salonName: '',
    BranchID: '',
    city: '',
    avgMonthlyFootfall: '',
    clientType: '',
    
    // Primary Contact
    contactName: '',
    email: '',
    phone: '',
    designation: '',
    
    // Business Details
    businessType: '',
    gstin: '',
    preferredStartDate: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [backendStatus, setBackendStatus] = useState<string | null>(null);
  const { toast } = useToast();
  const partnerSectionRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Phone number validation
    const phone = formData.phone.replace(/\D/g, '');
    if (phone.length !== 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Phone number must be exactly 10 digits.",
        variant: "destructive"
      });
      return;
    }
    // Prepare payload for backend
    const payload = {
      source: "website",
      salonName: formData.salonName,
      branchNumber: formData.BranchID,
      city: formData.city,
      avgMonthlyFootfall: Number(formData.avgMonthlyFootfall) || 0,
      clientType: formData.clientType,
      contactName: formData.contactName,
      contactEmail: formData.email,
      contactPhone: formData.phone,
      contactDesignation: formData.designation,
      businessType: formData.businessType,
      gstin: formData.gstin
    };
    try {
      const username = "admin";
      const password = "eagle123";
      const credentials = btoa(`${username}:${password}`);
      await fetch('https://eagle-backend-v1-production-734c.up.railway.app/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`
        },
        body: JSON.stringify(payload)
      }); 
      setIsSubmitted(true);
      toast({
        title: "Partnership Request Submitted!",
        description: "We'll contact you within 12 hours to discuss your revenue transformation.",
      });
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your request. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const testBackend = async () => {
    try {
      const username = "admin";
      const password = "eagle123";
      const credentials = btoa(`${username}:${password}`);
      const res = await fetch('https://eagle-backend-v1-production-734c.up.railway.app/api/leads', {
        headers: {
          'Authorization': `Basic ${credentials}`
        }
      });
      if (res.ok) {
        setBackendStatus('Backend is reachable');
      } else {
        setBackendStatus('Backend responded with error: ' + res.status);
      }
    } catch (err) {
      setBackendStatus('Could not reach backend.');
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubmitted]);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Upto 150% Revenue Boost Potential",
      description: "Leverage AI-driven insights to elevate your salon’s earning capacity"
    },
    {
      icon: Users,
      title: "30-Day Client Retention Goal",
      description: "Clients get automatic notifications for follow-ups, helping you build consistent return visits."
    },
    {
      icon: Zap,
      title: "Implementation whenever you say",
      description: "We’ll implement the system in 10 minutes on your preferred date, no pressure, just your timeline."
    }
  ];

  if (isSubmitted) {
    return (
      <section ref={partnerSectionRef} id="partner" className="mt-10 section-padding bg-navy-900">
        <Confetti recycle={false} />
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center glass-effect rounded-3xl p-12">
            <CheckCircle className="h-20 w-20 text-coral-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold mb-4 text-navy-50">
              Welcome to the Revolution!
            </h2>
            <p className="text-navy-300 text-lg mb-6">
              Our revenue optimization specialist will contact you within 12 hours to schedule your salon transformation.
            </p>
            <div className="text-coral-400 font-semibold text-xl mt-6">
              Get ready to unlock the magic of AI!
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={partnerSectionRef} id="partner" className="mt-10 section-padding bg-navy-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy-50">
            Ready to Transform
            <span className="gradient-text"> Your Salon?</span>
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
              Be among the first salons onboarding our AI system to boost revenue by up to 150%.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-8 text-navy-50">
              What You Get as Our Partner:
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 glass-effect rounded-xl hover-lift"
                >
                  <div className="bg-coral-500 p-3 rounded-xl flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-50 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-navy-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-coral-500/10 rounded-2xl border border-coral-500/20">
              <div className="text-coral-400 font-semibold mb-2">Limited Time Offer:</div>
              <div className="text-navy-50 text-lg">
                First 30 partners get <span className="font-bold">1 month free</span> implementation support
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Salon Information Section */}
              <div>
                <h3 className="text-xl font-semibold text-navy-50 mb-6 border-b border-navy-700 pb-2">
                  Salon Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      Salon Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.salonName}
                      onChange={(e) => setFormData({...formData, salonName: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                      placeholder="Your salon's name"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      Branch ID/Number
                    </label>
                    <input
                      type="text"
                      value={formData.BranchID}
                      onChange={(e) => setFormData({...formData, BranchID: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                      placeholder="Enter branch ID or number (if applicable)"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                      placeholder="Primary city location"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      Avg Monthly Customers *
                    </label>
                    <input
                      type="number"
                      required
                      min={0}
                      value={formData.avgMonthlyFootfall}
                      onChange={(e) => setFormData({...formData, avgMonthlyFootfall: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                      placeholder="Enter average monthly Customers"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-navy-200 font-medium mb-2">
                      Client Type *
                    </label>
                    <select
                      required
                      value={formData.clientType}
                      onChange={(e) => setFormData({...formData, clientType: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                    >
                      <option value="">Select client type</option>
                      <option value="walk-in">Walk-in</option>
                      <option value="appointment">Appointment</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Primary Contact Section */}
              <div>
                <h3 className="text-xl font-semibold text-navy-50 mb-6 border-b border-navy-700 pb-2">
                  Primary Contact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                      placeholder="Contact person name"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      Designation *
                    </label>
                    <select
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({...formData, designation: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                    >
                      <option value="">Select designation</option>
                      <option value="owner">Owner</option>
                      <option value="manager">Manager</option>
                      <option value="director">Director</option>
                      <option value="partner">Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                      placeholder="contact@salon.com"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value.length > 10) return;
                        setFormData({ ...formData, phone: value });
                      }}
                      className={`w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors ${formData.phone && formData.phone.length !== 10 ? 'border-red-500' : ''}`}
                      placeholder="9876543210"
                    />
                    {formData.phone && formData.phone.length !== 10 && (
                      <span className="text-red-500 text-sm mt-1 block">Phone number must be exactly 10 digits.</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Business Details Section */}
              <div>
                <h3 className="text-xl font-semibold text-navy-50 mb-6 border-b border-navy-700 pb-2">
                  Business Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      Business Type *
                    </label>
                    <select
                      required
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                    >
                      <option value="">Select business type</option>
                      <option value="partnership">Partnership</option>
                      <option value="independent">Independent</option>
                      <option value="franchise">Franchise</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy-200 font-medium mb-2">
                      GSTIN
                    </label>
                    <input
                      type="text"
                      value={formData.gstin}
                      onChange={(e) => setFormData({...formData, gstin: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                      placeholder="22AAAAA0000A1Z5 (Optional)"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-navy-200 font-medium mb-2">
                      Preferred Start Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredStartDate}
                      onChange={(e) => setFormData({...formData, preferredStartDate: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-navy-50 focus:outline-none focus:border-coral-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8 flex justify-center">
                <button
                  type="button"
                  className="btn-secondary px-4 py-2 rounded-lg text-base"
                  onClick={testBackend}
                >
                  Test Backend Connectivity
                </button>
                {backendStatus && (
                  <span className="ml-4 text-coral-400 font-semibold">{backendStatus}</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-3 text-lg"
              >
                <span>Start My Revenue Transformation</span>
                <Send className="h-5 w-5" />
              </button>

              <p className="text-navy-400 text-sm text-center">
                We'll contact you within 12 hours to discuss your custom implementation plan
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;
