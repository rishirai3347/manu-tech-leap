
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'erp',
      title: 'Custom ERP Solutions',
      subtitle: 'Enterprise Resource Planning for Manufacturing',
      description: 'Streamline your entire manufacturing operation with integrated ERP solutions designed specifically for Indian manufacturers.',
      features: [
        'Production Planning & Scheduling',
        'Inventory & Warehouse Management',
        'Financial Integration & Accounting',
        'Quality Control & Compliance',
        'Supply Chain Management',
        'Real-time Analytics & Reporting'
      ],
      benefits: [
        'Reduce operational costs by 25-40%',
        'Improve production efficiency by 30%+',
        'Real-time visibility across operations',
        'Automated compliance reporting'
      ],
      industries: ['Steel & Metal', 'Automotive', 'Textiles', 'Chemical', 'Food Processing'],
      color: 'blue'
    },
    {
      id: 'crm',
      title: 'CRM Systems',
      subtitle: 'Customer Relationship Management',
      description: 'Build stronger customer relationships and boost sales with CRM solutions tailored for B2B manufacturing businesses.',
      features: [
        'Lead Management & Qualification',
        'Order Tracking & Management',
        'Customer Communication Hub',
        'Sales Pipeline Analytics',
        'Customer Support Ticketing',
        'Integration with ERP Systems'
      ],
      benefits: [
        'Increase sales conversion by 35%',
        'Improve customer satisfaction scores',
        'Reduce response time by 50%',
        'Better customer data insights'
      ],
      industries: ['OEM Suppliers', 'Industrial Equipment', 'Raw Materials', 'Component Manufacturing'],
      color: 'green'
    },
    {
      id: 'oms',
      title: 'Order Management Systems',
      subtitle: 'Streamlined Order-to-Delivery Process',
      description: 'Optimize your order processing workflow with intelligent order management systems that handle complex manufacturing orders.',
      features: [
        'Multi-channel Order Processing',
        'Inventory Allocation & Reservation',
        'Production Scheduling Integration',
        'Shipping & Logistics Management',
        'Returns & Refunds Processing',
        'Customer Portal Access'
      ],
      benefits: [
        'Faster order processing by 45%',
        'Reduce order errors by 80%',
        'Improved delivery performance',
        'Enhanced customer visibility'
      ],
      industries: ['Custom Manufacturing', 'Make-to-Order', 'Distribution', 'Multi-location Operations'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          card: 'border-blue-200 bg-blue-50/50',
          accent: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'green':
        return {
          card: 'border-green-200 bg-green-50/50',
          accent: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700'
        };
      case 'purple':
        return {
          card: 'border-purple-200 bg-purple-50/50',
          accent: 'text-purple-600',
          button: 'bg-purple-600 hover:bg-purple-700'
        };
      default:
        return {
          card: 'border-gray-200 bg-gray-50/50',
          accent: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
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
            Comprehensive Software Solutions for Manufacturing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From ERP to CRM to Order Management - we build custom software solutions 
            that address the unique challenges of Indian manufacturing businesses.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link to="/demo">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              
              return (
                <div key={service.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h2 className={`text-3xl font-bold ${colors.accent} mb-2`}>
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-4">{service.subtitle}</p>
                      <p className="text-gray-700">{service.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Perfect for:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry, industryIndex) => (
                          <span 
                            key={industryIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button asChild className={colors.button}>
                      <Link to="/demo">
                        Get Started with {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual Card */}
                  <div className="flex-1 max-w-md">
                    <Card className={`${colors.card} shadow-lg`}>
                      <CardHeader>
                        <CardTitle className={colors.accent}>{service.title}</CardTitle>
                        <CardDescription>Implementation Timeline</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-white rounded">
                            <span>Discovery & Planning</span>
                            <span className="text-sm text-gray-500">Week 1-2</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded">
                            <span>Development & Testing</span>
                            <span className="text-sm text-gray-500">Week 3-10</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded">
                            <span>Deployment & Training</span>
                            <span className="text-sm text-gray-500">Week 11-12</span>
                          </div>
                          <div className="text-center p-3 bg-green-100 rounded">
                            <span className="font-semibold text-green-700">Go Live in 3 Months</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reseller Program */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Partner with Us - Reseller Program
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our network of certified partners and offer our solutions to your clients. 
            Attractive margins, comprehensive training, and ongoing support included.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">High Margins</h3>
              <p className="text-gray-600">Up to 40% commission on every sale</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Full Training</h3>
              <p className="text-gray-600">Complete product and sales training</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Technical and sales support included</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/demo">Learn About Partnership</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
