import React from 'react'
import { motion } from 'framer-motion'


const COMPANIES = [
  'Vercel',
  'Stripe',
  'Linear',
  'Figma',
  'Notion',
  'Loom',
  'Raycast',
  'Arc',
]

const LogoCloud: React.FC = () => {
  return (
    <section
      id="logo-cloud"
      aria-label="Trusted by leading companies"
      className="relative py-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest mb-10"
        >
          Trusted by teams at
        </motion.p>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, var(--color-lumis-900), transparent)' }}
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(-90deg, var(--color-lumis-900), transparent)' }}
          />

          <div
            className="flex gap-12 items-center"
            style={{
              animation: 'marquee 25s linear infinite',
              width: 'max-content',
            }}
          >
            {[...COMPANIES, ...COMPANIES].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="shrink-0 flex items-center gap-2"
                aria-label={name}
              >
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: `hsl(${(i * 37) % 360}, 60%, 50%, 0.15)`,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  aria-hidden="true"
                >
                  <span className="text-xs font-bold text-slate-300">{name[0]}</span>
                </div>
                <span className="text-slate-400 font-medium text-sm whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default LogoCloud
