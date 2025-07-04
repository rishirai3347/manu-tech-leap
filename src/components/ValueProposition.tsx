
import React from 'react';
import { CheckCircle, Shield, Zap, Target, Heart } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Deploy in 90 days with our proven implementation methodology and dedicated support team.',
      color: 'text-yellow-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Built for You',
      description: 'Every solution is custom-built to match your exact workflows and business requirements.',
      color: 'text-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Grade',
      description: 'Bank-level security with modern architecture that scales with your growing business.',
      color: 'text-green-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made in India',
      description: 'Deep understanding of local compliance, regulations, and manufacturing practices.',
      color: 'text-red-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Manufacturing Leaders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Choose TechSolutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another software company. We're your strategic partner in digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Results showcase */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join the Success Stories?</h3>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Join hundreds of manufacturers who have transformed their operations with our solutions. 
              See measurable results within 90 days of implementation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="h-8 w-8 text-green-300 mb-3" />
                <span className="font-semibold">90-day implementation</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="h-8 w-8 text-green-300 mb-3" />
                <span className="font-semibold">24/7 expert support</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="h-8 w-8 text-green-300 mb-3" />
                <span className="font-semibold">ROI guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
