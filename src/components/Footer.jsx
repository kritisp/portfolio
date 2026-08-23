import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-[#030303] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pb-8 border-b border-zinc-200 dark:border-zinc-900">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-sm font-bold text-zinc-800 dark:text-white tracking-wider font-mono">
              KRITI SREYASH PARIDA
            </h4>
            <p className="text-xs text-zinc-500">
              Building AI-powered solutions with curiosity and purpose.
            </p>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/kritisp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kriti-sreyash-parida-8440991aa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:kspchimun@gmail.com" 
              className="text-zinc-400 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <span>Back to top</span>
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Copyright info */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-[10px] font-mono text-zinc-400 dark:text-zinc-600 gap-2">
          <span>
            © {currentYear} Kriti Sreyash Parida. All rights reserved.
          </span>
          <span>
            Designed & Engineered for High-Impact.
          </span>
        </div>
      </div>
    </footer>
  )
}
