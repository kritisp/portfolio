import React from 'react'
import { GraduationCap, Award, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-zinc-900 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-widest mb-2">07. Academics</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Education</h2>
        </div>

        {/* Education Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Institution Card */}
          <div className="lg:col-span-8 p-6 md:p-8 rounded-lg border border-zinc-850 bg-zinc-900/10 hover:border-zinc-800 transition-all glow-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-zinc-950 border border-zinc-850 text-teal-400">
                <GraduationCap size={24} />
              </div>
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  Bachelor of Technology
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Institute of Technical Education and Research
                </h3>
                <p className="text-sm font-mono text-zinc-400">
                  Bhubaneswar, Odisha
                </p>
                <p className="text-sm text-zinc-300 font-medium">
                  Major: Computer Science and Engineering
                </p>
                
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-2">
                  <Calendar size={14} />
                  <span>2024 — 2028 (Candidate)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Box (CGPA Highlight) */}
          <div className="lg:col-span-4 p-6 md:p-8 rounded-lg border border-teal-500/10 bg-teal-500/[0.02] text-center relative overflow-hidden group hover:border-teal-500/30 transition-all glow-card">
            {/* Ambient background light */}
            <div className="absolute inset-0 bg-teal-500/[0.01] pointer-events-none group-hover:bg-teal-500/[0.03] transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-3">
                <Award size={32} className="text-teal-400" />
              </div>
              <p className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-1">Cumulative GPA</p>
              <h4 className="text-5xl font-extrabold text-white tracking-tight font-mono mb-2">
                9.77<span className="text-teal-500 text-3xl">/10</span>
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                Academic Distinction
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
