import React from 'react';

const AboutUs = () => {
  const team = [
    {
      name: 'Robert Thompson',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=350',
      description: "Robert is the founder of ModernApp. He is a recognized leader in recruitment with over 15 years of experience. His innovative approach has helped thousands of job seekers land their dream jobs faster and more efficiently than traditional methods."
    },
    {
      name: 'Michelle Davis',
      position: 'Head of Career Services',
      image: 'https://images.pexels.com/photos/3799113/pexels-photo-3799113.jpeg?auto=compress&cs=tinysrgb&h=350',
      description: "Michelle has 7 years of experience in career counseling. She specializes in helping clients optimize their resumes and prepare for interviews. Her strategic guidance has helped hundreds of professionals successfully transition to better roles across various industries."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">About Us</h2>

        <div className="space-y-16">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div className="mb-8 md:mb-0 md:mr-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.position}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">Learn more about how we started →</p>
          <p className="text-blue-400 mt-2">Follow us on LinkedIn →</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;