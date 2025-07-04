
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 font-medium text-sm mb-8 shadow-sm animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by 500+ Manufacturing Companies
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] mb-8 animate-fade-in tracking-tight">
            Manufacturing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-extrabold">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in font-light">
            Transform your operations with custom ERP, CRM, and OMS solutions. 
            Built for Indian manufacturers who demand excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium">
              <Link to="/demo">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-medium">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">45%</div>
              <div className="text-gray-600 font-medium text-sm">Efficiency Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">₹2.5Cr</div>
              <div className="text-gray-600 font-medium text-sm">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">90 Days</div>
              <div className="text-gray-600 font-medium text-sm">To Go Live</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
