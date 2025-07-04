
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Cost-Effective Solutions',
      description: 'Up to 60% less expensive than enterprise alternatives, without compromising on quality or functionality.'
    },
    {
      icon: '🎯',
      title: 'Fully Customized',
      description: 'Every solution is built from scratch to match your specific workflows, processes, and business requirements.'
    },
    {
      icon: '⚡',
      title: 'Modern Technology',
      description: 'Built with cutting-edge tech stack ensuring scalability, security, and future-proof architecture.'
    },
    {
      icon: '🇮🇳',
      title: 'Made for India',
      description: 'Understanding of local regulations, tax requirements, and business practices specific to Indian manufacturing.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TechSolutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another software company. We're your digital transformation partner, 
            focused on delivering real results for manufacturing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of manufacturers who have already digitized their operations with our solutions. 
            See measurable results within 3 months of implementation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-400" />
              <span>3-month implementation</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-400" />
              <span>24/7 support included</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-400" />
              <span>ROI guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
