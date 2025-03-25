import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
