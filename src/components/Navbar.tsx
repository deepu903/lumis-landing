import React, { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="navbar-logo"
            className="flex items-center gap-2 group"
            aria-label="Lumis — go to homepage"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow duration-300">
              <Zap className="h-4 w-4 text-white" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Lumis
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              id="navbar-signin"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              id="navbar-cta"
              className="btn-glow inline-flex items-center gap-1.5 rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition-colors duration-200"
            >
              Get started free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden absolute top-full left-0 right-0 glass border-b border-white/5 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 border-t border-white/5 pt-3 flex flex-col gap-2">
            <a
              href="#pricing"
              onClick={handleNavClick}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              onClick={handleNavClick}
              id="mobile-cta"
              className="btn-glow rounded-full bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-violet-500 transition-colors duration-200"
            >
              Get started free
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
