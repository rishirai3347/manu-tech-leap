
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    employees: '',
    currentSystems: '',
    challenges: '',
    solutions: [] as string[],
    timeline: '',
    budget: '',
    message: ''
  });

  const industries = [
    'Steel & Metal',
    'Automotive',
    'Textiles',
    'Chemical',
    'Food Processing',
    'Electronics',
    'Pharmaceuticals',
    'Other'
  ];

  const employeeRanges = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const solutionOptions = [
    { id: 'erp', label: 'Custom ERP System' },
    { id: 'crm', label: 'CRM Solution' },
    { id: 'oms', label: 'Order Management System' },
    { id: 'integration', label: 'System Integration' },
    { id: 'consulting', label: 'Digital Transformation Consulting' }
  ];

  const handleSolutionChange = (solutionId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        solutions: [...prev.solutions, solutionId]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        solutions: prev.solutions.filter(id => id !== solutionId)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send data to a backend
    console.log('Demo request submitted:', formData);
    
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      employees: '',
      currentSystems: '',
      challenges: '',
      solutions: [],
      timeline: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Request Your Free Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how our custom software solutions can transform your manufacturing operations. 
            Get a personalized demo tailored to your specific business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
              <span className="text-gray-700">Free 45-minute consultation</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
              <span className="text-gray-700">Customized demo for your industry</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
              <span className="text-gray-700">No obligation or sales pressure</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Demo Request Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Tell Us About Your Business</CardTitle>
                <CardDescription>
                  Help us prepare a demo that's perfectly tailored to your manufacturing needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  {/* Business Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="employees">Company Size</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, employees: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of employees" />
                        </SelectTrigger>
                        <SelectContent>
                          {employeeRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Current Systems */}
                  <div>
                    <Label htmlFor="currentSystems">Current Systems/Software (if any)</Label>
                    <Input
                      id="currentSystems"
                      value={formData.currentSystems}
                      onChange={(e) => setFormData(prev => ({ ...prev, currentSystems: e.target.value }))}
                      placeholder="e.g. Excel, SAP, QuickBooks, etc."
                    />
                  </div>

                  {/* Challenges */}
                  <div>
                    <Label htmlFor="challenges">Main Business Challenges</Label>
                    <Textarea
                      id="challenges"
                      value={formData.challenges}
                      onChange={(e) => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
                      placeholder="What are your biggest operational challenges? (e.g. inventory management, production planning, customer communication)"
                      rows={3}
                    />
                  </div>

                  {/* Solutions Interest */}
                  <div>
                    <Label>Solutions You're Interested In</Label>
                    <div className="mt-2 space-y-2">
                      {solutionOptions.map((solution) => (
                        <div key={solution.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={solution.id}
                            checked={formData.solutions.includes(solution.id)}
                            onCheckedChange={(checked) => handleSolutionChange(solution.id, checked as boolean)}
                          />
                          <Label htmlFor={solution.id}>{solution.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="timeline">Implementation Timeline</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you want to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6-12months">6-12 months</SelectItem>
                          <SelectItem value="exploring">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Estimated budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5lakhs">Under ₹5 Lakhs</SelectItem>
                          <SelectItem value="5-15lakhs">₹5-15 Lakhs</SelectItem>
                          <SelectItem value="15-30lakhs">₹15-30 Lakhs</SelectItem>
                          <SelectItem value="above-30lakhs">Above ₹30 Lakhs</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <Label htmlFor="message">Additional Comments</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Any specific questions or requirements you'd like us to address in the demo?"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Request My Free Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & What to Expect */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Prefer to talk directly? Contact us now</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-600">contact@techsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-600">Mumbai, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
                <CardDescription>Here's what happens next</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Quick Response</p>
                      <p className="text-sm text-gray-600">We'll contact you within 24 hours to schedule your demo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Personalized Demo</p>
                      <p className="text-sm text-gray-600">45-minute demo tailored to your specific industry and needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Custom Proposal</p>
                      <p className="text-sm text-gray-600">Detailed proposal with timeline and pricing for your project</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>50+ successful implementations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>98% client satisfaction rate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>₹50+ Cr in client cost savings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>24/7 ongoing support included</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Demo;
