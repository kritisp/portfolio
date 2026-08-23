import React, { useState } from 'react'
import { ExternalLink, ShieldCheck, Layout } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'AI & Intelligence', 'Healthcare', 'Full Stack']

  const projects = [
    {
      id: 'crimelens',
      title: 'CrimeLens',
      subtitle: 'AI Powered Crime Intelligence Platform',
      category: ['AI & Intelligence', 'Full Stack'],
      tags: ['AI/ML', 'Backend Systems', 'Data Analysis', 'Graph Intelligence'],
      impact: 'Currently actively developing CrimeLens with the vision of creating a practical technology solution that can support real-world investigation workflows.',
      description: 'An AI-powered platform designed to assist investigators by analyzing complex crime information, identifying connections between cases, and improving decision-making through intelligent data analysis.',
      badge: 'Active Development / Featured',
      features: [
        'Crime data schema design & analysis',
        'Cross-case connection mapping algorithms',
        'Intelligent investigation workflows',
        'Decision support system modeling'
      ],
      contributions: [
        'Graph intelligence schema design',
        'Backend system modeling & architecture',
        'Developing entity connection logic',
        'Investigator dashboard planning'
      ],
      visualType: 'graph',
      featured: true,
      link: 'https://github.com/kritisp'
    },
    {
      id: 'mannmitra',
      title: 'MannMitra',
      subtitle: 'AI Powered Student Mental Health Platform',
      category: ['AI & Intelligence', 'Healthcare', 'Full Stack'],
      tags: ['HTML', 'CSS', 'JavaScript', 'Django', 'MongoDB', 'Supabase', 'Gemini API'],
      impact: 'Smart India Hackathon 2025 Project — Selected internally to represent the institution at the national level.',
      description: 'An AI-powered platform designed to support student mental health through chatbot assistance, mood tracking, journaling, and mental health assessments.',
      badge: 'SIH 2025 Internal Winner',
      features: [
        'Interactive AI chatbot for instant support',
        'Secure journaling and daily mood trackers',
        'Clinical-grade mental health assessments',
        'Anonymized analytics dashboard'
      ],
      contributions: [
        'Django backend architecture design',
        'Gemini API integration for chat context loops',
        'MongoDB & Supabase database integration',
        'Secure session handling and user profile layers'
      ],
      visualType: 'chat',
      link: 'https://github.com/kritisp'
    },
    {
      id: 'lifecord',
      title: 'LifeCord',
      subtitle: 'Unified Digital Healthcare Super App',
      category: ['Healthcare', 'Full Stack'],
      tags: ['Django', 'PostgreSQL', 'WebSockets', 'REST APIs'],
      impact: 'A robust healthcare coordination system designed for high concurrency and real-time synchronizations.',
      description: 'A healthcare coordination platform connecting patients, doctors, hospitals, pharmacies, and labs to build healthcare transparency.',
      features: [
        'Real-time queue tracking for consultations',
        'Hospital bed and resource monitoring systems',
        'Unified appointments manager',
        'Healthcare cost transparency metrics'
      ],
      contributions: [
        'Developing Django Rest Framework APIs',
        'WebSockets integrations for queue height updates',
        'PostgreSQL indexing & schema design',
        'Secure cross-entity authentication protocols'
      ],
      visualType: 'dashboard',
      link: 'https://github.com/kritisp'
    }
  ]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter))

  const ProjectMockup = ({ type }) => {
    if (type === 'graph') {
      return (
        <div className="relative w-full h-48 md:h-full bg-white dark:bg-zinc-950/80 rounded-lg border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-center overflow-hidden p-4 group-hover:border-indigo-500/20 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(#4f46e50f_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          <svg className="w-full h-full opacity-60" viewBox="0 0 200 120">
            <line x1="40" y1="60" x2="100" y2="30" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" className="animate-pulse" />
            <line x1="40" y1="60" x2="100" y2="90" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
            <line x1="100" y1="30" x2="160" y2="60" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
            <line x1="100" y1="90" x2="160" y2="60" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
            
            <circle cx="40" cy="60" r="5" fill="#4f46e5" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="40" cy="60" r="4" fill="#6366f1" />
            <circle cx="100" cy="30" r="4" fill="#06b6d4" />
            <circle cx="100" cy="90" r="4" fill="#06b6d4" />
            <circle cx="160" cy="60" r="4" fill="#6366f1" />
            
            <text x="45" y="55" fill="currentColor" className="text-zinc-500 dark:text-zinc-400" fontSize="6" fontFamily="monospace">Case_Node_01</text>
            <text x="105" y="25" fill="currentColor" className="text-zinc-500 dark:text-zinc-400" fontSize="6" fontFamily="monospace">Suspect_Lnk</text>
            <text x="105" y="98" fill="currentColor" className="text-zinc-500 dark:text-zinc-400" fontSize="6" fontFamily="monospace">Evidence_Node</text>
          </svg>
        </div>
      )
    }

    if (type === 'chat') {
      return (
        <div className="relative w-full h-48 bg-white dark:bg-zinc-950/80 rounded-lg border border-zinc-200 dark:border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden group-hover:border-teal-500/20 transition-colors">
          <div className="space-y-2.5">
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="space-y-2">
              <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 p-2 rounded text-[9px] font-mono text-zinc-650 dark:text-zinc-400 max-w-[80%]">
                How can I manage exam anxiety?
              </div>
              <div className="bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 p-2 rounded text-[9px] font-mono text-teal-700 dark:text-teal-300 max-w-[85%] self-end ml-auto">
                <span className="font-semibold text-teal-600 dark:text-teal-400">Gemini:</span> Let's structure a custom breathing cycle...
              </div>
            </div>
          </div>
          <div className="h-6 border-t border-zinc-200 dark:border-zinc-850 flex items-center justify-between px-1 text-[8px] font-mono text-zinc-500">
            <span>Supabase Session: active</span>
            <span>MongoDB: connected</span>
          </div>
        </div>
      )
    }

    return (
      <div className="relative w-full h-48 bg-white dark:bg-zinc-950/80 rounded-lg border border-zinc-200 dark:border-zinc-800/80 p-3 flex flex-col justify-between overflow-hidden group-hover:border-blue-500/20 transition-colors">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
            <span>LifeCord Gateway API</span>
            <span className="text-emerald-500">200 OK</span>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 p-2 rounded space-y-1">
            <div className="h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3"></div>
            <div className="h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2"></div>
            <div className="flex justify-between pt-1">
              <span className="text-[7px] font-mono text-blue-600 dark:text-blue-400">WebSocket Ping: 12ms</span>
              <span className="text-[7px] font-mono text-zinc-500">PostgreSQL</span>
            </div>
          </div>
        </div>
        <div className="h-10 bg-zinc-50 dark:bg-zinc-900/30 rounded border border-zinc-200 dark:border-zinc-850/50 flex items-center justify-around">
          <div className="text-center">
            <p className="text-[8px] text-zinc-500 font-mono">Doc_Queue</p>
            <p className="text-xs font-mono font-bold text-zinc-850 dark:text-white">4 min</p>
          </div>
          <div className="text-center border-l border-zinc-200 dark:border-zinc-850 pl-4">
            <p className="text-[8px] text-zinc-500 font-mono">Beds_Avail</p>
            <p className="text-xs font-mono font-bold text-teal-650 dark:text-teal-400">82%</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-28 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-[#030303] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-2">02. Engineering</p>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">Showcase Projects</h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 bg-zinc-200/50 dark:bg-zinc-900/40 p-1 border border-zinc-200 dark:border-zinc-850 rounded-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono transition-all duration-200 ${
                  filter === cat 
                    ? 'bg-white dark:bg-zinc-850 text-zinc-900 dark:text-white font-semibold border border-zinc-200 dark:border-zinc-800 shadow-sm' 
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured && filter === 'All'
            return (
              <div 
                key={project.id}
                className={`group relative border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900/10 hover:border-zinc-300 dark:hover:border-zinc-800 rounded-xl p-6 md:p-8 transition-all duration-300 overflow-hidden glow-card ${
                  isFeatured ? 'grid grid-cols-1 lg:grid-cols-12 gap-8' : ''
                }`}
              >
                {/* Radial Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/[0.01] to-teal-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Left side info (or full width if not featured) */}
                <div className={isFeatured ? 'lg:col-span-7 flex flex-col justify-between' : 'space-y-6'}>
                  <div>
                    {/* Badge & Category */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-[10px] font-mono font-medium text-teal-650 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/5 border border-teal-200 dark:border-teal-500/10 px-2 py-0.5 rounded">
                        {project.category.join(' / ')}
                      </span>
                      {project.badge && (
                        <span className="text-[10px] font-mono font-medium text-amber-700 dark:text-amber-500 bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/10 px-2.5 py-0.5 rounded-full">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-1 mb-4 uppercase tracking-wider">
                      {project.subtitle}
                    </p>

                    {/* Impact Statement */}
                    <p className="text-sm text-teal-750 dark:text-teal-300/90 font-mono mb-4 border-l-2 border-teal-500 pl-3 leading-relaxed">
                      {project.impact}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Core Features list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 bg-zinc-50 dark:bg-zinc-950/40 p-4 rounded-lg border border-zinc-200 dark:border-zinc-850">
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Layout size={13} className="text-teal-600 dark:text-teal-400" />
                          <span>Features</span>
                        </h4>
                        <ul className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                          {project.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="text-zinc-400 dark:text-zinc-600">-</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-2 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-850/80 pt-3 md:pt-0 md:pl-4">
                        <h4 className="text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldCheck size={13} className="text-teal-600 dark:text-teal-400" />
                          <span>Contribution</span>
                        </h4>
                        <ul className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                          {project.contributions.map((c, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="text-zinc-400 dark:text-zinc-600">-</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions & tags */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 px-2.5 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-850/50">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      >
                        <span>View Repository</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side Visual Preview */}
                {isFeatured ? (
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <ProjectMockup type={project.visualType} />
                  </div>
                ) : (
                  <div className="mt-6">
                    <ProjectMockup type={project.visualType} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
