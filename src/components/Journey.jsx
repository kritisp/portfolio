import React from 'react'
import { Trophy, Users, ShieldAlert, GitCommit, ChevronRight } from 'lucide-react'

export default function Journey() {
  const steps = [
    {
      year: '2025',
      title: 'Smart India Hackathon',
      subtitle: 'MannMitra AI Mental Health Platform',
      icon: <Trophy size={16} className="text-amber-500 dark:text-amber-400" />,
      description: 'Represented the institution in national stages for MannMitra. Integrated the Gemini API for LLM chatbot assistance and MongoDB/Supabase database systems.',
      color: 'border-amber-200 dark:border-amber-500/30 text-amber-600 dark:text-amber-400'
    },
    {
      year: '2025 — 2026',
      title: 'Hackathons & Communities',
      subtitle: 'GDG + SOA-AIC + SWADRP Collaborations',
      icon: <Users size={16} className="text-teal-650 dark:text-teal-400" />,
      description: 'Expanded full-stack backend skills, joined Google Developer Groups (GDG) and SOA-AIC tech teams, and volunteered for SWADRP healthcare awareness technology.',
      color: 'border-teal-200 dark:border-teal-500/30 text-teal-600 dark:text-teal-400'
    },
    {
      year: '2026',
      title: 'CrimeLens Intelligence',
      subtitle: 'AI-Powered Crime Investigation System',
      icon: <ShieldAlert size={16} className="text-indigo-500 dark:text-indigo-400" />,
      description: 'Actively developing CrimeLens to help investigators link cases and analyze crime graphs, applying advanced data analysis and intelligence paradigms.',
      color: 'border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400'
    }
  ]

  return (
    <section id="journey" className="py-28 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-[#030303] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-2">04. Milestones</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">Building Journey</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 font-mono mt-2">
            The progression of creating technology solutions with real-world impact.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-900 ml-4 md:ml-8 pl-8 space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Connector Node */}
              <span className={`absolute -left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border ${step.color} shadow-sm transition-transform group-hover:scale-110 duration-300`}>
                {step.icon}
              </span>

              {/* Card Container */}
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900/10 hover:border-zinc-300 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-all glow-card">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-zinc-100 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-850 text-zinc-500 dark:text-zinc-400">
                    {step.year}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                    <GitCommit size={12} />
                    <span>Production Node</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {step.title}
                </h3>
                
                <div className="flex items-center gap-1 text-sm font-mono text-teal-600 dark:text-teal-400 mb-4">
                  <span>{step.subtitle}</span>
                  <ChevronRight size={14} />
                </div>

                <p className="text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
