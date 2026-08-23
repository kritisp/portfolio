import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import BeyondCode from './components/BeyondCode'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="bg-zinc-50 dark:bg-[#030303] text-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Sticky Top Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections Wrapper */}
      <main className="flex-grow">
        {/* Hero Landing */}
        <Hero theme={theme} />

        {/* Section 01: About Me */}
        <About />

        {/* Section 02: Projects Showcase */}
        <Projects />

        {/* Section 03: Skills Board */}
        <Skills />

        {/* Section 04: Building Journey Timeline */}
        <Journey />

        {/* Section 05: Brand Philosophy (Beyond Code) */}
        <BeyondCode />

        {/* Section 06: Experience & Community Timeline */}
        <Experience />

        {/* Section 07: Academic Information */}
        <Education />

        {/* Section 08: Achievements & Hackathons */}
        <Achievements />

        {/* Section 09: Contact Form Card */}
        <Contact />
      </main>

      {/* Persistent Page Footer */}
      <Footer />
    </div>
  )
}
