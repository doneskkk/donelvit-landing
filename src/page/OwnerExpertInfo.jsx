import React from 'react';
import { Linkedin, FileText, Award, BookOpen } from 'lucide-react';
const OwnerExpertInfo = () => {
  return (
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16">Informații Despre Expert</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <img
                    src="/api/placeholder/400/500"
                    alt="Dones Vitalie"
                    className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <Award className="w-8 h-8" />
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a href="#" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <FileText className="w-6 h-6 text-blue-600" />
                </a>
                <a href="#" className="bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Dones Vitalie</h3>
                <p className="text-blue-600 font-medium">Expert Tehnic Certificat</p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Dones Vitalie este un expert certificat cu experiență vastă în domeniul consultanței tehnice,
                  specializat în analiza stabilității structurale și securitate la incendiu.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Expertiza sa include:
                </p>

                <ul className="space-y-3">
                  {[
                    'Certificare în Expertize Tehnice',
                    'Specializare în Analiza Structurală',
                    'Expert în Securitate la Incendiu',
                    'Consultanță Tehnică Avansată'
                  ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span>{item}</span>
                      </li>
                  ))}
                </ul>
              </div>

              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                &#34;Fiecare proiect reprezintă o oportunitate de a asigura siguranța și durabilitatea structurilor pentru generațiile viitoare.&#34;
              </blockquote>
            </div>
          </div>
        </div>
      </section>
  );
};


export default OwnerExpertInfo;