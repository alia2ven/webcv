import React, { useState, useEffect } from 'react';
import { Code, Cpu, Server, Cloud, Zap, GraduationCap, Briefcase, Trophy } from 'lucide-react';

export default function TechTimeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeItem, setActiveItem] = useState(0);

  const timelineData = [
    {

      year: '1993',
      title: 'Ingenieria Tecnica Informatica',
      description: 'Primeros pasos en programación y redes',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
     
      year: '2015',
      title: 'Medium Stack Developer',
      description: 'Dominio de frontend y backend',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2022',
      title: 'Infraestructura IT',
      description: 'Servidores, redes y sistemas',
      icon: Server,
      color: 'from-green-500 to-emerald-500'
    },
    {
   year: '2023',
      title: 'Main & Asistentes Virtuales ',
      description: 'Automatización e IA ',
      icon: Cloud,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2024',
        title: 'Experiencia + 30',
      description: 'Conocimientos',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % timelineData.length);
    }, 3000);

    // Animate items in sequence
    timelineData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => new Set(prev).add(index));
      }, index * 500);
    });

    return () => clearInterval(interval);
  }, []);

  return (

   <section id="FormacionPage">

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-grey to-slate-900 relative overflow-hidden space-y-2">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Elements */}
        {Array.from({length: 15}).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">

        
              Mi Formación IT

          </h1>
          <p className="text-xl text-gray-300">
            Evolución de <span className="text-blue-400">código</span> a <span className="text-purple-400">infraestructura</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full">
            <div className="absolute top-0 w-full h-0 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full animate-timeline-progress"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-4">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.has(index);
              const isActive = activeItem === index;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white transition-all duration-500 ${
                    isActive ? 'bg-yellow-400 scale-150 shadow-xl shadow-yellow-400/50' : 'bg-gray-600'
                  }`}>
                    <div className={`absolute inset-0 rounded-full ${isActive ? 'animate-ping bg-yellow-400' : ''}`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className={`transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : `opacity-0 ${isLeft ? 'translate-x-10' : '-translate-x-10'} translate-y-10`
                    }`}>
                      <div className={`bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 ${
                        isActive ? 'scale-105 shadow-2xl ring-2 ring-yellow-400/50' : ''
                      }`}>
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mr-4 ${
                            isActive ? 'animate-pulse' : ''
                          }`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">{item.year}</div>
                            <div className="text-sm text-gray-400">Timeline</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {timelineData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeItem ? 'bg-yellow-400 scale-150' : 'bg-gray-600'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-2">Actualmente</h3>
            <p className="text-gray-300">
              Creando soluciones que integran desarrollo y sistemas
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes timeline-progress {
          0% { height: 0%; }
          100% { height: 100%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        
        .animate-timeline-progress {
          animation: timeline-progress 8s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
    </section>
  );
}
