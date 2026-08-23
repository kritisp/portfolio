import React, { useState } from 'react'
import { FolderGit2, ExternalLink, ShieldCheck, Milestone, Cpu, Database } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'AI & Intelligence', 'Healthcare', 'Full Stack']

  const projects = [
    {
      title: 'MannMitra',
      subtitle: 'AI Powered Student Mental Health Platform',
      category: ['AI & Intelligence', 'Healthcare', 'Full Stack'],
      tags: ['HTML', 'CSS', 'JavaScript', 'Django', 'MongoDB', 'Supabase', 'Gemini API'],
      description: 'An AI-powered platform designed to support student mental health through chatbot assistance, mood tracking, journaling, and mental health assessments.',
      badge: 'Smart India Hackathon 2025',
      contributions: [
        'Backend architecture design and setup',
        'Gemini API integration for the AI mental health chatbot',
        'Database implementation with MongoDB and Supabase',
        'Building secure user-focused authentication and mood logs'
      ],
      link: '#'
    },
    {
      title: 'CrimeLens',
      subtitle: 'AI Powered Crime Intelligence Platform',
      category: ['AI & Intelligence', 'Full Stack'],
      tags: ['AI/ML', 'Backend Systems', 'Data Analysis', 'Graph Intelligence'],
      description: 'An AI-powered platform designed to assist investigators by analyzing complex crime information, identifying connections between cases, and improving decision-making through intelligent data analysis.',
      badge: 'Active Development',
      statusNote: 'Currently actively developing CrimeLens with the vision of creating a practical technology solution that can support real-world investigation workflows.',
      link: '#'
    },
    {
      title: 'LifeCord',
      subtitle: 'Unified Digital Healthcare Super App',
      category: ['Healthcare', 'Full Stack'],
      tags: ['Django', 'PostgreSQL', 'WebSockets', 'REST APIs'],
      description: 'A healthcare coordination platform connecting patients, doctors, hospitals, pharmacies, and labs. Integrates key transparency features to facilitate patient flows.',
      features: [
        'Appointment management system',
        'Real-time queue tracking',
        'Hospital resource monitoring',
        'Healthcare transparency features'
      ],
      link: '#'
    }
  ]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter))

  return (
    <section id="projects" className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs text-teal-500 uppercase tracking-widest mb-2">02. Engineering</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Showcase Projects</h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-zinc-900/50 p-1 border border-zinc-800/80 rounded-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  filter === cat 
                    ? 'bg-teal-500/10 text-teal-400 font-semibold border border-teal-500/20' 
                    : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative border border-zinc-800/80 bg-zinc-900/20 hover:border-zinc-700/80 rounded-xl p-6 md:p-8 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/[0.02] rounded-full blur-3xl group-hover:bg-teal-500/[0.04] transition-colors pointer-events-none"></div>

              {/* Title & Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-medium text-teal-500 bg-teal-500/5 border border-teal-500/10 px-2 py-0.5 rounded">
                      {project.category.join(' / ')}
                    </span>
                    {project.badge && (
                      <span className="text-xs font-mono font-medium text-amber-500 bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <a 
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <span>Codebase</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 max-w-3xl">
                {project.description}
              </p>

              {/* Bullet Features or Contributions */}
              {project.contributions && (
                <div className="mb-6 bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-lg">
                  <h4 className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    <span>My Contributions</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-400">
                    {project.contributions.map((item, key) => (
                      <li key={key} className="flex items-start gap-2">
                        <span className="text-teal-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.features && (
                <div className="mb-6 bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-lg">
                  <h4 className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Milestone size={14} />
                    <span>Key Features</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-400">
                    {project.features.map((item, key) => (
                      <li key={key} className="flex items-start gap-2">
                        <span className="text-teal-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.statusNote && (
                <div className="mb-6 bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-lg">
                  <h4 className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Cpu size={14} />
                    <span>System Vision</span>
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed italic">
                    {project.statusNote}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded"
                  >
                    {tag}
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
