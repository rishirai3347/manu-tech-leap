
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Process from "./pages/Process";
import Demo from "./pages/Demo";
import Blog from "./pages/Blog";
import BlogERP from "./pages/BlogERP";
import BlogCRM from "./pages/BlogCRM";
import BlogOMS from "./pages/BlogOMS";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/erp" element={<BlogERP />} />
          <Route path="/blog/crm" element={<BlogCRM />} />
          <Route path="/blog/oms" element={<BlogOMS />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
