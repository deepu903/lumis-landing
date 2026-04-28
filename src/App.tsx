import React, { useEffect, useRef } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  // Custom cursor glow effect
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Cursor glow — hidden on touch devices */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-50 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] transition-[left,top] duration-300 ease-out hidden md:block"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
        }}
      />

      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <LogoCloud />
          <Features />
          <HowItWorks />
          <Showcase />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
