import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Users, Package, BarChart3 } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Settings,
      title: "Custom ERP Solutions",
      description: "Streamline your entire manufacturing process with integrated resource planning tailored to your workflows.",
      features: ["Production Planning", "Inventory Management", "Financial Integration", "Quality Control"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      link: "/blog/erp"
    },
    {
      icon: Users,
      title: "Manufacturing CRM",
      description: "Build stronger customer relationships with CRM designed specifically for manufacturing businesses.",
      features: ["Lead Management", "Order Tracking", "Customer Analytics", "Sales Pipeline"],
      color: "bg-gradient-to-br from-green-500 to-green-600",
      link: "/blog/crm"
    },
    {
      icon: Package,
      title: "Order Management System",
      description: "Optimize your order-to-delivery process with intelligent tracking and automated workflows.",
      features: ["Order Processing", "Supply Chain", "Delivery Tracking", "Returns Management"],
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      link: "/blog/oms"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed specifically for Indian manufacturing companies, 
            from small workshops to enterprise-scale operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${service.color} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild 
                variant="outline" 
                className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 rounded-xl py-6 font-medium"
              >
                <Link to={service.link}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Integration & Customization Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Built for Your Existing Systems
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our solutions seamlessly integrate with your current tools and legacy systems. 
                No need to replace everything - we work with what you have.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Legacy System Integration</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Custom API Development</span>
                </div>
                <div className="flex items-center">
                  <Package className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700 font-medium">Third-party Tool Connections</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Popular Integrations</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <span className="text-sm font-medium text-gray-700">Tally ERP</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <span className="text-sm font-medium text-gray-700">SAP</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💼</div>
                  <span className="text-sm font-medium text-gray-700">Zoho</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <span className="text-sm font-medium text-gray-700">Custom APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
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
