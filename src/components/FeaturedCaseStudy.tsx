
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const FeaturedCaseStudy = () => {
  const metrics = [
    { icon: TrendingUp, value: '45%', label: 'Efficiency Increase', color: 'text-green-600' },
    { icon: DollarSign, value: '₹2.5Cr', label: 'Annual Savings', color: 'text-blue-600' },
    { icon: Clock, value: '30%', label: 'Faster Processing', color: 'text-purple-600' },
    { icon: Users, value: '90 Days', label: 'Implementation', color: 'text-orange-600' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success Stories That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how we helped SteelCorp Industries transform their manufacturing operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Metrics */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map(({ icon: Icon, value, label, color }, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <Icon className={`w-8 h-8 ${color} mb-4 group-hover:scale-110 transition-transform`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                  <div className="text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A 500-employee steel manufacturing company struggled with manual processes, 
                inventory mismanagement, and lack of real-time production visibility.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                We implemented a comprehensive ERP system with integrated inventory management, 
                production planning, and real-time analytics dashboard.
              </p>
            </div>
          </div>

          {/* Right side - Testimonial */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-none shadow-2xl overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <Quote className="h-12 w-12 text-blue-200 mb-8 relative z-10" />
                <blockquote className="text-xl leading-relaxed mb-8 relative z-10">
                  "TechSolutions didn't just deliver software – they delivered transformation. 
                  Our production planning is now automated, inventory waste has dropped dramatically, 
                  and we have real-time insights that drive better decisions every day."
                </blockquote>
                <div className="flex items-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                    RK
                  </div>
                  <div>
                    <div className="font-bold text-lg">Rajesh Kumar</div>
                    <div className="text-blue-200">Operations Director</div>
                    <div className="text-blue-200 text-sm">SteelCorp Industries</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready for Similar Results?</h3>
                <p className="mb-8 opacity-90 leading-relaxed">
                  Schedule a free consultation to see how we can transform your manufacturing operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl px-8">
                    <Link to="/case-studies">
                      View All Case Studies
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl px-8">
                    <Link to="/demo">Request Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
