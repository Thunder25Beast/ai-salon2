
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import PartnerForm from '../components/PartnerForm';
import DemoWidget from '../components/DemoWidget';
import Gallery from '../components/Gallery';
import CustomerPortal from '../components/CustomerPortal';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Index = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [showPortal, setShowPortal] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-navy-950">
      <Navigation 
        onShowDemo={() => setShowDemo(true)} 
        onShowPortal={() => setShowPortal(true)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="hidden" />
        
        <TabsContent value="home" className="mt-0">
          <Hero onShowDemo={() => setShowDemo(true)} />
          {/* <Features />
          <Testimonials /> */}
        </TabsContent>
        
        <TabsContent value="features" className="mt-0">
          <div className="pt-24">
            <Features />
          </div>
        </TabsContent>
        
        <TabsContent value="results" className="mt-0">
          <div className="pt-24">
            <Gallery />
          </div>
        </TabsContent>
        
        <TabsContent value="partner" className="mt-0">
          <div className="pt-24">
            <PartnerForm />
          </div>
        </TabsContent>
        
        <TabsContent value="demo" className="mt-0">
          <div className="pt-24 min-h-screen bg-navy-900 flex items-center justify-center">
            <DemoWidget onClose={() => {}} isModal={false} />
          </div>
        </TabsContent>
        
        <TabsContent value="faq" className="mt-0">
          <div className="pt-24">
            <FAQ />
          </div>
        </TabsContent>
        
        <TabsContent value="contact" className="mt-0">
          <div className="pt-24">
            <Contact />
          </div>
        </TabsContent>
      </Tabs>
      
      <Footer />
      
      {showDemo && (
        <DemoWidget onClose={() => setShowDemo(false)} isModal={true} />
      )}
      
      {showPortal && (
        <CustomerPortal onClose={() => setShowPortal(false)} />
      )}
    </div>
  );
};

export default Index;
