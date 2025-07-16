import React from 'react';
import { CheckCircle, DollarSign, Settings, Zap, Heart, Users } from 'lucide-react';

  const benefits = [
    {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Low Cost',
    description: 'Enterprise-grade solutions at a fraction of the price of big brands. Built for Indian manufacturers.',
    color: 'text-green-600'
    },
    {
    icon: <Settings className="w-8 h-8" />,
    title: 'Custom Solution',
    description: 'Every system is tailored to your unique business and your clients’ needs. No one-size-fits-all.',
      color: 'text-blue-600'
    },
    {
    icon: <Users className="w-8 h-8" />,
    title: 'Empower Your Clients',
    description: 'Give your customers a modern portal to monitor, operate, and update their machines—so you deliver more value and unlock new revenue.',
    color: 'text-indigo-600'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'New Technology',
    description: 'Built with the latest, most reliable technology for future-proof growth and seamless experience.',
    color: 'text-purple-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
    title: 'Made for India',
    description: 'Local expertise, local support, and deep understanding of Indian manufacturing.',
      color: 'text-red-600'
    }
  ];

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600 font-extrabold tracking-wide">VEEK</span><span className="text-green-600 font-extrabold tracking-wide">DAYS</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help you grow your business and delight your customers with affordable, custom digital solutions—built for manufacturers and their clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
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

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How We Compare
            </h3>
            <p className="text-lg text-gray-600">
              See why manufacturers choose VEEKDAYS over expensive alternatives
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-blue-600">VEEKDAYS</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-500">Large Competitors</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-500">Generic Solutions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Cost</td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-sm text-gray-600 block mt-1">Affordable</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-sm text-gray-600 block mt-1">Expensive</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-500 text-xl">~</span>
                    <span className="text-sm text-gray-600 block mt-1">Variable</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Customization</td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-sm text-gray-600 block mt-1">Fully Custom</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-500 text-xl">~</span>
                    <span className="text-sm text-gray-600 block mt-1">Limited</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-sm text-gray-600 block mt-1">One-size-fits-all</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Implementation Time</td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-sm text-gray-600 block mt-1">90 Days</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-sm text-gray-600 block mt-1">6-12 Months</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-500 text-xl">~</span>
                    <span className="text-sm text-gray-600 block mt-1">Variable</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">Local Support</td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-sm text-gray-600 block mt-1">24/7 Indian Team</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-yellow-500 text-xl">~</span>
                    <span className="text-sm text-gray-600 block mt-1">Global Support</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-sm text-gray-600 block mt-1">Limited</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h3>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Join hundreds of manufacturers who have transformed their operations with our solutions. 
              See measurable results within 90 days of implementation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <DollarSign className="h-8 w-8 text-green-300 mb-3" />
                <span className="font-medium">90-day ROI guarantee</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="h-8 w-8 text-green-300 mb-3" />
                <span className="font-medium">24/7 expert support</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Zap className="h-8 w-8 text-green-300 mb-3" />
                <span className="font-medium">Fast implementation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
