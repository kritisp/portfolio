import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-200">
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="flex-grow">
        {/* Hero Landing */}
        <Hero />

        {/* Section 01: About Me */}
        <About />

        {/* Section 02: Projects Showcase */}
        <Projects />

        {/* Section 03: Skills Board */}
        <Skills />

        {/* Section 04: Experience & Community Timeline */}
        <Experience />

        {/* Section 05: Academic Information */}
        <Education />

        {/* Section 06: Achievements & Hackathons */}
        <Achievements />

        {/* Section 07: Contact Form Card */}
        <Contact />
      </main>

      {/* Persistent Page Footer */}
      <Footer />
    </div>
  )
}
