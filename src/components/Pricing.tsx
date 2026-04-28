import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'

interface Plan {
  id: string
  name: string
  price: { monthly: string; annual: string }
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  badge?: string
}

const PLANS: Plan[] = [
  {
    id: 'plan-starter',
    name: 'Starter',
    price: { monthly: 'Free', annual: 'Free' },
    description: 'For individuals exploring AI design — forever free.',
    features: [
      '25 AI generations / month',
      '50 component library blocks',
      'PNG & SVG export',
      'Community support',
      '1 active project',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    id: 'plan-pro',
    name: 'Pro',
    price: { monthly: '$19', annual: '$15' },
    description: 'For designers and solo founders who move fast.',
    features: [
      'Unlimited AI generations',
      'Full 800+ component library',
      'Code export (React, Vue, HTML)',
      'Priority AI queue',
      'Unlimited projects',
      'Custom domains',
      'Email support',
    ],
    cta: 'Start Pro trial',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    id: 'plan-team',
    name: 'Team',
    price: { monthly: '$49', annual: '$39' },
    description: 'For teams that design and ship together.',
    features: [
      'Everything in Pro',
      'Up to 10 seats',
      'Real-time collaboration',
      'Design system sync (Figma / GitHub)',
      'Version history',
      'SSO / SAML',
      'Slack integration',
      'Dedicated support',
    ],
    cta: 'Start Team trial',
    highlighted: false,
  },
]

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true)

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="orb absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-violet-700/8"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3"
          >
            Transparent pricing
          </motion.p>
          <motion.h2
            id="pricing-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Simple plans for
            <br />
            <span className="text-gradient">every stage of growth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-slate-400"
          >
            Start free. Scale as you grow. No hidden fees.
          </motion.p>
        </div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            id="pricing-toggle"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
              annual ? 'bg-violet-600' : 'bg-white/10'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
                annual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-slate-500'}`}>
            Annual
            <span className="ml-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-400">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Plans grid */}
        <div className="grid gap-5 lg:grid-cols-3 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-linear-to-b from-violet-600/20 to-fuchsia-600/5 border border-violet-500/40 shadow-2xl shadow-violet-500/20'
                  : 'glass hover:border-white/10'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-violet-500/30">
                    <Zap className="h-3 w-3" aria-hidden="true" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div>
                <h3
                  id={`${plan.id}-name`}
                  className="text-lg font-bold text-white mb-1"
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-4xl font-extrabold text-white">
                    {annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly !== 'Free' && (
                    <span className="text-slate-500 text-sm">/mo</span>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  id={`${plan.id}-cta`}
                  aria-labelledby={`${plan.id}-name`}
                  className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? 'btn-glow bg-violet-600 text-white hover:bg-violet-500'
                      : 'border border-white/10 text-slate-300 hover:border-violet-400/30 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-white/5" />

              {/* Features list */}
              <ul
                className="flex-1 space-y-3"
                aria-label={`${plan.name} plan features`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? 'text-violet-400' : 'text-slate-500'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enterprise note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          Need 20+ seats or custom SLA?{' '}
          <a
            href="#"
            id="enterprise-link"
            className="font-medium text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors duration-200"
          >
            Talk to sales →
          </a>
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
