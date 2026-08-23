import React from 'react'
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Premium subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
      
      {/* Elegant light glow in the corner */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-mono mb-8 hover:bg-teal-500/10 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
          <span>Available for Internships & Collaborations</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Kriti Sreyash Parida
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl font-mono text-zinc-400 mb-8 max-w-2xl mx-auto">
          Computer Science Student <span className="text-teal-500">|</span> AI/ML & Full Stack Developer
        </p>

        {/* Short Bio */}
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          A motivated Computer Science undergraduate passionate about Artificial Intelligence, software development, and building technology solutions that solve meaningful real-world problems.
        </p>

        {/* Currently Exploring Grid */}
        <div className="border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm rounded-lg max-w-xl mx-auto p-4 mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            <span>Currently Exploring</span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed font-mono">
            AI/ML, backend engineering, full-stack development, intelligent systems, and impactful technology.
          </p>
        </div>

        {/* Social / CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-md font-medium text-sm hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-lg shadow-white/5 active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="https://github.com/kritisp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 bg-zinc-950 text-zinc-300 rounded-md font-medium text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kriti-sreyash-parida-8440991aa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 bg-zinc-950 text-zinc-300 rounded-md font-medium text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 bg-zinc-950 text-zinc-300 rounded-md font-medium text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  )
}
