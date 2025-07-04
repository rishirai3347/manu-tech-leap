
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: 'SteelCorp Industries',
      industry: 'Steel Manufacturing',
      size: '500+ employees',
      challenge: 'Manual production planning and inventory management led to frequent stockouts and production delays',
      solution: 'Implemented comprehensive ERP system with automated production scheduling and real-time inventory tracking',
      results: [
        { metric: 'Production Efficiency', value: '↑ 45%' },
        { metric: 'Inventory Costs', value: '↓ 30%' },
        { metric: 'Order Fulfillment', value: '↑ 35%' },
        { metric: 'Annual Savings', value: '₹2.5 Cr' }
      ],
      testimonial: {
        text: "TechSolutions transformed our operations completely. We now have real-time visibility into every aspect of our production and can make data-driven decisions instantly.",
        author: "Rajesh Kumar",
        position: "Operations Director"
      },
      timeline: '3 months implementation',
      color: 'blue'
    },
    {
      id: 2,
      company: 'AutoParts Manufacturing Ltd',
      industry: 'Automotive Components',
      size: '200+ employees',
      challenge: 'Disconnected sales and production systems led to poor customer communication and missed delivery commitments',
      solution: 'Integrated CRM and OMS system connecting sales, production, and customer communication workflows',
      results: [
        { metric: 'Customer Satisfaction', value: '↑ 60%' },
        { metric: 'Order Processing Time', value: '↓ 50%' },
        { metric: 'Sales Conversion', value: '↑ 40%' },
        { metric: 'Revenue Growth', value: '↑ 25%' }
      ],
      testimonial: {
        text: "Our customers now receive real-time updates on their orders, and our sales team has complete visibility into production schedules. It's been a game-changer.",
        author: "Priya Sharma",
        position: "Sales Director"
      },
      timeline: '2.5 months implementation',
      color: 'green'
    },
    {
      id: 3,
      company: 'Textile Mills Pvt Ltd',
      industry: 'Textile Manufacturing',
      size: '800+ employees',
      challenge: 'Complex multi-location operations with inconsistent quality control and compliance reporting',
      solution: 'Multi-site ERP with integrated quality management and automated compliance reporting across all locations',
      results: [
        { metric: 'Quality Consistency', value: '↑ 55%' },
        { metric: 'Compliance Reporting', value: '↓ 80% time' },
        { metric: 'Multi-site Coordination', value: '↑ 70%' },
        { metric: 'Operational Costs', value: '↓ 20%' }
      ],
      testimonial: {
        text: "Managing 4 manufacturing locations was a nightmare before TechSolutions. Now we have unified operations and consistent quality across all sites.",
        author: "Amit Patel",
        position: "Plant Manager"
      },
      timeline: '4 months implementation',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          card: 'border-blue-200 bg-blue-50/30',
          accent: 'text-blue-600',
          gradient: 'from-blue-500 to-blue-600'
        };
      case 'green':
        return {
          card: 'border-green-200 bg-green-50/30',
          accent: 'text-green-600',
          gradient: 'from-green-500 to-green-600'
        };
      case 'purple':
        return {
          card: 'border-purple-200 bg-purple-50/30',
          accent: 'text-purple-600',
          gradient: 'from-purple-500 to-purple-600'
        };
      default:
        return {
          card: 'border-gray-200 bg-gray-50/30',
          accent: 'text-gray-600',
          gradient: 'from-gray-500 to-gray-600'
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
            Success Stories from Manufacturing Leaders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how leading Indian manufacturers have transformed their operations 
            and achieved remarkable results with our custom software solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">₹50+ Cr</div>
              <div className="text-gray-600">Client Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const colors = getColorClasses(study.color);
              
              return (
                <Card key={study.id} className={`${colors.card} shadow-lg overflow-hidden`}>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      {/* Company Info & Challenge */}
                      <div className="p-8 bg-white">
                        <div className="mb-6">
                          <h3 className={`text-2xl font-bold ${colors.accent} mb-2`}>
                            {study.company}
                          </h3>
                          <div className="text-gray-600 space-y-1">
                            <p><strong>Industry:</strong> {study.industry}</p>
                            <p><strong>Size:</strong> {study.size}</p>
                            <p><strong>Timeline:</strong> {study.timeline}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-700 text-sm">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-700 text-sm">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="p-8 bg-gray-50">
                        <h4 className="font-semibold text-gray-900 mb-6">Results Achieved</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="bg-white rounded-lg p-4 text-center">
                              <div className={`text-2xl font-bold ${colors.accent} mb-1`}>
                                {result.value}
                              </div>
                              <div className="text-xs text-gray-600">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className={`p-8 bg-gradient-to-br ${colors.gradient} text-white`}>
                        <h4 className="font-semibold mb-4">Client Testimonial</h4>
                        <blockquote className="text-sm mb-4 opacity-90">
                          "{study.testimonial.text}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{study.testimonial.author}</div>
                            <div className="text-xs opacity-75">{study.testimonial.position}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join these successful manufacturers who have transformed their operations. 
            Schedule a free consultation to discuss your specific requirements.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/demo">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
