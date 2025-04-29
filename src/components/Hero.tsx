import React from 'react';
import { FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-blue-400 to-blue-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Land job interviews<br />
              <span className="text-yellow-300">10x faster</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              Optimize your job search process with our expert tools, make your resume stand out, and get more interviews.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Get Started →
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl p-6 text-gray-800 transform rotate-3 transition-transform hover:rotate-0 duration-300 max-w-md mx-auto">
              <div className="flex justify-between mb-4">
                <h3 className="text-sm font-semibold text-blue-600">JOBS / GOOD CANDIDATES TRENDS</h3>
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div className="bg-blue-50 p-4 rounded mb-4">
                <div className="w-full h-32 bg-white rounded"></div>
              </div>
              <p className="text-sm text-gray-600 mb-2">Download Your Report</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-16 bg-white rounded-t-[50%] transform translate-y-1"></div>
    </section>
  );
};

export default Hero;