import React, { useState, useEffect } from 'react';
import { Monitor, Code, Cpu, HardDrive, Wifi, Zap, Github, Linkedin, Mail } from 'lucide-react';

export default function TechProfile() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { icon: Code, label: "Full Stack Development", color: "text-blue-400" },
    { icon: Cpu, label: "Arquitectura de Sistemas", color: "text-purple-400" },
    { icon: HardDrive, label: "Infraestructura IT", color: "text-green-400" },
    { icon: Wifi, label: "Redes & Conectividad", color: "text-pink-400" },
    { icon: Zap, label: "Automatización", color: "text-yellow-400" },
    { icon: Monitor, label: "DevOps & Cloud", color: "text-cyan-400" }
  ];

  return (



    <section id="WelcomePage">

    <div className="min-h-4 bg-gradient-to-br from-slate-900 via-grey to-slate-900 relative overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Abstract Monitor Shapes */}
        <div className="absolute top-20 left-20 w-32 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-10 transform rotate-12 animate-float"></div>
        <div className="absolute top-40 right-32 w-28 h-18 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg opacity-10 transform -rotate-6 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-36 h-22 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg opacity-10 transform rotate-6 animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Scattered Components */}
        {Array.from({length: 20}).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-20 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-1 py-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header Section */}
          <div className="text-center mb-16">
            
            
            <h1 className="text-white text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              ¡Bienvenido**!
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Donde el <span className="text-blue-400 font-semibold">código</span> se encuentra con el <span className="text-purple-400 font-semibold">hardware</span>
            </p>
          </div>

          {/* Profile Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Mi Perfil Profesional</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Soy un profesional IT con experiencia integral en el ecosistema tecnológico. 
                    Mi pasión radica en crear soluciones que van desde el desarrollo de software 
                    hasta la implementación de infraestructura robusta.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Mi enfoque híbrido me permite entender tanto los aspectos técnicos del desarrollo 
                    como las necesidades físicas de la infraestructura, creando puentes entre el 
                    mundo digital y físico.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center mb-4">
                      <Cpu className="w-6 h-6 text-blue-400 mr-3" />
                      <span className="text-white font-semibold">Stack Principal</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Frontend</span>
                        <span className="text-blue-400 font-mono">React, Vue, Angular</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Backend</span>
                        <span className="text-purple-400 font-mono">Node.js, Python, .NET</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Infraestructura</span>
                        <span className="text-green-400 font-mono">AWS, Docker, K8s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Áreas de Especialización</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className={`w-8 h-8 ${skill.color} mr-3`} />
                    <h3 className="text-white font-semibold">{skill.label}</h3>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${
                        skill.color.includes('blue') ? 'from-blue-500 to-blue-600' :
                        skill.color.includes('purple') ? 'from-purple-500 to-purple-600' :
                        skill.color.includes('green') ? 'from-green-500 to-green-600' :
                        skill.color.includes('pink') ? 'from-pink-500 to-pink-600' :
                        skill.color.includes('yellow') ? 'from-yellow-500 to-yellow-600' :
                        'from-cyan-500 to-cyan-600'
                      } rounded-full transition-all duration-1000`}
                      style={{width: `${85 + Math.random() * 15}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
       
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>


    </section>

  );
}
