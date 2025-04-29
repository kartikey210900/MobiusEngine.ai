import React from 'react';
import { Briefcase, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-blue-400">MobiusEngine.ai</span>
            </div>
            <p className="text-gray-400 mb-4">
              Making job applications simpler and more effective for job seekers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@MobiusEngine.ai.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Sitemap</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center text-sm">
            &copy; {new Date().getFullYear()} MobiusEngine.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;