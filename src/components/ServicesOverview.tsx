
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Custom ERP Solutions',
      description: 'Streamline your entire manufacturing process with integrated resource planning tailored for your industry.',
      features: ['Production Planning', 'Inventory Management', 'Financial Integration', 'Quality Control'],
      color: 'blue',
      link: '/services/erp'
    },
    {
      title: 'CRM Systems',
      description: 'Build stronger customer relationships and boost sales with manufacturing-focused customer management.',
      features: ['Lead Management', 'Order Tracking', 'Customer Analytics', 'Sales Pipeline'],
      color: 'green',
      link: '/services/crm'
    },
    {
      title: 'Order Management (OMS)',
      description: 'Optimize your order-to-delivery process with intelligent order management and tracking systems.',
      features: ['Order Processing', 'Supply Chain', 'Delivery Tracking', 'Returns Management'],
      color: 'purple',
      link: '/services/oms'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 hover:border-blue-300 bg-blue-50/50';
      case 'green':
        return 'border-green-200 hover:border-green-300 bg-green-50/50';
      case 'purple':
        return 'border-purple-200 hover:border-purple-300 bg-purple-50/50';
      default:
        return 'border-gray-200 hover:border-gray-300 bg-gray-50/50';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions for Manufacturing Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in building custom software solutions that address the unique challenges 
            of Indian manufacturing companies, from small workshops to large-scale operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group transition-all duration-300 hover:shadow-lg ${getColorClasses(service.color)}`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                >
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
