
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import ValueProposition from '@/components/ValueProposition';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <ValueProposition />
      <FeaturedCaseStudy />
      <Footer />
    </div>
  );
};

export default Index;
