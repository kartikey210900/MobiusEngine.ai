import React from 'react';
import { Heart, Users, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Tried, Tested, Trusted",
      description: "Over 10,000 job seekers have found success using our platform, with a 93% satisfaction rate.",
      icon: <Heart className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Real People, Real Help",
      description: "Our team of career experts provides personalized guidance tailored to your specific needs.",
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Best-in-Class",
      description: "Our innovative approach to job applications has been recognized by industry leaders and publications.",
      icon: <Star className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div className="flex justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{reason.title}</h3>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;