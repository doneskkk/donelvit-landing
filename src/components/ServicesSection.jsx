import React from "react";
import { Building2, Shield } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-12 h-12 mb-4" />,
    title: "Rezistență și Stabilitate",
    description:
      "Analiză structurală și proiectare expertă pentru durabilitatea și siguranța clădirilor",
    features: [
      "Evaluare structurală completă",
      "Proiectare conform normativelor actuale",
      "Consolidări și reabilitări",
      "Consultanță tehnică specializată",
    ],
  },
  {
    icon: <Shield className="w-12 h-12 mb-4" />,
    title: "Siguranță în Exploatare",
    description:
      "Evaluări complete de siguranță și implementări pentru excelență operațională",
    features: [
      "Verificare tehnică periodică",
      "Evaluare risc seismic",
      "Monitorizare structurală",
      "Rapoarte tehnice detaliate",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services-section" className="bg-gray-50 py-24 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url("/placeholder-image.webp")' }}
      />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16">
          Serviciile Noastre
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="text-blue-600 bg-blue-50 p-4 rounded-full">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-center mt-6 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-center mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 w-full">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
