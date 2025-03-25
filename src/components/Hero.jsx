import React from 'react';
import backgroundImage from '../assets/background.webp';

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-950/70 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-4xl md:text-4xl mb-8 text-gray-100 leading-relaxed">
                Partenerul Dumneavoastră în Expertiză Tehnică și Soluții Sustenabile
              </p>
              <button
                  onClick={handleContactClick}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold
                         hover:bg-blue-50 transition-all duration-300
                         transform hover:scale-105 shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950"
              >
                Contactați-ne
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
