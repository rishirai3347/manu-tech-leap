
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

const FeaturedCaseStudy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Story: Transforming Manufacturing Excellence
          </h2>
          <p className="text-xl text-gray-600">
            See how we helped a leading steel manufacturer increase efficiency by 45%
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Stats and metrics */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-green-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
                <div className="text-gray-600">Efficiency Increase</div>
              </div>
              <div className="text-center bg-blue-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">₹2.5Cr</div>
                <div className="text-gray-600">Annual Savings</div>
              </div>
              <div className="text-center bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
                <div className="text-gray-600">Faster Processing</div>
              </div>
              <div className="text-center bg-orange-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">90 Days</div>
                <div className="text-gray-600">Implementation</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Challenge</h3>
              <p className="text-gray-600 mb-4">
                A 500-employee steel manufacturing company was struggling with manual processes, 
                inventory mismanagement, and lack of real-time visibility into production metrics.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solution</h3>
              <p className="text-gray-600">
                We implemented a comprehensive ERP system with integrated inventory management, 
                production planning, and real-time analytics dashboard.
              </p>
            </div>
          </div>

          {/* Right side - Testimonial */}
          <div className="space-y-8">
            <Card className="bg-blue-600 text-white border-none">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-blue-200 mb-6" />
                <blockquote className="text-lg mb-6">
                  "TechSolutions didn't just give us software – they gave us a competitive advantage. 
                  Our production planning is now automated, inventory waste has dropped dramatically, 
                  and we have real-time insights that help us make better decisions every day."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    RK
                  </div>
                  <div>
                    <div className="font-semibold">Rajesh Kumar</div>
                    <div className="text-blue-200">Operations Director, SteelCorp Industries</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Want Similar Results?</h3>
              <p className="mb-6 opacity-90">
                Schedule a free consultation to see how we can transform your manufacturing operations.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link to="/case-studies">
                    View All Case Studies
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Link to="/demo">Request Your Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
