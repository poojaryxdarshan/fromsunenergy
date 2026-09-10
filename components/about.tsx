"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

// Array listing the company's key value propositions
const features = [
  "Premium Tier-1 solar panels with 25-year warranty",
  "Certified and licensed installation professionals",
  "Custom system design for maximum efficiency",
  "Complete end-to-end project management",
  "Post-installation monitoring and maintenance",
  "Government subsidy assistance and documentation",
]

export function About() {
  return (
    // Section wrapper with anchor ID for navigation targets
    <section id="about" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Visual Showcase Side (Image + Floating Badge) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about-solar.jpg"
                alt="Solar panel installation technician at work"
                width={600}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Overlay Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 rounded-xl bg-solar-amber p-5 shadow-xl md:-right-8"
            >
              <p className="text-3xl font-bold text-solar-navy">12+</p>
              <p className="text-sm font-medium text-solar-navy/80">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content & Feature List Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Subheading Tag */}
            <span className="text-sm font-semibold uppercase tracking-widest text-solar-amber">
              About FromSun Solutions
            </span>

            {/* Main Headline */}
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Pioneering Clean Energy Solutions Since 2014
            </h2>

            {/* Company Bio Paragraph */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At FromSun Energy, we believe in a future powered by clean,
              renewable energy. We are a team of passionate engineers and energy
              experts committed to making solar power accessible and affordable
              for every home and business.
            </p>

            {/* Feature Checklist with Staggered Entrance Animations */}
            <ul className="mt-8 flex flex-col gap-3">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-solar-amber" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Call To Action Button (Using standard <a> tag for hash smooth-scroll) */}
            <a
              href="#contact"
              className="mt-8 inline-block rounded-lg bg-solar-amber px-8 py-3.5 text-sm font-semibold text-solar-navy transition-all hover:bg-solar-amber-light hover:shadow-lg hover:shadow-solar-amber/25"
            >
              Get a Free Quote
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}