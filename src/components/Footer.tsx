import React from 'react'
import { Zap, X, Link2, Rss, GitBranch } from 'lucide-react'

const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press kit', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of service', href: '#' },
      { label: 'Cookie policy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
]

const SOCIALS = [
  { icon: X, label: 'Twitter', href: '#' },
  { icon: GitBranch, label: 'GitHub', href: '#' },
  { icon: Link2, label: 'LinkedIn', href: '#' },
  { icon: Rss, label: 'YouTube', href: '#' },
]

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      id="footer"
      className="border-t border-white/5 pt-16 pb-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <a
              href="#"
              id="footer-logo"
              className="flex items-center gap-2 mb-4 group w-fit"
              aria-label="Lumis — go to homepage"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
                <Zap className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Lumis
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              The AI-powered creative studio for modern design teams.
              Build faster, ship better.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  id={`social-${label.toLowerCase()}`}
                  aria-label={`Follow Lumis on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-slate-400 hover:text-white hover:border-white/15 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <nav
              key={col.heading}
              aria-labelledby={`footer-col-${col.heading.toLowerCase()}`}
            >
              <h3
                id={`footer-col-${col.heading.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4"
              >
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {year} Lumis Inc. All rights reserved.</p>
          <p>
            Designed &amp; built by Deepak with{' '}
            <span aria-hidden="true">♥</span>
            <span className="sr-only">love</span>
            {' '}using React, TypeScript &amp; Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
