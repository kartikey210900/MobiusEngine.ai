import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import PricingPlans from './components/PricingPlans';
import ResumeServices from './components/ResumeServices';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlans />
      <ResumeServices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;