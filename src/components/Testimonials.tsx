import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      message: "Thanks to ModernApp's services, I got 3 interview calls within just 2 weeks of updating my profile. Their system really works!",
      author: "Sarah K."
    },
    {
      id: 2,
      message: "The resume optimization tool helped me highlight my skills better. I received positive feedback from recruiters about my professional profile.",
      author: "Michael T."
    },
    {
      id: 3,
      message: "Their interview preparation service was invaluable. I felt confident and prepared, which helped me land my dream job at a tech company.",
      author: "Jessica M."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What our clients have to say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-blue-600 rounded-lg p-6 text-white relative transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-4 left-4">
                <MessageCircle className="h-6 w-6 text-blue-300" />
              </div>
              <div className="pt-8">
                <p className="mb-6">{testimonial.message}</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{testimonial.author}</span>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md mr-4 hover:bg-blue-50 transition-colors">
            More customer testimonials →
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;