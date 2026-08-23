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
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-28 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-[#030303] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-2">09. Communication</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Let's discuss opportunities</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
                Feel free to reach out if you are looking for an intern, want to collaborate on a developer project, or just want to chat about AI/ML or full-stack engineering.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900/10 flex items-center justify-between gap-4 max-w-md glow-card">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded bg-zinc-100 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-850 text-teal-600 dark:text-teal-400 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Email Address</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-200 truncate font-mono">{emailAddress}</p>
                </div>
              </div>
              <button 
                onClick={copyToClipboard}
                className="p-2 rounded bg-zinc-100 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-850 hover:bg-zinc-200 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 transition-all flex-shrink-0"
                title="Copy to clipboard"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/kritisp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-mono text-zinc-655 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors p-2 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/10 hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <Github size={16} />
                <span>kritisp</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kriti-sreyash-parida-8440991aa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-mono text-zinc-655 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors p-2 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/10 hover:bg-zinc-50 dark:hover:bg-zinc-900"
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
                  <label htmlFor="name" className="text-xs font-mono text-zinc-450 dark:text-zinc-500">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-teal-500 transition-colors font-mono"
                    placeholder="Jane Doe"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-zinc-450 dark:text-zinc-500">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-teal-500 transition-colors font-mono"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-zinc-450 dark:text-zinc-500">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-teal-500 transition-colors font-mono"
                  placeholder="Internship opportunity / Collaboration"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-zinc-450 dark:text-zinc-500">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-teal-500 transition-colors font-mono resize-none"
                  placeholder="Hey, let's connect!"
                />
              </div>

              {/* Action and feedback */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all active:scale-[0.98] disabled:opacity-50 font-semibold"
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
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    Message sent successfully! Thank you.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs font-mono text-rose-600 dark:text-rose-500">
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
