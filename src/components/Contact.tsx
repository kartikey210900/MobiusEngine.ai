import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-blue-600 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-blue-700 rounded-lg p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">STILL HAVE DOUBTS?</h2>
            <h3 className="text-3xl font-bold text-white">Contact us</h3>
          </div>
          
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center group transition-all hover:bg-blue-50">
            <span>Contact us</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;