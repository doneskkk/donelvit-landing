import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Building,
  Users,
  Clock,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Centrul Comercial Aurora",
    location: "Chișinău, Moldova",
    date: "2024",
    type: "Comercial",
    image: "",
    description:
      "Expertiza tehnică completă și evaluarea siguranței structurale pentru cel mai nou centru comercial din capitală.",
    services: [
      "Analiză structurală",
      "Evaluare seismică",
      "Siguranță la incendiu",
    ],
    client: "Aurora Development SRL",
    duration: "6 luni",
  },
  {
    id: 2,
    title: "Complexul Rezidențial Verde",
    location: "Bălți, Moldova",
    date: "2023",
    type: "Rezidențial",
    image: "/api/placeholder/600/400",
    description:
      "Consultanță tehnică și expertiza pentru un complex rezidențial modern cu 200 de apartamente.",
    services: ["Expertiză tehnică", "Eficiență energetică", "Protecție fonică"],
    client: "Green Construct SRL",
    duration: "8 luni",
  },
  {
    id: 3,
    title: "Centrul Medical Moderne",
    location: "Orhei, Moldova",
    date: "2023",
    type: "Medical",
    image: "/api/placeholder/600/400",
    description:
      "Evaluarea tehnică și consultanță pentru renovarea și modernizarea centrului medical.",
    services: [
      "Evaluare structurală",
      "Sisteme medicale",
      "Siguranță în exploatare",
    ],
    client: "Moderne Health Center",
    duration: "4 luni",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-300"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
          {project.type}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {project.location}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {project.date}
          </div>
        </div>

        <p className="text-gray-600">{project.description}</p>

        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Servicii Furnizate:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            {project.client}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {project.duration}
          </div>
        </div>
      </div>
    </div>
  );
};

const CompletedProjects = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Obiecte Finalizate</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Portofoliul nostru demonstrează expertiza tehnică și dedicarea
            pentru excelență în fiecare proiect realizat. Fiecare obiect
            finalizat reprezintă un angajament pentru calitate și inovație.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            <span>Vezi Toate Proiectele</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
