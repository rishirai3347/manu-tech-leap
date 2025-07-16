import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Package, Truck, BarChart3, Globe, Zap, TrendingUp, Shield } from 'lucide-react';

const BlogOMS = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-purple-600 hover:text-purple-700 mb-4">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <div className="mb-8">
            <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Order Management
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Order Management System: Streamlining Your Order-to-Delivery Process
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how intelligent Order Management Systems (OMS) can optimize your order processing, 
              improve delivery times, and enhance customer satisfaction in manufacturing operations.
            </p>
            
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <User className="w-4 h-4 mr-2" />
              <span className="mr-6">VEEKDAYS Team</span>
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-6">December 16, 2024</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>11 min read</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Order Management System?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An Order Management System (OMS) is the central hub that manages the entire order lifecycle 
                from initial customer inquiry to final delivery and beyond. For manufacturers, this means 
                having complete visibility and control over every order, regardless of complexity or scale.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike simple order tracking, a comprehensive OMS integrates with your ERP, CRM, and 
                supply chain systems to provide real-time updates, automated workflows, and intelligent 
                decision-making capabilities that can significantly improve your operational efficiency.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits of Order Management Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Improved Efficiency</h3>
                    </div>
                    <p className="text-gray-600">
                      Automate order processing, reduce manual errors, and streamline workflows. 
                      Our clients typically see 40-60% improvement in order processing speed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <Truck className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Faster Delivery</h3>
                    </div>
                    <p className="text-gray-600">
                      Optimize delivery routes, reduce lead times, and improve on-time delivery rates 
                      with intelligent scheduling and tracking capabilities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Real-time Visibility</h3>
                    </div>
                    <p className="text-gray-600">
                      Track orders in real-time, provide customers with accurate delivery estimates, 
                      and identify potential issues before they impact delivery.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Better Customer Experience</h3>
                    </div>
                    <p className="text-gray-600">
                      Provide customers with self-service order tracking, automated notifications, 
                      and transparent communication throughout the delivery process.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core OMS Features for Manufacturing</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Order Processing & Workflow</h3>
                  <p className="text-gray-700 mb-4">
                    Intelligent order processing with automated workflows, validation rules, and 
                    integration with your existing systems.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated order validation and approval workflows
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Integration with ERP for inventory and production planning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Custom pricing rules and discount management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Multi-channel order capture (web, phone, email, EDI)
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Supply Chain Integration</h3>
                  <p className="text-gray-700 mb-4">
                    Seamless integration with suppliers, logistics partners, and transportation systems 
                    for end-to-end supply chain visibility.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Supplier portal for order management and tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real-time inventory updates across multiple locations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated purchase order generation and management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Supply chain risk assessment and mitigation
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Delivery Tracking & Logistics</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive delivery management with real-time tracking, route optimization, 
                    and customer communication.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Real-time delivery tracking and status updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Route optimization for multiple deliveries
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated delivery notifications to customers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Integration with logistics providers and couriers
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Returns Management</h3>
                  <p className="text-gray-700 mb-4">
                    Streamlined returns processing with automated workflows, quality assessment, 
                    and customer communication.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated return authorization and processing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Quality assessment and disposition tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Refund and replacement processing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Return analytics and trend analysis
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Portal Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Self-Service Portal</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Empower your customers with a modern self-service portal that provides complete 
                visibility into their orders and reduces support workload.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Management</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                      View order history and current orders
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                      Real-time order status tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                      Download invoices and documents
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                      Request order modifications
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication & Support</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated delivery notifications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Live chat and support ticket system
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Return and refund requests
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Feedback and review submission
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Analytics & Performance Insights</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Comprehensive analytics and reporting capabilities to help you optimize your 
                order management processes and improve customer satisfaction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Order Analytics</h3>
                    <p className="text-gray-600">
                      Track order volume, processing times, and identify bottlenecks in your order workflow.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery Performance</h3>
                    <p className="text-gray-600">
                      Monitor delivery times, on-time delivery rates, and optimize your logistics operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Insights</h3>
                    <p className="text-gray-600">
                      Analyze customer behavior, satisfaction scores, and identify opportunities for improvement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Integration Capabilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamless System Integration</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our OMS integrates with all your existing systems to provide a unified view of your 
                operations and eliminate data silos.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Internal Systems</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                        ERP system integration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                        CRM customer data sync
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                        Accounting software connection
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                        Warehouse management systems
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">External Partners</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Logistics providers (FedEx, DHL, etc.)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Payment gateways
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        E-commerce platforms
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Supplier portals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Textile Manufacturing Co.</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "After implementing VEEKDAYS OMS, we reduced our order processing time by 60% and 
                improved our on-time delivery rate to 98%. The customer portal has significantly 
                reduced our support calls and improved customer satisfaction scores."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AK
                </div>
                <div>
                  <div className="font-bold text-gray-900">Amit Kumar</div>
                  <div className="text-gray-600">Operations Manager, Textile Manufacturing Co.</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Order Management?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and discover how OMS can streamline your order-to-delivery process.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link to="/demo">
                    Schedule Free Consultation
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
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

export default BlogOMS; 