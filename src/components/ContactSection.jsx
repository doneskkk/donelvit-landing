import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    mesaj: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
      <section id="contact-section" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16">Contact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-8">Informații de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:contact@donelvit.ro" className="text-gray-800 hover:text-blue-600 transition-colors">
                      contact@donelvit.md
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <a href="tel:+37368444090" className="text-gray-800 hover:text-blue-600 transition-colors">
                      +373 68 44 40 90
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Adresă</p>
                    <p className="text-gray-800">Str. Exemplu 123, Chisinau, Moldova</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-8">Trimite-ne un mesaj</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-2">
                    Nume
                  </label>
                  <input
                      type="text"
                      id="nume"
                      name="nume"
                      value={formData.nume}
                      onChange={(e) => setFormData({...formData, nume: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Numele dumneavoastră"
                      required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Email-ul dumneavoastră"
                      required
                  />
                </div>
                <div>
                  <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                      id="mesaj"
                      name="mesaj"
                      rows="5"
                      value={formData.mesaj}
                      onChange={(e) => setFormData({...formData, mesaj: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Scrie mesajul dumneavoastră aici"
                      required
                  ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Trimite Mesajul</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;