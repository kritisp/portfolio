import React from 'react'
import { Sparkles, Terminal } from 'lucide-react'

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="py-28 border-t border-zinc-900 bg-[#030303] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#4f46e508_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Decorative Icon */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-zinc-900 border border-zinc-850 mb-8">
          <Sparkles size={24} className="text-teal-400 animate-pulse" />
        </div>

        {/* Section Header */}
        <p className="font-mono text-xs text-teal-400 uppercase tracking-widest mb-3">05. Philosophy</p>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">Beyond Code</h2>

        {/* Philosophy Quotation Card */}
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl border border-zinc-850 bg-zinc-900/10 backdrop-blur-md relative overflow-hidden glow-card">
          {/* Subtle top decoration */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
          
          <blockquote className="text-lg md:text-xl font-medium text-zinc-300 leading-relaxed italic relative z-10">
            "Technology is not only about building software, but about solving meaningful problems. Through hackathons, communities, and research initiatives, I explore how AI can create positive impact."
          </blockquote>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
            <Terminal size={14} className="text-teal-500" />
            <span>KSP_ENGINEERING_LOG // INTENT</span>
          </div>
        </div>

      </div>
    </section>
  )
}
