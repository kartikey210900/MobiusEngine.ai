import React from 'react';
import { FileText, Users, Award, Briefcase } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit Expert Form',
      description: 'Fill out our comprehensive form designed to showcase your skills',
      icon: <FileText className="h-8 w-8 text-blue-600" />
    },
    {
      number: 2, 
      title: 'Get the benefit of job matching',
      description: 'Our AI matches your profile with the best-fit jobs',
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      number: 3,
      title: 'Top employers reach out directly to you',
      description: 'Skip the application black hole and get direct contact',
      icon: <Award className="h-8 w-8 text-blue-600" />
    },
    {
      number: 4,
      title: 'You get the interviews',
      description: 'Schedule and prepare for interviews with our guidance',
      icon: <Briefcase className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          How we work?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <span className="text-2xl font-bold text-blue-600">{step.number}</span>
              </div>
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;