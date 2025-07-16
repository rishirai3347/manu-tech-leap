import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Monitor, Users, BarChart3, Settings, Shield, Zap, Database, Globe, Smartphone } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'veekdays-erp',
      name: 'VEEKDAYS ERP',
      tagline: 'Complete Manufacturing Management',
      description: 'Comprehensive ERP solution designed specifically for Indian manufacturers. Streamline operations, reduce costs, and improve efficiency.',
      features: [
        'Production Planning & Scheduling',
        'Inventory & Warehouse Management',
        'Financial Management & Accounting',
        'Quality Control & Compliance',
        'Supply Chain Management',
        'Real-time Analytics & Reporting',
        'Multi-location Support',
        'Mobile Access'
      ],
      benefits: [
        'Reduce operational costs by 25-40%',
        'Improve production efficiency by 30%+',
        'Real-time visibility across operations',
        'Automated compliance reporting'
      ],
      pricing: 'Starting from ₹25,000/month',
      color: 'blue',
      icon: Database,
      popular: true
    },
    {
      id: 'veekdays-crm',
      name: 'VEEKDAYS CRM',
      tagline: 'Customer Relationship Excellence',
      description: 'Build stronger customer relationships and boost sales with CRM solutions tailored for B2B manufacturing businesses.',
      features: [
        'Lead Management & Qualification',
        'Order Tracking & Management',
        'Customer Communication Hub',
        'Sales Pipeline Analytics',
        'Customer Support Ticketing',
        'Integration with ERP Systems',
        'Email Marketing Automation',
        'Mobile Sales App'
      ],
      benefits: [
        'Increase sales conversion by 35%',
        'Improve customer satisfaction scores',
        'Reduce response time by 50%',
        'Better customer data insights'
      ],
      pricing: 'Starting from ₹15,000/month',
      color: 'green',
      icon: Users
    },
    {
      id: 'client-portal',
      name: 'Client Portal',
      tagline: 'Empower Your Customers',
      description: 'Give your clients their own branded portal to monitor, operate, and manage their machines. Create new revenue streams.',
      features: [
        'Real-time Machine Monitoring',
        'Performance Analytics Dashboard',
        'Smart Alerts & Notifications',
        'Remote Control Capabilities',
        'Mobile App Access',
        'Custom Branding',
        'Multi-user Access Control',
        'API Integration'
      ],
      benefits: [
        'Create new revenue streams (₹2-5L/month per client)',
        'Strengthen client relationships',
        'Reduce support costs by 60%',
        'Differentiate from competitors'
      ],
      pricing: 'Starting from ₹10,000/month',
      color: 'purple',
      icon: Monitor
    },
    {
      id: 'analytics-suite',
      name: 'Analytics Suite',
      tagline: 'Data-Driven Decisions',
      description: 'Advanced analytics and business intelligence tools to help you make informed decisions and optimize operations.',
      features: [
        'Real-time Performance Dashboards',
        'Predictive Analytics',
        'Custom Report Builder',
        'KPI Tracking & Alerts',
        'Data Visualization',
        'Export & Sharing',
        'Mobile Dashboards',
        'Integration APIs'
      ],
      benefits: [
        'Identify optimization opportunities',
        'Predict maintenance needs',
        'Track key performance metrics',
        'Improve decision-making speed'
      ],
      pricing: 'Starting from ₹8,000/month',
      color: 'orange',
      icon: BarChart3
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          card: 'border-blue-200 bg-blue-50/50',
          accent: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700',
          badge: 'bg-blue-100 text-blue-800'
        };
      case 'green':
        return {
          card: 'border-green-200 bg-green-50/50',
          accent: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700',
          badge: 'bg-green-100 text-green-800'
        };
      case 'purple':
        return {
          card: 'border-purple-200 bg-purple-50/50',
          accent: 'text-purple-600',
          button: 'bg-purple-600 hover:bg-purple-700',
          badge: 'bg-purple-100 text-purple-800'
        };
      case 'orange':
        return {
          card: 'border-orange-200 bg-orange-50/50',
          accent: 'text-orange-600',
          button: 'bg-orange-600 hover:bg-orange-700',
          badge: 'bg-orange-100 text-orange-800'
        };
      default:
        return {
          card: 'border-gray-200 bg-gray-50/50',
          accent: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700',
          badge: 'bg-gray-100 text-gray-800'
        };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Software Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete software solutions designed specifically for Indian manufacturers. 
            From ERP to CRM to client portals – we have everything you need to digitize and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/demo">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => {
              const colors = getColorClasses(product.color);
              const IconComponent = product.icon;
              
              return (
                <Card key={product.id} className={`${colors.card} shadow-lg hover:shadow-xl transition-all duration-300 border-2`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${colors.accent} bg-white rounded-xl flex items-center justify-center shadow-sm`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">{product.name}</CardTitle>
                          <p className="text-gray-600">{product.tagline}</p>
                        </div>
                      </div>
                      {product.popular && (
                        <Badge className={colors.badge}>Most Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-base text-gray-700 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Business Benefits</h4>
                      <div className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-lg font-bold text-gray-900">{product.pricing}</div>
                      <p className="text-sm text-gray-600">Includes setup, training, and support</p>
                    </div>

                    {/* CTA */}
                    <Button asChild className={`w-full ${colors.button} text-white`}>
                      <Link to="/demo">
                        Get Started with {product.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our products work together seamlessly. Start with one solution and expand as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Integration</h3>
              <p className="text-gray-600">
                Connect with your existing systems and third-party applications through our robust APIs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee and 24/7 monitoring.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud & On-Premise</h3>
              <p className="text-gray-600">
                Deploy in the cloud or on your own servers. We support both deployment models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our products can work together to solve your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link to="/demo">
                Schedule Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products; 