import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  stars: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-sarah',
    quote:
      "Lumis cut our design-to-dev handoff from two weeks to two hours. The code export is genuinely clean — I've never said that about any design tool before.",
    author: 'Sarah Chen',
    role: 'Head of Design',
    company: 'Vercel',
    avatar: 'SC',
    stars: 5,
  },
  {
    id: 'testimonial-marcus',
    quote:
      "I described our entire brand in one prompt and got a full component library back. We shipped our new marketing site in a single sprint. Absolutely wild.",
    author: 'Marcus Rivera',
    role: 'Founder & CEO',
    company: 'Cascade Labs',
    stars: 5,
    avatar: 'MR',
  },
  {
    id: 'testimonial-priya',
    quote:
      "The real-time collaboration finally means designers and engineers are looking at the same thing. No more 'it looked different in Figma' conversations.",
    author: 'Priya Nair',
    role: 'Staff Engineer',
    company: 'Linear',
    stars: 5,
    avatar: 'PN',
  },
  {
    id: 'testimonial-james',
    quote:
      "I've tried every AI design tool. Lumis is the first one where the output isn't embarrassing. The typography and spacing are actually good.",
    author: 'James Okafor',
    role: 'Product Designer',
    company: 'Stripe',
    stars: 5,
    avatar: 'JO',
  },
]

const AVATAR_COLORS = [
  'from-violet-500 to-fuchsia-500',
  'from-sky-500 to-blue-600',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-orange-500',
]

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)

  // Show 1 on mobile, 2 on tablet, 3 on desktop
  const visible = [
    TESTIMONIALS[current % TESTIMONIALS.length],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 2) % TESTIMONIALS.length],
  ]

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="orb absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 bg-violet-700/10"
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
            What teams say
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Loved by designers
            <br />
            <span className="text-gradient">and engineers alike.</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div
          aria-live="polite"
          aria-label="Testimonials carousel"
          className="relative"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((t, i) => (
              <motion.blockquote
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`glass rounded-2xl p-6 flex flex-col ${
                  i === 2 ? 'hidden lg:flex' : i === 1 ? 'hidden md:flex' : 'flex'
                }`}
                aria-label={`Testimonial from ${t.author}`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} stars`}>
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star
                      key={si}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote
                  className="h-6 w-6 text-violet-500/40 mb-2"
                  aria-hidden="true"
                />

                {/* Text */}
                <p className="flex-1 text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>

                {/* Author */}
                <footer className="mt-6 flex items-center gap-3">
                  <div
                    className={`h-10 w-10 shrink-0 rounded-full bg-linear-to-br ${AVATAR_COLORS[TESTIMONIALS.indexOf(t) % AVATAR_COLORS.length]} flex items-center justify-center text-xs font-bold text-white`}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-white block">
                      {t.author}
                    </cite>
                    <span className="text-xs text-slate-500">
                      {t.role} · {t.company}
                    </span>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              id="testimonial-prev"
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full glass h-10 w-10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/15 transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5" aria-label="Testimonial pages">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-violet-500' : 'w-1.5 bg-white/15 hover:bg-white/25'
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full glass h-10 w-10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/15 transition-all duration-200"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
