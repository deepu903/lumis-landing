import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface ShowcaseItem {
  id: string
  title: string
  category: string
  prompt: string
  gradient: string
  accentColor: string
}

const ITEMS: ShowcaseItem[] = [
  {
    id: 'showcase-saas-hero',
    title: 'SaaS Hero Section',
    category: 'Landing Page',
    prompt: '"Clean hero, glassmorphism, dark violet"',
    gradient: 'from-violet-900/60 via-violet-800/20 to-transparent',
    accentColor: '#a78bfa',
  },
  {
    id: 'showcase-dashboard',
    title: 'Analytics Dashboard',
    category: 'Product UI',
    prompt: '"Dark data dashboard, chart cards, sidebar nav"',
    gradient: 'from-sky-900/60 via-sky-800/20 to-transparent',
    accentColor: '#38bdf8',
  },
  {
    id: 'showcase-pricing',
    title: 'Pricing Page',
    category: 'Marketing',
    prompt: '"3-tier pricing, highlight middle card, fuchsia"',
    gradient: 'from-fuchsia-900/60 via-fuchsia-800/20 to-transparent',
    accentColor: '#e879f9',
  },
  {
    id: 'showcase-onboarding',
    title: 'Onboarding Flow',
    category: 'Product UI',
    prompt: '"Step-by-step onboarding wizard, progress bar"',
    gradient: 'from-emerald-900/60 via-emerald-800/20 to-transparent',
    accentColor: '#34d399',
  },
  {
    id: 'showcase-ecommerce',
    title: 'E-Commerce Card',
    category: 'Component',
    prompt: '"Product card, hover state, gradient badge"',
    gradient: 'from-amber-900/60 via-amber-800/20 to-transparent',
    accentColor: '#fbbf24',
  },
  {
    id: 'showcase-auth',
    title: 'Auth Modal',
    category: 'Component',
    prompt: '"Login modal, social auth buttons, clean"',
    gradient: 'from-rose-900/60 via-rose-800/20 to-transparent',
    accentColor: '#fb7185',
  },
]

const CATEGORIES = ['All', 'Landing Page', 'Product UI', 'Marketing', 'Component']

const MockUI: React.FC<{ item: ShowcaseItem }> = ({ item }) => (
  <div className="h-full w-full flex flex-col p-4 gap-3">
    <div
      className="h-2.5 w-24 rounded-full opacity-60"
      style={{ background: item.accentColor }}
    />
    <div className="flex gap-2">
      <div className="h-2 w-16 rounded-full bg-white/10" />
      <div className="h-2 w-10 rounded-full bg-white/5" />
    </div>
    <div
      className="flex-1 rounded-xl flex items-center justify-center"
      style={{ background: `${item.accentColor}10`, border: `1px solid ${item.accentColor}20` }}
    >
      <div className="text-center space-y-2 p-4">
        <div
          className="mx-auto h-8 w-8 rounded-lg"
          style={{ background: `linear-gradient(135deg, ${item.accentColor}60, ${item.accentColor}20)` }}
        />
        <div className="h-2 w-20 mx-auto rounded-full bg-white/10" />
        <div className="h-1.5 w-14 mx-auto rounded-full bg-white/5" />
        <div
          className="mx-auto mt-2 h-5 w-16 rounded-full"
          style={{ background: `${item.accentColor}40` }}
        />
      </div>
    </div>
  </div>
)

const Showcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? ITEMS
      : ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="orb absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-violet-700/10"
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
            Real outputs
          </motion.p>
          <motion.h2
            id="showcase-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            See what Lumis
            <br />
            <span className="text-gradient">can generate.</span>
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter showcase by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          role="tabpanel"
          aria-label={`${activeCategory} showcase items`}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-white/15 transition-all duration-300"
              aria-labelledby={`${item.id}-title`}
            >
              {/* Preview area */}
              <div className="relative h-44 bg-[#0a0a14] overflow-hidden">
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-linear-to-b ${item.gradient}`}
                />
                <MockUI item={item} />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    View prompt
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">{item.category}</p>
                    <h3
                      id={`${item.id}-title`}
                      className="font-semibold text-white text-sm"
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500 font-mono leading-relaxed">
                  {item.prompt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
