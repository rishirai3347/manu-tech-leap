import React from 'react';
import { Settings, Users, MonitorCheck, TrendingUp, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Settings className="w-8 h-8 text-blue-600 mb-2" />,
    title: 'ERP (Enterprise Resource Planning)',
    desc: 'Automate and streamline your internal operations—inventory, production, sales, and more. No more manual errors or delays.'
  },
  {
    icon: <Users className="w-8 h-8 text-green-600 mb-2" />,
    title: 'CRM (Customer Relationship Management)',
    desc: 'Manage leads, sales, and customer relationships in one place. Grow your business with smarter sales and support.'
  },
  {
    icon: <MonitorCheck className="w-8 h-8 text-indigo-600 mb-2" />,
    title: 'Client Portal',
    desc: 'Give your customers a modern portal to monitor, operate, and update their machines—so you deliver more value and unlock new revenue.'
  }
];

const EducationSection = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Why Digital Solutions?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Digital transformation isn't just for big companies. With the right tools, you can automate, grow, and delight your customers—no matter your size.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center">
            {f.icon}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-600 mb-2">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <TrendingUp className="w-10 h-10 text-blue-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900 mb-1">Grow Faster</div>
          <div className="text-gray-600">Boost efficiency, make smarter decisions, and scale your business with ease.</div>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-10 h-10 text-green-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900 mb-1">Delight Your Customers</div>
          <div className="text-gray-600">Give your clients a premium digital experience—so they stay loyal and pay more.</div>
        </div>
        <div className="flex flex-col items-center">
          <DollarSign className="w-10 h-10 text-purple-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900 mb-1">Save Money</div>
          <div className="text-gray-600">Automate manual work, reduce errors, and save lakhs every year.</div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection; 