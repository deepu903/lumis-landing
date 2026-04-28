import React from 'react'
import { motion } from 'framer-motion'
import {
  Wand2,
  Layers,
  Zap,
  Code2,
  Repeat2,
  Globe,
} from 'lucide-react'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
  accent: string
  bgAccent: string
  tag?: string
}

const FEATURES: Feature[] = [
  {
    icon: Wand2,
    title: 'Prompt-to-Design',
    description:
      'Describe what you need in plain English. Lumis generates pixel-perfect components, layouts, and full screens in under 3 seconds.',
    accent: 'text-violet-400',
    bgAccent: 'from-violet-500/10 to-violet-500/0',
    tag: 'Core',
  },
  {
    icon: Layers,
    title: 'Component Library',
    description:
      'Browse 800+ pre-built, customisable UI components. Every block is coded, responsive, and ready to drop into your project.',
    accent: 'text-fuchsia-400',
    bgAccent: 'from-fuchsia-500/10 to-fuchsia-500/0',
  },
  {
    icon: Zap,
    title: 'Real-Time Collaboration',
    description:
      'Work alongside your teammates in a shared canvas. Changes sync instantly — no more exporting PNGs and slacking them.',
    accent: 'text-amber-400',
    bgAccent: 'from-amber-500/10 to-amber-500/0',
    tag: 'New',
  },
  {
    icon: Code2,
    title: 'One-click Code Export',
    description:
      'Export clean React, Vue, or plain HTML/CSS code from any design. Tokens map directly to your Tailwind or CSS-in-JS config.',
    accent: 'text-sky-400',
    bgAccent: 'from-sky-500/10 to-sky-500/0',
  },
  {
    icon: Repeat2,
    title: 'Design System Sync',
    description:
      'Connect your Figma tokens, GitHub repo, or Storybook. Lumis keeps every team member on the same single source of truth.',
    accent: 'text-emerald-400',
    bgAccent: 'from-emerald-500/10 to-emerald-500/0',
  },
  {
    icon: Globe,
    title: 'Publish Instantly',
    description:
      'Deploy your landing page or prototype to a shareable URL with one click. Custom domains included on all paid plans.',
    accent: 'text-rose-400',
    bgAccent: 'from-rose-500/10 to-rose-500/0',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

const Features: React.FC = () => {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-24 sm:py-32"
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        className="orb absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 bg-fuchsia-600/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3"
          >
            Everything you need
          </motion.p>
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Built for the way
            <br />
            <span className="text-gradient">modern teams design.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-slate-400 leading-relaxed"
          >
            From first prompt to shipped product, Lumis keeps your entire creative
            workflow inside one beautiful, fast tool.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 group hover:border-white/15 transition-all duration-300 relative overflow-hidden"
                aria-labelledby={`feature-title-${i}`}
              >
                {/* Gradient wash on hover */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-linear-to-br ${feature.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Tag */}
                  {feature.tag && (
                    <span className="mb-3 inline-block rounded-full bg-violet-500/15 px-2.5 py-0.5 text-xs font-semibold text-violet-300">
                      {feature.tag}
                    </span>
                  )}

                  {/* Icon */}
                  <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${feature.accent}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3
                    id={`feature-title-${i}`}
                    className="mb-2 text-lg font-semibold text-white"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
