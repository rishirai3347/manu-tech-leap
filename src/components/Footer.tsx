
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">VEEKDAYS</h3>
            <p className="text-gray-200 mb-4 max-w-md leading-relaxed">
              Empowering Indian manufacturers with cutting-edge, cost-effective digital transformation solutions. 
              Custom ERP, CRM, and OMS systems built for your success.
            </p>
            <div className="text-sm text-gray-300">
              <p>Built with: React, TypeScript, Node.js, Python, Cloud Infrastructure</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors font-medium">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-200 hover:text-white transition-colors font-medium">Case Studies</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-white transition-colors font-medium">About Us</Link></li>
              <li><Link to="/process" className="text-gray-200 hover:text-white transition-colors font-medium">Our Process</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white font-medium hover:text-blue-300 transition-colors">
                <a href="mailto:support@veekdays.com" className="flex items-center">
                  <span className="mr-2">📧</span>
                  support@veekdays.com
                </a>
              </li>
              <li className="text-white font-medium hover:text-blue-300 transition-colors">
                <a href="tel:+919805084583" className="flex items-center">
                  <span className="mr-2">📞</span>
                  +91 9805084583
                </a>
              </li>
              <li className="text-white font-medium flex items-start">
                <span className="mr-2 mt-1 text-white">📍</span>
                <span className="text-white">D-64, 1st Floor, C Block, Sector 10, Noida, Uttar Pradesh 201301</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 VEEKDAYS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
