import React, { useState, useEffect } from 'react'
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react'

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 font-mono text-sm tracking-wider font-semibold text-zinc-800 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
            <Terminal size={18} className="text-teal-500" />
            <span>KRITI_SREYASH</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="mailto:kspchimun@gmail.com?subject=Portfolio%20Inquiry%20-%20Resume%20Request"
              className="px-4 py-1.5 text-xs font-mono font-semibold border border-teal-500/30 text-teal-600 dark:text-teal-400 rounded hover:bg-teal-500/10 hover:border-teal-500 transition-all"
            >
              Get Resume
            </a>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-850 text-zinc-500 dark:text-zinc-400"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed inset-x-0 bg-white dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 ease-in-out z-40 ${
        isOpen ? 'top-[73px] opacity-100' : 'top-[-400px] opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col px-6 py-6 gap-5 bg-white dark:bg-zinc-950">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="mailto:kspchimun@gmail.com?subject=Portfolio%20Inquiry%20-%20Resume%20Request"
            onClick={() => setIsOpen(false)}
            className="w-fit text-center px-4 py-2 text-xs font-mono font-semibold border border-teal-500/30 text-teal-600 dark:text-teal-400 rounded hover:bg-teal-500/10 hover:border-teal-500 transition-all"
          >
            Get Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
