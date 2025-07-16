import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Settings, BarChart3, Database, Shield, Zap, TrendingUp, DollarSign } from 'lucide-react';

const BlogERP = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 mb-4">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ERP Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Custom ERP Solutions: The Complete Guide for Indian Manufacturers
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how custom Enterprise Resource Planning (ERP) systems can transform your manufacturing operations, 
              streamline processes, and drive significant cost savings.
            </p>
            
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <User className="w-4 h-4 mr-2" />
              <span className="mr-6">VEEKDAYS Team</span>
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-6">December 20, 2024</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Custom ERP System?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An Enterprise Resource Planning (ERP) system is the digital backbone of modern manufacturing operations. 
                Unlike generic off-the-shelf solutions, custom ERP systems are specifically designed to match your unique 
                business processes, industry requirements, and operational workflows.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For Indian manufacturers, this means having a system that understands local compliance requirements, 
                handles GST calculations automatically, integrates with popular Indian accounting software like Tally, 
                and provides real-time insights in your preferred language and currency.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits of Custom ERP Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Increased Efficiency</h3>
                    </div>
                    <p className="text-gray-600">
                      Automate manual processes, reduce data entry errors, and streamline workflows across all departments. 
                      Our clients typically see 30-45% improvement in operational efficiency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Cost Reduction</h3>
                    </div>
                    <p className="text-gray-600">
                      Reduce operational costs by 25-40% through better inventory management, 
                      optimized production planning, and elimination of redundant processes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <BarChart3 className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Real-time Analytics</h3>
                    </div>
                    <p className="text-gray-600">
                      Get instant insights into production performance, inventory levels, 
                      financial metrics, and customer data to make informed decisions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Compliance & Security</h3>
                    </div>
                    <p className="text-gray-600">
                      Built-in compliance features for GST, TDS, and other Indian regulations. 
                      Enterprise-grade security to protect your sensitive business data.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Modules */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core ERP Modules for Manufacturing</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Production Planning & Scheduling</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced production planning that considers machine capacity, material availability, 
                    and workforce scheduling to optimize your manufacturing operations.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated production scheduling based on capacity and demand
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real-time machine status monitoring and maintenance alerts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Work order management with detailed routing and instructions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Quality control integration at every production stage
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Inventory & Warehouse Management</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive inventory control with real-time tracking, automated reordering, 
                    and multi-location warehouse management.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real-time inventory tracking across multiple locations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated reorder points and purchase order generation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Barcode and QR code scanning for quick inventory updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      FIFO/LIFO inventory valuation methods
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Financial Management & Accounting</h3>
                  <p className="text-gray-700 mb-4">
                    Complete financial management with Indian compliance features, 
                    multi-currency support, and seamless integration with existing accounting systems.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated GST calculation and filing support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Tally ERP integration for seamless accounting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Multi-currency support for international transactions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real-time financial reporting and analytics
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Quality Control & Compliance</h3>
                  <p className="text-gray-700 mb-4">
                    Built-in quality management system with compliance tracking, 
                    audit trails, and regulatory reporting capabilities.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Quality checkpoints at every production stage
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated compliance reporting for industry standards
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Document management and version control
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Audit trails for complete traceability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Process</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our proven implementation methodology ensures successful ERP deployment within 12-16 weeks, 
                with minimal disruption to your ongoing operations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-sm text-gray-600">Requirements gathering and process mapping</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Design</h3>
                  <p className="text-sm text-gray-600">System architecture and UI/UX design</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Development</h3>
                  <p className="text-sm text-gray-600">Custom development and integration</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">4</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Deployment</h3>
                  <p className="text-sm text-gray-600">Testing, training, and go-live</p>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: SteelCorp Industries</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "After implementing VEEKDAYS ERP, we saw a 45% increase in production efficiency and 
                reduced our operational costs by ₹2.5 crore annually. The real-time visibility into 
                our operations has transformed how we make decisions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RK
                </div>
                <div>
                  <div className="font-bold text-gray-900">Rajesh Kumar</div>
                  <div className="text-gray-600">Operations Director, SteelCorp Industries</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and discover how custom ERP can benefit your manufacturing business.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/demo">
                    Schedule Free Consultation
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogERP; 