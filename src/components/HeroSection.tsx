
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100 bg-grid-8 opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your 
              <span className="text-blue-600"> Manufacturing</span>
              <br />
              <span className="text-green-600">Operations</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Custom ERP, CRM, and OMS solutions built specifically for Indian manufacturers. 
              Get modern, cost-effective software that grows with your business.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                <Link to="/demo">
                  Request Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 border-blue-600 text-blue-600 hover:bg-blue-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Case Study
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading manufacturers</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
                <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-600 font-semibold">
                  Manufacturing Co.
                </div>
                <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-600 font-semibold">
                  Steel Industries
                </div>
                <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-600 font-semibold">
                  AutoParts Ltd.
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Dashboard Preview</h3>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded p-3">
                    <div className="flex justify-between">
                      <span>Production Efficiency</span>
                      <span className="font-bold">↑ 34%</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <div className="flex justify-between">
                      <span>Cost Reduction</span>
                      <span className="font-bold">↓ 28%</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <div className="flex justify-between">
                      <span>Order Processing</span>
                      <span className="font-bold">↑ 45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              ROI: 300%+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
