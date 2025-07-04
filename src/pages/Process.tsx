
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      phase: 1,
      title: 'Discovery & Consultation',
      duration: '1-2 weeks',
      icon: Users,
      description: 'We start by understanding your business, current challenges, and specific requirements.',
      activities: [
        'Initial consultation call',
        'Business process assessment',
        'Current system evaluation',
        'Requirements documentation',
        'Feasibility analysis',
        'Project scope definition'
      ],
      deliverables: [
        'Detailed requirement document',
        'Technical feasibility report',
        'Project timeline and milestones',
        'Cost estimation and proposal'
      ],
      color: 'blue'
    },
    {
      phase: 2,
      title: 'Planning & Design',
      duration: '1-2 weeks',
      icon: Code,
      description: 'We create detailed technical specifications and user experience designs for your solution.',
      activities: [
        'System architecture planning',
        'Database design',
        'User interface mockups',
        'Integration mapping',
        'Security framework design',
        'Testing strategy development'
      ],
      deliverables: [
        'Technical architecture document',
        'UI/UX wireframes and designs',
        'Database schema',
        'Integration specifications',
        'Security implementation plan'
      ],
      color: 'green'
    },
    {
      phase: 3,
      title: 'Development & Testing',
      duration: '6-8 weeks',
      icon: Clock,
      description: 'Our development team builds your custom solution with regular progress updates and testing.',
      activities: [
        'Agile development sprints',
        'Weekly progress reviews',
        'Continuous integration testing',
        'User acceptance testing',
        'Performance optimization',
        'Security testing'
      ],
      deliverables: [
        'Fully functional software',
        'Test reports and documentation',
        'User manuals and guides',
        'Admin configuration tools',
        'API documentation (if applicable)'
      ],
      color: 'purple'
    },
    {
      phase: 4,
      title: 'Deployment & Training',
      duration: '1-2 weeks',
      icon: Rocket,
      description: 'We deploy your solution and ensure your team is fully trained and ready to use it.',
      activities: [
        'Production environment setup',
        'Data migration and validation',
        'System configuration',
        'User training sessions',
        'Go-live support',
        'Performance monitoring'
      ],
      deliverables: [
        'Live production system',
        'Migrated historical data',
        'Trained user team',
        'Go-live checklist completion',
        'Initial performance reports'
      ],
      color: 'orange'
    },
    {
      phase: 5,
      title: 'Support & Optimization',
      duration: 'Ongoing',
      icon: HeadphonesIcon,
      description: 'Continuous support, maintenance, and optimization to ensure long-term success.',
      activities: [
        '24/7 technical support',
        'Regular system health checks',
        'Performance monitoring',
        'User feedback collection',
        'Feature enhancements',
        'System updates and patches'
      ],
      deliverables: [
        'Monthly performance reports',
        'System optimization recommendations',
        'Feature update releases',
        'Ongoing technical support',
        'Business growth recommendations'
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', icon: 'bg-blue-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', icon: 'bg-green-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', icon: 'bg-purple-600' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', icon: 'bg-orange-600' },
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', icon: 'bg-red-600' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Proven Implementation Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From initial consultation to ongoing support, we follow a structured approach 
            that ensures successful software implementation and maximum ROI for your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12 weeks</div>
              <div className="text-gray-600">Average Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">On-Time Delivery Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Client Training Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const IconComponent = step.icon;
              
              return (
                <div key={step.phase}>
                  {/* Phase Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} text-white rounded-full text-2xl font-bold mb-4`}>
                      <IconComponent size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Phase {step.phase}: {step.title}
                    </h2>
                    <p className={`text-lg ${colors.text} font-semibold mb-2`}>
                      Duration: {step.duration}
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Phase Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Activities */}
                    <Card className={`${colors.bg} ${colors.border}`}>
                      <CardHeader>
                        <CardTitle className={colors.text}>Key Activities</CardTitle>
                        <CardDescription>What we do during this phase</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {step.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-start">
                              <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Deliverables */}
                    <Card className="bg-white border-gray-200 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-gray-900">Deliverables</CardTitle>
                        <CardDescription>What you receive at the end of this phase</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Connection Line (except for last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-1 h-16 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality Assurance Throughout
            </h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards at every step of the process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Testing</h3>
                <p className="text-gray-600">
                  Every feature is thoroughly tested before deployment to ensure reliability and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Reviews</h3>
                <p className="text-gray-600">
                  Weekly progress reviews and client feedback sessions keep the project on track.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
                <p className="text-gray-600">
                  Security is built into every layer, from database design to user interface.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's begin with a free consultation to understand your requirements and 
            create a customized implementation plan for your business.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/demo">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/case-studies">See Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
