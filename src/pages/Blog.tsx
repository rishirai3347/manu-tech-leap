import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "Custom ERP Solutions: The Complete Guide for Indian Manufacturers",
    excerpt: "Discover how custom Enterprise Resource Planning (ERP) systems can transform your manufacturing operations, streamline processes, and drive significant cost savings.",
    author: "VEEKDAYS Team",
    date: "December 20, 2024",
    readTime: "12 min read",
    category: "ERP Solutions",
    image: "/placeholder.svg",
    featured: true
  };

  const blogPosts = [
    {
      title: "Custom ERP Solutions: The Complete Guide for Indian Manufacturers",
      excerpt: "Discover how custom Enterprise Resource Planning (ERP) systems can transform your manufacturing operations, streamline processes, and drive significant cost savings.",
      author: "VEEKDAYS Team",
      date: "December 20, 2024",
      readTime: "12 min read",
      category: "ERP Solutions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/blog/erp"
    },
    {
      title: "Manufacturing CRM: Building Stronger Customer Relationships",
      excerpt: "Discover how Customer Relationship Management (CRM) systems designed specifically for manufacturing can help you increase sales, improve customer satisfaction, and build lasting business relationships.",
      author: "VEEKDAYS Team",
      date: "December 18, 2024",
      readTime: "10 min read",
      category: "CRM Solutions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/blog/crm"
    },
    {
      title: "Order Management System: Streamlining Your Order-to-Delivery Process",
      excerpt: "Discover how intelligent Order Management Systems (OMS) can optimize your order processing, improve delivery times, and enhance customer satisfaction in manufacturing operations.",
      author: "VEEKDAYS Team",
      date: "December 16, 2024",
      readTime: "11 min read",
      category: "Order Management",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/blog/oms"
    },
    {
      title: "5 Ways ERP Systems Are Revolutionizing Small-Scale Manufacturing",
      excerpt: "How small manufacturers are using affordable ERP solutions to compete with larger enterprises.",
      author: "Rahul Sharma",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "ERP Solutions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Client Portals: The Secret Weapon for Customer Retention",
      excerpt: "Transform your customer relationships with branded client portals that provide real-time insights.",
      author: "Priya Patel",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Customer Experience",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "From Excel to Enterprise: A Manufacturing Success Story",
      excerpt: "How IBL Industries increased efficiency by 45% by transitioning from manual processes to custom software.",
      author: "Amit Kumar",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      title: "The Future of Manufacturing: AI-Powered Operations",
      excerpt: "Exploring how artificial intelligence is reshaping manufacturing processes and decision-making.",
      author: "Dr. Meera Singh",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Cost-Benefit Analysis: Custom Software vs Off-the-Shelf Solutions",
      excerpt: "A detailed comparison of custom software development versus purchasing existing solutions for manufacturers.",
      author: "VEEKDAYS Team",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Building a Digital-First Manufacturing Culture",
      excerpt: "Strategies for fostering digital adoption and creating a technology-driven workplace culture.",
      author: "Sanjay Verma",
      date: "November 30, 2024",
      readTime: "6 min read",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    }
  ];

  const categories = [
    "All Posts",
    "ERP Solutions",
    "CRM Solutions",
    "Order Management",
    "Digital Transformation",
    "Customer Experience",
    "Case Studies",
    "AI & Automation",
    "Technology",
    "Leadership"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-2000 opacity-60"></div>
          
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Insights & Stories
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Discover how Indian manufacturers are transforming their businesses with custom digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Featured Article</h2>
            <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-8">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-6">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-6">{featuredPost.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 group">
                  <Link to="/blog/erp">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-12 lg:p-16 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="ERP System Dashboard"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="text-center text-white relative z-10">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-xl font-light opacity-90">Digital Transformation Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Latest Articles</h2>
            <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button 
                    asChild
                    variant="ghost" 
                    className="p-0 h-auto text-gray-900 hover:text-blue-600 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    <Link to={post.link || "#"}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get the latest insights on digital transformation, manufacturing technology, and industry trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog; 