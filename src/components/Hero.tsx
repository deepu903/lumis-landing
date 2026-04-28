import React, { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const BADGE_TEXT = 'AI-Powered Creative Studio'

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated particle grid
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.06 * (1 - dist / 120)})`
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />

      {/* Ambient orbs */}
      <div
        aria-hidden="true"
        className="orb absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 bg-violet-600/20"
      />
      <div
        aria-hidden="true"
        className="orb absolute top-1/2 -right-60 h-[500px] w-[500px] bg-fuchsia-600/10"
      />
      <div
        aria-hidden="true"
        className="orb absolute bottom-0 -left-40 h-[400px] w-[400px] bg-violet-800/15"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-violet-300"
        >
          <Sparkles className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
          {BADGE_TEXT}
        </motion.div>

        {/* Heading — single h1 per page */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Design anything
          <br />
          <span className="text-gradient">at the speed</span>
          <br />
          of thought.
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed"
        >
          Lumis is the AI creative studio that transforms your text prompts into
          pixel-perfect UI components, brand assets, and full product mockups — instantly.
        </motion.p>

        {/* CTA group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            id="hero-primary-cta"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-violet-500 transition-colors duration-200"
          >
            Start designing free
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#showcase"
            id="hero-secondary-cta"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-base font-medium text-slate-300 hover:border-violet-400/40 hover:text-white transition-all duration-200"
          >
            View showcase
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 text-sm text-slate-500"
        >
          Trusted by{' '}
          <span className="font-semibold text-slate-300">40,000+</span> designers & teams ·
          No credit card required
        </motion.p>

        {/* Hero UI mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          {/* Glow behind card */}
          <div
            aria-hidden="true"
            className="absolute inset-x-10 -top-10 h-40 rounded-full bg-violet-600/30 blur-3xl"
          />
          <div className="glass rounded-2xl p-2 sm:p-3">
            <div className="rounded-xl overflow-hidden bg-[#0f0f1a] aspect-[16/9] flex items-center justify-center">
              {/* Fake IDE-like UI mockup */}
              <div className="w-full h-full p-4 sm:p-6 flex gap-4 text-left">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col gap-2 w-40 shrink-0">
                  {['Components', 'Assets', 'Tokens', 'Export'].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                        i === 0
                          ? 'bg-violet-600/20 text-violet-300 border border-violet-500/20'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Canvas area */}
                <div className="flex-1 rounded-lg bg-[#0a0a14] border border-white/5 flex items-center justify-center relative overflow-hidden">
                  {/* Subtle grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                  {/* AI generating card */}
                  <div className="relative glass rounded-xl p-6 max-w-xs text-center">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500">
                      <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold text-white">Generating design…</p>
                    <p className="mt-1 text-xs text-slate-500">"SaaS pricing card, dark mode"</p>
                    {/* Progress bar */}
                    <div className="mt-4 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500"
                        style={{ width: '72%', transition: 'width 0.3s ease' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
