import React from 'react'
import { Trophy, Target, Award, Rocket } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      title: 'Smart India Hackathon 2025',
      detail: 'Internal Selection Winner',
      description: 'Selected internally to represent the institution in national stages for the mental health platform MannMitra.',
      icon: <Trophy size={20} className="text-amber-400" />
    },
    {
      title: 'TechZephyr Hackathon Finals',
      detail: 'Top 22 Teams Nationwide',
      description: 'Qualified for the offline Grand Finals at IIT Bhubaneswar, finishing among the top 22 engineering teams.',
      icon: <Target size={20} className="text-teal-400" />
    },
    {
      title: 'Hackathon Competitor',
      detail: 'Multiple Platforms',
      description: 'Actively participated and pitched projects in multiple hackathons hosted by premium institutes like XIM, IIIT, and developer groups.',
      icon: <Rocket size={20} className="text-indigo-400" />
    }
  ]

  return (
    <section id="achievements" className="py-28 border-t border-zinc-900 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-widest mb-2">08. Recognition</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Achievements & Hackathons</h2>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-lg border border-zinc-850 bg-zinc-900/10 hover:border-zinc-800 transition-all flex flex-col justify-between glow-card"
            >
              <div>
                {/* Header Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-950 border border-zinc-850 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                
                {/* Title and Detail */}
                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-teal-400 mb-3">
                  {item.detail}
                </p>
                
                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
