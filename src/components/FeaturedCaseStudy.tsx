import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, TrendingUp, Users, Clock, DollarSign, Star } from 'lucide-react';

const FeaturedCaseStudy = () => {
  const metrics = [
    { icon: TrendingUp, value: '45%', label: 'Efficiency Increase', color: 'text-green-600' },
    { icon: DollarSign, value: '₹2.5Cr', label: 'Annual Savings', color: 'text-blue-600' },
    { icon: Clock, value: '30%', label: 'Faster Processing', color: 'text-purple-600' },
    { icon: Users, value: '90 Days', label: 'Implementation', color: 'text-orange-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
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

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
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
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <Quote className="h-12 w-12 text-blue-200 mb-8 relative z-10" />
              <blockquote className="text-xl leading-relaxed mb-8 relative z-10">
                "VEEKDAYS didn't just deliver software – they delivered transformation. 
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
              
              {/* Star rating */}
              <div className="flex items-center mt-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-blue-200 text-sm">5.0 out of 5</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-4">1</div>
                  <div>
                    <div className="font-medium text-gray-900">Discovery & Planning</div>
                    <div className="text-sm text-gray-600">Week 1-2</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mr-4">2</div>
                  <div>
                    <div className="font-medium text-gray-900">Development & Testing</div>
                    <div className="text-sm text-gray-600">Week 3-10</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm mr-4">3</div>
                  <div>
                    <div className="font-medium text-gray-900">Deployment & Training</div>
                    <div className="text-sm text-gray-600">Week 11-12</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm mr-4">4</div>
                  <div>
                    <div className="font-medium text-gray-900">Go-Live & Support</div>
                    <div className="text-sm text-gray-600">Week 13+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Similar Results?</h3>
            <p className="mb-10 opacity-90 leading-relaxed text-lg max-w-2xl mx-auto">
              Schedule a free consultation to see how we can transform your manufacturing operations 
              with measurable results in just 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl px-8 py-4 text-lg">
                <Link to="/case-studies">
                  View All Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl px-8 py-4 text-lg">
                <Link to="/demo">Request Free Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
