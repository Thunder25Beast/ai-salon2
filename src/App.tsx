import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// import CustomerPortal from "./components/CustomerPortal";
import withLayout from './components/ui/withLayout';
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import PartnerForm from "./components/PartnerForm";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import DemoWidget from "./components/DemoWidget";
import Results from "./components/Gallery";
import Redirect from "./components/Redirect";
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={withLayout(Index)({})} />
            {/* <Route path="/portal" element={withLayout(CustomerPortal)({})} /> */}
            <Route path="/features" element={withLayout(Features)({})} />
            <Route path="/testimonials" element={withLayout(Testimonials)({})} />
            <Route path="/partner" element={withLayout(PartnerForm)({})} />
            <Route path="/gallery" element={withLayout(Gallery)({})} />
            <Route path="/faq" element={withLayout(FAQ)({})} />
            <Route path="/contact" element={withLayout(Contact)({})} />
            <Route path="/demo" element={withLayout(() => <DemoWidget isModal={false} onClose={() => {}} />)({})} />
            <Route path="/results" element={withLayout(Results)({})} />
            <Route path="/redirect" element={withLayout(Redirect)({})} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={withLayout(Redirect)({ to: "/" })} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
