"use client"

import { motion } from "framer-motion"
import { ArrowRight, Info } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    // Section container uses dynamic viewport height (100dvh) to prevent mobile address bar jump
    <section id="home" className="relative min-h-[100dvh] overflow-hidden">
      
      {/* Background Image Layer with Dark Overlay for Text Legibility */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Solar panels on a modern home rooftop at golden hour"
          fill
          className="object-cover"
          priority // Prioritizes loading for LCP (Largest Contentful Paint)
        />
        {/* Darkened overlay to ensure white text remains high contrast */}
        <div className="absolute inset-0 bg-solar-navy/70" />
      </div>

      {/* Decorative Ambient Glowing Orbs (Floating Background Animations) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-solar-amber/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[5%] bottom-[20%] h-48 w-48 rounded-full bg-solar-amber/5 blur-3xl"
      />

      {/* Main Content Centered Layout */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col items-center justify-center px-4 pt-20 pb-16 text-center lg:px-8">
        
        {/* Animated Badge Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-solar-amber/30 bg-solar-amber/10 px-4 py-2 backdrop-blur-sm"
        >
          {/* Pulsing indicator dot */}
          <span className="h-2 w-2 rounded-full bg-solar-amber animate-pulse" />
          <span className="text-sm font-medium text-solar-amber">
            Leading Solar Energy Provider
          </span>
        </motion.div>

        {/* Hero Title (Headline) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Power Your Future{" "}
          <span className="text-solar-amber">With The Sun</span>
        </motion.h1>

        {/* Hero Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-white/70 text-pretty sm:text-xl"
        >
          Transform your energy consumption with premium solar panel
          installations. Save up to 70% on electricity bills while contributing
          to a greener planet.
        </motion.p>

        {/* Action Buttons Container (Standard <a> tags used for smooth anchor jumping) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Primary CTA Link */}
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-lg bg-solar-amber px-8 py-4 text-base font-semibold text-solar-navy transition-all hover:bg-solar-amber-light hover:shadow-xl hover:shadow-solar-amber/25"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary Information Link */}
          <a
            href="#about"
            className="group flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            <Info className="h-5 w-5 text-solar-amber" />
            Learn More
          </a>
        </motion.div>

        {/* Scroll Down Indicator Component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll to About section">
            {/* Animated Mouse Capsule */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/30 p-1.5 transition-colors hover:border-solar-amber"
            >
              {/* Animated Scroll Dot inside Capsule */}
              <motion.div className="h-2 w-1.5 rounded-full bg-solar-amber" />
            </motion.div>
          </a>
        </motion.div>

      </div>
    </section>
  )
}