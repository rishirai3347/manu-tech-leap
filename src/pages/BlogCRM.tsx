import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Users, BarChart3, Phone, Mail, Target, TrendingUp, MessageSquare } from 'lucide-react';

const BlogCRM = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-green-600 hover:text-green-700 mb-4">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <div className="mb-8">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              CRM Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Manufacturing CRM: Building Stronger Customer Relationships
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how Customer Relationship Management (CRM) systems designed specifically for manufacturing 
              can help you increase sales, improve customer satisfaction, and build lasting business relationships.
            </p>
            
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <User className="w-4 h-4 mr-2" />
              <span className="mr-6">VEEKDAYS Team</span>
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-6">December 18, 2024</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>10 min read</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Manufacturing Needs Specialized CRM?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Traditional CRM systems are designed for retail and service industries, but manufacturing has unique 
                requirements. From complex B2B sales cycles to technical specifications and after-sales support, 
                manufacturers need a CRM that understands their business model.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A manufacturing-specific CRM helps you manage the entire customer lifecycle - from initial inquiry 
                to repeat orders, technical support, and long-term relationship building. It's not just about 
                tracking contacts; it's about understanding your customers' manufacturing needs and providing 
                exceptional service throughout their journey.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits of Manufacturing CRM</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Increased Sales</h3>
                    </div>
                    <p className="text-gray-600">
                      Track leads through complex B2B sales cycles, identify opportunities, and close deals faster. 
                      Our clients see 35% increase in sales conversion rates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Better Customer Service</h3>
                    </div>
                    <p className="text-gray-600">
                      Provide personalized support with complete customer history, technical specifications, 
                      and communication logs at your fingertips.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <BarChart3 className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Data-Driven Insights</h3>
                    </div>
                    <p className="text-gray-600">
                      Analyze customer behavior, identify trends, and make informed decisions with comprehensive 
                      reporting and analytics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <Target className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Targeted Marketing</h3>
                    </div>
                    <p className="text-gray-600">
                      Segment customers by industry, order history, and preferences to create targeted 
                      marketing campaigns and promotions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core CRM Features for Manufacturing</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Lead Management & Qualification</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive lead tracking system designed for complex B2B sales cycles in manufacturing.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Lead scoring based on industry, company size, and budget
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated lead assignment and follow-up reminders
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Integration with website forms and inquiry tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Lead-to-opportunity conversion tracking
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Order Tracking & Management</h3>
                  <p className="text-gray-700 mb-4">
                    Complete order lifecycle management from quotation to delivery and after-sales support.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Quote generation with technical specifications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Order status tracking and customer notifications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Integration with ERP for real-time order updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Delivery scheduling and tracking
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Customer Analytics & Insights</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced analytics to understand customer behavior, preferences, and opportunities for growth.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Customer lifetime value analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Purchase pattern analysis and forecasting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Customer satisfaction and feedback tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Cross-selling and upselling opportunity identification
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Sales Pipeline Management</h3>
                  <p className="text-gray-700 mb-4">
                    Visual sales pipeline with customizable stages for manufacturing sales processes.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Customizable sales stages and workflows
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Sales forecasting and revenue prediction
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Activity tracking and performance metrics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Team collaboration and deal sharing
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Communication Tools */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Communication & Support Tools</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Built-in communication tools to maintain strong relationships with your customers throughout 
                their journey with your company.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Email Integration</h3>
                    <p className="text-gray-600">
                      Sync emails, track conversations, and maintain complete communication history with each customer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Call Tracking</h3>
                    <p className="text-gray-600">
                      Log calls, set reminders, and track follow-up activities to ensure no opportunity is missed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Support Tickets</h3>
                    <p className="text-gray-600">
                      Create and track support tickets, assign to team members, and ensure timely resolution.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Integration Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamless Integration with Your Systems</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our CRM integrates seamlessly with your existing ERP, accounting, and communication systems 
                to provide a unified view of your customer relationships.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">ERP Integration</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Real-time order status updates
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Inventory availability checking
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Production schedule integration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Financial data synchronization
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">External Integrations</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Email marketing platforms
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Accounting software (Tally, QuickBooks)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Communication tools (WhatsApp, SMS)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Calendar and scheduling apps
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: AutoParts Manufacturing</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Implementing VEEKDAYS CRM helped us increase our sales conversion rate by 35% and 
                improve customer retention by 40%. The ability to track every interaction and provide 
                personalized service has transformed our customer relationships."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SP
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sunita Patel</div>
                  <div className="text-gray-600">Sales Director, AutoParts Manufacturing</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Relationships?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and discover how custom CRM can boost your sales and customer satisfaction.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link to="/demo">
                    Schedule Free Consultation
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
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

export default BlogCRM; 