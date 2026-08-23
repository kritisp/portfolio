import React, { useState } from 'react'
import { Mail, Github, Linkedin, Send, Copy, Check } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

  const emailAddress = 'kspchimun@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }
    
    setStatus('sending')
    // Simulating API request
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-teal-500 uppercase tracking-widest mb-2">07. Communication</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Let's discuss opportunities</h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                Feel free to reach out if you are looking for an intern, want to collaborate on a developer project, or just want to chat about AI/ML or full-stack engineering.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-lg border border-zinc-800/80 bg-zinc-900/10 flex items-center justify-between gap-4 max-w-md">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-teal-400 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Email Address</p>
                  <p className="text-sm text-zinc-200 truncate font-mono">{emailAddress}</p>
                </div>
              </div>
              <button 
                onClick={copyToClipboard}
                className="p-2 rounded bg-zinc-900 border border-zinc-850 hover:bg-zinc-800/50 hover:text-white text-zinc-400 transition-all flex-shrink-0"
                title="Copy to clipboard"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/kritisp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors p-2 rounded border border-zinc-850 hover:border-zinc-700 bg-zinc-900/10"
              >
                <Github size={16} />
                <span>kritisp</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kriti-sreyash-parida-8440991aa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors p-2 rounded border border-zinc-850 hover:border-zinc-700 bg-zinc-900/10"
              >
                <Linkedin size={16} />
                <span>Kriti Sreyash Parida</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-zinc-500">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950 border border-zinc-850 rounded px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-teal-500 transition-colors font-mono"
                    placeholder="Jane Doe"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-zinc-500">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950 border border-zinc-850 rounded px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-teal-500 transition-colors font-mono"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-zinc-500">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-850 rounded px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-teal-500 transition-colors font-mono"
                  placeholder="Internship opportunity / Collaboration"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-zinc-500">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-zinc-950 border border-zinc-850 rounded px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-teal-500 transition-colors font-mono resize-none"
                  placeholder="Hey, let's connect!"
                />
              </div>

              {/* Action and feedback */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-100 text-zinc-900 rounded font-medium text-sm hover:bg-zinc-200 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-xs font-mono text-emerald-400">
                    Message sent successfully! Thank you.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs font-mono text-rose-500">
                    Please fill out all required fields (*).
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
