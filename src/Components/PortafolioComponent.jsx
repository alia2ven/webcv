import { useState, useEffect } from 'react';
import { Github, ExternalLink, Eye, Star, Calendar, Tag } from 'lucide-react';

export default function ModernPortfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory management, advanced search filters, and seamless checkout experience.',
      longDescription: 'A comprehensive e-commerce platform built with cutting-edge technologies. Features include real-time inventory tracking, AI-powered product recommendations, advanced analytics dashboard, and multi-payment gateway integration.',
      image: '🛒',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      demo: '#',
      code: '#',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      date: '2024',
      status: 'Live',
      views: '2.5k',
      stars: 128
    },
    {
      id: 2,
      title: 'AI Task Manager',
      description: 'Intelligent productivity app with AI-powered task prioritization, natural language processing, and smart scheduling.',
      longDescription: 'Revolutionary task management application that leverages artificial intelligence to optimize productivity. Features intelligent task categorization, deadline prediction, and automated workflow suggestions.',
      image: '🤖',
      category: 'ai',
      tech: ['React', 'Python', 'OpenAI', 'PostgreSQL', 'FastAPI'],
      demo: '#',
      code: '#',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      date: '2024',
      status: 'Beta',
      views: '1.8k',
      stars: 95
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time business analytics platform with interactive visualizations, custom reports, and predictive insights.',
      longDescription: 'Comprehensive analytics solution providing real-time business intelligence. Features include customizable KPI dashboards, predictive analytics, automated reporting, and team collaboration tools.',
      image: '📊',
      category: 'frontend',
      tech: ['Vue.js', 'D3.js', 'WebSocket', 'Chart.js', 'Tailwind'],
      demo: '#',
      code: '#',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      date: '2023',
      status: 'Live',
      views: '3.2k',
      stars: 156
    },
    {
      id: 4,
      title: 'Social Media Hub',
      description: 'Next-generation social platform with real-time messaging, story features, and advanced privacy controls.',
      longDescription: 'Modern social networking platform focusing on user privacy and meaningful connections. Includes end-to-end encryption, content moderation AI, and innovative interaction features.',
      image: '💬',
      category: 'mobile',
      tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
      demo: '#',
      code: '#',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      date: '2024',
      status: 'Development',
      views: '1.1k',
      stars: 73
    },
    {
      id: 5,
      title: 'Crypto Trading Bot',
      description: 'Automated cryptocurrency trading system with advanced algorithms, risk management, and portfolio optimization.',
      longDescription: 'Sophisticated trading bot utilizing machine learning algorithms for market analysis. Features include automated portfolio rebalancing, risk assessment, and real-time market monitoring.',
      image: '₿',
      category: 'ai',
      tech: ['Python', 'TensorFlow', 'REST APIs', 'Docker'],
      demo: '#',
      code: '#',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      bgGradient: 'from-yellow-500/20 to-orange-500/20',
      date: '2023',
      status: 'Live',
      views: '4.1k',
      stars: 203
    },
    {
      id: 6,
      title: 'Design System',
      description: 'Comprehensive UI component library with design tokens, documentation, and development tools.',
      longDescription: 'Complete design system providing consistent UI components across platforms. Includes design tokens, accessibility guidelines, interactive documentation, and automated testing.',
      image: '🎨',
      category: 'frontend',
      tech: ['React', 'Storybook', 'Figma', 'TypeScript'],
      demo: '#',
      code: '#',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgGradient: 'from-indigo-500/20 to-purple-500/20',
      date: '2024',
      status: 'Live',
      views: '2.9k',
      stars: 189
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'Live': 'text-green-400 bg-green-400/10 border-green-400/20',
      'Beta': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      'Development': 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    };
    return colors[status] || colors['Development'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-500 to-slate-950 p-8 ">


      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent mb-6">
            Portafolio
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of innovative projects blending creativity with cutting-edge technology
          </p>
        </div>

        {/* Filter Categories */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">
                {category.name} ({category.count})
              </span>
              {filter !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 ">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ 
                transitionDelay: `${300 + index * 150}ms`,
                animationDelay: `${300 + index * 150}ms`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {project.image}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{project.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6 text-sm text-slate-400">
                    <div className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300">
                      <Eye size={16} />
                      <span>{project.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-yellow-400 transition-colors duration-300">
                      <Star size={16} />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className={`group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-full font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex-1 justify-center`}
                  >
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.code}
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-white/20 rounded-full font-semibold text-white hover:bg-white/10 hover:border-white/40 transform hover:scale-105 transition-all duration-300 flex-1 justify-center"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>

                {/* Floating elements for hover effect */}
                {hoveredProject === project.id && (
                  <>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400/80 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-pink-400/70 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </>
                )}
              </div>

              {/* Bottom gradient line */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 ${hoveredProject === project.id ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-3">
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
    </div>
  );
}