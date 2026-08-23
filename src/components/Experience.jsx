import React from 'react'
import { Calendar, Users, Cpu, Award } from 'lucide-react'

export default function Experience() {
  const activities = [
    {
      role: 'Tech Team Member',
      organization: 'ITER Official Google Developer Group (GDG)',
      type: 'Developer Community',
      description: 'Contributing to developer activities, organizing technical workshops, and fostering peer learning initiatives within the university campus.',
      icon: <Users size={16} className="text-teal-400" />
    },
    {
      role: 'Tech Team Member',
      organization: 'SOA-AIC (Atal Incubation Centre), ITER',
      type: 'Innovation & Incubation',
      description: 'Supporting startup events, innovation programs, hackathons, and technology-driven initiatives to help incubate student ideas.',
      icon: <Cpu size={16} className="text-teal-400" />
    },
    {
      role: 'Research & Technology Volunteer',
      organization: 'SWADRP',
      type: 'Research & Community Engagement',
      description: 'Contributing to digital health awareness initiatives through research, community outreach, and technology development to promote healthcare solutions.',
      icon: <Award size={16} className="text-teal-400" />
    }
  ]

  return (
    <section id="experience" className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-teal-500 uppercase tracking-widest mb-2">04. Engagement</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience & Community</h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 pl-8 space-y-12">
          {activities.map((act, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <span className="absolute -left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 group-hover:border-teal-500 transition-colors">
                {act.icon}
              </span>

              {/* Card Container */}
              <div className="p-6 rounded-lg border border-zinc-800/80 bg-zinc-900/10 hover:border-zinc-700/80 hover:bg-zinc-900/30 transition-all">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {act.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar size={12} />
                    <span>Active Member</span>
                  </div>
                </div>

                {/* Role & Org */}
                <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                  {act.role}
                </h3>
                <p className="text-sm font-mono text-teal-500 mb-4">
                  {act.organization}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
