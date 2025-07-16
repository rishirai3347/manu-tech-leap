import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import ValueProposition from '@/components/ValueProposition';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import AIShowcaseSection from '@/components/AIShowcaseSection';
import EducationSection from '@/components/EducationSection';
import ClientPortalShowcase from '@/components/ClientPortalShowcase';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <AIShowcaseSection />
      <ServicesOverview />
      <ClientPortalShowcase />
      <ValueProposition />
      <FeaturedCaseStudy />
      <Footer />
    </div>
  );
};

export default Index;
