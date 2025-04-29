import React from 'react';
import { Check } from 'lucide-react';

const ResumeServices = () => {
  const services = [
    {
      title: "Resume Rebuild",
      description: "Complete resume overhaul by our experts",
      price: 1000,
      oneTime: true,
      features: [
        "In-depth initial consultation",
        "Professional rewriting by industry expert",
        "2 rounds of revisions based on your feedback",
        "ATS keyword optimization for your target roles",
        "Format and design enhancement",
        "Includes MS Word and PDF formats"
      ]
    },
    {
      title: "Interview Prep",
      description: "Comprehensive interview preparation",
      price: 500,
      oneTime: true,
      features: [
        "2-hour mock interview with an expert",
        "Industry-specific question preparation",
        "Detailed feedback on your responses",
        "Body language and presentation coaching",
        "Follow-up question strategies",
        "Personalized improvement plan"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resume Building & Coaching</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Let our experts help you craft the perfect resume and prepare you for interviews with our premium services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold">${service.price}</span>
                {service.oneTime && <span className="text-gray-500"> one time</span>}
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-blue-600 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 rounded-md bg-blue-600 text-white font-medium transition-colors hover:bg-blue-700">
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeServices;