import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Monitor, Users, TrendingUp, Shield, Smartphone, Bell, BarChart3, Settings, ArrowRight, Eye, Zap } from 'lucide-react';

const ClientPortalShowcase = () => {
  const portalFeatures = [
    {
      icon: Monitor,
      title: 'Real-time Monitoring',
      description: 'Your clients can monitor their machines and processes 24/7 from anywhere',
      color: 'text-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Detailed insights and reports help clients optimize their operations',
      color: 'text-green-600'
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Instant notifications for maintenance, issues, or performance changes',
      color: 'text-orange-600'
    },
    {
      icon: Settings,
      title: 'Remote Control',
      description: 'Clients can adjust settings and parameters remotely with proper permissions',
      color: 'text-purple-600'
    }
  ];

  const businessBenefits = [
    {
      icon: TrendingUp,
      title: 'New Revenue Stream',
      description: 'Charge clients for premium portal access and monitoring services',
      highlight: '₹2-5L additional monthly revenue per client'
    },
    {
      icon: Users,
      title: 'Stronger Client Relationships',
      description: 'Become an essential partner, not just a vendor',
      highlight: '90% client retention rate'
    },
    {
      icon: Shield,
      title: 'Reduced Support Costs',
      description: 'Clients self-serve through the portal, reducing support calls',
      highlight: '60% reduction in support tickets'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Turn Your Clients Into 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Raving Fans
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Give your clients their own branded portal to monitor and control their machines. 
            Transform from a vendor into an essential technology partner.
          </p>
        </div>

        {/* Portal Preview */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Client Dashboard</h3>
                  <p className="text-gray-600">Real-time machine monitoring portal</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Machine Status Cards */}
              <div className="lg:col-span-2 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Production Line A</h4>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Efficiency</span>
                        <span className="font-bold text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Output</span>
                        <span className="font-bold text-gray-900">2,847 units</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Quality Control</h4>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pass Rate</span>
                        <span className="font-bold text-blue-600">98.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Defects</span>
                        <span className="font-bold text-gray-900">12</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Recent Alerts</h4>
                    <Bell className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Maintenance due in 2 days - Machine #3</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Efficiency target achieved - Line A</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls Panel */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Controls</h4>
                  <div className="space-y-3">
                    <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                      <Eye className="w-4 h-4 inline mr-2" />
                      View Details
                    </button>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      <Settings className="w-4 h-4 inline mr-2" />
                      Adjust Settings
                    </button>
                    <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                      <Zap className="w-4 h-4 inline mr-2" />
                      Emergency Stop
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile Access</h4>
                  <p className="text-sm text-gray-600 mb-4">Monitor from anywhere with our mobile app</p>
                  <Smartphone className="w-8 h-8 text-orange-600 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {portalFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <feature.icon className={`w-10 h-10 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Business Benefits */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How Client Portals Transform Your Business
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just sell machines – sell ongoing value and create recurring revenue streams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-10 h-10 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  {benefit.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Delight Your Clients?
            </h3>
            <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              See how our client portals can transform your business relationships and create new revenue streams. 
              Schedule a demo to see the portal in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold rounded-xl px-8 py-4 text-lg">
                <Link to="/demo">
                  See Live Portal Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold rounded-xl px-8 py-4 text-lg">
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalShowcase; 