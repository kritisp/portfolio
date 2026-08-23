import React from 'react'
import { Terminal, Box, Database, Wrench, Lightbulb } from 'lucide-react'

export default function Skills() {
  const skillGroups = [
    {
      title: 'Programming',
      icon: <Terminal size={16} className="text-teal-500" />,
      skills: ['Python', 'Java', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Frameworks & APIs',
      icon: <Box size={16} className="text-teal-500" />,
      skills: ['React.js', 'Django', 'FastAPI', 'REST APIs']
    },
    {
      title: 'Databases',
      icon: <Database size={16} className="text-teal-500" />,
      skills: ['PostgreSQL', 'MongoDB', 'Supabase']
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={16} className="text-teal-500" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    },
    {
      title: 'Core Concepts',
      icon: <Lightbulb size={16} className="text-teal-500" />,
      skills: [
        'Data Structures & Algorithms',
        'Object Oriented Programming',
        'Database Design',
        'Backend Development',
        'Machine Learning'
      ],
      fullWidth: true
    }
  ]

  return (
    <section id="skills" className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-teal-500 uppercase tracking-widest mb-2">03. Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skills & Technologies</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-lg border border-zinc-800/80 bg-zinc-900/10 hover:border-zinc-700/80 transition-all ${
                group.fullWidth ? 'md:col-span-2 lg:col-span-4' : ''
              }`}
            >
              {/* Group Title */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800">
                {group.icon}
                <h3 className="text-sm font-semibold font-mono text-white tracking-wider">
                  {group.title}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-xs font-mono text-zinc-300 bg-zinc-900/50 border border-zinc-800/50 px-3 py-1.5 rounded hover:border-teal-500/20 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
