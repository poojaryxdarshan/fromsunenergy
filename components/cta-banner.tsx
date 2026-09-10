"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaBanner() {
  return (
    // Outer section wrapper handling overall vertical spacing
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Main CTA Container: Animated entry scale and background card styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-solar-navy px-6 py-16 text-center md:px-16 md:py-20"
        >
          {/* Decorative Ambient Glowing Orbs (Blurred absolute background accents) */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-solar-amber/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-solar-amber/5 blur-3xl" />

          {/* Foreground Content Stack */}
          <div className="relative z-10">
            
            {/* Animated Call-to-Action Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl"
            >
              Ready To Start Saving With Solar?
            </motion.h2>

            {/* Animated Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-4 max-w-xl text-lg text-white/70"
            >
              Join thousands of satisfied customers who have made the switch to
              clean, affordable solar energy. Get your free consultation today.
            </motion.p>

            {/* Action Buttons Group with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {/* Primary Call to Action Link (Next.js client-side navigation) */}
              <Link
                href="/company-profile"
                className="group flex items-center gap-2 rounded-lg bg-solar-amber px-8 py-4 text-base font-semibold text-solar-navy transition-all hover:bg-solar-amber-light hover:shadow-xl hover:shadow-solar-amber/25"
              >
                Get Company Profile
                {/* Arrow icon moves right slightly on button hover */}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary Direct Phone Call Link */}
              <a
                href="tel:+917760949093"
                className="rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Call: +91 7760949093
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}