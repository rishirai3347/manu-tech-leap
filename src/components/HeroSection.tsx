import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ArrowRightCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 font-medium text-sm mb-8 shadow-sm">
            🏭 Trusted by 200+ Manufacturing Companies
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-display tracking-wider leading-tight mb-6 mx-auto max-w-4xl" style={{ letterSpacing: '-0.01em' }}>
            Modern ERP for Manufacturers<br />
            Empower Your Team & Clients
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed font-normal text-center">
            Modern ERP and CRM for your business. Branded client portals for your customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-200 font-semibold flex items-center gap-2 transform hover:scale-105 focus:scale-105"
            >
              <Link to="/demo">
                Get Started
                <ArrowRightCircle className="ml-1 h-6 w-6" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-4 text-lg rounded-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 font-semibold flex items-center gap-2 transform hover:scale-105 focus:scale-105"
              onClick={() => window.open('https://www.youtube.com/watch?v=j96lsjIrdw8', '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              How It Works
            </Button>
          </div>
          <div className="text-gray-400 text-sm mb-10">No credit card needed • 90-day ROI guarantee</div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">45%</div>
              <div className="text-gray-600 font-medium">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">₹2.5Cr</div>
              <div className="text-gray-600 font-medium">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">90 Days</div>
              <div className="text-gray-600 font-medium">To Go Live</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Integration Carousel */}
      <div className="mt-20 bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Seamless Integration with Your Existing Tech Stack</h3>
            <p className="text-gray-600 font-medium">We integrate with any technology you're already using</p>
          </div>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll space-x-6">
                {/* First Set */}
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-bold text-blue-800 mb-2">Microsoft Excel</h4>
                  <p className="text-sm text-blue-700">Import/Export data seamlessly</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🏢</div>
                  <h4 className="font-bold text-green-800 mb-2">SAP ERP</h4>
                  <p className="text-sm text-green-700">Full SAP integration & migration</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-bold text-purple-800 mb-2">Microsoft Dynamics</h4>
                  <p className="text-sm text-purple-700">CRM & ERP synchronization</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">📈</div>
                  <h4 className="font-bold text-orange-800 mb-2">QuickBooks</h4>
                  <p className="text-sm text-orange-700">Financial data integration</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🔄</div>
                  <h4 className="font-bold text-red-800 mb-2">Tally ERP</h4>
                  <p className="text-sm text-red-700">Accounting system sync</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">☁️</div>
                  <h4 className="font-bold text-indigo-800 mb-2">AWS Cloud</h4>
                  <p className="text-sm text-indigo-700">Cloud infrastructure & hosting</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🔒</div>
                  <h4 className="font-bold text-teal-800 mb-2">Google Workspace</h4>
                  <p className="text-sm text-teal-700">Document & email integration</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">📱</div>
                  <h4 className="font-bold text-pink-800 mb-2">Mobile Apps</h4>
                  <p className="text-sm text-pink-700">iOS & Android compatibility</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🔗</div>
                  <h4 className="font-bold text-yellow-800 mb-2">API Integration</h4>
                  <p className="text-sm text-yellow-700">REST & GraphQL APIs</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🛠️</div>
                  <h4 className="font-bold text-gray-800 mb-2">Custom Systems</h4>
                  <p className="text-sm text-gray-700">Legacy system integration</p>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-bold text-blue-800 mb-2">Microsoft Excel</h4>
                  <p className="text-sm text-blue-700">Import/Export data seamlessly</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🏢</div>
                  <h4 className="font-bold text-green-800 mb-2">SAP ERP</h4>
                  <p className="text-sm text-green-700">Full SAP integration & migration</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-bold text-purple-800 mb-2">Microsoft Dynamics</h4>
                  <p className="text-sm text-purple-700">CRM & ERP synchronization</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">📈</div>
                  <h4 className="font-bold text-orange-800 mb-2">QuickBooks</h4>
                  <p className="text-sm text-orange-700">Financial data integration</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🔄</div>
                  <h4 className="font-bold text-red-800 mb-2">Tally ERP</h4>
                  <p className="text-sm text-red-700">Accounting system sync</p>
                </div>
                
                <div className="flex-shrink-0 w-48 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">☁️</div>
                  <h4 className="font-bold text-indigo-800 mb-2">AWS Cloud</h4>
                  <p className="text-sm text-indigo-700">Cloud infrastructure & hosting</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">Hover over cards to pause • We integrate with any technology stack</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
