import React, { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-600">MobiusEngine.ai</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#plans" className="text-gray-700 hover:text-blue-600 transition-colors">Plans</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#plans" className="block text-gray-700 hover:text-blue-600 transition-colors">Plans</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#privacy" className="block text-gray-700 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;