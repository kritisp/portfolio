import React from 'react'
import { Brain, Code, Cpu, Users, GraduationCap } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: <Brain className="text-teal-400" size={20} />,
      title: 'Problem Solving',
      description: 'Strong foundation in Data Structures, Algorithms, and Object-Oriented paradigms.',
    },
    {
      icon: <Code className="text-teal-400" size={20} />,
      title: 'Full-Stack Development',
      description: 'Building responsive frontend interfaces and secure, scalable backend architectures.',
    },
    {
      icon: <Cpu className="text-teal-400" size={20} />,
      title: 'AI-Driven Solutions',
      description: 'Integrating intelligent LLMs, machine learning models, and API logic to solve real problems.',
    },
    {
      icon: <Users className="text-teal-400" size={20} />,
      title: 'Team Collaboration',
      description: 'Active community participation, leading tech initiatives, and collaborating on hackathons.',
    },
    {
      icon: <GraduationCap className="text-teal-400" size={20} />,
      title: 'Continuous Learning',
      description: 'Consistently exploring modern tech stacks, emerging tools, and research opportunities.',
    },
  ]

  return (
    <section id="about" className="py-28 md:py-36 border-t border-zinc-900 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-widest mb-2">01. Identity</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-zinc-300">
            <p className="text-lg leading-relaxed font-light">
              I am a Computer Science undergraduate interested in AI, machine learning, and software development. I enjoy building applications that combine technology with real-world impact.
            </p>
            <p className="text-base leading-relaxed text-zinc-400">
              Through hackathons, research initiatives, and developer communities, I continuously explore new technologies and collaborate on meaningful projects. I strive to design applications that are both technically sophisticated and user-focused.
            </p>
            <div className="pt-4">
              <div className="border-l-2 border-teal-500 pl-4 py-2 font-mono text-sm text-zinc-400 italic">
                "Combining clean software engineering with data intelligence."
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Core Competencies</h3>
            <div className="grid gap-4">
              {highlights.map((h, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 p-4 rounded-lg border border-zinc-850 bg-zinc-900/10 hover:border-teal-500/20 hover:bg-zinc-900/20 transition-all duration-300 glow-card"
                >
                  <div className="flex-shrink-0 mt-0.5 p-1.5 rounded bg-zinc-950 border border-zinc-850">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-mono">{h.title}</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
