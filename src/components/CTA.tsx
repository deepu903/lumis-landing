import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const CTA: React.FC = () => {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a0a3e 0%, #2d0d5f 40%, #1a0d3d 70%, #0a0a1e 100%)',
          }}
        >
          {/* Decorative orbs inside card */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-3xl"
          />

          {/* Subtle grid pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Border */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl"
            style={{ border: '1px solid rgba(139, 92, 246, 0.2)' }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-1.5 text-sm font-medium text-violet-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Start for free — no card required
            </div>

            <h2
              id="cta-heading"
              className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your next great design
              <br />
              <span className="text-gradient">starts with one prompt.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400 leading-relaxed">
              Join 40,000+ designers who are already building faster with Lumis.
              Set up in 60 seconds. No tutorials needed.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                id="cta-primary"
                className="btn-glow inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-violet-900 hover:bg-slate-100 transition-colors duration-200"
              >
                Start designing free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#features"
                id="cta-secondary"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-base font-medium text-slate-300 hover:border-white/30 hover:text-white transition-all duration-200"
              >
                See all features
              </a>
            </div>

            {/* Social proof stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-10 max-w-lg mx-auto">
              {[
                { stat: '40K+', label: 'Active users' },
                { stat: '3s', label: 'Avg. generation time' },
                { stat: '4.9★', label: 'Product Hunt rating' },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl font-bold text-white">{stat}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
