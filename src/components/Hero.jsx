import React, { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Terminal } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Building intelligent solutions for real-world problems.'

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index))
      index++
      if (index >= fullText.length) {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Canvas Neural Particles Background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles = []
    const particleCount = Math.min(60, Math.floor((width * height) / 25000))
    const connectionDistance = 120
    let mouse = { x: null, y: null, radius: 150 }

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.radius = Math.random() * 1.5 + 1
      }

      update() {
        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx = -this.vx
        if (this.y < 0 || this.y > height) this.vy = -this.vy

        // Pull toward mouse
        if (mouse.x !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            this.x += (dx / dist) * force * 0.6
            this.y += (dy / dist) * force * 0.6
          }
        }

        this.x += this.vx
        this.y += this.vy
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)' // Cyan-500
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})` // Indigo-600
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      drawConnections()
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-gradient-to-b from-[#030303] to-[#09090b]">
      {/* Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glowing backdrop sources */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* Futuristic Avatar Glyphs */}
        <div className="relative w-32 h-32 mb-8 group">
          {/* Concentric rotating rings */}
          <div className="absolute inset-0 rounded-full border border-teal-500/30 border-dashed animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full border border-indigo-500/20 border-double animate-spin-slow [animation-direction:reverse]"></div>
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-500/10 to-teal-500/10 border border-zinc-800/80 backdrop-blur-md flex items-center justify-center overflow-hidden">
            <Terminal size={32} className="text-teal-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          {/* Glowing bottom badge */}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-zinc-900 border border-zinc-850 text-zinc-400 tracking-wider">
            v1.0.0
          </span>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-mono mb-6 hover:bg-teal-500/10 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
          <span>AI & Full Stack Developer</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Kriti Sreyash Parida
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-mono text-zinc-400 mb-6 max-w-2xl mx-auto min-h-[30px]">
          {typedText}
          <span className="animate-pulse text-teal-500 ml-0.5">|</span>
        </p>

        {/* Short Bio */}
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed text-base">
          A motivated Computer Science undergraduate passionate about Artificial Intelligence, software development, and building technology solutions that solve meaningful real-world problems.
        </p>

        {/* Social / CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-md font-semibold text-sm hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-lg shadow-white/5 active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>

          <a
            href="https://github.com/kritisp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm text-zinc-300 rounded-md font-medium text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kriti-sreyash-parida-8440991aa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm text-zinc-300 rounded-md font-medium text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm text-zinc-300 rounded-md font-medium text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  )
}
