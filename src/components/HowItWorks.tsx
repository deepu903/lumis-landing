import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Cpu, Download, ChevronRight } from 'lucide-react'

interface Step {
  number: string
  icon: React.ElementType
  title: string
  description: string
  detail: string
  accentColor: string
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Describe your idea',
    description:
      'Type a prompt like "hero section for a SaaS app, dark mode, violet accent" and Lumis understands intent, not just keywords.',
    detail:
      'Our proprietary design-language model is trained on 12M+ high-quality UI screenshots and design system docs. It understands layout hierarchy, spacing rhythm, and colour harmony.',
    accentColor: 'violet',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI generates your design',
    description:
      'Lumis renders a complete, responsive layout in under 3 seconds — complete with proper heading levels, spacing, and accessibility.',
    detail:
      'Designs are generated as structured component trees, not flat images. Every element has editable properties: typography, colour tokens, spacing, motion — all controllable.',
    accentColor: 'fuchsia',
  },
  {
    number: '03',
    icon: Download,
    title: 'Export & ship',
    description:
      'One-click export to React, Vue, or raw HTML. Code is clean, semantic, and slots right into your existing codebase.',
    detail:
      'Token mapping auto-converts Lumis styles to your Tailwind config, CSS variables, or Styled Components theme. CI/CD webhook support means designs ship on merge.',
    accentColor: 'amber',
  },
]

const accentMap: Record<string, string> = {
  violet: 'from-violet-500 to-violet-600',
  fuchsia: 'from-fuchsia-500 to-fuchsia-600',
  amber: 'from-amber-500 to-orange-500',
}

const accentTextMap: Record<string, string> = {
  violet: 'text-violet-400',
  fuchsia: 'text-fuchsia-400',
  amber: 'text-amber-400',
}

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Ambient left orb */}
      <div
        aria-hidden="true"
        className="orb absolute -left-60 top-1/2 h-[500px] w-[500px] -translate-y-1/2 bg-violet-700/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3"
          >
            Simple by design
          </motion.p>
          <motion.h2
            id="how-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            From prompt to product
            <br />
            <span className="text-gradient">in three steps.</span>
          </motion.h2>
        </div>

        {/* Steps + panel layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Step list */}
          <ol className="space-y-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isActive = activeStep === i
              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <button
                    id={`step-button-${i}`}
                    onClick={() => setActiveStep(i)}
                    aria-expanded={isActive}
                    aria-controls={`step-panel-${i}`}
                    className={`w-full text-left rounded-2xl p-5 border transition-all duration-300 ${
                      isActive
                        ? 'glass border-violet-500/30 shadow-lg shadow-violet-500/10'
                        : 'border-transparent hover:border-white/5 hover:bg-white/2'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number badge */}
                      <div
                        className={`shrink-0 h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold text-white bg-linear-to-br ${
                          isActive ? accentMap[step.accentColor] : 'from-white/10 to-white/5'
                        } transition-all duration-300`}
                        aria-hidden="true"
                      >
                        {isActive ? (
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          step.number
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold text-base ${isActive ? 'text-white' : 'text-slate-300'}`}>
                            {step.title}
                          </h3>
                          <ChevronRight
                            className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                              isActive ? `rotate-90 ${accentTextMap[step.accentColor]}` : 'text-slate-600'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </motion.li>
              )
            })}
          </ol>

          {/* Detail panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {STEPS.map((step, i) =>
                activeStep === i ? (
                  <motion.div
                    key={step.number}
                    id={`step-panel-${i}`}
                    role="region"
                    aria-label={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="glass rounded-3xl p-8 relative overflow-hidden"
                  >
                    {/* Gradient accent */}
                    <div
                      aria-hidden="true"
                      className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${accentMap[step.accentColor]}`}
                    />

                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${accentMap[step.accentColor]} shadow-lg`}>
                      <step.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>

                    <h4 className="font-display text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed text-base">
                      {step.detail}
                    </p>

                    {/* Step counter */}
                    <div className="mt-8 flex gap-2" aria-label="Step progress">
                      {STEPS.map((_, si) => (
                        <button
                          key={si}
                          onClick={() => setActiveStep(si)}
                          aria-label={`Go to step ${si + 1}`}
                          aria-current={si === i ? 'step' : undefined}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            si === i
                              ? `w-8 bg-linear-to-r ${accentMap[step.accentColor]}`
                              : 'w-4 bg-white/10 hover:bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
