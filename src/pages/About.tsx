
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Arjun Sharma',
      position: 'CEO & Founder',
      bio: '15+ years in enterprise software development with deep expertise in manufacturing systems. Former tech lead at major ERP companies.',
      image: 'AS'
    },
    {
      name: 'Neha Patel',
      position: 'CTO',
      bio: 'Full-stack architect specializing in scalable cloud solutions. Masters in Computer Science from IIT Delhi with 12+ years experience.',
      image: 'NP'
    },
    {
      name: 'Vikram Singh',
      position: 'Head of Manufacturing Solutions',
      bio: 'Manufacturing industry veteran with 20+ years experience. Understands the unique challenges of Indian manufacturing businesses.',
      image: 'VS'
    },
    {
      name: 'Riya Gupta',
      position: 'Customer Success Director',
      bio: 'Ensures every client achieves their digital transformation goals. Expert in change management and user adoption strategies.',
      image: 'RG'
    }
  ];

  const values = [
    {
      title: 'Client-Centric Approach',
      description: 'Every solution is built around your specific business needs, not generic templates.',
      icon: '🎯'
    },
    {
      title: 'Transparency',
      description: 'Clear communication, honest timelines, and no hidden costs throughout the entire process.',
      icon: '💎'
    },
    {
      title: 'Innovation',
      description: 'We use cutting-edge technology to build future-proof solutions that scale with your business.',
      icon: '🚀'
    },
    {
      title: 'Local Understanding',
      description: 'Deep knowledge of Indian business practices, regulations, and manufacturing challenges.',
      icon: '🇮🇳'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Founded TechSolutions with focus on manufacturing sector' },
    { year: '2021', event: 'Completed first 5 successful ERP implementations' },
    { year: '2022', event: 'Expanded to CRM and OMS solutions' },
    { year: '2023', event: 'Reached 50+ client milestone and launched reseller program' },
    { year: '2024', event: 'Achieved ₹50+ Cr in client cost savings' },
    { year: '2025', event: 'Expanding to serve 100+ manufacturing companies across India' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About TechSolutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to digitally transform Indian manufacturing through custom, 
              cost-effective software solutions that deliver real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To empower Indian manufacturing companies with modern, affordable technology solutions 
                  that streamline operations, reduce costs, and drive sustainable growth. We believe every 
                  manufacturer, regardless of size, deserves access to world-class software solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To become India's leading provider of custom manufacturing software solutions, 
                  enabling thousands of manufacturers to compete globally through digital transformation. 
                  We envision a future where every Indian manufacturer operates with cutting-edge efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-105 transition-transform">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform manufacturing
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your manufacturing operations. 
            Schedule a free consultation with our team today.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/demo">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
