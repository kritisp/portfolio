import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs font-mono text-zinc-500">
              © {currentYear} Kriti Sreyash Parida. All rights reserved.
            </p>
            <p className="text-[10px] font-mono text-zinc-600">
              Designed & Engineered with precision.
            </p>
          </div>

          {/* Tech Stack Info */}
          <div className="text-center">
            <span className="text-[11px] font-mono text-zinc-500 border border-zinc-850 px-2.5 py-1 rounded-full bg-zinc-900/30">
              React.js + Tailwind CSS + Lucide Icons
            </span>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-white transition-colors"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>

        </div>
      </div>
    </footer>
  )
}
