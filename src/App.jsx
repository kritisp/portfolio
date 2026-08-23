import React from 'react'
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
  return (
    <div className="bg-[#030303] text-zinc-100 min-h-screen flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-200">
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
