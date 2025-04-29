import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: "April Promo",
      price: 35,
      features: [
        "Optimized resume with ATS keywords",
        "Basic job matching service",
        "Email notifications for new job matches",
        "Access to basic application templates",
        "7-day money-back guarantee"
      ],
      popular: false,
      color: "bg-white",
      buttonColor: "bg-blue-600"
    },
    {
      name: "Starter",
      price: 50,
      features: [
        "Everything in April Promo",
        "Premium resume template library",
        "LinkedIn profile optimization",
        "30-day job search strategy",
        "Email and chat support"
      ],
      popular: true,
      color: "bg-white",
      buttonColor: "bg-blue-600"
    },
    {
      name: "Plus",
      price: 100,
      features: [
        "Everything in Starter",
        "Cover letter customization",
        "60-day job search support",
        "Weekly job search progress report",
        "Priority application submissions",
        "Interview preparation guide"
      ],
      popular: false,
      color: "bg-white",
      buttonColor: "bg-blue-600"
    },
    {
      name: "Advanced",
      price: 150,
      period: "week",
      features: [
        "Everything in Plus",
        "Unlimited job applications",
        "Career coaching (2 sessions)",
        "Salary negotiation guide",
        "90-day comprehensive support",
        "Mock interview with feedback",
        "Priority 24/7 support",
        "Custom career roadmap"
      ],
      popular: false,
      color: "bg-blue-600 text-white",
      buttonColor: "bg-white text-blue-600"
    }
  ];

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Job Application Service Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 border ${plan.color === 'bg-white' ? 'border-gray-200' : 'border-blue-500'} ${plan.color} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="text-xs bg-blue-100 text-blue-600 px-4 py-1 rounded-full inline-block mb-4">
                  Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/{plan.period || 'month'}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 ${plan.color === 'bg-white' ? 'text-blue-600' : 'text-blue-300'}`} />
                    <span className={`text-sm ${plan.color === 'bg-white' ? 'text-gray-600' : 'text-blue-100'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full ${plan.buttonColor} font-medium transition-all duration-300 transform hover:scale-105`}>
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;