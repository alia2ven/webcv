import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, Heart, Coffee } from 'lucide-react';

export default function ContactFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
        value: 'alia2ven@gmail.com',
      href: 'mailto:alex@example.com',
      color: 'text-cyan-400',
      hoverColor: 'hover:bg-cyan-500/10 hover:border-cyan-400/30',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn',
      value: '@alexdeveloper',
      href: 'https://linkedin.com',
      color: 'text-blue-400',
      hoverColor: 'hover:bg-blue-500/10 hover:border-blue-400/30',
      gradient: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      id: 'github',
      icon: Github,
      title: 'GitHub',
      value: '@alia2ven',
      href: 'https://github.com',
      color: 'text-purple-400',
      hoverColor: 'hover:bg-purple-500/10 hover:border-purple-400/30',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Telefono',
      value: '+34 (034) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-green-400',
      hoverColor: 'hover:bg-green-500/10 hover:border-green-400/30',
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-purple-400' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Email', href: '#', icon: Mail, color: 'hover:text-cyan-400' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (

    <section id="ContactoPage">

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-500 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
              Que?, lo hacemos? 
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              ¿Listo para hacer realidad tus ideas? Creemos algo increíble juntos.
              <span className="block mt-2 text-lg text-slate-400">Siempre estoy emocionado de trabajar en nuevos proyectos y colaboraciones.</span>
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.id}
                  href={method.href}
                  className={`group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 ${method.hoverColor} transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredContact(method.id)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${method.gradient}`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <IconComponent className={`w-10 h-10 mx-auto mb-6 ${method.color} group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-300 break-words">
                      {method.value}
                    </p>
                  </div>

                  {/* Hover Effect Particles */}
                  {hoveredContact === method.id && (
                    <>
                      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"></div>
                      <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400/80 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400/70 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </>
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className={`text-center transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto relative overflow-hidden group">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Tienes un proyecto en mente?
                </h3>
                <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">


               Ya sea una aplicación web, una aplicación móvil o simplemente una idea creativa que quieras explorar, estoy aquí para ayudarte a hacerla realidad.


                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group/btn px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <span>Hablamos?</span>
                  </button>
                  
                  <button className="px-8 py-4 border-2 border-white/20 rounded-full font-bold text-lg text-white hover:bg-white/10 hover:border-white/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Agende una llamada</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Javier Developer
              </div>
              <p className="text-slate-400 max-w-sm">
               Creando experiencias digitales que inspiran y conectan a las personas a través de tecnología innovadora.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Inicio', 'About', 'Projects', 'Contacto'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
              <span>© 2025 Javier Developer. Hecho con</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>Y mucho</span>
              <Coffee className="w-4 h-4 text-amber-400" />
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Politica de Privacidad</a>
              <span>•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terminos del Servicio</a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>


    </section>


  );
}