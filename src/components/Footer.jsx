import React from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-orange-600 via-yellow-500 to-red-500 text-transparent bg-clip-text">
                  DONEL
                </span>
                  <span>VIT</span>
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Expertiză tehnică de top pentru soluții de construcție durabile și sigure.
                Oferim servicii profesionale de consultanță și expertiză tehnică.
              </p>
              <div className="flex space-x-4">
                <a
                    href="#"
                    className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Link-uri Rapide</h4>
              <ul className="space-y-4">
                {['Acasă', 'Despre Noi', 'Servicii', 'Portfolio', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link
                          to="/"
                          className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                        {item}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Servicii</h4>
              <ul className="space-y-4">
                {[
                  'Expertiză Tehnică',
                  'Consultanță',
                  'Evaluare Structurală',
                  'Siguranță la Foc',
                  'Eficiență Energetică'
                ].map((service) => (
                    <li key={service}>
                      <Link
                          to="/"
                          className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                        {service}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <a
                    href="mailto:contact@donelvit.ro"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  contact@donelvit.ro
                </a>
                <a
                    href="tel:+37368444090"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +373 68 44 40 90
                </a>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3" />
                  <p>Chișinău, Moldova</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="w-5 h-5 mr-3" />
                  <p>Luni - Vineri: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} DONELVIT. Toate drepturile rezervate.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Politica de Confidențialitate
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Termeni și Condiții
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;