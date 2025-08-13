import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Building2, ChevronRight, ExternalLink } from 'lucide-react';

const WorkExperience = () => {
  const [selectedJob, setSelectedJob] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Frontend Developer",
      duration: "2025 - Presente",
      location: "Remoto",
      type: "Tiempo Completo",
      description: "Desarrollo de aplicaciones web modernas utilizando React, TypeScript y Node.js. Liderazgo de equipo de 4 desarrolladores y implementación de mejores prácticas de desarrollo.",
      achievements: [
        "Mejoré el rendimiento de la aplicación principal en un 40%",
        "Implementé un sistema de design system adoptado por toda la empresa",
        "Lideré la migración de JavaScript a TypeScript en 3 proyectos principales"
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL", "GitHub"],
      website: "https://techcorp.com"
    },
    {
      id: 2,
      company: "Digital Innovation Lab",
      position: "Full Stack Developer",
      duration: "2023 - 2023",
      location: "Remoto",
      type: "Tiempo Completo",
      description: "Desarrollo de soluciones digitales innovadoras para startups y empresas establecidas. Especialización en arquitecturas escalables y experiencias de usuario excepcionales.",
      achievements: [
        "Desarrollé 8+ aplicaciones web desde cero",
        "Reduje los tiempos de carga promedio en un 60%",
        "Implementé sistemas de CI/CD que mejoraron la productividad del equipo"
      ],
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Docker"],
      website: "https://digilab.com"
    },
    {
      id: 3,
      company: "StartupHub",
      position: "Frontend Developer",
      duration: "2022 - 2022",
      location: "Valencia, España",
      type: "Remoto",
      description: "Desarrollo de interfaces de usuario modernas y responsivas. Colaboración estrecha con diseñadores UX/UI para crear experiencias digitales memorables.",
      achievements: [
        "Creé una librería de componentes reutilizables",
        "Implementé responsive design en 20+ proyectos",
        "Mejoré la accesibilidad web cumpliendo estándares WCAG 2.1"
      ],
      technologies: ["React", "Sass", "JavaScript", "Webpack", "Figma"],
      website: "https://startuphub.com"
    },
    {
      id: 4,
      company: "FreelanceWorld",
      position: "Web Developer",
      duration: "2021 - 2021",
      location: "Remoto",
      type: "Freelance",
      description: "Desarrollo de sitios web y aplicaciones para diversos clientes. Especialización en e-commerce y sitios web corporativos con enfoque en conversión.",
      achievements: [
        "Completé 5+ proyectos exitosos",
        
        "Aumenté las conversiones de clientes en promedio 35%"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "jQuery", "Bootstrap"],
      website: null
    }
  ];

  const currentExp = experiences[selectedJob];

  return (

    <section id="ExperienciaPage">


    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-grey to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl font-bold text-white mb-4">
            Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Profesional</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">

   
            Mi trayectoria profesional en el desarrollo IT


          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-4">
            <div className={`space-y-4 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  onClick={() => setSelectedJob(index)}
                  className={`relative cursor-pointer group transition-all duration-300 ${
                    selectedJob === index 
                      ? 'transform scale-105' 
                      : 'hover:transform hover:scale-102'
                  }`}
                >
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent opacity-30"></div>
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    selectedJob === index
                      ? 'bg-purple-500 border-purple-400 shadow-lg shadow-purple-500/50'
                      : 'bg-gray-700 border-gray-600 group-hover:border-purple-400'
                  }`}></div>
                  
                  {/* Card */}
                  <div className={`ml-12 p-6 rounded-xl border transition-all duration-300 ${
                    selectedJob === index
                      ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 shadow-xl'
                      : 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/70'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-bold text-lg transition-colors duration-300 ${
                        selectedJob === index ? 'text-purple-400' : 'text-white group-hover:text-purple-400'
                      }`}>
                        {exp.company}
                      </h3>
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                        selectedJob === index ? 'text-purple-400 rotate-90' : 'text-gray-400 group-hover:translate-x-1'
                      }`} />
                    </div>
                    <p className="text-gray-300 text-sm mb-1">{exp.position}</p>
                    <p className="text-gray-400 text-xs">{exp.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-8">
            <div className={`transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
                {/* Company Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-8 h-8 text-purple-400" />
                      <h2 className="text-3xl font-bold text-white">{currentExp.company}</h2>
                      {currentExp.website && (
                        <a 
                          href={currentExp.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-xl text-purple-400 font-semibold mb-4">{currentExp.position}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        {currentExp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        {currentExp.location}
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                        {currentExp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">Descripción</h4>
                  <p className="text-gray-300 leading-relaxed">{currentExp.description}</p>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Logros Principales</h4>
                  <div className="space-y-3">
                    {currentExp.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 group-hover:bg-pink-500 transition-colors duration-300"></div>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-3">
                    {currentExp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                                 border border-purple-500/30 text-purple-300 rounded-lg text-sm
                                 hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-400/50
                                 hover:text-purple-200 transition-all duration-300 cursor-default
                                 transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Animation */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>


    </section>


  );
};

export default WorkExperience;