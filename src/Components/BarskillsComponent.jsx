import { useState, useEffect } from 'react';

export default function TechnicalSkillsBars() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-400', icon: '⚛️' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-400', icon: '🟨' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-400', icon: '🔷' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-400', icon: '🟢' },
    { name: 'Python', level: 88, color: 'from-indigo-500 to-purple-400', icon: '🐍' },
    { name: 'CSS/Tailwind', level: 92, color: 'from-pink-500 to-rose-400', icon: '🎨' },
    { name: 'MongoDB', level: 78, color: 'from-green-600 to-green-400', icon: '🍃' },
    { name: 'GraphQL', level: 75, color: 'from-purple-500 to-pink-400', icon: '🔗' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
<<<<<<< HEAD
=======

    <section id="SkillsPage">

>>>>>>> 75db5dc (arreglo)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-white-400 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg">
            Expertise across modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                
                {/* Glowing background effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${skill.color} blur-xl -z-10`}></div>
                
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl transform transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <div className={`text-lg font-bold transition-all duration-300 ${
                    hoveredSkill === index ? 'text-cyan-400 scale-110' : 'text-slate-400'
                  }`}>
                    {isVisible ? skill.level : 0}%
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="relative h-4 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/30">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  
                  {/* Progress Bar */}
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden transition-all duration-1000 ease-out transform origin-left`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    
                    {/* Moving highlight */}
                    <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse"></div>
                  </div>

                  {/* Floating particles effect */}
                  {hoveredSkill === index && (
                    <>
                      <div className="absolute top-1 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                      <div className="absolute top-2 left-3/4 w-0.5 h-0.5 bg-cyan-400/80 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-0.5 left-1/2 w-0.5 h-0.5 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
                    </>
                  )}
                </div>

                {/* Skill level indicator */}
                <div className="flex justify-between mt-3 text-xs text-slate-400">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Expert</span>
                </div>
              </div>

              {/* Hover tooltip */}
              {hoveredSkill === index && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm border border-white/20 animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                    <span>Proficiency: {skill.level}%</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======

    </section>

>>>>>>> 75db5dc (arreglo)
  );
}
