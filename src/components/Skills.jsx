import React from 'react'
import { Cpu, Server, Layout, Database, Wrench } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'AI / Machine Learning',
      icon: <Cpu size={18} className="text-teal-400" />,
      skills: [
        { name: 'Machine Learning', level: '85%' },
        { name: 'Data Analysis', level: '80%' },
        { name: 'Gemini API Integration', level: '90%' },
        { name: 'Graph Intelligence', level: '75%' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={18} className="text-indigo-400" />,
      skills: [
        { name: 'Python', level: '90%' },
        { name: 'Django', level: '85%' },
        { name: 'FastAPI / REST APIs', level: '80%' },
        { name: 'WebSockets (Real-time)', level: '75%' },
        { name: 'Java', level: '80%' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={18} className="text-blue-400" />,
      skills: [
        { name: 'React.js', level: '80%' },
        { name: 'JavaScript (ES6+)', level: '85%' },
        { name: 'HTML5 & CSS3', level: '90%' }
      ]
    },
    {
      title: 'Databases',
      icon: <Database size={18} className="text-purple-400" />,
      skills: [
        { name: 'PostgreSQL', level: '80%' },
        { name: 'MongoDB', level: '85%' },
        { name: 'Supabase', level: '85%' }
      ]
    },
    {
      title: 'Developer Tools',
      icon: <Wrench size={18} className="text-cyan-400" />,
      skills: [
        { name: 'Git & GitHub', level: '90%' },
        { name: 'VS Code', level: '95%' },
        { name: 'Postman', level: '85%' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-28 border-t border-zinc-900 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-widest mb-2">03. Stack</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Skills & Tech Stack</h2>
        </div>

        {/* Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl border border-zinc-850 bg-zinc-900/10 hover:border-zinc-800 transition-all glow-card"
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-zinc-850/80">
                <div className="p-2 rounded bg-zinc-950 border border-zinc-850">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold font-mono text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with custom meters */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-zinc-300 font-medium">{skill.name}</span>
                      <span className="text-zinc-500">Confidence</span>
                    </div>
                    {/* Visual Meter */}
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-850/40">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-500"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
